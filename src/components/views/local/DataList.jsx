import React from "react";

import css from "../../styles/dataList.css.js";
import { useNavigate } from "react-router-dom";

const { DataContainer, ContentLine, ContentCell, ButtonsLine, ButtonItem } = css;


const DataList = (props) => {

        
    const { data = [], setShow, viewType } = props;
    const navigate = useNavigate();
    const filterData = data.filter(item => item.split('::')[1] === viewType)
    const filterDataSumm = data.filter(item => item.split('::')[1] === viewType)
    .reduce((summ, item) => {

        console.log(item.split('::')[0])
        return summ = summ + +(item.split('::')[0] )

    }, 0)

    const filterDataDelta = data
    .reduce((summ, item) => {

        if (item.split('::')[1] === 'доход') {
            return summ = summ + +(item.split('::')[0] )
        } else {
            return summ = summ - +(item.split('::')[0])
        }

    }, 0)






    const reduceDataType1 = () => {
        navigate('/stat/доход')
        setShow(false)
    }
    const reduceDataType2 = () => {
        navigate('/stat/расход')
        setShow(true)
    }
    const reduceDataType3 = () => navigate('/stat/общее')



   

    return (
        <React.Fragment>
            <ButtonsLine>
                    <ButtonItem style={{ fontWeight: viewType === 'доход' ? 'bold' : '' }} onClick={reduceDataType1}>доходы</ButtonItem>
                    <ButtonItem style={{ fontWeight: viewType === 'расход' ? 'bold' : '' }} onClick={reduceDataType2}>расходы</ButtonItem>
                    <ButtonItem style={{ fontWeight: viewType === '' ? 'bold' : '' }} onClick={reduceDataType3}>общее</ButtonItem>
                </ButtonsLine>
            <DataContainer>
                {/* {console.log(filterData)} */}
                {filterData.length > 0  && <React.Fragment>
                    { filterData.map((item,index) => {
                        return (
                            <ContentLine key={index} style={{ marginBottom: '10px' }}>
                                <ContentCell width={"20%"}>{item.split('::')[0]}</ContentCell>
                                <ContentCell width={"20%"}>{item.split('::')[1]}</ContentCell>
                                <ContentCell width={"60%"}>{item.split('::')[2]}</ContentCell>
                            </ContentLine>
                        )
                    })}
                    <ContentLine >
                        <ContentCell width={"20%"}>{filterDataSumm}</ContentCell>
                        <ContentCell width={"20%"}>--</ContentCell>
                        <ContentCell width={"60%"}>--</ContentCell>
                    </ContentLine>
                </React.Fragment>}
                {filterData.length === 0 && <React.Fragment>
                    { data.map((item,index) => {
                        {console.log(filterData)}
                        return (
                            <ContentLine key={index} style={{ marginBottom: '10px' }}>
                                <ContentCell width={"20%"}>{item.split('::')[0]}</ContentCell>
                                <ContentCell width={"20%"}>{item.split('::')[1]}</ContentCell>
                                <ContentCell width={"60%"}>{item.split('::')[2]}</ContentCell>
                            </ContentLine>
                        )
                    })}
                    <ContentLine >
                        <ContentCell width={"20%"}>{filterDataDelta}</ContentCell>
                        <ContentCell width={"20%"}>--</ContentCell>
                        <ContentCell width={"60%"}>--</ContentCell>
                    </ContentLine>
                </React.Fragment>}

            </DataContainer>
        </React.Fragment>
    )
    };

export default DataList;