import * as z from "zod"

export const eventSchema = z.object({
  name: z.string().min(4, {error: "Nome inválido, preencha corretamente."}),
  date: z.coerce.date(),
  theme: z.string()
})