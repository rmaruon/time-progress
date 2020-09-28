import React, { useEffect, useMemo, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Progress } from "./Progress";
import { calcYearProgress, calcMonthProgress, calcDayProgress } from "./utils";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    maxWidth: "600px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
  },
  header: {
    fontWeight: "bold",
    fontSize: "4rem",
    padding: "20px",
    color: "#233142",
  },
  container: {
    marginTop: "10px",
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
