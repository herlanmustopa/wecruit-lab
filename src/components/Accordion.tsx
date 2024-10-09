// src/components/CustomAccordion.tsx
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Container} from "@mui/material";

interface Action {
  label: string;
  onClick: () => void;
  variant?: "text" | "outlined" | "contained";
}

interface CustomAccordionProps {
  title: React.ReactNode;
  titleEnd?: React.ReactNode;
  actions?: Action[];
  defaultExpanded?: boolean;
  children: React.ReactNode;
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({
  title,
  titleEnd,
  defaultExpanded = false,
  children,
}) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        padding: "0",
        width: "100vw",
        maxWidth: "100%",
      }}>
      <Accordion
        defaultExpanded={defaultExpanded}
        square={true}
        sx={{
          borderRadius: "16px",
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#f5f5f5",
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel-content'
          id='panel-header'
          sx={{
            borderRadius: "16px",
          }}>
          {title}
          <span style={{marginLeft: "auto"}}>{titleEnd}</span>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            borderRadius: "16px",
          }}>
          {children}
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default CustomAccordion;
