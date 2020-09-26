import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { LinearProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 40px",
    padding: "40px 0",
  },
  title: {
    fontSize: "1.3rem",
    textAlign: "left",
    fontWeight: "bold",
    color: "#233142",
  },
}));

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 50,
    borderRadius: 5,
    margin: "10px 0",
  },
  colorPrimary: {
    backgroundColor: "#a5def1",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#36506C",
  },
}))(LinearProgress);

export type Props = {
  title: string;
  value: number;
};

export const Progress = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>{props.title}</div>
      <BorderLinearProgress variant="determinate" value={props.value} />
    </div>
  );
};
