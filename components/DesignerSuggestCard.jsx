import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Image from 'next/image'
import TikeraAvatarPic from '../public/designer/avt1.png'

export default function DesignerSuggestCard({designer}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
// qIeDdYpMWRSpO0Nlp5JR
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia title="Your title">
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image src={designer.bestWork} layout="fill" objectFit="cover"/>
          </div>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {designer.name.first + " " + designer.name.last}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Phone: {designer.phoneNumber}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Age: {designer.age}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: {designer.email}
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => {
          router.push(
            {
              pathname:'https://poc-chat-app.vercel.app/'
            }
          );
        }}>
          Contact
        </Button>
      </CardActions>
    </Card>
  );
}
