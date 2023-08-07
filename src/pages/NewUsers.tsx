import React, { Fragment, useState, useEffect } from 'react';
import { sidebarState } from '../recoil/Atoms';
import { useRecoilState } from 'recoil';
import { Button } from '@mui/material';
import Table from '../components/table/Table';
import { supabase } from '../supabase';
import { useSnackbar } from 'notistack';

// JSON
import TrainingType from '../assets/JSON/TrainingType.json';

// components
import Modal from '../components/Modal/ModalAddUser';

const NewUsers = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    birthdate: "",
    typeTraining: "",
  });
  const [dataUsers, setDataUsers] = useState([]);
  const [sidebar] = useRecoilState(sidebarState);
  const [modal, setmodal] = useState(false);

  const handleModal = () => setmodal(!modal);

  useEffect(() => {
    GetUsers();
  }, []);

  const onSave = async () => {

    const { data: DataResponse, error } = await supabase.functions.invoke('createAthlete', {
      body: {
        coachId: 5,
        email: data.email,
        name: data.name,
        lastname: data.lastname,
        dateBirth: data.birthdate,
        password: data.password,
        phoneNumber: data.phone,
        TrainingType: data.typeTraining,
        ShipmentDate: "1999-03-20"
      }
    });

    if (error) {
      handleModal();
      enqueueSnackbar("Error al crear el usuario", { variant: "error" });
      return;
    }

    setData({
      name: "",
      lastname: "",
      email: "",
      password: "",
      phone: "",
      birthdate: "",
      typeTraining: "",
    });

    enqueueSnackbar("Usuario creado correctamente", { variant: "success" });
    GetUsers();
    handleModal();
  }

  const GetUsers = async () => {
    let { data: CatalogUsers, error } = await supabase.functions.invoke('Getusers', {
      body: {
        id: 5
      }
    });

    if (error) {
      enqueueSnackbar("Error al obtener los usuarios", { variant: "error" });
      return;
    }

    const Data: any = [];
        CatalogUsers.Users?.forEach(element => {

            //Formatear dateBirth a formato de fecha
            const dateBirth = element.dateBirth.split('T');
            const dateBirth2 = dateBirth[0].split('-');


            Data.push({
                ...element,
                dateBirth: `${dateBirth2[2]}/${dateBirth2[1]}/${dateBirth2[0]}`,
                TrainingType: TrainingType.find((x: any) => x.id === element.TrainingType)?.TrainingType,
            });
        });
    setDataUsers(Data);
  }

  return (
    <Fragment>
      <div style={{
        width: !sidebar ? '87%' : '97%',
      }}>
        <div
          style={{
            height: "10vh",
            width: "95%",
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
          }}>
          <Button variant="contained" color="primary" onClick={handleModal}>
            + Nuevo Usuario
          </Button>
        </div>
        <div style={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <div style={{
            width: "90%",
            height: "90%",
          }}>
            <Table 
              type={2}
              data={dataUsers} 
              rows={[
              {
                label: "Nombre",
                value: "name"
              },
              {
                label: "Apellido",
                value: "lastname"
              },
              {
                label: "Correo",
                value: "email"
              },
              {
                label: "Numero de Telefono",
                value: "phoneNumber"
              },
              {
                label: "Tipo de Entrenamiento",
                value: "TrainingType"
              },
              {
                label: "Fecha de Nacimiento",
                value: "dateBirth"
              },
            ]} />
          </div>
        </div>
      </div>
      <Modal
        open={modal}
        onChange={setData}
        data={data}
        handleClose={handleModal}
        onSave={onSave} />
    </Fragment>
  )
}

export default NewUsers