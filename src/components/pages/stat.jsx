import React, { useState, useEffect } from 'react';
import InputComponent from '../comps/input.jsx';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import css from '../../components/styles/form.css.js';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';



const { FormContainer, Button, Header, Text } = css;

const Stat = (props) => {
    const { action } = props;
    const [value, setValue] = useState('');

    const [checkboxStates2, setCheckboxStates2] = useState({
        azot: false,
        fosfor: false,
        kaliy: false,
    });
    const [secondRadioStates, setSecondRadioStates] = useState({
        da: false,
        net: false,
    });
    const [thirdRadioStates, setThirdRadioStates] = useState({
        da: false,
        net: false,
    });


    const resetCheckboxStates2 = {
        azot: false,
        fosfor: false,
        kaliy: false,
    };

    const handleSecondRadioChange = (event) => {
        const { value } = event.target;
        setSecondRadioStates({
            da: value === 'da',
            net: value === 'net',
        });
        // Reset thirdRadioStates when secondRadioStates changes
        setThirdRadioStates({
            da: false,
            net: false,
        });
        if (value === 'net') {
            setCheckboxStates
        }
    };

    const handleThirdRadioChange = (event) => {
        const { value } = event.target;
        setThirdRadioStates({
            da: value === 'da',
            net: value === 'net',
        });
        if (value === 'net') {
            setCheckboxStates2({resetCheckboxStates2});
        }
    };

    const handleCheckboxChange2 = (event) => {
        const { name, checked } = event.target;
    
        // Обновляем состояние чекбоксов
        setCheckboxStates2({
            ...checkboxStates2,
            [name]: checked,
        });
    
        // Если флажок снят, сбрасываем соответствующее значение
        if (!checked) {
            if (name === 'azot') setAzotValue('');
            if (name === 'fosfor') setFosforValue('');
            if (name === 'kaliy') setKaliyValue('');
        }
    };

    const getGenitiveLabel = (label) => {
        switch (label.toLowerCase()) {
          case 'озимая рожь':
            return 'озимой ржи';
          case 'озимая пшеница':
            return 'озимой пшеницы';
          case 'яровая пшеница':
            return 'яровой пшеницы';
          case 'ячмень':
            return 'ячменя';
          case 'овес':
            return 'овса';
          case 'просо':
            return 'проса';
          case 'кукуруза на зерно':
            return 'кукурузы на зерно';
          case 'горох':
            return 'гороха';
          case 'гречиха':
            return 'гречихи';
          case 'подсолнечник':
            return 'подсолнечника';
          case 'картофель':
            return 'картофеля';
          case 'сахарная свекла':
            return 'сахарной свеклы';
          case 'овощи':
            return 'овощей';
          case 'кормовые корнеплоды':
            return 'кормовых корнеплодов';
          case 'лен':
            return 'льна';
          case 'конопля':
            return 'конопли';
          case 'силосные':
            return 'силосных';
          case 'кукуруза на силос':
            return 'кукурузы на силос';
          case 'однолетние травы':
            return 'однолетних трав';
          case 'многолетние травы':
            return 'многолетних трав';
          default:
            return label;
        }
      };


    const [izvestkovyeMaterialyValue, setIzvestkovyeMaterialyValue] = useState('');


    const [ozimayaRozhValue, setOzimayaRozhValue] = useState('');
    const [ozimayaRozhAreaValue, setOzimayaRozhAreaValue] = useState('');
    const [ozimayaPshenicaValue, setOzimayaPshenicaValue] = useState('');
    const [ozimayaPshenicaAreaValue, setOzimayaPshenicaAreaValue] = useState('');
    const [yarovayaPshenicaValue, setYarovayaPshenicaValue] = useState('');
    const [yarovayaPshenicaAreaValue, setYarovayaPshenicaAreaValue] = useState('');
    const [yachmenValue, setYachmenValue] = useState('');
    const [yachmenAreaValue, setYachmenAreaValue] = useState('');
    const [ovesValue, setOvesValue] = useState('');
    const [ovesAreaValue, setOvesAreaValue] = useState('');
    const [prosoValue, setProsoValue] = useState('');
    const [prosoAreaValue, setProsoAreaValue] = useState('');
    const [kukuruzaNaZernoValue, setKukuruzaNaZernoValue] = useState('');
    const [kukuruzaNaZernoAreaValue, setKukuruzaNaZernoAreaValue] = useState('');
    const [gorohValue, setGorohValue] = useState('');
    const [gorohAreaValue, setGorohAreaValue] = useState('');
    const [grechixaValue, setGrechixaValue] = useState('');
    const [grechixaAreaValue, setGrechixaAreaValue] = useState('');
    const [podsolnechnikValue, setPodsolnechnikValue] = useState('');
    const [podsolnechnikAreaValue, setPodsolnechnikAreaValue] = useState('');
    const [kartofelValue, setKartofelValue] = useState('');
    const [kartofelAreaValue, setKartofelAreaValue] = useState('');
    const [saharnayaSveclaValue, setSaharnayaSveclaValue] = useState('');
    const [saharnayaSveclaAreaValue, setSaharnayaSveclaAreaValue] = useState('');
    const [ovoschiValue, setOvoschiValue] = useState('');
    const [ovoschiAreaValue, setOvoschiAreaValue] = useState('');
    const [kormovyeKorneplodyValue, setKormovyeKorneplodyValue] = useState('');
    const [kormovyeKorneplodyAreaValue, setKormovyeKorneplodyAreaValue] = useState('');
    const [lenValue, setLenValue] = useState('');
    const [lenAreaValue, setLenAreaValue] = useState('');
    const [konoplyaValue, setKonoplyaValue] = useState('');
    const [konoplyaAreaValue, setKonoplyaAreaValue] = useState('');
    const [silosnyeValue, setSilosnyeValue] = useState('');
    const [silosnyeAreaValue, setSilosnyeAreaValue] = useState('');
    const [kukuruzaNaSilosValue, setKukuruzaNaSilosValue] = useState('');
    const [kukuruzaNaSilosAreaValue, setKukuruzaNaSilosAreaValue] = useState('');
    const [odnoletnieTravyValue, setOdnoletnieTravyValue] = useState('');
    const [odnoletnieTravyAreaValue, setOdnoletnieTravyAreaValue] = useState('');
    const [mnogoletnieTravyValue, setMnogoletnieTravyValue] = useState('');
    const [mnogoletnieTravyAreaValue, setMnogoletnieTravyAreaValue] = useState('');
        
    
    
    const [calculatedResult, setCalculatedResult] = useState(0);

    const handleInputChange = (value) => {
        setIzvestkovyeMaterialyValue(value);
        const result = (value * 8.75) / 100;
        setCalculatedResult(result);
    };


    const [navoz1Value, setNavoz1Value] = useState('');
    const [navoz2Value, setNavoz2Value] = useState('');
    const [torfValue, setTorfValue] = useState('');
    const [pomValue, setPomValue] = useState('');
    const [otherValue, setOtherValue] = useState('');
    const [corg, setCorg] = useState(0);

    useEffect(() => {
        const navoz1Corg = parseFloat(navoz1Value) * 0.1207 || 0;
        const navoz2Corg = parseFloat(navoz2Value) * 0.0408 || 0;
        const torfCorg = parseFloat(torfValue) * 0.2356 || 0;
        const pomCorg = parseFloat(pomValue) * 0.1911 || 0;
        const otherCorg = parseFloat(otherValue) * 0.2223 || 0;
        setCorg(navoz1Corg + navoz2Corg + torfCorg + pomCorg + otherCorg);
    }, [navoz1Value, navoz2Value, torfValue, pomValue, otherValue]);


    const [azotValue, setAzotValue] = useState('');
    const [fosforValue, setFosforValue] = useState('');
    const [kaliyValue, setKaliyValue] = useState('');
    const [cmin, setCmin] = useState(0);

    useEffect(() => {
        const azotCmin = parseFloat(azotValue) * 0.13 || 0;
        const fosforCmin = parseFloat(fosforValue) * 0.015 || 0;
        const kaliyCmin = parseFloat(kaliyValue) * 0.017 || 0;
        setCmin(azotCmin + fosforCmin + kaliyCmin);
    }, [azotValue, fosforValue, kaliyValue]);

    const calculateCropCarbon = (name, yieldValue, areaValue) => {
        const Y = parseFloat(yieldValue) || 0; // Урожайность
        const S = parseFloat(areaValue) || 0; // Посевная площадь
    
        if (name === 'ozimaya_rozh') {
            if (Y >= 10 && Y <= 26) {
                return (((0.3 * Y + 3.2) * 45 / 100) + ((0.6 * Y + 8.9) * 45 / 100)) * S / 10;
            } else if (Y > 26) {
                return (((0.2 * Y + 6.3) * 45 / 100) + ((0.6 * Y + 13.9) * 45 / 100)) * S / 10;
            } else {
                return 'Проверьте введенную урожайность'; // Сообщение, если урожайность не попадает в параметры
            }
        } else if (name === 'ozimaya_pshenica') {
            if (Y >= 10 && Y <= 26) {
                return (((0.4 * Y + 2.6) * 48.53 / 100) + ((0.9 * Y + 5.8) * 48.53 / 100)) * S / 10;
            } else if (Y > 26) {
                return (((0.1 * Y + 8.9) * 48.53 / 100) + ((0.7 * Y + 10) * 48.53 / 100)) * S / 10;
            }
        } else if (name === 'yarovaya_pshenica') {
            if (Y >= 10 && Y <= 20) {
                return (((0.4 * Y + 1.8) * 48.53 / 100) + ((0.7 * Y + 10.2) * 48.53 / 100)) * S / 10;
            } else if (Y > 20) {
                return (((0.2 * Y + 5.4) * 48.53 / 100) + ((0.8 * Y + 6) * 48.53 / 100)) * S / 10;
            }
        } else if (name === 'yachmen') {
            if (Y >= 10 && Y <= 20) {
                return (((0.4 * Y + 1.8) * 45.67 / 100) + ((0.8 * Y + 6.5) * 45.67 / 100)) * S / 10;
            } else if (Y > 20) {
                return (((0.09 * Y + 7.6) * 45.67 / 100) + ((0.4 * Y + 13.45) * 45.67 / 100)) * S / 10;
            }
        } else if (name === 'oves') {
            if (Y >= 10 && Y <= 20) {
                return (((0.3 * Y + 3.2) * 45 / 100) + ((1 * Y + 2) * 45 / 100)) * S / 10;
            } else if (Y > 20) {
                return (((0.15 * Y + 6.12) * 45 / 100) + ((0.4 * Y + 16) * 45 / 100)) * S / 10;
            }
        } else if (name === 'proso') {
            if (Y >= 5 && Y <= 20) {
                return (((0.2 * Y + 5) * 46.87 / 100) + ((0.8 * Y + 7) * 46.87 / 100)) * S / 10;
            } else if (Y > 20) {
                return (((0.3 * Y + 3.3) * 46.87 / 100) + ((0.56 * Y + 11.2) * 46.87 / 100)) * S / 10;
            }
        } else if (name === 'kukuruzaNaZerno') {
            if (Y >= 10) {
                return (((0.23 * Y + 3.5) * 45 / 100) + ((0.8 * Y + 5.8) * 45 / 100)) * S / 10;
            }
        } else if (name === 'goroh') {
            if (Y >= 5 && Y <= 20) {
                return (((0.14 * Y + 3.5) * 45 / 100) + ((0.66 * Y + 7.5) * 45 / 100)) * S / 10;
            } else if (Y > 20) {
                return (((0.2 * Y + 1.7) * 45 / 100) + ((0.37 * Y + 12.9) * 45 / 100)) * S / 10;
            }
        } else if (name === 'grechixa') {
            if (Y >= 5 && Y <= 15) {
                return (((0.25 * Y + 4.3) * 45 / 100) + ((1.1 * Y + 5.3) * 45 / 100)) * S / 10;
            } else if (Y > 15) {
                return (((0.2 * Y + 5.2) * 45 / 100) + ((0.54 * Y + 14.1) * 45 / 100)) * S / 10;
            }
        } else if (name === 'podsolnechnik') {
            if (Y >= 8) {
                return (((0.4 * Y + 3.1) * 45 / 100) + ((1 * Y + 6.6) * 45 / 100)) * S / 10;
            }
        } else if (name === 'kartofel') {
            if (Y >= 50 && Y <= 200) {
                return (((0.04 * Y + 1) * 42.26 / 100) + ((0.08 * Y + 4) * 42.26 / 100)) * S / 10;
            } else if (Y > 200) {
                return (((0.03 * Y + 4.1) * 42.26 / 100) + ((0.06 * Y + 8.6) * 42.26 / 100)) * S / 10;
            }
        } else if (name === 'saharnayaSvecla') {
            if (Y >= 100 && Y <= 200) {
                return (((0.003 * Y + 2.5) * 40.72 / 100) + ((0.06 * Y + 5.45) * 40.72 / 100)) * S / 10;
            } else if (Y > 200) {
                return (((0.02 * Y + 0.8) * 40.72 / 100) + ((0.07 * Y + 3.5) * 40.72 / 100)) * S / 10;
            }
        } else if (name === 'ovoshi') {
            if (Y >= 50 && Y <= 200) {
                return (((0.02 * Y + 1.5) * 45 / 100) + ((0.06 * Y + 5) * 45 / 100)) * S / 10;
            } else if (Y > 200) {
                return (((0.006 * Y + 3.6) * 45 / 100) + ((0.04 * Y + 6) * 45 / 100)) * S / 10;
            }
        } else if (name === 'kormovyeKorneplody') {
            if (Y >= 50 && Y <= 200) {
                return (((0.003 * Y + 2.4) * 40.72 / 100) + ((0.05 * Y + 5.2) * 40.72 / 100)) * S / 10;
            } else if (Y > 200) {
                return (((0.01 * Y + 1) * 40.72 / 100) + ((0.05 * Y + 5.5) * 40.72 / 100)) * S / 10;
            }
        } else if (name === 'len') {
            if (Y >= 3) {
                return (((1.3 * Y + 9.4) * 45 / 100)) * S / 10;
            }
        } else if (name === 'konoplya') {
            if (Y >= 3) {
                return (((2.2 * Y + 9.1) * 45 / 100)) * S / 10;
            }
        } else if (name === 'silosnye') {
            if (Y >= 100 && Y <= 200) {
                return (((0.03 * Y + 3.6) * 45 / 100) + ((0.12 * Y + 8.7) * 45 / 100)) * S / 10;
            } else if (Y > 200) {
                return (((0.03 * Y + 4.1) * 42.26 / 100) + ((0.06 * Y + 8.6) * 42.26 / 100)) * S / 10;
            }
        } else if (name === 'kukuruzaNaSilos') {
            if (Y >= 100 && Y <= 200) {
                return (((0.03 * Y + 3.6) * 45 / 100) + ((0.12 * Y + 8.7) * 45 / 100)) * S / 10;
            } else if (Y > 200) {
                return (((0.02 * Y + 5) * 45 / 100) + ((0.08 * Y + 16.2) * 45 / 100)) * S / 10;
            }
        } else if (name === 'odnoletnieTravy') {
            if (Y >= 10) {
                return (((0.13 * Y + 6) * 45 / 100) + ((0.7 * Y + 7.5) * 45 / 100)) * S / 10;
            }
        } else if (name === 'mnogoletnieTravy') {
            if (Y >= 10 && Y <= 35) {
                return (((0.2 * Y + 6) * 45 / 100) + ((0.8 * Y + 11) * 45 / 100)) * S / 10;
            } else if (Y > 35) {
                return (((0.1 * Y + 10) * 45 / 100) + ((1 * Y + 15) * 45 / 100)) * S / 10;
            }
        }
    
        return 'Проверьте введенную урожайность';
    };
    
        
    

    const calculateTotalCarbon = () => {
        let totalCarbon = 0;
        let errorMessage = '';
    
        Object.keys(cropValues).forEach((key) => {
            if (key.endsWith('_yield')) {
                const name = key.replace('_yield', '');
                const yieldValue = cropValues[`${name}_yield`];
                const areaValue = cropValues[`${name}_area`];
    
                if (yieldValue && areaValue) {
                    const result = calculateCropCarbon(name, yieldValue, areaValue);
                    if (typeof result === 'string') {
                        errorMessage = result; // Если есть ошибка, сохраняем сообщение
                    } else {
                        totalCarbon += result;
                    }
                }
            }
        });
    
        return errorMessage || totalCarbon.toFixed(2); // Если есть ошибка, возвращаем сообщение, иначе результат
    };


    const [checkboxStates, setCheckboxStates] = useState({
        navoz1: false,
        navoz2: false,
        torf: false,
        pom: false,
        other: false,
    });

    const [cropValues, setCropValues] = useState({});

    // Функция для обновления значений
    const handleCropValueChange = (name, value) => {
        setCropValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    

    const checkboxDataState3 = [
        { name: 'ozimaya_rozh', label: 'Озимая рожь', inputValue: ozimayaRozhValue, setInputValue: setOzimayaRozhValue, placeholder: 'Напишите урожайность основной продукции озимой ржи в центнерах на гектар', areaInputValue: ozimayaRozhAreaValue, setAreaInputValue: setOzimayaRozhAreaValue },
        { name: 'ozimaya_pshenica', label: 'Озимая пшеница', inputValue: ozimayaPshenicaValue, setInputValue: setOzimayaPshenicaValue, placeholder: 'Напишите урожайность основной продукции озимой пшеницы в центнерах на гектар', areaInputValue: ozimayaPshenicaAreaValue, setAreaInputValue: setOzimayaPshenicaAreaValue },
        { name: 'yarovaya_pshenica', label: 'Яровая пшеница', inputValue: yarovayaPshenicaValue, setInputValue: setYarovayaPshenicaValue, placeholder: 'Напишите урожайность основной продукции яровой пшеницы в центнерах на гектар', areaInputValue: yarovayaPshenicaAreaValue, setAreaInputValue: setYarovayaPshenicaAreaValue },
        { name: 'yachmen', label: 'Ячмень', inputValue: yachmenValue, setInputValue: setYachmenValue, placeholder: 'Напишите урожайность основной продукции ячменя в центнерах на гектар', areaInputValue: yachmenAreaValue, setAreaInputValue: setYachmenAreaValue },
        { name: 'oves', label: 'Овес', inputValue: ovesValue, setInputValue: setOvesValue, placeholder: 'Напишите урожайность основной продукции овса в центнерах на гектар', areaInputValue: ovesAreaValue, setAreaInputValue: setOvesAreaValue },
        { name: 'proso', label: 'Просо', inputValue: prosoValue, setInputValue: setProsoValue, placeholder: 'Напишите урожайность основной продукции просо в центнерах на гектар', areaInputValue: prosoAreaValue, setAreaInputValue: setProsoAreaValue },
        { name: 'kukuruzaNaZerno', label: 'Кукуруза на зерно', inputValue: kukuruzaNaZernoValue, setInputValue: setKukuruzaNaZernoValue, placeholder: 'Напишите урожайность основной продукции кукурузы на зерно в центнерах на гектар', areaInputValue: kukuruzaNaZernoAreaValue, setAreaInputValue: setKukuruzaNaZernoAreaValue },
        { name: 'goroh', label: 'Горох', inputValue: gorohValue, setInputValue: setGorohValue, placeholder: 'Напишите урожайность основной продукции гороха в центнерах на гектар', areaInputValue: gorohAreaValue, setAreaInputValue: setGorohAreaValue },
        { name: 'grechixa', label: 'Гречиха', inputValue: grechixaValue, setInputValue: setGrechixaValue, placeholder: 'Напишите урожайность основной продукции гречихи в центнерах на гектар', areaInputValue: grechixaAreaValue, setAreaInputValue: setGrechixaAreaValue },
        { name: 'podsolnechnik', label: 'Подсолнечник', inputValue: podsolnechnikValue, setInputValue: setPodsolnechnikValue, placeholder: 'Напишите урожайность основной продукции подсолнечника в центнерах на гектар', areaInputValue: podsolnechnikAreaValue, setAreaInputValue: setPodsolnechnikAreaValue },
        { name: 'kartofel', label: 'Картофель', inputValue: kartofelValue, setInputValue: setKartofelValue, placeholder: 'Напишите урожайность основной продукции картофеля в центнерах на гектар', areaInputValue: kartofelAreaValue, setAreaInputValue: setKartofelAreaValue },
        { name: 'saharnayaSvecla', label: 'Сахарная свекла', inputValue: saharnayaSveclaValue, setInputValue: setSaharnayaSveclaValue, placeholder: 'Напишите урожайность основной продукции сахарной свеклы в центнерах на гектар', areaInputValue: saharnayaSveclaAreaValue, setAreaInputValue: setSaharnayaSveclaAreaValue },
        { name: 'ovoshi', label: 'Овощи', inputValue: ovoschiValue, setInputValue: setOvoschiValue, placeholder: 'Напишите урожайность основной продукции овощей в центнерах на гектар', areaInputValue: ovoschiAreaValue, setAreaInputValue: setOvoschiAreaValue },
        { name: 'kormovyeKorneplody', label: 'Кормовые корнеплоды', inputValue: kormovyeKorneplodyValue, setInputValue: setKormovyeKorneplodyValue, placeholder: 'Напишите урожайность основной продукции кормовых корнеплодов в центнерах на гектар', areaInputValue: kormovyeKorneplodyAreaValue, setAreaInputValue: setKormovyeKorneplodyAreaValue },
        { name: 'len', label: 'Лен', inputValue: lenValue, setInputValue: setLenValue, placeholder: 'Напишите урожайность основной продукции льна в центнерах на гектар', areaInputValue: lenAreaValue, setAreaInputValue: setLenAreaValue },
        { name: 'konoplya', label: 'Конопля', inputValue: konoplyaValue, setInputValue: setKonoplyaValue, placeholder: 'Напишите урожайность основной продукции конопли в центнерах на гектар', areaInputValue: konoplyaAreaValue, setAreaInputValue: setKonoplyaAreaValue },
        { name: 'silosnye', label: 'Силосные', inputValue: silosnyeValue, setInputValue: setSilosnyeValue, placeholder: 'Напишите урожайность основной продукции силосных в центнерах на гектар', areaInputValue: silosnyeAreaValue, setAreaInputValue: setSilosnyeAreaValue },
        { name: 'kukuruzaNaSilos', label: 'Кукуруза на силос', inputValue: kukuruzaNaSilosValue, setInputValue: setKukuruzaNaSilosValue, placeholder: 'Напишите урожайность основной продукции кукурузы на силос в центнерах на гектар', areaInputValue: kukuruzaNaSilosAreaValue, setAreaInputValue: setKukuruzaNaSilosAreaValue },
        { name: 'odnoletnieTravy', label: 'Однолетние травы', inputValue: odnoletnieTravyValue, setInputValue: setOdnoletnieTravyValue, placeholder: 'Напишите урожайность основной продукции однолетних трав в центнерах на гектар', areaInputValue: odnoletnieTravyAreaValue, setAreaInputValue: setOdnoletnieTravyAreaValue },
        { name: 'mnogoletnieTravy', label: 'Многолетние травы', inputValue: mnogoletnieTravyValue, setInputValue: setMnogoletnieTravyValue, placeholder: 'Напишите урожайность основной продукции многолетних трав в центнерах на гектар', areaInputValue: mnogoletnieTravyAreaValue, setAreaInputValue: setMnogoletnieTravyAreaValue },
    ];

    const [checkboxStates3, setCheckboxStates3] = useState({
        ozimaya_rozh: false,
        ozimaya_pshenica: false,
        yarovaya_pshenica: false,
        yachmen: false,
        oves: false,
        proso: false,
        kukuruzaNaZerno: false,
        goroh: false,
        grechiha: false,
        podsolnechnik: false,
        kartofel: false,
        saharnayaSvekla: false,
        ovoshi: false,
        kormovye_korneplodi: false,
        len: false,
        konoplya: false,
        silosovye: false,
        kukuruzaNaSilos: false,
        odnoletnieTravi: false,
        mnogoletnieTravi: false
    });

    // БЛОК 4
    const AC_CO2i = {
        soilChernozem: 223,
        soilPodzolic: 189,
        soilOther: 142,
        soilFallow: 115,
    };

    const [selectedRegion, setSelectedRegion] = useState('');

    const [soilChernozemArea, setSoilChernozemArea] = useState('');
    const [soilPodzolicArea, setSoilPodzolicArea] = useState('');
    const [soilOtherArea, setSoilOtherArea] = useState('');
    const [soilFallowArea, setSoilFallowArea] = useState('');

    const Veg = {
        'Республика Адыгея (Адыгея)': 5124,
        'Республика Алтай': 3660,
        'Республика Башкортостан': 3660,
        'Республика Бурятия': 2196,
        'Республика Дагестан': 5124,
        'Республика Ингушетия': 5124,
        'Кабардино-Балкарская Республика': 5124,
        'Республика Калмыкия': 4392,
        'Карачаево-Черкесская Республика': 4392,
        'Республика Карелия': 2196,
        'Республика Коми': 2562,
        'Республика Крым': 5124,
        'Республика Марий Эл': 3660,
        'Республика Мордовия': 3294,
        'Республика Саха (Якутия)': 2196,
        'Республика Северная Осетия - Алания': 5124,
        'Республика Татарстан (Татарстан)': 3660,
        'Республика Тыва': 3660,
        'Удмуртская Республика': 2928,
        'Республика Хакасия': 3660,
        'Чеченская Республика': 5124,
        'Чувашская Республика - Чувашия': 3660,
        'Алтайский край': 3660,
        'Забайкальский край': 2196,
        'Камчатский край': 1684,
        'Краснодарский край': 5124,
        'Красноярский край': 2196,
        'Пермский край': 2928,
        'Приморский край': 2928,
        'Ставропольский край': 4392,
        'Хабаровский край': 2928,
        'Амурская область': 2562,
        'Архангельская область': 2196,
        'Астраханская область': 4392,
        'Белгородская область': 3660,
        'Брянская область': 3660,
        'Владимирская область': 3660,
        'Волгоградская область': 3660,
        'Вологодская область': 2928,
        'Воронежская область': 3660,
        'Ивановская область': 3660,
        'Иркутская область': 2196,
        'Калининградская область': 3660,
        'Калужская область': 3660,
        'Кемеровская область': 2928,
        'Кировская область': 2928,
        'Костромская область': 2928,
        'Курганская область': 3660,
        'Курская область': 3660,
        'Ленинградская область': 3660,
        'Липецкая область': 3660,
        'Магаданская область': 1098,
        'Московская область': 3660,
        'Мурманская область': 2196,
        'Ненецкий автономный округ': 2196,
        'Нижегородская область': 3660,
        'Новгородская область': 3660,
        'Новосибирская область': 3294,
        'Омская область': 2562,
        'Оренбургская область': 3660,
        'Орловская область': 3660,
        'Пензенская область': 3660,
        'Псковская область': 3660,
        'Ростовская область': 4392,
        'Рязанская область': 3660,
        'Самарская область': 3660,
        'Саратовская область': 3660,
        'Сахалинская область': 2928,
        'Свердловская область': 2928,
        'Смоленская область': 3660,
        'Тамбовская область': 3660,
        'Тверская область': 3660,
        'Томская область': 2562,
        'Тульская область': 3660,
        'Тюменская область': 2562,
        'Ульяновская область': 3660,
        'Челябинская область': 3660,
        'Ярославская область': 2928,
        'г. Москва': 3660,
        'г. Санкт-Петербург': 3660,
        'г. Севастополь': 5124,
        'Еврейская автономная область': 2562,
        'Ханты-Мансийский автономный округ - Югра': 2196,
        'Чукотский автономный округ': 512,
        'Ямало-Ненецкий автономный округ': 1464,
    };

    const calculateSoilCarbonLoss = () => {
        let totalLoss = 0;
    
        // Получаем значение Veg для выбранного региона
        const vegValue = Veg[selectedRegion] || 0;
    
        // Считаем потери для каждого типа почв
        if (checkboxStates.soilChernozem) {
            const area = parseFloat(soilChernozemArea) || 0;
            totalLoss += (area * AC_CO2i.soilChernozem * vegValue * 0.6 * 1.43) / 100000 * (12 / 44);
        }
        if (checkboxStates.soilPodzolic) {
            const area = parseFloat(soilPodzolicArea) || 0;
            totalLoss += (area * AC_CO2i.soilPodzolic * vegValue * 0.6 * 1.43) / 100000 * (12 / 44);
        }
        if (checkboxStates.soilOther) {
            const area = parseFloat(soilOtherArea) || 0;
            totalLoss += (area * AC_CO2i.soilOther * vegValue * 0.6 * 1.43) / 100000 * (12 / 44);
        }
        if (checkboxStates.soilFallow) {
            const area = parseFloat(soilFallowArea) || 0;
            totalLoss += (area * AC_CO2i.soilFallow * vegValue * 0.6 * 1.43) / 100000 * (12 / 44);
        }
    
        return totalLoss.toFixed(2); // Возвращаем результат с двумя знаками после запятой
    };



    // БЛОК 5
    const [selectedWatershed, setSelectedWatershed] = useState(null); // Выбранный водосбор
    const [watershedArea, setWatershedArea] = useState(0); // Площадь пахотных угодий

    const watersheds = [
        { name: 'Кола', coefficient: 0.02272 },
        { name: 'Онега', coefficient: 0.04350 },
        { name: 'Северная Двина', coefficient: 0.03448 },
        { name: 'Мезень', coefficient: 0.03557 },
        { name: 'Печора', coefficient: 0.03269 },
        { name: 'Обь', coefficient: 0.01590 },
        { name: 'Таз', coefficient: 0.04336 },
        { name: 'Енисей', coefficient: 0.02125 },
        { name: 'Анабар', coefficient: 0.01612 },
        { name: 'Оленек', coefficient: 0.01160 },
        { name: 'Лена', coefficient: 0.01432 },
        { name: 'Индигирка', coefficient: 0.01373 },
        { name: 'Колыма', coefficient: 0.00838 },
        { name: 'Камчатка', coefficient: 0.01776 },
        { name: 'Тауй', coefficient: 0.03492 },
        { name: 'Амур', coefficient: 0.01908 },
        { name: 'Тымь', coefficient: 0.02683 },
        { name: 'Поронай', coefficient: 0.06049 },
        { name: 'Нева', coefficient: 0.02431 },
        { name: 'Луга', coefficient: 0.04821 },
        { name: 'Преголя', coefficient: 0.02100 },
        { name: 'Дон', coefficient: 0.00443 },
        { name: 'Сев. Донец', coefficient: 0.00448 },
        { name: 'Кубань', coefficient: 0.02463 },
        { name: 'Сочи', coefficient: 0.19260 },
        { name: 'Терек', coefficient: 0.00686 },
        { name: 'Кума', coefficient: 0.00135 },
        { name: 'Волга', coefficient: 0.01594 },
        { name: 'Урал', coefficient: 0.00233 },
        { name: 'Верхняя Ангара', coefficient: 0.01394 },
        { name: 'Баргузин', coefficient: 0.01318 },
        { name: 'Селенга', coefficient: 0.00423 },
        { name: 'Другое', coefficient: 0.02340 },
    ];

    const calculateErosionLoss = () => {
        if (!selectedWatershed || !watershedArea) return 0;
        return (watershedArea * selectedWatershed.coefficient).toFixed(2);
    };


    const handleCheckboxChange3 = (event) => {
        const { name, checked } = event.target;
    
        // Обновляем состояние чекбоксов
        setCheckboxStates3({
            ...checkboxStates3,
            [name]: checked,
        });
    
        // Если флажок снят, удаляем соответствующие значения из cropValues
        if (!checked) {
            setCropValues((prevValues) => {
                const updatedValues = { ...prevValues };
                delete updatedValues[`${name}_yield`];
                delete updatedValues[`${name}_area`];
                return updatedValues;
            });
        } else {
            // Если флажок установлен, добавляем пустые значения для ввода
            setCropValues((prevValues) => ({
                ...prevValues,
                [`${name}_yield`]: '',
                [`${name}_area`]: '',
            }));
        }
    };



    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
    
        // Обновляем состояние чекбоксов
        setCheckboxStates({
            ...checkboxStates,
            [name]: checked,
        });
    
        // Если флажок снят, сбрасываем соответствующее значение
        if (!checked) {
            if (name === 'navoz1') setNavoz1Value('');
            if (name === 'navoz2') setNavoz2Value('');
            if (name === 'torf') setTorfValue('');
            if (name === 'pom') setPomValue('');
            if (name === 'other') setOtherValue('');
        }
    };



    const [mainRadioStates, setMainRadioStates] = useState({
        '1': false,
        '2': false,
        '3': false,
        '4': false,
        '5': false,
        '6': false,
    });



    const handleMainRadioChange = (event) => {
        const { value } = event.target;
        setMainRadioStates({
            '1': value === '1',
            '2': value === '2',
            '3': value === '3',
            '4': value === '4',
            '5': value === '5',
            '6': value === '6',
        });

        if (value !== '1') {
            setCheckboxStates3({
                ozimaya_rozh: false,
                ozimaya_pshenica: false,
                yarovaya_pshenica: false,
                yachmen: false,
                oves: false,
                proso: false,
                kukuruzaNaZerno: false,
                goroh: false,
                grechiha: false,
                podsolnechnik: false,
                kartofel: false,
                saharnayaSvekla: false,
                ovoshi: false,
                kormovye_korneplodi: false,
                len: false,
                konoplya: false,
                silosovye: false,
                kukuruzaNaSilos: false,
                odnoletnieTravi: false,
                mnogoletnieTravi: false
            });
            setCheckboxStates({
                navoz1: false,
                navoz2: false,
                torf: false,
                pom: false,
                other: false
            });
            secondRadioStates.da = false;
            secondRadioStates.net = false;
            thirdRadioStates.da = false;
            thirdRadioStates.net = false;
            setIzvestkovyeMaterialyValue('');
            setCalculatedResult(0);
            setNavoz1Value('');
            setNavoz2Value('');
            setTorfValue('');
            setPomValue('');
            setOtherValue('');
            setAzotValue('');
            setFosforValue('');
            setKaliyValue('');
            setCorg(0);
            setCmin(0);
        }
    };



    return (
        <div>
            {/* Блок приветствия */}
            <FormContainer style={{ 
                alignItems: 'flex-start', 
                marginBottom: '20px', 
                padding: '20px', 
                backgroundColor: '#f9f9f9', 
                borderRadius: '8px', 
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' 
            }}>
                <Header style={{ 
                    fontSize: '24px', 
                    fontWeight: 'bold', 
                    marginBottom: '10px', 
                    color: '#333' 
                }}>
                    Добро пожаловать!
                </Header>
                <Text style={{ 
                    fontSize: '16px', 
                    lineHeight: '1.6', 
                    color: '#555' 
                }}>
                    Калькулятор предназначен для расчета ежегодного изменения запасов углерода в пуле минеральных почв пахотных земель в соответствии с Приказом Минприроды России от 27.05.2022 N371 "Об утверждении методик количественного определения объемов выбросов парниковых газов и поглощений парниковых газов".
                    <br /><br />
                    Калькулятор будет полезен, если Вы планируете реализовать климатический проект в реестре углеродных единиц в части увеличения поглощения парниковых газов землями сельскохозяйственного назначения.
                </Text>
            </FormContainer>
            <FormContainer style={{ alignItems: 'flex-start' }}>
                <Header>Выберите вид расчета</Header>
                <FormControl style={{marginTop: '10px', marginBottom: '12px'}}>
                    <FormLabel id="firstRadioGroup"></FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        // value={type}
                        onChange={handleMainRadioChange}
                        style={{ marginTop: '5px', marginLeft: '6px'}}
                    >
                        <FormControlLabel value="1" control={<Radio />} label="Поступление углерода в почву с органическими и минеральными удобрениями" />
                        <FormControlLabel value="2" control={<Radio />} label="Поступление углерода в почву с известковыми материалами" />
                        <FormControlLabel value="3" control={<Radio />} label="Поступление углерода в почву с растительными остатками" />
                        <FormControlLabel value="4" control={<Radio />} label="Потери почвенного углерода с дыханием почв" />
                        <FormControlLabel value="5" control={<Radio />} label="Механические потери почвенного C в результате эрозии и дефляции" />
                        <FormControlLabel value="6" control={<Radio />} label="Ежегодное изменение запасов углерода в пуле минеральных почв пахотных земель" />
                    </RadioGroup>
                </FormControl>
            </FormContainer>
            {mainRadioStates[1] && <FormContainer style={{ alignItems: 'flex-start' }}>
                <Header>Вносились ли в течении года органические удобрения в почву</Header>
                <FormControl style={{marginTop: '10px', marginBottom: '12px'}}>
                    <FormLabel id="secondRadioGroup"></FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group2"
                        // value={type}
                        onChange={handleSecondRadioChange}
                        style={{ marginTop: '5px', marginLeft: '6px'}}
                    >
                    <FormControlLabel value="da" control={<Radio />} label="Да" />
                    <FormControlLabel value="net" control={<Radio />} label="Нет" />
                    </RadioGroup>
                </FormControl>
            </FormContainer>}
            {mainRadioStates[1] && secondRadioStates.da &&  <div>
            <FormContainer style={{ alignItems: 'flex-start' }}>
            <FormGroup>  
                <Header>Выберите вид органического удобрения</Header>
                <div style={{  alignItems: 'center' }}>
                    <FormControlLabel
                        control={<Checkbox checked={checkboxStates.navoz1} onChange={handleCheckboxChange} name="navoz1" />}
                        label="Навоз подстилочный"
                    />
                    {checkboxStates.navoz1 && <InputComponent inputValue={navoz1Value} action={setNavoz1Value} placeholder={"Введите внесенное количество навоза подстилочного"} />}
                </div>
                <div style={{ alignItems: 'center' }}>
                    <FormControlLabel
                        control={<Checkbox checked={checkboxStates.navoz2} onChange={handleCheckboxChange} name="navoz2" />}
                        label="Навоз бесподстилочный"
                    />
                    {checkboxStates.navoz2 && <InputComponent inputValue={navoz2Value} action={setNavoz2Value} placeholder={"Введите внесенное количество навоза бесподстилочного"} />}
                </div>
                <div style={{ alignItems: 'center' }}>
                    <FormControlLabel
                        control={<Checkbox checked={checkboxStates.torf} onChange={handleCheckboxChange} name="torf" />}
                        label="Торф"
                    />
                    {checkboxStates.torf && <InputComponent inputValue={torfValue} action={setTorfValue} placeholder={"Введите внесенное количество торфа"} />}
                </div>
                <div style={{ alignItems: 'center' }}>
                    <FormControlLabel
                        control={<Checkbox checked={checkboxStates.pom} onChange={handleCheckboxChange} name="pom" />}
                        label="Помет"
                    />
                    {checkboxStates.pom && <InputComponent inputValue={pomValue} action={setPomValue} placeholder={"Введите внесенное количество помета"} />}
                </div>
                <div style={{ alignItems: 'center' }}>
                    <FormControlLabel
                        control={<Checkbox checked={checkboxStates.other} onChange={handleCheckboxChange} name="other" />}
                        label="Солома, сидераты и другое"
                    />
                    {checkboxStates.other && <InputComponent inputValue={otherValue} action={setOtherValue} placeholder={"Введите внесенное количество"} />}
                </div>
                {/* <div>
                    <Header>Результат расчета</Header>
                    <Text>Общее количество углерода: {corg.toFixed(2)} тонн</Text>
                </div> */}
            </FormGroup>
            
        </FormContainer>
        <FormContainer style={{ alignItems: 'flex-start' }}>
        <Header>Вносились ли в течении года минеральные удобрения в почву</Header>
        <FormControl style={{marginTop: '10px', marginBottom: '12px'}}>
                <FormLabel id="thirdRadioGroup"></FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group2"
                    // value={type}
                    onChange={handleThirdRadioChange}
                    style={{ marginTop: '5px', marginLeft: '6px'}}
                >
                <FormControlLabel value="da" control={<Radio />} label="Да" />
                <FormControlLabel value="net" control={<Radio />} label="Нет" />
                </RadioGroup>
            </FormControl>
        </FormContainer>
        </div>
        }
        {mainRadioStates[1] && secondRadioStates.net && <FormContainer style={{ alignItems: 'flex-start' }}>
            <Header>Вносились ли в течении года минеральные удобрения в почву</Header>
            <FormControl style={{marginTop: '10px', marginBottom: '12px'}}>
                    <FormLabel id="thirdRadioGroup"></FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group2"
                        // value={type}
                        onChange={handleThirdRadioChange}
                        style={{ marginTop: '5px', marginLeft: '6px'}}
                    >
                    <FormControlLabel value="da" control={<Radio />} label="Да" />
                    <FormControlLabel value="net" control={<Radio />} label="Нет" />
                    </RadioGroup>
                </FormControl>
            </FormContainer>}
            {thirdRadioStates.da && 
            <div>
                <FormContainer style={{ alignItems: 'flex-start' }}>
                    <FormGroup>  
                        <Header>Выберите тип вносимых минеральных удобрений: </Header>
                        <div style={{  alignItems: 'center' }}>
                            <FormControlLabel
                                control={<Checkbox checked={checkboxStates2.azot} onChange={handleCheckboxChange2} name="azot" />}
                                label="Азотные"
                            />
                            {checkboxStates2.azot && <InputComponent inputValue={azotValue} action={setAzotValue} placeholder={"Введите внесенное количество азотных удобрений"} />}
                        </div>
                        <div style={{ alignItems: 'center' }}>
                            <FormControlLabel
                                control={<Checkbox checked={checkboxStates2.fosfor} onChange={handleCheckboxChange2} name="fosfor" />}
                                label="Фосфорные"
                            />
                            {checkboxStates2.fosfor && <InputComponent inputValue={fosforValue} action={setFosforValue} placeholder={"Введите внесенное количество фосфорных удобрений"} />}
                        </div>
                        <div style={{ alignItems: 'center' }}>
                            <FormControlLabel
                                control={<Checkbox checked={checkboxStates2.kaliy} onChange={handleCheckboxChange2} name="kaliy" />}
                                label="Калийные"
                            />
                            {checkboxStates2.kaliy && <InputComponent inputValue={kaliyValue} action={setKaliyValue} placeholder={"Введите внесенное количество калийных удобрений"} />}
                        </div>

                    </FormGroup>
                </FormContainer>
                <FormContainer style={{ alignItems: 'flex-start' }}>
                    <Header>Результат расчетов</Header>
                    <Text>За год в почву с органическими и минеральными удобрениями поступило <b>{(corg + cmin).toFixed(2)}</b> тонн углерода</Text>
                </FormContainer>
            </div>
            }
            {mainRadioStates[1] && thirdRadioStates.net &&
                <FormContainer style={{ alignItems: 'flex-start' }}>
                    <Header>Результат расчетов</Header>
                    <Text>За год в почву с органическими и минеральными удобрениями поступило <b>{(corg + cmin).toFixed(2)}</b> тонн углерода</Text>
                </FormContainer>}
            
            {/* 2й расчет */}
            {mainRadioStates[2] && 
            <div>
            <FormContainer style={{ alignItems: 'flex-start' }}>
                <Header>Напишите количество внесенных известковых материалов за год в тоннах</Header>
                <InputComponent inputValue={izvestkovyeMaterialyValue} action={handleInputChange} placeholder={"Напишите количество внесенных известковых материалов за год в тоннах"} />
            </FormContainer>
            <FormContainer style={{ alignItems: 'flex-start' }}>
                <Header>Результат расчетов</Header>
                <Text>За год в почву с известковыми материалами поступило <b>{calculatedResult}</b> тонн углерода</Text>
            </FormContainer>
            </div>
            }

            {/* 3й расчет */}
            {mainRadioStates[3] &&
            <div>
            <FormContainer style={{ alignItems: 'flex-start' }}>
                <FormGroup>
                    <Header>Выберите тип сельскохозяйственной культуры, урожай которой собран в течении года:</Header>
                    {mainRadioStates[3] &&
                        <div>
                            {checkboxDataState3.map(({ name, label, placeholder }) => (
                                <div style={{ alignItems: 'center' }} key={name}>
                                    <FormControlLabel
                                        control={<Checkbox checked={checkboxStates3[name]} onChange={handleCheckboxChange3} name={name} />}
                                        label={label}
                                    />
                                    {checkboxStates3[name] && (
                                        <>
                                            <InputComponent
                                                inputValue={cropValues[`${name}_yield`] || ''}
                                                action={(value) => handleCropValueChange(`${name}_yield`, value)}
                                                placeholder={placeholder}
                                            />
                                            <InputComponent
                                                inputValue={cropValues[`${name}_area`] || ''}
                                                action={(value) => handleCropValueChange(`${name}_area`, value)}
                                                placeholder={`Напишите посевную площадь ${getGenitiveLabel(label)} в гектарах`}
                                            />
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    }
                </FormGroup>
            </FormContainer>
        
            <FormContainer style={{ alignItems: 'flex-start' }}>
                <Header>Результат расчетов</Header>
                <Text>
                    {calculateTotalCarbon() === 'Проверьте введенную урожайность' ? (
                        <b>Проверьте введенную урожайность</b> /*Добавить справочник*/
                    ) : (
                        <>За год в почву с растительными остатками поступило <b>{calculateTotalCarbon()}</b> тонн углерода</>
                    )}
                </Text>
            </FormContainer>
        </div>
        }
        {/* 4й расчет */}
        {mainRadioStates[4] && (
    <div>
        <FormContainer style={{ alignItems: 'flex-start' }}>
            <FormGroup>
                <Header>Выберите тип почв для расчетов</Header>
                <div style={{  alignItems: 'center' }}>
                    <FormControlLabel
                        control={<Checkbox checked={checkboxStates.soilChernozem} onChange={handleCheckboxChange} name="soilChernozem" />}
                        label="Черноземы"
                    />
                    {checkboxStates.soilChernozem && (
                        <InputComponent
                            inputValue={soilChernozemArea}
                            action={setSoilChernozemArea}
                            placeholder="Напишите площадь черноземов в гектарах"
                        />
                    )}
                </div>
                <div style={{ alignItems: 'center' }}>
                    <FormControlLabel
                        control={<Checkbox checked={checkboxStates.soilPodzolic} onChange={handleCheckboxChange} name="soilPodzolic" />}
                        label="Дерново-подзолистые почвы"
                    />
                    {checkboxStates.soilPodzolic && (
                        <InputComponent
                            inputValue={soilPodzolicArea}
                            action={setSoilPodzolicArea}
                            placeholder="Напишите площадь дерново-подзолистых почв в гектарах"
                        />
                    )}
                </div>
                <div style={{ alignItems: 'center' }}>
                    <FormControlLabel
                        control={<Checkbox checked={checkboxStates.soilOther} onChange={handleCheckboxChange} name="soilOther" />}
                        label="Другие типы почв"
                    />
                    {checkboxStates.soilOther && (
                        <InputComponent
                            inputValue={soilOtherArea}
                            action={setSoilOtherArea}
                            placeholder="Напишите площадь других типов почв в гектарах"
                        />
                    )}
                </div>
                <div style={{ alignItems: 'center' }}>
                    <FormControlLabel
                        control={<Checkbox checked={checkboxStates.soilFallow} onChange={handleCheckboxChange} name="soilFallow" />}
                        label="Почва для пара"
                    />
                    {checkboxStates.soilFallow && (
                        <InputComponent
                            inputValue={soilFallowArea}
                            action={setSoilFallowArea}
                            placeholder="Напишите площадь почвы для пара в гектарах"
                        />
                    )}
                </div>
            </FormGroup>
        </FormContainer>

        <FormContainer style={{ alignItems: 'flex-start' }}>
            <FormGroup>
                <Header>Выберите субъект РФ</Header>
                <FormControl style={{ marginTop: '10px', marginBottom: '12px' }}>
                    <RadioGroup
                        aria-labelledby="region-radio-group"
                        name="region-radio-group"
                        value={selectedRegion} // Состояние для выбранного региона
                        onChange={(event) => setSelectedRegion(event.target.value)} // Обновление состояния
                        style={{ maxHeight: '300px', overflowY: 'scroll' }}
                    >
                        {[
                            'Республика Адыгея (Адыгея)',
                            'Республика Алтай',
                            'Республика Башкортостан',
                            'Республика Бурятия',
                            'Республика Дагестан',
                            'Республика Ингушетия',
                            'Кабардино-Балкарская Республика',
                            'Республика Калмыкия',
                            'Карачаево-Черкесская Республика',
                            'Республика Карелия',
                            'Республика Коми',
                            'Республика Крым',
                            'Республика Марий Эл',
                            'Республика Мордовия',
                            'Республика Саха (Якутия)',
                            'Республика Северная Осетия - Алания',
                            'Республика Татарстан (Татарстан)',
                            'Республика Тыва',
                            'Удмуртская Республика',
                            'Республика Хакасия',
                            'Чеченская Республика',
                            'Чувашская Республика - Чувашия',
                            'Алтайский край',
                            'Забайкальский край',
                            'Камчатский край',
                            'Краснодарский край',
                            'Красноярский край',
                            'Пермский край',
                            'Приморский край',
                            'Ставропольский край',
                            'Хабаровский край',
                            'Амурская область',
                            'Архангельская область',
                            'Астраханская область',
                            'Белгородская область',
                            'Брянская область',
                            'Владимирская область',
                            'Волгоградская область',
                            'Вологодская область',
                            'Воронежская область',
                            'Ивановская область',
                            'Иркутская область',
                            'Калининградская область',
                            'Калужская область',
                            'Кемеровская область',
                            'Кировская область',
                            'Костромская область',
                            'Курганская область',
                            'Курская область',
                            'Ленинградская область',
                            'Липецкая область',
                            'Магаданская область',
                            'Московская область',
                            'Мурманская область',
                            'Ненецкий автономный округ',
                            'Нижегородская область',
                            'Новгородская область',
                            'Новосибирская область',
                            'Омская область',
                            'Оренбургская область',
                            'Орловская область',
                            'Пензенская область',
                            'Псковская область',
                            'Ростовская область',
                            'Рязанская область',
                            'Самарская область',
                            'Саратовская область',
                            'Сахалинская область',
                            'Свердловская область',
                            'Смоленская область',
                            'Тамбовская область',
                            'Тверская область',
                            'Томская область',
                            'Тульская область',
                            'Тюменская область',
                            'Ульяновская область',
                            'Челябинская область',
                            'Ярославская область',
                            'г. Москва',
                            'г. Санкт-Петербург',
                            'г. Севастополь',
                            'Еврейская автономная область',
                            'Ханты-Мансийский автономный округ - Югра',
                            'Чукотский автономный округ',
                            'Ямало-Ненецкий автономный округ',
                        ].map((region) => (
                            <FormControlLabel
                                key={region}
                                value={region}
                                control={<Radio />}
                                label={region}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
            </FormGroup>
        </FormContainer>
        <FormContainer style={{ alignItems: 'flex-start' }}>
            <Header>Результат расчетов</Header>
            <Text>Потери почвенного углерода с дыханием почв составляют <b>{calculateSoilCarbonLoss()}</b> тонн углерода</Text>
        </FormContainer>;
    </div>
    )}
    {/* 5й расчет */}
    {mainRadioStates[5] && (
    <div>
        <FormContainer style={{ alignItems: 'flex-start' }}>
            <FormGroup>
                <Header>Выберите водосбор</Header>
                <FormControl style={{ marginTop: '10px', marginBottom: '12px' }}>
                    <RadioGroup
                        aria-labelledby="watershed-radio-group"
                        name="watershed-radio-group"
                        value={selectedWatershed?.name || ''}
                        style={{ maxHeight: '300px', overflowY: 'scroll' }}
                        onChange={(event) => {
                            const selected = watersheds.find(w => w.name === event.target.value);
                            setSelectedWatershed(selected)
                        }}
                    >
                        {watersheds.map((watershed) => (
                            <FormControlLabel
                                key={watershed.name}
                                value={watershed.name}
                                control={<Radio />}
                                label={watershed.name}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
            </FormGroup>
        </FormContainer>

        {selectedWatershed && (
            <FormContainer style={{ alignItems: 'flex-start' }}>
                <Header>Введите площадь пахотных угодий для водосбора {selectedWatershed.name}</Header>
                <InputComponent
                    inputValue={watershedArea || ''}
                    action={(value) => setWatershedArea(parseFloat(value) || 0)}
                    placeholder={`Введите площадь пахотных угодий для ${selectedWatershed.name} в гектарах`}
                />
            </FormContainer>
        )}

        <FormContainer style={{ alignItems: 'flex-start' }}>
            <Header>Результат расчетов</Header>
            <Text>
                Механические потери почвенного углерода в результате эрозии и дефляции составили{' '}
                <b>{calculateErosionLoss()}</b> тонн углерода
            </Text>
        </FormContainer>
    </div>
)}

{/* 6й расчет */}
{mainRadioStates[6] && (
    <div>
        {/* 1-й расчет */}
        <FormContainer style={{ alignItems: 'flex-start' }}>
            <Header>Вносились ли в течение года органические удобрения в почву</Header>
            <FormControl style={{ marginTop: '10px', marginBottom: '12px' }}>
                <FormLabel id="secondRadioGroup"></FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group2"
                    onChange={handleSecondRadioChange}
                    style={{ marginTop: '5px', marginLeft: '6px' }}
                >
                    <FormControlLabel value="da" control={<Radio />} label="Да" />
                    <FormControlLabel value="net" control={<Radio />} label="Нет" />
                </RadioGroup>
            </FormControl>
        </FormContainer>
        {secondRadioStates.da && (
            <FormContainer style={{ alignItems: 'flex-start' }}>
                <FormGroup>
                    <Header>Выберите вид органического удобрения</Header>
                    <div style={{ alignItems: 'center' }}>
                        <FormControlLabel
                            control={<Checkbox checked={checkboxStates.navoz1} onChange={handleCheckboxChange} name="navoz1" />}
                            label="Навоз подстилочный"
                        />
                        {checkboxStates.navoz1 && (
                            <InputComponent
                                inputValue={navoz1Value}
                                action={setNavoz1Value}
                                placeholder="Введите внесенное количество навоза подстилочного"
                            />
                        )}
                    </div>
                    <div style={{ alignItems: 'center' }}>
                        <FormControlLabel
                            control={<Checkbox checked={checkboxStates.navoz2} onChange={handleCheckboxChange} name="navoz2" />}
                            label="Навоз бесподстилочный"
                        />
                        {checkboxStates.navoz2 && (
                            <InputComponent
                                inputValue={navoz2Value}
                                action={setNavoz2Value}
                                placeholder="Введите внесенное количество навоза бесподстилочного"
                            />
                        )}
                    </div>
                    <div style={{ alignItems: 'center' }}>
                        <FormControlLabel
                            control={<Checkbox checked={checkboxStates.torf} onChange={handleCheckboxChange} name="torf" />}
                            label="Торф"
                        />
                        {checkboxStates.torf && (
                            <InputComponent
                                inputValue={torfValue}
                                action={setTorfValue}
                                placeholder="Введите внесенное количество торфа"
                            />
                        )}
                    </div>
                    <div style={{ alignItems: 'center' }}>
                        <FormControlLabel
                            control={<Checkbox checked={checkboxStates.pom} onChange={handleCheckboxChange} name="pom" />}
                            label="Помет"
                        />
                        {checkboxStates.pom && (
                            <InputComponent
                                inputValue={pomValue}
                                action={setPomValue}
                                placeholder="Введите внесенное количество помета"
                            />
                        )}
                    </div>
                    <div style={{ alignItems: 'center' }}>
                        <FormControlLabel
                            control={<Checkbox checked={checkboxStates.other} onChange={handleCheckboxChange} name="other" />}
                            label="Солома, сидераты и другое"
                        />
                        {checkboxStates.other && (
                            <InputComponent
                                inputValue={otherValue}
                                action={setOtherValue}
                                placeholder="Введите внесенное количество"
                            />
                        )}
                    </div>
                </FormGroup>
            </FormContainer>
        )}

        {/* 2-й расчет */}
        <FormContainer style={{ alignItems: 'flex-start' }}>
            <Header>Напишите количество внесенных известковых материалов за год в тоннах</Header>
            <InputComponent
                inputValue={izvestkovyeMaterialyValue}
                action={handleInputChange}
                placeholder="Напишите количество внесенных известковых материалов за год в тоннах"
            />
        </FormContainer>

        {/* 3-й расчет */}
        <FormContainer style={{ alignItems: 'flex-start' }}>
            <FormGroup>
                <Header>Выберите тип сельскохозяйственной культуры, урожай которой собран в течение года:</Header>
                {checkboxDataState3.map(({ name, label, placeholder }) => (
                    <div style={{ alignItems: 'center' }} key={name}>
                        <FormControlLabel
                            control={<Checkbox checked={checkboxStates3[name]} onChange={handleCheckboxChange3} name={name} />}
                            label={label}
                        />
                        {checkboxStates3[name] && (
                            <>
                                <InputComponent
                                    inputValue={cropValues[`${name}_yield`] || ''}
                                    action={(value) => handleCropValueChange(`${name}_yield`, value)}
                                    placeholder={placeholder}
                                />
                                <InputComponent
                                    inputValue={cropValues[`${name}_area`] || ''}
                                    action={(value) => handleCropValueChange(`${name}_area`, value)}
                                    placeholder={`Напишите посевную площадь ${getGenitiveLabel(label)} в гектарах`}
                                />
                            </>
                        )}
                    </div>
                ))}
            </FormGroup>
        </FormContainer>

        {/* 4-й расчет */}
        <FormContainer style={{ alignItems: 'flex-start' }}>
            <FormGroup>
                <Header>Выберите тип почв для расчетов</Header>
                <div style={{ alignItems: 'center' }}>
                    <FormControlLabel
                        control={<Checkbox checked={checkboxStates.soilChernozem} onChange={handleCheckboxChange} name="soilChernozem" />}
                        label="Черноземы"
                    />
                    {checkboxStates.soilChernozem && (
                        <InputComponent
                            inputValue={soilChernozemArea}
                            action={setSoilChernozemArea}
                            placeholder="Напишите площадь черноземов в гектарах"
                        />
                    )}
                </div>
                <div style={{ alignItems: 'center' }}>
                    <FormControlLabel
                        control={<Checkbox checked={checkboxStates.soilPodzolic} onChange={handleCheckboxChange} name="soilPodzolic" />}
                        label="Дерново-подзолистые почвы"
                    />
                    {checkboxStates.soilPodzolic && (
                        <InputComponent
                            inputValue={soilPodzolicArea}
                            action={setSoilPodzolicArea}
                            placeholder="Напишите площадь дерново-подзолистых почв в гектарах"
                        />
                    )}
                </div>
                <div style={{ alignItems: 'center' }}>
                    <FormControlLabel
                        control={<Checkbox checked={checkboxStates.soilOther} onChange={handleCheckboxChange} name="soilOther" />}
                        label="Другие типы почв"
                    />
                    {checkboxStates.soilOther && (
                        <InputComponent
                            inputValue={soilOtherArea}
                            action={setSoilOtherArea}
                            placeholder="Напишите площадь других типов почв в гектарах"
                        />
                    )}
                </div>
                <div style={{ alignItems: 'center' }}>
                    <FormControlLabel
                        control={<Checkbox checked={checkboxStates.soilFallow} onChange={handleCheckboxChange} name="soilFallow" />}
                        label="Почва для пара"
                    />
                    {checkboxStates.soilFallow && (
                        <InputComponent
                            inputValue={soilFallowArea}
                            action={setSoilFallowArea}
                            placeholder="Напишите площадь почвы для пара в гектарах"
                        />
                    )}
                </div>
            </FormGroup>
        </FormContainer>

        {/* 5-й расчет */}
        <FormContainer style={{ alignItems: 'flex-start' }}>
            <FormGroup>
                <Header>Выберите водосбор</Header>
                <FormControl style={{ marginTop: '10px', marginBottom: '12px' }}>
                    <RadioGroup
                        aria-labelledby="watershed-radio-group"
                        name="watershed-radio-group"
                        value={selectedWatershed?.name || ''}
                        style={{ maxHeight: '300px', overflowY: 'scroll' }}
                        onChange={(event) => {
                            const selected = watersheds.find((w) => w.name === event.target.value);
                            setSelectedWatershed(selected);
                        }}
                    >
                        {watersheds.map((watershed) => (
                            <FormControlLabel
                                key={watershed.name}
                                value={watershed.name}
                                control={<Radio />}
                                label={watershed.name}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
            </FormGroup>
        </FormContainer>

        {selectedWatershed && (
            <FormContainer style={{ alignItems: 'flex-start' }}>
                <Header>Введите площадь пахотных угодий для водосбора {selectedWatershed.name}</Header>
                <InputComponent
                    inputValue={watershedArea || ''}
                    action={(value) => setWatershedArea(parseFloat(value) || 0)}
                    placeholder={`Введите площадь пахотных угодий для ${selectedWatershed.name} в гектарах`}
                />
            </FormContainer>
        )}
         {/* Итоговый расчет */}
         <FormContainer style={{ alignItems: 'flex-start' }}>
            <Header>Результат расчетов</Header>
            <Text>
                Изменение запасов углерода в пуле почвенного органического углерода в минеральных почвах составило за год{' '}
                <b>
                    {(
                        parseFloat(corg || 0) +
                        parseFloat(cmin || 0) +
                        parseFloat(calculatedResult || 0) +
                        parseFloat(calculateTotalCarbon() || 0) +
                        parseFloat(calculateSoilCarbonLoss() || 0) +
                        parseFloat(calculateErosionLoss() || 0)
                    ).toFixed(2)}
                </b>{' '}
                тонн углерода.
            </Text>
        </FormContainer>
    </div>
)}
                
</div>
);
};

export default Stat;
