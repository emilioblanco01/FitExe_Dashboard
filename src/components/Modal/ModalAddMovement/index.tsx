import React, { ChangeEvent } from 'react';
import Modal from '../index';

// Custom Components
import { FormInput, FormSelectbyId } from '../../Inputs/FormInput';

// Styled Components
import { StyledButtonCancel, StyledButtonAdd } from '../../../styles/StyledComponents';
import { useStyles } from './ModalAddMovement.styles';

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

    const classes = useStyles();

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