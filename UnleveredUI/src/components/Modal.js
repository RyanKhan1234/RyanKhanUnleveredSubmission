import { useState } from 'react';
import Modal from 'react-modal';
import DateRangeComp from './DateRangeComp';
import { useDispatch, useSelector } from 'react-redux';
import { setCandleData, setLoading, setRange, setSeries } from './dataSlice';
import axios from 'axios';
import calcSeries from './calcSeries';
import fetchCandles from './fetchCandles';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderWidth: 2,
        borderColor: '#424242'
    },
};


export default function ModalComp({ }) {

    const stateSelector = useSelector(state => state.candle);
    const dispatch = useDispatch();
    const dateRange = stateSelector.dateRange;
    const [pickedTicker, pickTicker] = useState("");
    const [modalIsOpen, setIsOpen] = useState(false);


    function afterOpenModal() {

    }

    function openModal() {
        setIsOpen(true);
        pickTicker("");
        dispatch(setRange({
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }));
    }

    function closeModal() {
        setIsOpen(false);
    }

    function searchStock() {
        let from = dateRange.startDate;
        let to = dateRange.endDate;

        if (pickedTicker.trim() === "") alert("please enter a stock ticker to fetch!");
        else {
            let fromString = from.toISOString().split('T')[0];
            let toString = to.toISOString().split('T')[0];

            if (fromString === toString) alert("please pick different start and end dates!");
            else {
                dispatch(setLoading(true));
                fetchStock(pickedTicker.trim(), fromString, toString).then(resp => {
                    console.log(resp)
                    if (resp.data?.success) {
                        dispatch(setCandleData(resp.data.data));
                        dispatch(setSeries(calcSeries(resp.data.data)));
                        closeModal();
                    }
                    else alert("error fecthing stock data!");
                    dispatch(setLoading(false));
                }).catch(err => {
                    console.log(err);
                    alert(err.message);
                    dispatch(setLoading(false));
                });
            }
        }
    }

    async function fetchStock(ticker, d1, d2) {
        // const API2 = process.env.REACT_APP_API_TWO;

        // let url = `${API2}?ticker=${ticker}&d1=${d1}&d2=${d2}`;
        
        // let res = await axios.get(url, { headers: { Accept: '*/*', 'Content-Type': "application/json" } });

        // return res;

        let res = await fetchCandles(ticker.trim(), d1, d2).then(candleObj=> {
            console.log("candleObj: ", candleObj);
            if(candleObj) {
                candleObj.Symbol = ticker.trim().toUpperCase();
                return {data:{success: true, data: candleObj}};
            }
            else return {data:{success: false}}
        });

        return res;

    }

    return (
        <div>
            <div className='flex justify-center'><button onClick={openModal} className='bg-blue-400 p-1 rounded-md'>Fetch The Bread</button></div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='flex-row space-y-5 '>
                    <div className='basis-1 font-bold text-gray-700'>Select ticker and date range</div>
                    <div className='basis-1'>
                        <input placeholder='ticker: ex. TSLA' className='p-2 rounded-md border-2 border-gray-500 focus:border-blue-500 focus:outline-none focus:ring-0' onChange={(e) => pickTicker(e.target.value)}></input>
                    </div>
                    <div className='basis-1'><DateRangeComp /></div>
                </div>
                <div className='flex justify-between'>
                    <button onClick={closeModal} className='bg-gray-400 p-1 rounded-md'>close</button>
                    <button onClick={searchStock} className='bg-blue-400 p-1 rounded-md'>fetch</button>
                </div>
            </Modal>
        </div>
    )
}