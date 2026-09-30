import { Box, Typography } from "@mui/material";
import bannerImage from "../assets/banner.png";



export function Banner() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        height: "600px",
        background: "linear-gradient(180deg, #17D9B1 0%, #06151A 100%)",
        justifyContent: "flex-end",
        position: "relative",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <img src={bannerImage} />
        <Typography
          variant="h1"
          component="h1"
          sx={{
            position: "absolute",
            bottom: "80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "652px",
            textAlign: "center",
          }}
        >
          Seu hub de eventos de tecnologia
        </Typography>
      </Box>
    </Box>
  );
}
