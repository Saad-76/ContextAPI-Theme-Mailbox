import React from "react";

import MailBox from "./mailBox";
import { useTheme } from "../Context/themeContext";

import "../App.css";
import { Grid, Switch, Typography } from "@mui/material";

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className={theme === "light" ? "light-theme" : "dark-theme"}>
        <Grid container sx={{ textAlign: "center", padding: "12px 0px" }}>
          <Grid item xs={6}>
            <Typography variant="h6">MailBox</Typography>
          </Grid>

          <Grid
            item
            xs={6}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
          >
            <Typography variant="subtitle2">Light</Typography>
            <Switch onChange={toggleTheme} />
            <Typography variant="subtitle2">Dark</Typography>
          </Grid>
        </Grid>

        <MailBox theme={theme} />
      </div>
    </>
  );
};
export default Home;
