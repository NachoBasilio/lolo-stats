import GoogleIcon from '@mui/icons-material/Google';
import {Link as RouterLink } from "react-router-dom";
import { Grid, TextField, Button, Link, Typography } from "@mui/material";

export default function Login() {
  return (
    <>
      <Grid 
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={
            {
              minHeight: '100vh',
              backgroundColor: 'primary.main',
              padding: 4

            }
          }
      >
        
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={
            {
              backgroundColor: 'white',
              padding: 4,
              borderRadius: 2
            }
          }
        >
         <form action="">
          <Grid container
            maxWidth="400px"
          >
            <Typography variant="h4" color="initial">Inicia secion</Typography>
            <Grid item xs={12} sx={{mt:2}}
            >
              <TextField
                id=""
                label="Correo"
                type="email"
                placeholder="Correo electronico"
                fullWidth
              />

            </Grid>
            <Grid item xs={12} sx={{mt:2}}
            >
              <TextField
              id=""
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              />
            </Grid>
            <Grid container spacing={2} sx={{mb:2, mt:1}}>
              <Grid item xs={12} sm={8} >
                <Button variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button variant="contained" fullWidth>
                  <GoogleIcon/>
                </Button>
              </Grid>
            </Grid>
              <Grid container direction="row" justifyContent="end">
                <Link 
                component={RouterLink}
                color="inherit"
                to="/auth/register"
                > Create una cuenta</Link>
              </Grid>
          </Grid>
        </form>
        </Grid>
      </Grid>
    </>
  )
}
