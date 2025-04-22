import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';

export default function ControlledRadioButtonsGroup(type, setType) {
//   const [ type, setType ] = useState()

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Выберите тип транзакции</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={type}
        onChange={handleChange}
      >
        <FormControlLabel value="доход" control={<Radio />} label="Доход" />
        <FormControlLabel value="расход" control={<Radio />} label="Расход" />
      </RadioGroup>
    </FormControl>
  );
}