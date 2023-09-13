import { pool } from "../db.js";


export const getOperation = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query("select * from operations where id_operation = ?", [id]);
        console.log(result);
        res.json(result[0]);    
    } catch (error) {
        console.log(error);
        res.json({mensaje: "cannot get operation at this moment"});
    }
}

export const getOperations = async (req, res) => {
    try {
        const [result] = await pool.query("select * from operations inner join travel_packs on operations.id_travel_pack = travel_packs.id_travel_pack inner join operation_status on operations.id_operation_status = operation_status.id_operation_status inner join clients on operations.id_client = clients.id_client inner join agents on operations.id_agent = agents.id_agent");
        console.log(result);
        res.json(result);    
    } catch (error) {
        console.log(error);
        res.json({mensaje: "cannot get operation at this moment"});
    }
}

// TODO: pending to test

export const postOperation = async (req, res) => {
    const { 
        id_agent,
        id_client,
        id_travel_pack,
        id_operation_status
    } = req.body;

    let operation_price = 0;
    let operation_travelers_count = 0;

    try {
        // definition: the price of the operation is the price of the travel pack plus the price of the transport
        const [price_travel_pack] = await pool.query("select travelpack_price from travel_packs where id_travel_pack = ?", [id_travel_pack]);
        operation_price = price_travel_pack[0].travelpack_price;
        const [ transport_price ] = await pool.query("select transport_price from travel_pack inner join transports on id_transport = transports.id_transport where id_travel_pack = ?", [id_travel_pack]);
        operation_price += transport_price[0].transport_price;
        // second definition: the number of travelers is the number of people in the operation plus
        const [count_travelers] = await pool.query("select count(*) as count from additional_people where id_client = ?", [id_client]);
        // the client is the plus one
        operation_travelers_count = count_travelers[0].count + 1;
        operation_price *= operation_travelers_count;
    }catch(error){
        res.status(500).json({mensaje: "cannot get operatioin details at this moment"});
    }
    const created_at = new Date();

    let result
    try {
        result = await pool.query("insert into operations (id_agent, id_client, id_travel_pack, id_operation_status) values (?,?,?,?)", [
            id_agent, 
            id_client, 
            id_travel_pack, 
            id_operation_status,
            operation_price,
            operation_travelers_count,
            created_at
        ]);
    } catch (error) {
        res.status(500).json({mensaje: "cannot register operation at this moment"});   
    }   

    try {
        if(result){
            await operationAudit(result.insertId, id_operation_status);
        }
    } catch (error) {
        res.status(500).json({mensaje: "cannot audit operation at this moment"}, result);
    }

    res.status(200).json(result);    
}

const updateOperation = async (req, res) => {
    const { id } = req.params;
    const { id_operation_status } = req.body;

    try {
        await operationAudit(id, id_operation_status);
    } catch (error) {
        
    }

    try {
        [result] = await pool.query("update operations set id_operation_status = ? where id_operation = ?", [
            id_operation_status,
            id
        ]);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({mensaje: "cannot update operation at this moment"});
    }

}



// TODO: pending to test

const operationAudit = async (id, id_operation_status) => {
    const created_at = new Date(); 

    try {
        const [result] = await pool.query("insert into operation_audit (id_operation, id_operation_status, created_at) values (?,?,?)", [
            id,
            id_operation_status,
            created_at
        ]);
        return true;
    } catch (error) {
        throw new Error("cannot audit operation at this moment");
    }
}