import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, IconButton } from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";

// CSS Styling
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    position: 'relative',
    marginTop: 10,
    [theme.breakpoints.up('xs')]: {
        width: 350,
        height: 350
    },
    [theme.breakpoints.up('xl')]: {
        width: 400,
        height: 400
    },
  },
  coverImg: {
    width: '100%',
    height: 250,
  },
  length: {
    color: '#fff',
    backgroundColor: '#000',
    padding: 1,
    opacity: 0.7,
    fontSize: 12,
    position: 'absolute',
    bottom: 160,
    right: 5,
  },
  title: {
    color: theme.text,
    marginLeft: 10,
    marginTop: 15,
    fontSize: 20,
  },
  author: {
    color: theme.secondary,
    marginTop: 20,
    marginLeft: 10,
    fontSize: 16,
  },
}));

function VideoCard(props) {
  const classes = useStyles();

  const author = props.data.author;
  const title = props.data.title;
  const description = props.data.description;
  const length = props.data.length;
  const coverImg = props.data.coverImg;

  return (
      <Paper className={classes.root} elevation={0}>
        <img src={coverImg} className={classes.coverImg}></img>
        <Typography variant="button" className={classes.length}>{length}</Typography>
        <Typography variant="h6" className={classes.title}>{title}</Typography>
        <Typography variant="caption" className={classes.author}>{author}</Typography>
      </Paper>
  );
}

export default VideoCard;
