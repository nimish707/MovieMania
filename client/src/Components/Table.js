import React from 'react'

const Head = "text-xs text-left text-dryGray font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";

const Rows = (movie, i) => {
    return (
        <tr key={i}>
            <td className={`${Text}`}>
                <div className='w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden'>
                    <img className='h-full w-full object-cover' src={`/images/movie/${movie.image}`} alt={movie?.title} />
                </div>
            </td>
            <td className={`${Text}`}>{movie.title}</td>
            <td className={`${Text}`}>{movie.genre}</td>
            <td className={`${Text}`}>{movie.duration}</td>
            <td className={`${Text}`}>{movie.director}</td>
            <td className={`${Text}`}>{movie.year}</td>
            <td className={`${Text} text-end`}>
                <button className='bg-main font-medium transitions hover:bg-subMain border'>
                    Delete
                </button>
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
                            Image
                        </th>
                        <th scope='col' className={`${Head}`}>
                            Name
                        </th>
                        <th scope='col' className={`${Head}`}>
                            Category
                        </th>
                        <th scope='col' className={`${Head}`}>
                            Hours
                        </th>
                        <th scope='col' className={`${Head}`}>
                            Director
                        </th>
                        <th scope='col' className={`${Head}`}>
                            Year
                        </th>
                        <th scope='col' className={`${Head}`}>
                            Actions
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

export default Table
