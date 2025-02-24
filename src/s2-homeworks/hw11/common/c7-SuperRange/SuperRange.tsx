import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        // стили для слайдера // пишет студент
        width: "320px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        flexDirection: "column",
        "& .MuiSlider-rail": {
          backgroundColor: "gray",
        },
        "& .MuiSlider-track": {
          backgroundColor: "green",
        },
        "& .MuiSlider-thumb": {
          backgroundColor: "green",
        },
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
