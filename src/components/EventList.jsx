import { Box, Card, CardContent, Grid, styled, Typography } from "@mui/material";

const Chip = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  backgroundColor: theme.palette.textSecondary,
  padding: "8px",
  borderRadius: "4px",
  mb: 1,
}));


export function EventList({ events }) {
  const eventCategories = events.reduce((categories, event) => {
    const category = categories.find((item) => item.name === event.theme);

    if (category) {
      category.events.push(event);
    } else {
      categories.push({ name: event.theme, events: [event] });
    }

    return categories;
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "1200px",
        mt: "60px",
        gap: "64px",
      }}
    >
      {eventCategories.map((category) => (
        <Box key={category.name}>
          <Typography>{category.name}</Typography>

          <Grid container spacing={3} sx={{ maxWidth: "1200px", mx: "auto" }}>
            {category.events.map((event) => (
              <Grid item xs={12} sm={6} md={4} key={event.id}>
                <Card sx={{ width: "282px" }}>
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      py: 3,
                      px: 2,
                      backgroundColor: "#212121",
                    }}
                  >
                    <Chip>
                      <Typography variant="caption">{event.theme}</Typography>
                    </Chip>
                    <Typography>{event.date}</Typography>
                    <Typography>{event.name}</Typography>
                    <Typography variant="subtitle2" sx={{ mt: 2 }}>
                      Palestrantes
                    </Typography>
                    {event.speakers.map((speaker) => (
                      <Typography key={speaker.name} variant="body2">
                        {speaker.name}
                      </Typography>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}
