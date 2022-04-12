import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import bgimg from '../images/bg-weatherimg.jpg';
import Form from './Form';

const useStyles=makeStyles({

    component:{
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },


    leftContainer:{
        backgroundImage:`url(${bgimg})`,
        backgroundSize:'cover',
        height:"80%",
        width:"30%",
        borderRadius:'20px 0 0 20px'
    },

    rightContainer:{
        background:'linear-gradient(to right,#6ED0D6,#6ED0D6)',
        height:"80%",
        width:'50%',
    }
})

const Weather=()=>{

    //assigning 
    const classes=useStyles();

    return(
        <>
            <Box className={classes.component}>
                <Box className={classes.leftContainer}></Box>
                <Box className={classes.rightContainer}>
                    <Form/>
                </Box>
            </Box>
        </>
    )
}

export default Weather;