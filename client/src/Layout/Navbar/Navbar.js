import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { FaSearch, FaHeart } from 'react-icons/fa';
import { CgUser } from 'react-icons/cg';

function Navbar() {
    const Hover="hover:text-subMain";
    return (
        <>
            <div className='bg-main shadow-md sticky top-0 z-20'>
                <div className='container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center'>
                    {/*Logo*/}
                    <div className='cols-span-1 lg:block hidden'>
                        <Link to="/homescreen">
                            <img src="/images/Logo.svg" alt="logo" className='w-full h-10 object-contain' />
                        </Link>
                    </div>
                    {/*Search Form */}
                    <div className="col-span-3">
                        <form className="w-full h-10 text-sm bg-dryGray rounded flex-btn gap-4">
                            <button type="submit" className='bg-subMain w-10 flex-colo h-10 rounded text-white'>
                                < FaSearch className='w-10' />
                            </button>
                            <input type="text" placeholder='Search movie name here' className='font-medium placeholder:text-border text-sm w-11/12 h-10 bg-transparent border:none px-2 text-black'/>
                        </form>
                        </div>
                    
                {/*Menus*/}
                <div className="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:jstify-end items-center">
                    <NavLink to="/movies" className={Hover}>
                        Movies
                    </NavLink>
                    <NavLink to="/about-us" className={Hover}>
                        AboutUS
                    </NavLink>
                    <NavLink to="/contact-us" className={Hover}>
                        ContactUs
                    </NavLink>
                    <NavLink to="/profile" className={Hover}>
                        <CgUser className="w-8 h-8" />
                    </NavLink>
                    <NavLink to="/plan" className={Hover}>
                        Plans
                    </NavLink>
                </div>
            </div>
            </div>
        </>
    );
}

export default Navbar;