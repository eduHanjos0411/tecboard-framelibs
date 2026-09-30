import Box from "@mui/material/Box";
import { Banner } from "../components/Banner";
import { EventForm } from "../components/EventForm";
import { EventList } from "../components/EventList";
import { Header } from "../components/Header";
import { useState } from "react";

export function Board() {
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("tecboard-events");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  function handleCreateEvent(event) {
    const eventWithId = {
      ...event,
      id: crypto.randomUUID(),
      date: event.date.toLocaleDateString("pt-BR"),
    };
    const nextEvents = [...events, eventWithId];

    setEvents(nextEvents);
    localStorage.setItem("tecboard-events", JSON.stringify(nextEvents));
  }

  return (
    <Box sx={{ height: "100vh", backgroundColor: "#06151A" }}>
      {/* Header */}
      <Header/>

      {/* Seção de Banner */}
      <Banner />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#06151A",
          py: 8,
        }}
      >
        {/* Formulário */}
        <EventForm onCreate={handleCreateEvent} />

        {/* Lista de eventos */}
        <EventList events={events} />
      </Box>
    </Box>
  );
}
