import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

import { useHistory } from "react-router-dom";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Eric Hendrix
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        background: 'linear-gradient(90deg, rgba(0,41,69,1) 6%, rgb(53, 0, 56) 29%, rgba(7,33,71,1) 84%)'
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    container: {
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '50px',
        animation: 'zooming 5s ease-in-out infinite'
    },
    frame: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: '50px',
        border: '5px #087be6 solid',
        boxShadow: '0px 0px 20px #00ccff, inset 0px 0px 20px #00ccff, 0px 0px 60px #ff00c8, inset 0px 0px 60px #ff00c8',
        filter: 'brightness(1.5) contrast(3)',
        animation: 'breathing 3s ease-out infinite',

        '&:nth-child(1)': {
            transform: 'rotate(40deg) translateY(0px) translateZ(0px)',
            opacity: '1.00',
            animationDelay: '0.1s',
        },
        '&:nth-child(2)': {
            transform: 'rotate(40deg) translateY(50px) translateZ(-10px)',
            opacity: '0.9',
            animationDelay: '0.3s',
        },
        '&:nth-child(3)': {
            transform: 'rotate(40deg) translateY(100px) translateZ(-20px)',
            opacity: '0.85',
            animationDelay: '0.5s',
        },
        '&:nth-child(4)': {
            transform: 'rotate(40deg) translateY(150px) translateZ(-30px)',
            opacity: '0.80',
            animationDelay: '0.7s',
        },
        '&:nth-child(5)': {
            transform: 'rotate(40deg) translateY(200px) translateZ(-40px)',
            opacity: '0.75',
            animationDelay: '0.9s',
        },
        '&:nth-child(6)': {
            transform: 'rotate(40deg) translateY(250px) translateZ(-50px)',
            opacity: '0.70',
            animationDelay: '1.1s',
        },
        '&:nth-child(7)': {
            transform: 'rotate(40deg) translateY(300px) translateZ(-60px)',
            opacity: '0.65',
            animationDelay: '1.3s',
        },
        '&:nth-child(8)': {
            transform: 'rotate(40deg) translateY(350px) translateZ(-70px)',
            opacity: '0.6',
            animationDelay: '1.5s',
        },
        '&:nth-child(9)': {
            transform: 'rotate(40deg) translateY(400px) translateZ(-80px)',
            opacity: '0.5',
            animationDelay: '1.7s',
        },
        '&:nth-child(10)': {
            transform: 'rotate(40deg) translateY(450px) translateZ(-90px)',
            opacity: '0.4',
            animationDelay: '1.9s',
        },
        '&:nth-child(11)': {
            transform: 'rotate(40deg) translateY(500px) translateZ(-100px)',
            opacity: '0.3',
            animationDelay: '2.1s',
        },
        '&:nth-child(12)': {
            transform: 'rotate(40deg) translateY(550px) translateZ(-110px)',
            opacity: '0.2',
            animationDelay: '2.3s',
        },
        '&:nth-child(13)': {
            transform: 'rotate(40deg) translateY(600px) translateZ(-120px)',
            opacity: '0.1',
            animationDelay: '2.5s',
        },
        '&:nth-child(14)': {
            transform: 'rotate(40deg) translateY(650px) translateZ(-130px)',
            opacity: '0.05',
            animationDelay: '2.7s',
        }
    },
    '@keyframes breathing': {
        '0%': { filter: 'brightness(10) contrast(3)' },
        '50%': { filter: 'brightness(1.1) contrast(2)' },
        '100%': { filter: 'brightness(10) contrast(3)' }
    },
    '@keyframes zooming': {
        '0%': { perspective: '45px' },
        '50%': { perspective: '50px' },
        '100%': { perspective: '45px' }
    }

}));

export default function SignInSide() {
    const classes = useStyles();

    const history = useHistory();
    console.log(history);

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />


            <Grid item xs={false} sm={4} md={7} className={classes.container}>
                <Box className={classes.frame}></Box>
                <Box className={classes.frame}></Box>
                <Box className={classes.frame}></Box>
                <Box className={classes.frame}></Box>
                <Box className={classes.frame}></Box>
                <Box className={classes.frame}></Box>
                <Box className={classes.frame}></Box>
                <Box className={classes.frame}></Box>
                <Box className={classes.frame}></Box>
                <Box className={classes.frame}></Box>
                <Box className={classes.frame}></Box>
                <Box className={classes.frame}></Box>
                <Box className={classes.frame}></Box>
                <Box className={classes.frame}></Box>
            </Grid>







        </Grid>
    );
}