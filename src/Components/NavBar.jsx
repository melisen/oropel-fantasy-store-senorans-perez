//@ts-check

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import dragon from "./Images/dragon-dorado.jpeg";


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar >
        <img src={dragon} alt="logo brand" className="logoDragonDorado"/>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Oropel <span>Fantasy Store</span>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Productos
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Eventos
          </Typography>
          <Button color="inherit">Carrito</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
