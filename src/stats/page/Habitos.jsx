import { Autocomplete, Grid, TextField, Typography } from "@mui/material";

export default function Habitos() {
  return (
    <>
    <Typography 
    variant="h1" 
    color="initial"
    width="80%"
    mt="90px"
    ml="auto"
    mr="auto"
    sx={
        {
            fontWeight: "bold",
            fontSize: "60px",
        }
    }
    >
        Habitos
    </Typography>
    <Grid
        container
        direction="row"
        
        width="80%"

        ml="auto"
        mr="auto"
    >


        <Grid
            container
            direction="row"
            mt="10px"
            backgroundColor="primary.main"
            width="auto"
            p="20px"
        >
            <form action="">
                <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography 
                    variant="h4" 
                    color="white"
                    sx={
                        {
                            fontWeight: "bold",
                            fontSize: "30px",
                        }
                    }
                    >
                        Crea tu Habito
                    </Typography>
                </Grid>
                <Grid
                    item
                    
                >
                    <TextField 
                    id="nombre" 
                    label="Nombre del habito" 
                    variant="standard" 
                    fullWidth
                    />
                </Grid>
                <Grid
                    item
                >
                    <TextField 
                    id="etiqueta" 
                    label="Etiqueta" 
                    variant="standard" 
                    fullWidth
                    />
                </Grid>
                <Grid
                    item
                >
                    <TextField 
                    id="frecuencia"
                    label="Frecuencia" 
                    variant="standard" 
                    fullWidth
                    />
                </Grid>
                <Grid
                    item
                >
                    <Autocomplete
                    
                    id="color-box"
                    options={["Rojo", "Azul", "Amarillo", "Verde"]}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Color" variant="standard" />}
                    />
                </Grid>
                

            </form>
        </Grid>
        <Grid
                container
                width="180px"
                mt="10px"
                ml="20px"

                borderRadius="10px"
                p="5px"

            >
                <Typography
                variant="p"
                color="black"
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, ducimus. Quo, dolorem hic facere animi reiciendis repellendus asperiores itaque facilis nihil corrupti nisi voluptatem veniam ipsa dolores odio dolore voluptas.
                </Typography>
            </Grid>


    </Grid>
    </>
  )
}
