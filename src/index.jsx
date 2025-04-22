import React, {useState} from "react";
import App from "./App";
import Stat from "./components/pages/stat";
import Head from "./components/views/global/head";
import Plan from "./components/pages/plan";
import { Routes, Route } from 'react-router-dom'



const Main = () => {
    const [data, setData ] = useState([])
    const [ ,setShowPage] = useState('main');

    return (


        <React.Fragment>
            <Head action={setShowPage}> </Head>
            <Routes>
                <Route
                    path={"/stat/:viewType"}
                    element={<App action={setData}/>}
                />
                <Route
                    path={"/main"}
                    element={<Stat statData ={data}/>}
                />
                <Route
                    path={"/plan"}
                    element={<Plan testProp = {'Nik'}/>}
                />
                <Route
                    path={"*"}
                    element={<App action={setData}/>}
                />
            </Routes>
            
        </React.Fragment>

    );
}

export default Main;