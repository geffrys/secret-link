import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useOperation } from "../context/operationContext.jsx"
import {
  CartesianGrid,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  ComposedChart,
} from "recharts";

function TravelsChart() {
  const { operation } = useOperation();
  const today = new Date();
  const lastYear = new Date(today);
  const [dateRange, setDateRange] = useState({
    start: lastYear,
    end: today,
  });
  const mergedDatas = operation.reduce((acc, item) => {
    const date = item.operation_start_date;
    if (acc[date]) {
      acc[date].Reserves++;
    } else {
      acc[date] = { created_at: date, Reserves: 1 };
    }
    return acc;
  }, {});

  const result = Object.values(mergedDatas);

  const data = result.map((item) => {
    const fecha = new Date(item.created_at);
    const year = fecha.getFullYear();
    const month = fecha.getMonth() + 1;
    return {
      created_at: `${year}-${String(month).padStart(2, "0")}`,
      Reserves: item.Reserves,
    };
  });

  lastYear.setFullYear(today.getFullYear() - 1);

  const filteredData = data.filter(
    (entry) =>
      new Date(entry.created_at) >= dateRange.start &&
      new Date(entry.created_at) <= dateRange.end
  );

  return (
    <>
      <ResponsiveContainer
        width="100%"
        height="50%"
        className={"metrics_chart"}
        minHeight={500}
      >
        <ComposedChart data={filteredData}>
          <XAxis dataKey="created_at" tick={{ fill: "black" }} />
          <CartesianGrid strokeDasharray="2 2" fill="white" />
          <Tooltip />
          <Legend verticalAlign="top" height={0} />

          <YAxis yAxisId="left" tick={{ fill: "black" }} />

          <YAxis yAxisId="right" orientation="right" tick={{ fill: "black" }} />

          <Bar dataKey="Reserves" fill="#00ab6a" yAxisId="right" />
          <Line
            type="monotone"
            dataKey="Reserves"
            stroke="#ff9344"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            yAxisId="left"
          />
        </ComposedChart>
      </ResponsiveContainer>
      <section className="metric__date">
        <h3>Change Metric Range</h3>
        <p>Start:</p>
        <DatePicker
          className="metric__date_picker"
          selected={dateRange.start}
          onChange={(date) => setDateRange({ ...dateRange, start: date })}
          selectsStart
          startDate={dateRange.start}
          endDate={dateRange.end}
          dateFormat={"yyyy-MM"}
          showMonthYearPicker
        />
        <p>End:</p>
        <DatePicker
          className="metric__date_picker"
          selected={dateRange.end}
          onChange={(date) => setDateRange({ ...dateRange, end: date })}
          selectsEnd
          startDate={dateRange.start}
          endDate={dateRange.end}
          minDate={dateRange.start}
          dateFormat={"yyyy-MM"}
          showMonthYearPicker
        />
        <button
          className="btncancel"
          onClick={() => setDateRange({ start: lastYear, end: today })}
        >
          Reset
        </button>
      </section>
    </>
  );
}

export default TravelsChart;
