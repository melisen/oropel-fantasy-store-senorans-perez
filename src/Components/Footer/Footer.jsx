import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function Footer() {
  return (
    <Container maxWidth="xl" style={{position:'relative', left:'0', bottom:'0', right:'0', display:'flex', marginTop:'auto', flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:'#121810fa'}}>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Typography variant="h3" component="div" className="typographyBrand" sx={{ flexGrow: 1, color:'secondary', marginRight:'15px' }}>Oropel</Typography>
                <Typography variant="h6" component="div" className="typographyBrand fantasyStore" sx={{ flexGrow: 1 }}>Fantasy Store</Typography>
            </div>
            <Typography variant="body1" component="div"  sx={{color:'primary.main', textAlign:'center', flexGrow: 1 }}>Desarrollado por Melina Señoráns Pérez para el curso React de Coderhouse julio 2022</Typography>
    </Container>
  )
}
