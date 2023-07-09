import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { styleBox } from './Modal.style';

interface Props {
    children: React.ReactNode;
    open: boolean;
    handleClose: () => void;
}

export default function BasicModal({ open, handleClose, children }: Props) {

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={[ 
                    styleBox, 
                    {
                        display: "flex", 
                        flexDirection: "column",
                        alignItems: "center", 
                        justifyContent: "center",
                        borderEndStartRadius: "50px",
                        }
                        ]}>
                    {children}
                </Box>
            </Modal>
        </div>
    );
}