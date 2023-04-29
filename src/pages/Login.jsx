/**
 * @file Login.jsx
 * @brief Página de login
 * @version 1.0.0
 * @date 28/03/2021 | dd/mm/yyyy | @desc Versión inicial
 * @autor Emilio Blanco Lopez
 */
import { Button } from '@mui/material';
import React, { useState } from 'react';
import CustomInput from '../components/Inputs/CustomInput';
import imgLogin from '../assets/loginImage.jpg';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/index';
import { useSnackbar } from 'notistack';
import styles from '../styles/styles.module.css';
import LogoBlanco from '../assets/svgs/LogoBlanco';

const Login = () => {
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const [Data, setData] = useState({
        Email: "",
        Password: ""
    });
    const [VisibilityPassword, setVisibilityPassword] = useState(true);

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
        <div className={styles.login}>
            <div className={styles.loginImg}>
            <img src={imgLogin} alt={"jumpWithBall"} style={{ height: "100%" }} />
            </div>

            <div className={styles.LoginContent}>
                <div className={styles.LoginForm}>
                    <LogoBlanco style={{marginBottom: 10}}/>
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

