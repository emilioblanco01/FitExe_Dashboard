import { Button } from '@mui/material';
import React, { useState } from 'react';
import CustomInput from '../components/Inputs/CustomInput';
import imgLogin from '../assets/loginImage.jpg';
import logo from '../assets/logoBlanco.png';
import { useNavigate } from 'react-router-dom';
import { selector, useRecoilState, useRecoilValue } from 'recoil';
import { textState } from '../recoil/Atoms';
import { makeStyles } from '@mui/material/styles';
import { supabase } from '../supabase/index';
import { SnackbarProvider, useSnackbar } from 'notistack';

const Login = () => {
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const [Data, setData] = useState({
        Email: "",
        Password: ""
    });
    const [VisibilityPassword, setVisibilityPassword] = useState(false);

    /**
     * @title onLogin
     * @description Funcion que se encarga de hacer el login con supabase
     */

    const onLogin = async () => {
        
        const { data, error } = await supabase.auth.signInWithPassword({
            email: Data.Email,
            password: Data.Password,
        })
        if(await data.user === null){
            enqueueSnackbar('No se encontro el usuario en nuestro sistema', { variant: 'error' });

        }else{
            enqueueSnackbar('Ingreso correcto', { variant: 'success' });
            navigate('/dashboard');
        }
    }

    return (
        <div style={{
            backgroundColor: '#141E26',
            width: "100vw",
            height: "100vh",
            display: "flex"
        }}>
            <div style={{ width: "fit-content", height: "100%" }}>
                <img src={imgLogin} alt={"jumpWithBall"} style={{ height: "100%" }} />
            </div>

            <div style={{ display: "flex", position: "relative", width: "70%", height: "100%", alignItems: "center", justifyContent: "center" }}>
                <div style={{ marginTop: 10, height: "fit-content", width: "30%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img src={logo} />
                    <CustomInput
                        label="Usuario / Email"
                        value={Data.Email}
                        onChange={({ target }) => { setData({ ...Data, Email: target.value }) }}
                    />
                    <CustomInput
                        isPassword
                        visibility={VisibilityPassword}
                        onVisibility={() => { setVisibilityPassword(!VisibilityPassword) }}
                        label="Password"
                        value={Data.Password}
                        onChange={({ target }) => { setData({ ...Data, Password: target.value }) }}

                    />
                    <Button 
                        variant='contained' 
                        color="primary" 
                        style={{ marginTop: 20, width: "50%" }} 
                        onClick={onLogin}>
                        Ingresar
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default Login;

