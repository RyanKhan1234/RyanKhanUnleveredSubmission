import React from 'react';

const AnalystEstimates = () => {
    const estimates = {
        "BoofA": 4.4,
        "Citibank": 6.5,
        "Goldman Sachs": 7.9,
        "Morgan Stanley": 9.87,
        "J.P Morgan": 6.9,
        "Moelis": 4.2,
        "Lazard": 8.0,
        "Evercore": 9.9,
        "Wells Fargo": 7.1
    };

    return (
        <div className='text-violet-300 montserrat border-solid border-2 rounded-md border-indigo-600'>
            <h2 className='text-center'>Analyst Estimates</h2>
            <table className='w-full border-collapse border border-indigo-600'>
                <tbody>
                    {Object.entries(estimates).map(([analyst, estimate]) => (
                        <tr key={analyst}>
                            <td className='border border-indigo-600 px-4 py-2'>{analyst}</td>
                            <td className='border border-indigo-600 px-4 py-2'>{estimate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AnalystEstimates;
