import { Button, Grid, Link, Typography } from "@mui/material";
import {Link as RouterLink } from "react-router-dom";

export default function Header() {
  return (
    <Grid
    container
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    position="fixed"
    backgroundColor="primary.main"
    width="80%"
    height="80px"
    top={0}
    left={0}
    right={0}
    ml="auto"
    mr="auto"
  >
    <Grid item ml={2}
      sx={{
        fontWeight: "bold",
      }}
    >
      <Typography variant="h3" color="initial">LoLoStats</Typography>
    </Grid>

    {/* Nav */}

    <Grid
      container 
      direction="row" 
      justifyContent="space-between"
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
