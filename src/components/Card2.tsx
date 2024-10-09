import React from "react";
import {Typography, Button, Box} from "@mui/material";

interface PlanCardProps {
  title: string;
  price: string;
  features: string[];
  isCurrentPlan: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  price,
  features,
  isCurrentPlan,
}) => {
  return (
    <Box
      sx={{
        padding: 2,
        maxWidth: 300,
      }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}>
        <Box>
          <Typography variant='h6' sx={{fontWeight: "bold"}}>
            {title}
          </Typography>
          <Typography
            variant='h4'
            sx={{fontWeight: "bold", color: "#3c6e47", marginBottom: 1}}>
            {price}
          </Typography>
        </Box>

        {isCurrentPlan && (
          <Button
            variant='outlined'
            disabled
            // fullWidth
            sx={{
              borderRadius: "10px",
              fontSize: "12px",
              padding: "5px 15px",
              marginBottom: 2,
              backgroundColor: "#f5f5f5",
              borderColor: "#e0e0e0",
              color: "#555",
              textTransform: "none",
            }}>
            현재 플랜
          </Button>
        )}
      </Box>
      <Box
        sx={{
          backgroundColor: "#f7f7f7",
          padding: 1.5,
          borderRadius: "8px",
          marginTop: 2,
          marginBottom: 2,
        }}>
        <Typography
          variant='subtitle2'
          sx={{marginBottom: 1, fontWeight: "bold"}}>
          기본 제공 기능
        </Typography>
      </Box>
      {features.map((feature, index) => (
        <Typography key={index} variant='body2' sx={{marginBottom: 0.5}}>
          - {feature}
        </Typography>
      ))}
    </Box>
  );
};

export default PlanCard;
