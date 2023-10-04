import { pool } from "../db.js";


export const getOperation = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query("select * from operations where id_operation = ?", [id]);
        res.json(result[0]);
    } catch (error) {
        console.log(error);
        res.json({ mensaje: "cannot get operation at this moment" });
    }
}

export const getOperationAlone = async (req, res) => {
    try {
        const [result] = await pool.query("select * from operations");
        res.json(result);
    } catch (error) {
        res.json({ mensaje: "cannot get operation at this moment" });
    }
}

export const getOperations = async (req, res) => {
    try {
        const [result] = await pool.query("select * from operations inner join travel_packs on operations.id_travel_pack = travel_packs.id_travel_pack inner join operation_status on operations.id_operation_status = operation_status.id_operation_status inner join clients on operations.id_client = clients.id_client inner join agents on operations.id_agent = agents.id_agent");
        res.json(result);
    } catch (error) {
        console.log(error);
        res.json({ mensaje: "cannot get operation at this moment" });
    }
}

// TODO: pending to test

export const postOperation = async (req, res) => {
    const {
        id_agent,
        id_client,
        id_travel_pack,
        operation_start_date
    } = req.body;

    let operation_price = 0;
    let operation_travelers_count = 0;
    let operation_status = "In progress";
    let id_operation_status = 0;

    try {
        const [result] = await pool.query("select id_operation_status from operation_status where operation_status_name like ?", [operation_status]);
        id_operation_status = result[0].id_operation_status;
    } catch (error) {
        console.log("cannot get operation status at this moment");
    }



    try {
        // definition: the price of the operation is the price of the travel pack plus the price of the transport
        const [price_travel_pack] = await pool.query("select travelpack_price from travel_packs where id_travel_pack = ?", [id_travel_pack]);
        operation_price = (price_travel_pack[0].travelpack_price? price_travel_pack[0].travelpack_price : 0);
        console.log(operation_price)
        const [transport_price] = await pool.query("select tr.transport_price from travel_packs t inner join transports tr on t.id_transport = tr.id_transport where t.id_travel_pack = ?", [id_travel_pack]);
        operation_price += (transport_price[0].transport_price? transport_price[0].transport_price : 0);
        console.log(operation_price)
        const [food_price] = await pool.query("select food_price from travel_packs t inner join food_types f on t.id_food_type = f.id_food_type where t.id_travel_pack = ?", [id_travel_pack]);
        operation_price += (food_price[0].food_price? food_price[0].food_price : 0);
        console.log(operation_price)
        // second definition: the number of travelers is the number of people in the operation plus
        const [count_travelers] = await pool.query("select count(*) as count from additional_people where id_client = ? and created_at >= curdate()", [id_client]);
        // the client is the plus one
        operation_travelers_count = count_travelers[0].count + 1;
        operation_price *= operation_travelers_count;
        console.log(operation_price);
    } catch (error) {
        res.json({ mensaje: "cannot get operatioin details at this moment" }).status(500);
    }

    let result
    try {
        
        result = await pool.query("insert into operations (id_agent, id_client, id_travel_pack, id_operation_status, operation_price, operation_travelers_count, operation_start_date) values (?,?,?,?,?,?,?)", [
            id_agent,
            id_client,
            id_travel_pack,
            id_operation_status,
            operation_price,
            operation_travelers_count,
            operation_start_date
        ]);
    } catch (error) {
        res.json({ mensaje: "cannot register operation at this moment" }).status(500);
        throw new Error("cannot register operation at this moment");
    }

    res.status(200).json(result);
}


export const updateOperation = async (req, res) => {
    const { id } = req.params;

    let statusFinished = "Finished";
    let id_operation_status = 0;
    try {
        const [result] = await pool.query("select id_operation_status from operation_status where operation_status_name like ?", [statusFinished]);
        id_operation_status = result[0].id_operation_status;
    } catch (error) {
        console.log("cannot update operation at this moment");
        
    }

    try {
        [result] = await pool.query("update operations set id_operation_status = ? where id_operation = ?", [
            id_operation_status,
            id
        ]);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ mensaje: "cannot update operation at this moment" });
    }
}


export const currentOperation = async (req, res) => {
    const { id_operation, id_client } = req.body;
    let travelers = [];
    let included = [];
    let summary = [];
    try {
        travelers = await pool.query(`
        select 
            client_document_number,
            document_number_additional
        from clients c
        inner join additional_people a
        on c.id_client = a.id_client
          ` ,);
    } catch (error) {
        travelers = error;
    }
    try {
        included = await pool.query(`
        select 
            o.id_operation, o.id_travel_pack, o.id_client,
            h.id_hotel, h.hotel_name, 
            tr.id_transport, tr.transport_name, tr.transport_price,
            f.id_food_type, f.food_name, f.food_price,
            i.id_itinerary, i.itinerary_name
        from operations o
        inner join travel_packs t
            on o.id_travel_pack = t.id_travel_pack
        left join hotels h
            on t.id_hotel = h.id_hotel
        left join transports tr
            on t.id_transport = tr.id_transport
        left join food_types f
            on t.id_food_type = f.id_food_type
        left join itinerary i
            on t.id_itinerary = i.id_itinerary
        where o.id_operation = ? 

        ` , [id_operation]);
    } catch (error) {
        included = error;
    }

    res.json({
        travelers,
        included
    });
}

export const operationInprogress = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query(`
        select 
        o.id_operation,
        o.id_client,
        os.id_operation_status, 
        os.operation_status_name,
        o.operation_start_date,
		o.operation_travelers_count,
		h.address_headquarter,
        o.operation_price
    from operations o
    inner join travel_packs t
        on o.id_travel_pack = t.id_travel_pack
    inner join agents a
        on o.id_agent = a.id_agent
    inner join headquarters h
        on a.id_headquarter = h.id_headquarter
    inner join operation_status os
        on o.id_operation_status = os.id_operation_status
    inner join clients c
        on o.id_client = c.id_client
    where o.id_client = ?;
        `, [id]);
        res.json(result);
    } catch (error) {
        console.log(error);
    }
}