import { Button, Grid, Link, Typography } from "@mui/material";
import {Link as RouterLink } from "react-router-dom";

export default function Header() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        position: 'fixed',
        backgroundColor: 'primary.main',
        width: { xs: '100%', sm: '100%', md: '80%' },
        height: { sx: "auto", sm: "80px", md: "80px" },
        top: 0,
        left: 0,
        right: 0,
        padding: { xs: '10px', sm: '10px', md: '10px' },
        ml: 'auto',
        mr: 'auto',
        paddingX: { xs: '16px', sm: '0' }, 
        justifyContent: { xs: 'center', sm: 'space-between' },
        zIndex: 1000, // Ensure the header is above other content
      }}
    >
    <Grid item ml={2}
      sx={{
        fontWeight: "bold",
      }}
    >
      <Typography 
      variant="h3" 
      color="initial"
      sx={{
        fontWeight: "bold",
        fontSize: {
          xs: "40px",
          sm: "40px",
          md: "60px",
        },
      }}
      >LoLoStats</Typography>
    </Grid>

    {/* Nav */}

    <Grid
      container 
      direction="row" 
      justifyContent="space-between"
      sx={{
        justifyContent: {
          xs: "center",
          sm: "space-between",
        },
        display:{
          xs: "none",
          sm: "flex",
          
        }
      }}
      width="auto"
      mr={2}
    >
      <Grid 
        item
        
      >
        <Link 
        component={RouterLink}
        color="inherit"
        to="/"
        mr={2}
        
        > 
          <Button variant="contained"
          color="secondary"
          sx={
            {
              color: "black",
              
            }
          }
          >Home</Button>

        </Link>
      </Grid>


      <Grid 
        item
      >
        <Link 
        component={RouterLink}
        color="inherit"
        to="/habitos"
        mr={2}
        > 
          <Button variant="contained"
          color="secondary"
          sx={
            {
              color: "black",
            }
          }
          >Habitos</Button>

        </Link>
      </Grid>

      <Grid 
        item
      >
        <Link 
        component={RouterLink}
        color="inherit"
        to="/sobre-nosotros"
        > 
          <Button variant="contained"
          color="secondary"
          sx={
            {
              color: "black",
            }
          }
          >Sobre Nosotros</Button>

        </Link>
      </Grid>

    </Grid>
  </Grid>
  )
}
