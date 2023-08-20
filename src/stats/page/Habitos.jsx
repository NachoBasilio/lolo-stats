import { Grid, Typography } from "@mui/material";

export default function Habitos() {
  return (
    <Grid
        container
        direction="row"
        justifyContent="space-between"
        width="80%"
        mt="90px"
        ml="auto"
        mr="auto"
    >
        <Typography 
        variant="h1" 
        color="initial"
        sx={
            {
                fontWeight: "bold",
                fontSize: "60px",
            }
        }
        >
            Habitos
        </Typography>

        <form action="">
            <Typography variant="h4" color="initial">Crea tu Habito</Typography>
            
        </form>

    </Grid>
  )
}
