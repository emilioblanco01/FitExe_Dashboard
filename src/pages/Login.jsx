import { Button, TextField } from '@mui/material';
import React, {useState} from 'react';
import CustomInput from '../components/Inputs/CustomInput';
import imgLogin from '../assets/loginImage.jpg';
import logo from '../assets/logoBlanco.png';

const Login = () => {
    const [Value, setValue] = useState("");
    return (
        <div style={{
        backgroundColor: '#141E26',
        width: "100vw", 
        height: "100vh",
        display: "flex"}}>
            <div style={{width: "fit-content", height: "100%"}}>
                <img src={imgLogin} alt={"jumpWithBall"} style={{height: "100%"}}/>
            </div>
            
            <div style={{display: "flex", position: "relative", width: "70%", height: "100%", alignItems: "center", justifyContent: "center"}}>
                <div style={{marginTop: 10, height: "fit-content", width: "30%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <img src={logo}/>
                <CustomInput 
                    label="Usuario / Email" 
                    value={Value} 
                    onChange={({target}) => setValue(target.value)}
                    />
                <CustomInput 
                    label="Password" 
                    value={Value} 
                    onChange={({target}) => setValue(target.value)}
                    />
                <Button variant='contained' color="primary" style={{marginTop: 20, width: "50%"}}>
                    Ingresar
                </Button>
                </div>
            </div>
            
        </div>
    )
}

export default Login