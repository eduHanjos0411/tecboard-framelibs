import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import { eventSchema } from "../schema";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, ListItem, styled, Typography } from "@mui/material";


const DeleteButton = styled(Button)(() => ({
  lineHeight: 0,
  minWidth: 0,
  borderRadius: "30%",
  backgroundColor: "#f30505",
  ":hover": { backgroundColor: "#bb0404" },
}));

export function EventForm({ onCreate }) {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      name: "",
      date: "",
      theme: "",
      speakers: [{ name: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: "speakers",
    control,
  });

  function handleOnSubmit(data) {
    const speakers = data.speakers.filter((s) => s.name.trim() !== "");
    onCreate({ ...data, speakers });
    reset({ name: "", date: "", theme: "", speakers: [{ name: "" }] });
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleOnSubmit)}
      sx={{
        backgroundColor: "#212121",
        width: "100%",
        maxWidth: "384px",
        py: "32px",
        px: "28px",
        borderRadius: 2,
      }}
    >
      <Typography>Preencha para criar um evento:</Typography>

      <Stack spacing={2}>
        <FormControl fullWidth>
          <InputLabel
            shrink
            htmlFor="name"
            sx={{ position: "static", transform: "none", mb: 1 }}
          >
            <Typography>Qual o nome do evento?</Typography>
          </InputLabel>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <OutlinedInput
                id="name"
                placeholder="Summer dev hits"
                fullWidth
                sx={{ height: "36px" }}
                {...field}
              />
            )}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel
            shrink
            htmlFor="date"
            sx={{ position: "static", transform: "none", mb: 1 }}
          >
            <Typography>Data do evento</Typography>
          </InputLabel>
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <OutlinedInput
                id="date"
                placeholder="XX/XX/XXXX"
                fullWidth
                sx={{ height: "36px" }}
                {...field}
              />
            )}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel
            shrink
            htmlFor="theme"
            sx={{ position: "static", transform: "none", mb: 1 }}
          >
            <Typography>Tema do evento</Typography>
          </InputLabel>
          <Controller
            name="theme"
            control={control}
            render={({ field }) => (
              <Select
                id="theme"
                defaultValue=""
                displayEmpty
                fullWidth
                sx={{ height: "36px" }}
                {...field}
              >
                <MenuItem value="" disabled>
                  Selecione uma opção
                </MenuItem>
                <MenuItem value="Front-end">Front-end</MenuItem>
                <MenuItem value="Design">Design</MenuItem>
                <MenuItem value="Marketing">Marketing</MenuItem>
              </Select>
            )}
          />
        </FormControl>

        <Button type="button" onClick={() => append({ name: "" })}>
          Adicionar palestrante
        </Button>

        {fields.map((item, index) => (
          <ListItem key={item.id}>
            <FormControl fullWidth>
              <InputLabel
                shrink
                htmlFor="speakers"
                sx={{ position: "static", transform: "none", mb: 1 }}
              >
                <Typography>Nome do palestrante</Typography>
              </InputLabel>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Controller
                  control={control}
                  name={`speakers.${index}.name`}
                  render={({ field }) => (
                    <OutlinedInput
                      id="speakers"
                      placeholder={`Palestrante ${index + 1}`}
                      error={!!errors.speakers?.[index]?.name}
                      sx={{ height: "36px" }}
                      {...field}
                    />
                  )}
                />
                <DeleteButton type="button" onClick={() => remove(index)}>
                  X
                </DeleteButton>
              </Box>
            </FormControl>
          </ListItem>
        ))}

        <Button type="submit" sx={{ alignSelf: "center" }}>
          Criar evento
        </Button>
      </Stack>
    </Box>
  );
}
