import { z } from "zod";

export const registerSchema = z.object({
  name_ag: z.string({
    required_error: "Agent name required",
  }),
  phone_ag: z
    .string({
      required_error: "Phone number required",
    })
    .min(9, {
      message: "The phone number minimum required is 9",
    }),
  id_dt: z.number({
    required_error: "Document type required",
  }),
  agent_type: z.number({
    required_error: "Agent type required",
  }),
  headquarter: z.number({
    required_error: "Headquarter id required",
  }),
  document_number: z.string({
    required_error: "Document number required",
  }),
  user_password: z
    .string({ required_error: "Password required" })
    .min(8, { message: "Password minimum length required is 8" }),
  user_password2: z.string({ required_error: "Password confirmation required" }),
  user_email: z.string({ required_error: "User name required" }).email({
    message: "unvalid email address",
  }),
}).refine((data) => data.user_password === data.user_password2, {
  message: "Passwords don't match",
  path: ["user_password2"],
});

export const loginSchema = z.object({
  user_name: z.string({
    required_error: "Username required",
  }),
  user_password: z.string({
    required_error: "Password Required",
  }),
});

export const loginClientSchema = z.object({
  client_document_number: z.string({
    required_error: "Document number required",
  }),
  client_password: z.string({
    required_error: "Password Required",
  }),
});  
