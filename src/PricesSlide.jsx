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
    value: 20,
    label: '$20',
  },
  {
    value: 37,
    label: '$100',
  },
  {
    value: 100,
    label: '$1000+',
  },
];



const minDistance = 10;

export default function PricesSlide() {
  
  

  const [value2, setValue2] = React.useState([20, 37]);

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
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  return (
    <Box sx={{ width: 300 }}>
     
      <Slider
        getAriaLabel={() => 'Minimum distance shift'}
        value={value2}
        onChange={handleChange2}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        step={10}
        marks={marks}
      />
    </Box>
  );
}