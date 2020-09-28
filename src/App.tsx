import React, { useEffect, useMemo, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Progress } from "./Progress";
import { calcYearProgress, calcMonthProgress, calcDayProgress } from "./utils";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
  },
  header: {
    fontWeight: "bold",
    fontSize: "4rem",
    padding: "30px",
    color: "#233142",
  },
  container: {
    margin: "0 auto",
    maxWidth: "600px",
  },
}));

const App = () => {
  const [time, setTime] = useState(new Date().getTime());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().getTime());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const { yearProgress, monthProgress, dayProgress } = useMemo(() => {
    const yearProgress = calcYearProgress(time);
    const monthProgress = calcMonthProgress(time);
    const dayProgress = calcDayProgress(time);
    return { yearProgress, monthProgress, dayProgress };
  }, [time]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.header}>
        Time Progress
      </Typography>
      <div className={classes.container}>
        <Progress title="Year" value={yearProgress}></Progress>
        <Progress title="Month" value={monthProgress}></Progress>
        <Progress title="Day" value={dayProgress}></Progress>
      </div>
    </div>
  );
};

export default App;
