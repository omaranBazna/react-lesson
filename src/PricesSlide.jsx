import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}
const marks = [
  {
    value: 0,
    label: '$0 free',
  },
  {
    value: 500,
    label: '$500',
  },
  {
    value: 2000,
    label: '$2000',
  },
  {
    value:5000,
    label:"$5000"
  },
  {
    value: 10000,
    label: '$10000+',
  },
];



const minDistance = 1000;

export default function PricesSlide({pricesRange,setPricesRange}) {
  
  

 

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setPricesRange([clamped - minDistance, clamped]);
      }
    } else {
      setPricesRange(newValue);
      
    }

  };

  return (
    <Box sx={{ width: 300 }}>
     
      <Slider
        getAriaLabel={() => 'Minimum distance shift'}
        value={pricesRange}
        onChange={handleChange2}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        step={10}
        max={10000}
        
      />
      <div>Min price: ${pricesRange[0]}</div>
      <div>Max price: ${pricesRange[1]}</div>
    </Box>
  );
}