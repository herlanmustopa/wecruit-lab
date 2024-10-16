import React, {useState} from "react";
import CustomAccordion from "./components/Accordion";
import "./App.css";
// import Cards from "./components/Card";
import Grid from "@mui/material/Grid2";
import Carousel from "./components/Carousel";
import PlanCard from "./components/Card2";
import {Box} from "@mui/material";
import Cards from "./components/Card";

const App: React.FC = () => {
  const cardsData = [
    {
      percentage: 73.8,
      total: "1,324,949",
      detailed: "967,177",
      increase: 12.5,
      scope1_2: "1,324,949 tCO2eq",
      detailedEmissions: "967,177",
    },
    {
      percentage: 65.2,
      total: "1,200,000",
      detailed: "780,000",
      increase: 8.3,
      scope1_2: "1,200,000 tCO2eq",
      detailedEmissions: "780,000",
    },
    {
      percentage: 55.4,
      total: "900,000",
      detailed: "499,000",
      increase: 5.2,
      scope1_2: "900,000 tCO2eq",
      detailedEmissions: "499,000",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className='center-container'>
      <CustomAccordion
        title='프로 플랜으로 배출계산과 관리를 정교하게 해보세요!'
        titleEnd='요금제 보기'>
        <Grid container spacing={2}>
          <Grid size={4}>
            <Cards>
              <PlanCard
                title='Essential'
                price='무료'
                features={["기본 기능", "제한된 사용자 수"]}
                isCurrentPlan={true}
              />{" "}
            </Cards>
          </Grid>
          <Grid size={8}>
            <Cards>
              <Box
                sx={{
                  display: "flex",
                }}>
                <Grid size={10}>
                  <PlanCard
                    title='Pro'
                    price='월 50만원'
                    features={["기본 기능", "제한된 사용자 수"]}
                    isCurrentPlan={true}
                  />
                </Grid>
                {/* <Grid size={6}> */}
                <Carousel
                  percentage={cardsData[activeIndex].percentage}
                  total={cardsData[activeIndex].total}
                  detailed={cardsData[activeIndex].detailed}
                  increase={cardsData[activeIndex].increase}
                  scope1_2={cardsData[activeIndex].scope1_2}
                  detailedEmissions={cardsData[activeIndex].detailedEmissions}
                  activeIndex={activeIndex}
                  totalDots={cardsData.length}
                  dataCards={cardsData}
                  handlePrev={handlePrev}
                  handleNext={handleNext}
                />
                {/* </Grid> */}
              </Box>
            </Cards>
          </Grid>
        </Grid>
      </CustomAccordion>
    </div>
  );
};

export default App;
