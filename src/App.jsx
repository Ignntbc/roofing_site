
import Foot from './components/views/global/foot.jsx';
import css from './components/styles/form.css.js';
import InputComponent from './components/comps/input.jsx';
import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';





const { FormContainer, Button } = css;


function App(props) {

  const {action} = props;
  const [value, setValue] = useState()
  const [ type, setType ] = useState()
  const [ comment, setComment ] = useState()

  const [data, setData] = useState([])

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  const validation = () => {
    if (value.length >2 && type){
      console.log("ok")

      const dataLine = `${value}::${type}::${comment}`
      action(
        prev => [...prev, dataLine]
      )

      setValue("")
      setType("доход")
      setComment("")
    } else console.log("error")
  
  }

  return (
    <React.Fragment>
      <FormContainer style={{ alignItems: 'flex-start' }}>
        <InputComponent inputValue = {value} action = {setValue} placeholder={"Введите сумму транзакции"}/>
        {/* <InputComponent inputValue = {type} action = {setType} placeholder={"Введите тип транзакции"}/> */}

          <FormControl style={{marginTop: '10px', marginBottom: '12px'}}>
            <FormLabel id="demo-controlled-radio-buttons-group">Выберите тип транзакции</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={type}
              onChange={handleChange}
              style={{ marginTop: '5px', marginLeft: '6px'}}
            >
              <FormControlLabel value="доход" control={<Radio />} label="Доход" />
              <FormControlLabel value="расход" control={<Radio />} label="Расход" />
            </RadioGroup>
          </FormControl>

        {type === 'доход' && <InputComponent inputValue = {comment} action = {setComment} placeholder={"Введите комментарий"}/>}        
        {type === 'расход' &&<FormControl style={{marginTop: '0px', marginBottom: '14px'}}>
            <FormLabel id="demo-controlled-radio-buttons-group">Выберите тип расхода</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={comment}
              onChange={handleChangeComment}
              style={{ marginTop: '5px', marginLeft: '6px'}}
            >
              <FormControlLabel value="покупка продуктов" control={<Radio />} label="Покупка продуктов" />
              <FormControlLabel value="оплата счетов" control={<Radio />} label="Оплата счетов" />
              <FormControlLabel value="покупка одежды" control={<Radio />} label="Покупка одежды" />
              <FormControlLabel value="расходы на транспорт" control={<Radio />} label="Расходы на транспорт" />
            </RadioGroup>
          </FormControl>
        }
        <Button backgroundColor = {
          value && value.length > 2 && type?
          "rgb(176, 243, 71)":
          "rgb(229, 229,229)"
        }
        onClick = {validation}>
          Сохранить транзакцию
          </Button>

      </FormContainer>
      <Foot></Foot>
    </React.Fragment>
  );
}


export default App
