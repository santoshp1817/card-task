import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardMovies = ({ img, title }) => {
  return (
    <Card sx={{ width: 300 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          width='140'
          image={img}
          alt='green iguana'
        />
        <CardContent sx={{ width: 400 }}>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default CardMovies;
