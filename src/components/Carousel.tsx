import React from "react";
import {
  Box,
  Typography,
  //   Card,
  CardContent,
  Divider,
  Container,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import {Chart, ArcElement, Tooltip} from "chart.js";
import {Doughnut} from "react-chartjs-2";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
Chart.register(ArcElement, Tooltip);

interface CarouselProps {
  percentage: number;
  total: string;
  detailed: string;
  increase: number;
  scope1_2: string;
  detailedEmissions: string;
  activeIndex: number;
  totalDots: number;
  dataCards: {
    percentage: number;
    total: string;
    detailed: string;
    increase: number;
    scope1_2: string;
    detailedEmissions: string;
  }[];
  handlePrev: () => void;
  handleNext: () => void;
}

const Carousel: React.FC<CarouselProps> = ({
  percentage,
  total,
  detailed,
  increase,
  scope1_2,
  detailedEmissions,
  activeIndex,
  totalDots,
  handlePrev,
  handleNext,
}) => {
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ["#4caf50", "#e0e0e0"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <>
      <Container
        sx={{
          display: "flex",
          //   justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
        }}>
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: 5,
            top: 150,
            transform: "translateY(-50%)",
            backgroundColor: "white",
            boxShadow: 1,
            borderRadius: "50%",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
            zIndex: 1,
          }}>
          <ChevronLeftIcon />
        </IconButton>
        <Box sx={{borderRadius: "12px", border: 1, borderColor: "black"}}>
          <CardContent>
            <Typography variant='body2' color='textSecondary'>
              Scope 1, 2 총 배출량
            </Typography>
            <Typography
              variant='h6'
              component='div'
              sx={{fontWeight: "bold", marginBottom: 1}}>
              {scope1_2}
            </Typography>

            <Divider sx={{opacity: 0.6, marginBottom: 5}} />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    position: "relative",
                    justifyContent: "center",
                    display: "flex",
                  }}>
                  <Doughnut
                    data={data}
                    options={{
                      cutout: "90%",
                      responsive: true,
                      maintainAspectRatio: true,
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      textAlign: "center",
                    }}>
                    <Typography
                      variant='h4'
                      component='div'
                      sx={{fontWeight: "bold"}}>
                      {percentage}%
                    </Typography>
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                      <Typography variant='caption'> {detailed} </Typography>
                      <Typography variant='caption'> / </Typography>
                      <Typography
                        variant='caption'
                        sx={{
                          color: "#B2B2B3",
                        }}>
                        {" "}
                        {total}{" "}
                      </Typography>
                    </Box>
                    <Typography variant='caption' color='green'>
                      ⬆ {increase}% 전년도 대비 증가
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box sx={{paddingLeft: 2}}>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    sx={{marginTop: 2}}>
                    상세배출량
                  </Typography>
                  <Typography
                    variant='h6'
                    component='div'
                    sx={{fontWeight: "bold"}}>
                    {detailedEmissions} ton
                  </Typography>

                  <Typography variant='body2' sx={{marginTop: 1}}>
                    총 배출량의 <strong>{percentage}%</strong>를 상세배출했어요.
                    <br />
                    전년도 대비 <strong>{increase}%</strong> 더 상세배출했어요.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Box>

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: 5,
            top: 150,
            transform: "translateY(-50%)",
            backgroundColor: "white",
            boxShadow: 1,
            borderRadius: "50%",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}>
          <ChevronRightIcon />
        </IconButton>
        <div style={{textAlign: "center", marginTop: "10px"}}>
          {Array.from({length: totalDots}).map((_, index) => (
            <span
              key={index}
              style={{
                display: "inline-block",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: index === activeIndex ? "#4caf50" : "#ccc",
                margin: "0 5px",
              }}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Carousel;
