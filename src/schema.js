import * as z from "zod"

export const eventSchema = z.object({
  name: z.string().trim().min(4, {error: "Nome inválido, preencha corretamente."}),
  date: z.coerce.date(),
  theme: z.string(),
  speakers: z.array(z.object({
    name: z.string().trim().refine(
      (name) => name === "" || name.length >= 2,
      "Informe o nome do palestrante"
    )
  }))
})