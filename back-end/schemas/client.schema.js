import {z} from "zod";

export const registerClient = z.object({
    document_number: z.string({ required_error: "document number required"}).min(1).max(20),
    id_document_type: z.number({ required_error: "document type required"}).min(1),
    client_name: z.string({ required_error: "client name required" }).min(1).max(100),
    client_lastname: z.string({ required_error:" client lastname required"}).min(1).max(100),
    client_city: z.string({ required_error:"client city required"}).min(1).max(100),
    client_mail: z.string({ required_error:"client mail required"}).min(1).max(100).email(),
    client_password: z.string({ required_error:"client password required"}).min(1).max(100),
    client_address: z.string({ required_error: "client address required"}).min(1).max(100),
    health_information: z.object({
        id_rh: z.number({ required_error:" rh required"}).nullable(),
        id_eps: z.number({ required_error: "eps required"}).nullable(),
        health_card: z.string({ required_error:"health card required"}).max(100).nullable()
    }, { required_error: "health information required"})
});

export const registerAdditionalPeople = z.object({
    id_client: z.number().min(1),
    id_document_type: z.number().min(1),
    document_number: z.string().min(1).max(20),
    health_information: z.object({
        id_rh: z.number().nullable(),
        id_eps: z.number().nullable(),
        health_card: z.string().max(100).nullable()
    }).nonstrict()
})