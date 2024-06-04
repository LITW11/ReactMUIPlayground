import React, { useState } from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';

const Home = () => {

    const [firstName, setFirstName] = useState('');

    return <>
        <Grid container>
            <Grid item md={3}></Grid>

            <Grid item md={6}>
                <Grid container spacing={2}>
                    <Grid item md={12}>
                        <Typography variant='h6'>
                            {firstName}
                        </Typography>
                    </Grid>
                    <Grid item md={12}>
                        <TextField label='First Name' fullWidth value={firstName} onChange={e => setFirstName(e.target.value)} />
                    </Grid>
                    <Grid item md={12}>
                        <TextField label='Last Name' fullWidth />
                    </Grid>
                    <Grid item md={12}>
                        <TextField label='Age' fullWidth />
                    </Grid>
                    <Grid item md={12}>
                        <Button fullWidth color="primary" variant='contained'>Submit</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>
};

export default Home;