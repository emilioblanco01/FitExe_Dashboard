import React, { ChangeEvent } from 'react';
import Modal from '../index';

// Custom Components
import { FormInput, FormSelectbyId } from '../../Inputs/FormInput';

// Styled Components
import { StyledButtonCancel, StyledButtonAdd } from '../../../styles/StyledComponents';
import { useStyles } from './ModalAddUser.styles';

// Interfaces
import { IModalAddMovementProps } from './ModalAddUser.interfaces';
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

    const classes = useStyles();

    /**
     * Funcion para cambiar el valor de name en el state
     */

    const handleChangeName = (changeEvent: changeEvent) => {
        const { value, name } = changeEvent.target;
        onChange({ ...data, [name]: value });
    };

    /**
     * FUncion para cambiar el tipo de entrenamiento
     */

    const handleChangeType = (changeEvent: SelectChangeEvent) => {
        const { value, name } = changeEvent.target;
        onChange({ ...data, [name]: value });
    }

    return (
        <Modal
            open={open}
            handleClose={handleClose}>
            <div className={classes.modal}>
                {/* Header */}
                <div className={classes.headerStyle}>
                    <h1 style={{ marginLeft: 25 }}>Crear Nuevo Movimiento</h1>
                </div>
                {/* Body */}
                <div className={classes.bodyStyle}>
                    <div className={classes.formStyle}>
                        {/* Form */}
                        <FormInput
                            label='Nombre: '
                            name='name'
                            value={data.name}
                            onChange={handleChangeName} />
                        <FormInput
                            label='Apellido: '
                            name='lastname'
                            value={data.lastname}
                            onChange={handleChangeName} />
                        <FormInput
                            label='Fecha de Nacimiento: '
                            name='birthdate'
                            type='date'
                            value={data.birthdate}
                            onChange={handleChangeName} />
                        <FormInput
                            label='Correo Electronico: '
                            name='email'
                            value={data.email}
                            onChange={handleChangeName} />
                        <FormInput
                            label='Telefono: '
                            name='phone'
                            value={data.phone}
                            onChange={handleChangeName} />
                        <FormSelectbyId
                            label='Tipo de entrenamiento: '
                            name='typeTraining'
                            value={data.typeTraining}
                            onChange={handleChangeType}
                            options={TrainingType} />
                        <FormInput
                            label='Token: '
                            name='password'
                            type='password'
                            value={data.password}
                            onChange={handleChangeName} />
                        {/* Buttons */}
                        <div className={classes.buttonsStyle}>
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