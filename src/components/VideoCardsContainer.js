import React, { useEffect, useState } from 'react';
import { Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VideoCard from './VideoCard.js';
import {db, auth} from '../index.js';

// CSS Styling
const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 120
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: 130
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: 150
        },
        [theme.breakpoints.up('xl')]: {
            paddingLeft: 50
        }
    },
    recommended: {
        marginTop: 100,
        marginLeft: 50,
        fontSize: 26,
    }
  }));

function VideoCardsContainer() {
    const classes = useStyles();

    const [videos, setVideos] = useState([]);

    // Runs as if its componentDidMount
    useEffect(() => {
        db.collection('videos').orderBy('title').onSnapshot(snapshot => {
            const videos = [];

            // Add all documents to the videos array
            snapshot.forEach(doc => {
                const data = doc.data();
                videos.push(<Grid item xl={3} lg={4} md={6} sm={12} xs={12}><VideoCard data={data}/></Grid>);
            });
            // Change State
            setVideos(videos);
        })
    }, []);

    return (
        <div>
        <Typography variant="h6" className={classes.recommended}>Recommended</Typography>
        <Grid container className={classes.root}>
            {videos}
        </Grid>
        </div>
    )
}

export default VideoCardsContainer;