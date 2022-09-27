import React,{useState} from 'react'
import styles from "./WeatherForm.module.css";
export default function WeatherForm({onChangeCity}) {
    const [city,setCity]=useState("");

    function onChange(e) {
        const value=e.target.value;
        if (value!== '') {
            setCity(value);
        }
    }
    function handleSubmit(e) {
        e.preventDefault(); 
        //cuando le demos enter, llamamos un prop como si fuera una función
        onChangeCity(city);
    }

    //crear un estado para nunestro input
    return (
        <form onSubmit={handleSubmit} className={styles.container}>
                                                {/* se agrega el evento onchange, cada evz que ejecutemos onchange, actualizamos 
                                                el state de city */}
            <input type="text" className={styles.input}  onChange={onChange}/>
        </form>
    )
}
