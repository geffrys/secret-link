import { z } from "zod";

// body input schema for operations

export const registerOperation = z.object({
    id_agent: z.number().min(1),
    id_client: z.number().min(1),
    id_travel_pack: z.number().min(1),
});
