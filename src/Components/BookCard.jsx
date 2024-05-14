import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export default function BookCard({title,img,price}) {
  return (
    <Card sx={{ width: 220, pt: 2, mb: 2 }}>
      {/* <CardActionArea> */}
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="PW-math"
          sx={{width: 150, mx: 'auto'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{maxHeight: 60 , whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
            {title}
          </Typography>
          <Typography>${price}</Typography>
          <CardActions sx={{justifyContent: 'center'}}>
            <Button variant="contained">Add</Button>
          </CardActions>
        </CardContent>
      {/* </CardActionArea> */}
    </Card>
  );
}