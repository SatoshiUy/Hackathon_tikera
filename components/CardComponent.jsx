import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Image from 'next/image'
import ClarityPic from '../public/landing_page/clarity.png'
import PallettePic from '../public/landing_page/pallette.png'
import MarketPic from '../public/landing_page/market.png'

export default function CardComponent({cardIndex}) {
  const cardObject = [{
    icon: ClarityPic,
    desc:"Bản tóm tắt trực quan và thu hút sẽ giúp cho bạn dễ dàng tìm được sản phẩm phù hợp, các nhà thiết kế đưa ra những sản phẩm chất lượng và đúng ý của bạn"
  },{
    icon: PallettePic,
    desc:"Đặt thuê những nhà thiết kế có khoảng giá phù hợp với nhu cầu, xem các sản phẩm mà họ từng làm để biết được khả năng cũng như phong cách thẩm mỹ"
  },{
    icon: MarketPic,
    desc:"Chợ sản phẩm do các nhà thiết kế đăng lên sẽ giúp bạn tiết kiệm thời gian đặt thuê và chờ đợi sản phẩm. Từ bản tóm tắt, chúng tôi sẽ giúp bạn chắt lọc sản phẩm phù hợp"
  },

  ]
  return (
    <Card sx={{ maxWidth: 250,borderRadius: '25px', border: '3px solid black', padding:'25px 0', margin:'10px' }}>
      <CardActionArea>
        <CardMedia title="Your title" sx={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
          <Image 
            src={cardObject[cardIndex]?.icon} 
            width={"75px"}
            height={"75px"}
          />
        </CardMedia>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {cardObject[cardIndex]?.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
