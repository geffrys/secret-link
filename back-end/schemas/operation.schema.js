import { z } from "zod";

// body input schema for operations

export const healthClientInfo = z.object({
    id_rh: z.number().min(0).nullable(),
    id_eps: z.number().min(0).nullable(),
    health_card: z.string().nullable(),
});

export const registerClientInfo = z.object({
    document_number: z.string().min(1).max(20),
    id_document_type: z.number().min(1),
    client_name: z.string().min(1).max(100),
    client_lastname: z.string().min(1).max(100),
    client_city: z.string().min(1).max(100),
    client_mail: z.string().min(1).max(100).email(),
    client_password: z.string().min(1).max(100),
    client_address: z.string().min(1).max(100),
    id_health_information: z.number().min(1)
});

export const registerAdditionalPeople = z.object({
    id_client: z.number().min(1),
    id_document_type: z.number().min(1),
    document_number: z.string().min(1).max(20),
    id_health_information: z.number().min(1)
})

export const registerOperation = z.object({
    id_agent: z.number().min(1),
    id_client: z.number().min(1),
    id_travel_pack: z.number().min(1),
    id_operation_status: z.number().min(1)
});