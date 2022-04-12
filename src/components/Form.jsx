import React,{ useEffect,useState } from "react";
import {Box,TextField,Button, makeStyles } from '@material-ui/core';
import { getData } from "../service/api";
import Information from "./Information";

const useStyles=makeStyles({

    component:{
        padding:10,
        background:'#6ED0D6'
    },

    input:{
        color:'white',
        marginRight:15
    },

    button:{
        width:150,
        height:40,
        backgroundColor:'white'
    },

})

const Form=()=>{

    const classes=useStyles();
    const [weatherdata,getWeatherdata]=useState();
    const [city,setCity]=useState('');
    const [country,setCountry]=useState('');
    const [click,handleClick]=useState(false);

    useEffect(()=>{
        
        const getWeather=async ()=>{
            
            city && await getData(city,country).then((response)=>{
                getWeatherdata(response.data);
                console.log(response.data)
            })
        }
        getWeather();
        handleClick(false);
    },[click]);


    const handleCityChange=(cityname)=>{
        setCity(cityname)
    }

    const handleCountryChange=(countryname)=>{
        setCountry(countryname)
    }

    return(
        <>
            <Box className={classes.component}>
                <TextField
                    label="city"
                    className={classes.input}
                    onChange={(event)=>{
                        handleCityChange(event.target.value)
                    }}
                />

                <TextField
                    label="country"
                    className={classes.input}
                    onChange={(event)=>{
                        handleCountryChange(event.target.value)
                    }}
                />

                <Button className={classes.button}
                    varient="contained"
                    color="primary"
                    onClick={()=>{
                        handleClick(true)
                    }}
                >Get Weather</Button>
            </Box>

            <Information data={weatherdata}/>
        </>
    )
}

export default Form;