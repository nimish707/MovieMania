import React from 'react';
import { BsFillGridFill } from "react-icons/bs";
import { FaHeart, FaUsers, FaListAlt } from 'react-icons/fa';
import { FiSettings,FiLogOut } from 'react-icons/fi';
import { HiViewGridAdd } from 'react-icons/hi';
import { RiMovie2Fill, RiLockPasswordLine } from 'react-icons/ri';
import Layout from '../../Layout/Layout';
import { NavLink } from 'react-router-dom';

function SideBar({children}) {
    const sideLinks = [
        // {
        //     name: "Dashboard",
        //     link: "/dashboard",
        //     icons: BsFillGridFill
        // },
        {
            name: "Movie List",
            link: "/moviesList",
            icons: FaListAlt
        },

        // {
        //     name: "Add Movie",
        //     link: "/addmovie",
        //     icons: RiMovie2Fill
        // },
        // {
        //     name: "Categories",
        //     link: "/categories",
        //     icons: HiViewGridAdd
        // },
        // {
        //     name: "Users",
        //     link: "/users",
        //     icons: FaUsers
        // },
        {
            name: "Update Profile",
            link: "/profile",
            icons: FiSettings
        },
        {
            name: "Favourite Movies",
            link: "/favourites",
            icons: FaHeart
        },
        {
            name: "Change Passsword",
            link: "/password",
            icons: RiLockPasswordLine
        },
        {
            name: "Logout",
            link: "/",
            icons: FiLogOut
        },
    ];

    const active = "bg-dryGray text-subMain";
    const hover = "hover:text-white hover:bg-main";
    const inActive = "rounded font-medium text-sm transitions flex gap-3 items-center p-4";

    const Hover = ({ isActive }) =>
        isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;


    return (
        <Layout>
            <div className='min-h-screen conatiner mx-auto px-2'>
                <div className='xl:grid grid-cols-8 gap-10 items-start md:py-12 py-6'>
                    <div className='col-span-2 sticky bg-dry border border-gray-800 p-6 rounded-md xl:mb-0 mb-5'>
                        {
                        //  Sidebar Links 
                            sideLinks.map((link, index) => (
                                <NavLink to={link.link} key={index} className={Hover}>
                                    <link.icons /><p>{link.name}</p>
                                </NavLink>
                            ))
                        }
                    </div>
                    <div 
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="10"
                    data-aos-offset="200"
                    className='col-span-6 rounded-md bg-dry border border-gray-800 p-6'>
                        {children}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SideBar
