import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { styleBox, useStyles } from './Modal.style';

interface Props {
    children: React.ReactNode;
    open: boolean;
    handleClose: () => void;
}

export default function BasicModal({ open, handleClose, children }: Props) {

    const classes = useStyles();

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className={classes.styleBox}>
                    {children}
                </div>
            </Modal>
        </div>
    );
}