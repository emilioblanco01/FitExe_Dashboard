import React, { ChangeEvent } from 'react';
import Modal from '../index';

// Custom Components
import { FormInput, FormSelectbyId } from '../../Inputs/FormInput';

// Styled Components
import { StyledButtonCancel, StyledButtonAdd } from '../../../styles/StyledComponents';

// Interfaces
import { IModalAddMovementProps } from './ModalAddMovement.interface';
import { SelectChangeEvent } from '@mui/material/Select';

//JSON
import TrainingType from '../../../assets/JSON/TrainingType.json';

type changeEvent = ChangeEvent<HTMLInputElement>

/**
 * MODAL PARA CREAR UN NUEVO MOVIMIENTO
 * @param param0 
 * @returns 
 */

const index = ({
    open,
    handleClose,
    data,
    onChange,
    onSave
}: IModalAddMovementProps) => {

    /**
     * Funcion para cambiar el valor de name en el state
     */

    const handleChangeName = (changeEvent: changeEvent) => {
        const { value } = changeEvent.target;
        onChange({ ...data, name: value });
    };

    /**
     * Funcion para cambiar el valor de type en el state
     */

    const handleChange = (event: SelectChangeEvent) => {
        onChange({ ...data, type: event.target.value });
    };

    /**
     * Funcion para cambiar el valor de url en el state
     */

    const handleChangeUrl = (changeEvent: changeEvent) => {
        const { value } = changeEvent.target;
        onChange({ ...data, url: value });
    };


    return (
        <Modal
            open={open}
            handleClose={handleClose}>
            <div style={{
                width: "100%",
                height: "100vh",
            }}>

                <div style={{
                    height: 60,
                    backgroundColor: "#141E26",
                    borderBottom: "8px solid #D9A404",
                    color: "white",
                    display: "flex",
                    alignItems: "center",

                }}>
                    <h1 style={{ marginLeft: 25 }}>Crear Nuevo Movimiento</h1>
                </div>
                <div style={{
                    height: "94vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <div
                        style={{
                            width: "60%",
                            height: "40%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-around",
                        }}>
                            
                        <FormInput
                            label='Nombre del Movimiento'
                            value={data.name}
                            onChange={handleChangeName} />
                        <FormSelectbyId
                            label='Tipo de entrenamiento'
                            value={data.type}
                            onChange={handleChange}
                            options={TrainingType} />
                        <FormInput
                            label='URL'
                            value={data.url}
                            onChange={handleChangeUrl} />
                        

                        <div style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-around",
                            marginTop: 15,
                        }}>
                            <StyledButtonCancel
                                variant='contained'
                                onClick={handleClose}>
                                Cancelar
                            </StyledButtonCancel>
                            <StyledButtonAdd
                                variant='contained'
                                onClick={onSave}>
                                Agregar
                            </StyledButtonAdd>
                        </div>
                    </div>
                </div>

            </div>
        </Modal>
    )
}

export default index