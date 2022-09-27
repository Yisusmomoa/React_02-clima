import React, {useState, useEffect} from 'react'
import WeatherForm from './weatherForm';
import WeatherMainInfo from './weatherMainInfo';
import  Loading from "./loading";
import styles from "./WeatherApp.module.css";
export default function WeatherApp() {

  const [weather, setWeather]=useState(null);
  
  //cargar info por default apenas inicie la aplicación
  useEffect(()=>{
    loadInfo();
  }, [])

  useEffect(()=>{
    document.title=`Weather | ${weather?.location.name ?? ''}`;
  }, [weather])

  async function loadInfo(city='london') {
    console.log(process.env.REACT_APP_URL);
    console.log(process.env.REACT_APP_KEY);
    console.log(city);
    try {
      const request=await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);
      const json=await request.json();
        setWeather(json);
     
    } catch (error) {
      console.error(error);
    }
  }

  function handleChangeCity(city) {
    setWeather(null);//limpio el state
    loadInfo(city);
  }

  return (
    <div className={styles.weatherContainer}>
    <WeatherForm onChangeCity={handleChangeCity}></WeatherForm>
    {weather ? <WeatherMainInfo weather={weather}></WeatherMainInfo> : <Loading/>}
    
    </div>
  )
}
