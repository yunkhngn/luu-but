import { React, useState } from "react";
import { Modal, CircularProgress, Box } from '@mui/material';

const LoadingScreen = () => {
    const [open, setOpen] = useState(true);
    setInterval(() => {
        setOpen(false);
    }, 600);
    return (
        <Modal
            open={open}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    width: '100vw',
                    backgroundColor: 'white'
                }}
            >
                <CircularProgress
                />
            </Box>
        </Modal>
    )
}

export default LoadingScreen;