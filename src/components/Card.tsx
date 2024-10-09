import {Card} from "@mui/material";

interface CardProps {
  title?: string;
  price?: string;
  features?: string[];
  currentPlan?: boolean;
  children?: React.ReactNode;
}
const Cards = ({children}: CardProps) => {
  return (
    <Card
      variant='outlined'
      sx={{
        minWidth: "auto",
        borderRadius: "16px",
        justifyItems: "center",
        padding: 2,
      }}>
      {children}
    </Card>
  );
};

export default Cards;
