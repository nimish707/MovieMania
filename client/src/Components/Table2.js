import React from 'react'
import { NavLink } from 'react-router-dom';

const Head = "text-xs text-left text-dryGray font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";

const Rows = (movie, i) => {
    return (
        <tr key={i}>
           
            <td className={`${Text}`}>{movie.Plan}</td>
            <td className={`${Text}`}>{movie.PlanName}</td>
            <td className={`${Text}`}>{movie.Devices}</td>
            <td className={`${Text}`}>{movie.Type}</td>
            <td className={`${Text}`}>{movie.Duration}</td>
            <td className={`${Text}`}>{movie.Amount}</td>
            
            <td className={`${Text} text-end`}>
                <NavLink to="/payement">
                <button className='bg-main font-medium transitions hover:bg-subMain border rounded'>
                    Buy Now
                </button>
                </NavLink>
            </td>
        </tr>
    )
};

function Table({ data, admin }) {



    return (
        <div className='overflow-x-scroll overflow-hidden relative w-full'>
            <table className='w-full table-auto border border-border divide-y divide-border'>
                <thead>
                    <tr className='bg-dryGra'>
                        <th scope='col' className={`${Head}`}>
                            Plan
                        </th>
                        <th scope='col' className={`${Head}`}>
                            Plan Name
                        </th>
                        <th scope='col' className={`${Head}`}>
                            Devices
                        </th>
                        <th scope='col' className={`${Head}`}>
                            Type
                        </th>
                        <th scope='col' className={`${Head}`}>
                            Duration
                        </th>
                        <th scope='col' className={`${Head}`}>
                            Amount
                        </th>
                    </tr>
                </thead>
                <tbody className='bg-main divide-y divide-Gray-800'>
                    {data.map((movie, i) => Rows(movie, i))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;
