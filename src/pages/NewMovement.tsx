import React, { useEffect, useState } from 'react';
import { sidebarState } from '../recoil/Atoms';
import { useRecoilState } from 'recoil';
import { Button } from '@mui/material';
import Table from '../components/table/Table';
import { supabase } from '../supabase';
import { useSnackbar } from 'notistack';

// JSON
import TrainingType from '../assets/JSON/TrainingType.json';

// Custom Components
import ModalAddMovement from '../components/Modal/ModalAddMovement';

// Interfaces
import { IDataNewMovement } from '../components/Modal/ModalAddMovement/ModalAddMovement.interface';

const NewUsers = () => {

    const { enqueueSnackbar } = useSnackbar();

    const [DataNewMovement, setDataNewMovement] = useState<IDataNewMovement>({
        name: '',
        type: '',
        url: '',
    });
    const [data, setData] = useState<any>([]);
    const [open, setOpen] = useState(false);

    const [sidebar] = useRecoilState(sidebarState);

    useEffect(() => {

        GetMovimientos();

        return () => { };
    }, []);

    /**
     * HandleModal
     * @returns 
     */

    const handleModal = () => setOpen(!open);

    const GetMovimientos = async () => {
        let { data: CatalogMovementsTraining, error } = await supabase
            .from('CatalogMovementsTraining')
            .select('*')
            .eq('TrainerId', 5);
        const Data: any = [];
        CatalogMovementsTraining?.forEach(element => {
            Data.push({
                ...element,
                TrainingTypeId: TrainingType.find((x: any) => x.id === element.TrainingTypeId)?.TrainingType,
            });
        });
        setData(Data);
        return;
    }

    const SaveNewMovement = async () => {
        const { data: CatalogMovementsTraining, error } = await supabase
            .from('CatalogMovementsTraining')
            .insert([
                {
                    MovementName: DataNewMovement.name,
                    URL: DataNewMovement.url,
                    TrainerId: 5,
                    TrainingTypeId: DataNewMovement.type,
                },
            ]);
        if (error) {
            enqueueSnackbar('No se encontro el usuario en nuestro sistema', { variant: 'error' });
            return;
        }
        enqueueSnackbar('No se encontro el usuario en nuestro sistema', { variant: 'success' });
        setDataNewMovement(
            {
                name: '',
                type: '',
                url: '',
            }
        );
        GetMovimientos();
        handleModal();
        return;
    }

    return (
        <>
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
                        + Nuevo Movimiento
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
                        <Table data={data} rows={[
                            {
                                label: "Nombre del Movimiento",
                                value: "MovementName"
                            },
                            {
                                label: "Tipo de entrenamiento",
                                value: "TrainingTypeId"
                            },
                            {
                                label: "URLs",
                                value: "URL"
                            }
                        ]} />
                    </div>
                </div>
            </div>
            <ModalAddMovement
                open={open}
                handleClose={handleModal}
                data={DataNewMovement}
                onChange={setDataNewMovement}
                onSave={SaveNewMovement} />
        </>
    )
}

export default NewUsers