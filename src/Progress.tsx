import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { LinearProgress, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "40px",
  },
  title: {
    fontSize: "1.5rem",
    textAlign: "left",
    fontWeight: "bold",
    color: "#233142",
  },
  bar: {
    position: "relative",
  },
  value: {
    position: "absolute",
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "#ebf7fd",
    top: "10px",
    left: "10px",
    zIndex: 1,
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
      <div className={classes.bar}>
        <Typography className={classes.value} variant="body1">
          {props.value}%
        </Typography>
        <BorderLinearProgress
          variant="determinate"
          value={props.value}
        ></BorderLinearProgress>
      </div>
    </div>
  );
};
