import tecboardLogo from "../assets/tecboard.svg";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export function Header() {
  return (
    <AppBar position="static" sx={{ py: 2, backgroundColor: "#06151A" }}>
      <Toolbar sx={{ justifyContent: "center" }}>
        <img src={tecboardLogo} alt="Logo" style={{ height: "28px" }} />
      </Toolbar>
    </AppBar>
  );
}
