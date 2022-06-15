//@ts-check

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import "./NavBar.css"
import dragon from "../../Images/dragon-logo.png";
import CartWidget from "./CartWidget.jsx";
import ProductosSplitButton from "./ProductosSplitButton";
import EventosSplitButton from "./EventosSplitButton";



export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar >
        <div className="divBrand">
          <img src={dragon} alt="logo brand" className="logoDragonDorado"/>
            <Typography variant="h5" component="div" className="typographyBrand" sx={{ flexGrow: 1 }}>
            Oropel
            </Typography>
        </div>
            <Typography variant="h6" component="div" className="typographyBrand fantasyStore" sx={{ flexGrow: 1 }}>
              Fantasy Store
            </Typography>
          <ProductosSplitButton />
          <EventosSplitButton />
          <CartWidget   cantProductos={0}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
