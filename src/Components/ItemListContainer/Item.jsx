import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Item.css";
import {Link} from 'react-router-dom';




export default function Item( {id, title, price, description, pictureURL}) {


  return (
    
      <Card className="cardArticulo" >
        <CardContent>
          <div className="contenedorImagen">
            <img src={pictureURL} alt={title} className="cardImg"/>
            </div>
          <Typography variant="h5" component="div" className="titleArticulo" color="#ece6c3" >
          {title}
          </Typography>
          <div className="descriptionArticulo">
            <Typography variant="text" component="div">
            {description}
            </Typography>
          </div>
          <Typography variant="h5" sx={{ mb: 1.5 }} color="#ece6c3" >
            ${price}
          </Typography>
          
        </CardContent>
        <CardActions>
          <Button size="small" color="secondary">
          <Link to={`/item/${id}`} style={{ color: 'inherit', textDecoration: 'none' }} ><p color='secondary' > Ver Detalle</p></Link>
          </Button>
        </CardActions>
      </Card>
    
  );
}
