import { Button } from '@mui/material';
import React, {useState} from 'react';
import CustomInput from '../components/Inputs/CustomInput';
import imgLogin from '../assets/loginImage.jpg';
import logo from '../assets/logoBlanco.png';
import { useNavigate } from 'react-router-dom';
import { selector, useRecoilState, useRecoilValue } from 'recoil';
import { textState } from '../recoil/Atoms';

const Login = () => {
    const navigate = useNavigate();
    const [Value, setValue] = useState("");
    const [text, setText] = useRecoilState(textState);

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
                    onChange={({target}) => setValue(target.value)}
                    />
                <CustomInput 
                    label="Password" 
                    onChange={({target}) => {
                        setText(target.value);
                        setValue(target.value)}}
                    />
                <Button variant='contained' color="primary" style={{marginTop: 20, width: "50%"}} onClick={({target}) => {console.log("Atom");}}>
                    Ingresar
                </Button>
                <p style={{color: "white"}}>Atom: {text}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Login