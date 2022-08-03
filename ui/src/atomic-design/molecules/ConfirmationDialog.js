import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@mui/material";
import {deleteIndividualAddress} from "../../remote/remote-addresses";
import {useNavigate} from "react-router-dom";

const ConfirmationDialog = ({id}) => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        console.log('confirmation window was opened')
    };

    const handleClose = () => {
        setOpen(false);
        console.log('confirmation window was closed')
    };

    const handleDelete = () => {
        setOpen(false);
        console.log('Deleted!', id)
        // display message of successful delete and reroute to address list on delete
        deleteIndividualAddress({id})
        .then(() => navigate('/'));
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Delete
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you would like to delete?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Deleting will remove this address from your address book permanently.
                        This action cannot be undone. Would you like to proceed?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleDelete} autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ConfirmationDialog;