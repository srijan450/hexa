import { CssVarsProvider, Typography } from "@mui/joy";
import React from "react";

const App = () => {
  return (
    <CssVarsProvider>
      <Typography variant="h1">hello world</Typography>
    </CssVarsProvider>
  )
};

export default App;
