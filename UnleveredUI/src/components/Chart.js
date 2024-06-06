import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';

export default function ChartComp({}) {

    const stateSelector = useSelector((state)=> state.candle);
    
    const data = stateSelector.candleData;

    let series = stateSelector.series;

    let options = {
        chart: {
            type: 'candlestick',
        },
        title: {
            text: `AAPL`,
            align: 'left',
            style: {
                color: "#800080",
                fontFamily: "Courier",
                fontSize: '26px'
            }
        },
        xaxis: {
            type: 'date'
        },
        yaxis: {
            tooltip: {
                enabled: true
            },
            labels: {
                formatter: function (val) {
                    return "$" + val.toFixed(2);
                }
            }
        }
    };

    return (
        <div className='p-2 w-6/12 mx-auto text-black font-bold bg-white opacity-50'>
            <Chart type='candlestick' width={'100%'} height='300' series={series} options={options} />
        </div>
    )

}