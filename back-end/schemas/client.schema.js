import {z} from "zod";

export const registerClient = z.object({
    document_number: z.string({ required_error: "document number required"}).min(1).max(20),
    id_document_type: z.number({ required_error: "document type required"}).min(1),
    client_name: z.string({ required_error: "client name required" }).min(1).max(30),
    client_middle_name: z.string({ required_error: "client middle name required"}).min(1).max(30).nullable(),
    client_lastname: z.string({ required_error:" client lastname required"}).min(1).max(30),
    client_second_lastname: z.string({ required_error:" client lastname required"}).min(1).max(30),
    client_city: z.string({ required_error:"client city required"}).min(1).max(100),
    client_mail: z.string({ required_error:"client mail required"}).min(1).max(100).email(),
    client_password: z.string({ required_error:"client password required"}).min(1).max(100),
    client_password2: z.string().min(1).max(100)
        .refine((data) => data.client_password === data.client_password2, {
            message: "Las contraseñas no coinciden",
            path: ["client_password2"]
        }),
    client_address: z.string({ required_error: "client address required"}).min(1).max(100),
    client_birth_date: z.string({ required_error: "client birth date required"}).transform((val) => new Date(val)),
    client_phone_number: z.string({ required_error: "client phone number required"}).min(1).max(20),
    health_information: z.object({
        id_rh: z.number({ required_error:" rh required"}).nullable(),
        id_eps: z.number({ required_error: "eps required"}).nullable(),
        health_card: z.string({ required_error:"health card required"}).max(100).nullable(),
        health_diseases: z.number({ required_error: "health details required"}).min(0).max(1),
        health_details: z.string({ required_error: "health details required"}).max(200).nullable()
    }, { required_error: "health information required"})
});

export const registerAdditionalPeople = z.object({
    id_client: z.number().min(1),
    id_document_type: z.number().min(1),
    document_number: z.string().min(1).max(20),
    name: z.string().min(1).max(30),
    health_information: z.object({
        id_rh: z.number({ required_error:" rh required"}).nullable(),
        id_eps: z.number({ required_error: "eps required"}).nullable(),
        health_card: z.string({ required_error:"health card required"}).max(100).nullable(),
        health_diseases: z.boolean({ required_error: "health details required"}),
        health_details: z.string({ required_error: "health details required"}).max(200).nullable()
    }).nonstrict()
})