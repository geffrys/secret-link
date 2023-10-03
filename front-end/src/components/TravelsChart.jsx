import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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

const data = [
  { created_at: "2023-01", Reserves: 120 },
  { created_at: "2023-02", Reserves: 44 },
  { created_at: "2023-03", Reserves: 32 },
  { created_at: "2023-04", Reserves: 50 },
  { created_at: "2023-05", Reserves: 20 },
  { created_at: "2023-06", Reserves: 130 },
  { created_at: "2023-07", Reserves: 105 },
  { created_at: "2023-08", Reserves: 34 },
  { created_at: "2023-09", Reserves: 33 },
  { created_at: "2023-10", Reserves: 89 },
];

function TravelsChart() {
  const today = new Date();
  const lastYear = new Date(today);
  lastYear.setFullYear(today.getFullYear() - 1);

  const [dateRange, setDateRange] = useState({
    start: lastYear,
    end: today,
  });

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
      </section>
    </>
  );
}

export default TravelsChart;
