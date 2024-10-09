import {Card, CardContent, Typography, Button} from "@mui/material";

interface CardProps {
  title: string;
  price: string;
  features: string[];
  currentPlan?: boolean;
  children?: React.ReactNode;
}
const Cards = ({title, price, features, currentPlan, children}: CardProps) => {
  return (
    <Card variant='outlined' sx={{minWidth: "auto", borderRadius: "16px"}}>
      <CardContent>
        <Typography variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='h4' component='div' sx={{margin: "10px 0"}}>
          {price}
        </Typography>
        {features.map((feature, index) => (
          <Typography key={index} variant='body2' color='text.secondary'>
            {feature}
          </Typography>
        ))}
        {currentPlan ? (
          <Button variant='outlined' disabled>
            현재 플랜
          </Button>
        ) : (
          <Button variant='contained'>무료로 시작</Button>
        )}
      </CardContent>
      {children}
    </Card>
  );
};

export default Cards;
