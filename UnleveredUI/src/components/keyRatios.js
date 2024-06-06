// import React from 'react';

// const KeyRatios = () => {
//     const data = {
//         marketCap: '50B',
//         sharesOutstanding: '500M',
//         peRatio: '25',
//         psRatio: '10',
//         pbRatio: '5',
//         pegRatio: '1.5',
//         currentRatio: '2.0',
//         debtToEquityRatio: '0.8',
//         eps: '3.50',
//     };

//     return (
//         <div className='text-violet-900 border-solid border-4 font-serif montserrat flex flex-col space-y-5'>
//             <h1>Key Ratios</h1>
//             <table>
//                 <tbody className='flex align-top flex-col mr- '>
//                     <tr  className='flex flex-row space-x-5'>
//                         <td className = 'flex-1 text-gray-700 text-center px-4 py-2 m-2 border-solid border-4 border-indigo-600'>Market Cap</td>
//                         <td>{data.marketCap}</td>
//                     </tr>
//                     <tr className='flex flex-row space-x-5'>
//                         <td className = 'flex-1 text-gray-700 text-center px-4 py-2 m- border-solid border-4 border-indigo-600'>Shares Outstanding</td>
//                         <td>{data.sharesOutstanding}</td>
//                     </tr>
//                     <tr className='flex flex-row space-x-5'>
//                         <td className = 'flex-1 text-gray-700 text-center px-4 py-2 m-2 border-solid border-4 border-indigo-600'>P/E Ratio</td>
//                         <td>{data.peRatio}</td>
//                     </tr>
//                     <tr className='flex flex-row space-x-5'>
//                         <td className = 'flex-1 text-gray-700 text-center px-4 py-2 m-2 border-solid border-4 border-indigo-600'>P/S Ratio</td>
//                         <td>{data.psRatio}</td>
//                     </tr>
//                     <tr className='flex flex-row space-x-5'>
//                         <td className = 'flex-1 text-gray-700 text-center px-4 py-2 m-2 border-solid border-4 border-indigo-600'>P/B Ratio</td>
//                         <td>{data.pbRatio}</td>
//                     </tr>
//                     <tr className='flex flex-row space-x-5'>
//                         <td className = 'flex-1 text-gray-700 text-center px-4 py-2 m-2 border-solid border-4 border-indigo-600'>PEG Ratio</td>
//                         <td>{data.pegRatio}</td>
//                     </tr>
//                     <tr className='flex flex-row space-x-5'>
//                         <td className = 'flex-1 text-gray-700 text-center px-4 py-2 m-2 border-solid border-4 border-indigo-600'>Current Ratio</td>
//                         <td>{data.currentRatio}</td>
//                     </tr>
//                     <tr className='flex flex-row space-x-5'>
//                         <td className = 'flex-1 text-gray-700 text-center px-4 py-2 m-2 border-solid border-4 border-indigo-600'>Debt to Equity Ratio</td>
//                         <td>{data.debtToEquityRatio}</td>
//                     </tr>
//                     <tr className='flex flex-row space-x-5'>
//                         <td className = 'flex-1 text-gray-700 text-center px-4 py-2 m-2 border-solid border-4 border-indigo-600'>EPS</td>
//                         <td>{data.eps}</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default KeyRatios;

import React from 'react';

const KeyRatios = () => {
    const data = {
        marketCap: '50B',
        sharesOutstanding: '500M',
        peRatio: '25',
        psRatio: '10',
        pbRatio: '5',
        pegRatio: '1.5',
        currentRatio: '2.0',
        debtToEquityRatio: '0.8',
        eps: '3.50',
    };

    return (
        <div className='text-white border-solid border-2 rounded-md border-indigo-600 montserrat'>
            <h1 className = 'text-center'>Key Ratios</h1>
            <table className='w-full border-collapse border border-indigo-600 rounded-lg'>
                <tbody>
                    <tr>
                        <td className='border border-indigo-600 px-4 py-2'>Market Cap</td>
                        <td className='border border-indigo-600 px-4 py-2'>{data.marketCap}</td>
                    </tr>
                    <tr>
                        <td className='border border-indigo-600 px-4 py-2'>Shares Outstanding</td>
                        <td className='border border-indigo-600 px-4 py-2'>{data.sharesOutstanding}</td>
                    </tr>
                    <tr>
                        <td className='border border-indigo-600 px-4 py-2'>P/E Ratio</td>
                        <td className='border border-indigo-600 px-4 py-2'>{data.peRatio}</td>
                    </tr>
                    <tr>
                        <td className='border border-indigo-600 px-4 py-2'>P/S Ratio</td>
                        <td className='border border-indigo-600 px-4 py-2'>{data.psRatio}</td>
                    </tr>
                    <tr>
                        <td className='border border-indigo-600 px-4 py-2'>P/B Ratio</td>
                        <td className='border border-indigo-600 px-4 py-2'>{data.pbRatio}</td>
                    </tr>
                    <tr>
                        <td className='border border-indigo-600 px-4 py-2'>PEG Ratio</td>
                        <td className='border border-indigo-600 px-4 py-2'>{data.pegRatio}</td>
                    </tr>
                    <tr>
                        <td className='border border-indigo-600 px-4 py-2'>Current Ratio</td>
                        <td className='border border-indigo-600 px-4 py-2'>{data.currentRatio}</td>
                    </tr>
                    <tr>
                        <td className='border border-indigo-600 px-4 py-2'>Debt to Equity Ratio</td>
                        <td className='border border-indigo-600 px-4 py-2'>{data.debtToEquityRatio}</td>
                    </tr>
                    <tr>
                        <td className='border border-indigo-600 px-4 py-2'>EPS</td>
                        <td className='border border-indigo-600 px-4 py-2'>{data.eps}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default KeyRatios;

