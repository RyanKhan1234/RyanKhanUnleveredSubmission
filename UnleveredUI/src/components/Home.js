// import ChartComp from './Chart';
// import data from './data.json';
// import './Home.css'
// import ModalComp from './Modal';
// import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';
// import { setCandleData, setSeries } from './dataSlice';
// import calcSeries from './calcSeries';
// import KeyRatios from './keyRatios';
// import StockDataComponent from './news';
// import AnalystEstimates from './analaystEstimates';
// import Articles from './articles';
// import Unleverednav from './navbar'
// import { Container } from 'react-bootstrap';
// function Home() {

//     const dispatch = useDispatch();

//     async function loadStock() {
//         let dateTo = new Date();
//         let dateFrom = new Date(dateTo - (2.628 * Math.pow(10, 9)));
//         let to = dateTo.toISOString().split('T')[0];
//         let from = dateFrom.toISOString().split('T')[0];

//         const API1 = process.env.REACT_APP_API;
//         let url = `${API1}?from=${from}&to=${to}&format=json&human=true&dateformat=timestamp`;
//         let res = await axios.get(url);
//         return res;
//     }

//     loadStock().then(resp => {
//         if (resp.status===200) {
//             resp.data.Symbol = 'AAPL';
//             dispatch(setCandleData(resp.data));
//             dispatch(setSeries(calcSeries(resp.data)));
//         }
//         else if (resp.status===404 ) {
//             resp.data.Symbol = 'AAPL';
//             dispatch(setCandleData(data.data));
//             dispatch(setSeries(calcSeries(data.data)));
//         }
//         else alert("error fetching sample stock data");
//     }).catch(err=>{
//         console.log(err);
//         dispatch(setCandleData(data.data));
//         dispatch(setSeries(calcSeries(data.data)));
//     })

//     return (
//         <div className=' flex flex-col min-h-screen  bg-black bg-opacity-90'>
//             <div>
//                 <Unleverednav />
//             </div>
//             <div>
//                 <ChartComp data={data.data} /> 
//             </div>
//             <Container className='flex bg-gray-900'>
//             <div className= 'mx-auto'>
//                 <KeyRatios/>
//             </div>
//             <div className= 'mx-auto'>
//                 <AnalystEstimates/>
//             </div>
//             <div className= 'w-full lg:w-1/3'>
//                 <Articles/>
//             </div>
//             </Container>
//         </div>
//     )
// }

// export default Home;

import React, { useEffect } from 'react';
import ChartComp from './Chart';
import data from './data.json';
import './Home.css';
import ModalComp from './Modal';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setCandleData, setSeries } from './dataSlice';
import calcSeries from './calcSeries';
import KeyRatios from './keyRatios';
import StockDataComponent from './news';
import AnalystEstimates from './analaystEstimates';
import Articles from './articles';
import Unleverednav from './navbar';
import { Container } from 'react-bootstrap';

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadStock() {
            let dateTo = new Date();
            let dateFrom = new Date(dateTo - (2.628 * Math.pow(10, 9)));
            let to = dateTo.toISOString().split('T')[0];
            let from = dateFrom.toISOString().split('T')[0];

            const API1 = process.env.REACT_APP_API;
            let url = `${API1}?from=${from}&to=${to}&format=json&human=true&dateformat=timestamp`;
            let res = await axios.get(url);
            return res;
        }

        loadStock().then(resp => {
            if (resp.status === 200) {
                resp.data.Symbol = 'AAPL';
                dispatch(setCandleData(resp.data));
                dispatch(setSeries(calcSeries(resp.data)));
            } else if (resp.status === 404) {
                resp.data.Symbol = 'AAPL';
                dispatch(setCandleData(data.data));
                dispatch(setSeries(calcSeries(data.data)));
            } else {
                alert("error fetching sample stock data");
            }
        }).catch(err => {
            console.log(err);
            dispatch(setCandleData(data.data));
            dispatch(setSeries(calcSeries(data.data)));
        });
    }, [dispatch]);

    return (
        <div className='flex flex-col min-h-screen bg-black bg-opacity-90 montserrat'>
            <div>
                <Unleverednav />
            </div>
            <div>
                <ChartComp data={data.data} />
            </div>
            <Container className='flex bg-gray-900'>
                <div className='flex-1 mx-auto'>
                    <KeyRatios />
                </div>
                <div className='flex-1 mx-auto'>
                    <AnalystEstimates />
                </div>
                <div className='flex-1 mx-auto'>
                    <Articles />
                </div>
            </Container>
        </div>
    );
}

export default Home;
