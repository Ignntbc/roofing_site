import React from 'react';
import css from '../../styles/style.css';
import { Link, useNavigate } from 'react-router-dom';


const { HeaderContainer, HeaderCSS } = css;
const ButtonCSS = {
  display: 'block',
  padding: '10px 14px 12px',
  borderRadius: '6px',
  backgroundColor: '#B0F347'
}




const Head = () => {


  const navigate = useNavigate();

  return (
    <React.Fragment>
      <HeaderContainer>
        <HeaderCSS.Logo>GHGcalc</HeaderCSS.Logo>
        <HeaderCSS.MenuContainer>
          <button onClick={() => navigate('/main')} style={ButtonCSS}>Главная</button>
          {/* <button onClick={() => navigate('/stat/расход')}style = {ButtonCSS}>Статистика</button> */}
          {/* <button onClick={() => navigate('/plan')}style = {ButtonCSS}>Планирование</button>  */}
        </HeaderCSS.MenuContainer>

      </HeaderContainer>
    </React.Fragment>
  );
};

export default Head;