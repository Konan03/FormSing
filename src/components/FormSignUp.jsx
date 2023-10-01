import { Button,TextField, Switch, FormGroup, FormControlLabel } from "@mui/material"

function FormSingUp (){
    return (<form>
            <TextField 
                id="name" 
                label="Nombre" 
                variant="outlined"
                fullWidth
                margin="normal"/>
            <TextField 
                id="lastname" 
                label="Apellidos" 
                variant="outlined"
                fullWidth
                margin="normal"/>           
            <TextField 
                id="email" 
                label="Correo" 
                variant="outlined"
                fullWidth
                margin="normal"/>
            <FormGroup>
                <FormControlLabel control={<Switch defaultChecked/>} label="Promociones"/> 
                <FormControlLabel control={<Switch defaultChecked/>} label="Novedades"/>   
            </FormGroup>    
            
            <Button variant="contained">Registrarse</Button>
        </form> 
    )  
}

export default FormSingUp