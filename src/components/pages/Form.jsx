/* eslint-disable no-useless-escape */
import { Alert, Button, Snackbar, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useForm } from "react-hook-form"
import React from 'react';
import Head from '../Head';

// eslint-disable-next-line no-useless-escape
const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const data = [
    {
        value: 'Admin',
        label: 'Admin',
    },
    {
        value: 'Manger',
        label: 'Manger',
    },
    {
        value: 'User',
        label: 'User',
    },
];

// @ts-ignore


function Form() {


    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const handleClose = () => {
        setState({ ...state, open: false });
    };
    const { vertical, horizontal, open } = state;

    const handleClick = (newState) => () => {
        setState({ ...newState, open: true });
    };


    return (
        <Box>
            <Head title="CREATE USER" subTitle="Create a New User Profile" />
            <Box
                onSubmit={handleSubmit(onSubmit)}
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3
                }}
                noValidate
                autoComplete="off"
            >

                <Stack direction={'row'} sx={{ gap: 2 }}>
                    <TextField error={Boolean(errors.firstName)}
                        helperText={errors.firstName ? '"This filed is required & min 3 character"' : null}
                        {...register("firstName", { required: true, minLength: 3 })}


                        sx={{ flex: 1 }} label="First Name" variant="filled" />
                    <TextField error={Boolean(errors.lastName)}
                        helperText={errors.lastName ? '"This filed is required & min 3 character"' : null}
                        {...register("lastName", { required: true, minLength: 3 })} sx={{ flex: 1 }} label="Last Name" variant="filled" />
                </Stack>

                <TextField error={Boolean(errors.email)}
                    helperText={errors.email ? '"Valid email address"' : null}
                    {...register("email", { required: true, pattern: regEmail })} sx={{ flex: 1 }} label="Email" variant="filled" />
                <TextField error={Boolean(errors.phone)}
                    helperText={errors.phone ? '"Valid Phone Number"' : null}
                    // @ts-ignore
                    {...register("phone", { required: true, pattern: phoneRegExp })} label="Contact Number" variant="filled" type='number' />
                <TextField label="Adress 1" variant="filled" />
                <TextField label="Adress 2" variant="filled" />
                <TextField
                    variant="filled"
                    id="outlined-select-currency"
                    select
                    label="Role"
                    defaultValue="User"
                >
                    {data.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <Box sx={{ textAlign: 'right' }}>
                    <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })} type='submit' sx={{ textTransform: 'capitalize' }} variant='contained'>Creat New User</Button>
                </Box>




                <Snackbar
                    // @ts-ignore
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    key={vertical + horizontal}
                    autoHideDuration={3000}
                    onClose={handleClose}

                >
                    <Alert
                        onClose={handleClose}
                        severity="info"
                        variant="filled"
                        sx={{ width: '100%', color: "white" }}
                    >
                        Account created successfully
                    </Alert>
                </Snackbar>




            </Box>
        </Box>
    )
}

export default Form

