import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AnimeCard(props) {

  return (
    <Tooltip title={`Click to know more about "${props.title}"`}>
      <Link to={`/AnimeDetails/${props.id}`} style={{textDecoration: 'none'}}>
        <Card className="cards" sx={{ maxWidth: 200, maxHeight: 420, margin: "15px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={props.image}
              alt={props.title}
            />
            <CardContent sx={{padding:1}}>
              <Typography gutterBottom variant="h6" fontFamily={"Poppins"} fontWeight={600}>
                { props.title }
              </Typography>

              <Typography gutterBottom variant="body3" fontFamily={"Poppins"} fontWeight={300}>
                { `${props.release_date} ` }
              </Typography>

              <Typography gutterBottom variant="body3" fontFamily={"Poppins"} fontWeight={500}>
                { props.director }
              </Typography>
              
              <Typography className='desc' variant="body2" color="text.secondary" marginTop={1} marginLeft={1} marginRight={1} fontFamily={"Poppins"} fontWeight={300}>
                  "{ props.description }"
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Tooltip>
  );
}


