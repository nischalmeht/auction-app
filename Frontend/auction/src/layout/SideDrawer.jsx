import React, { useState } from "react";
import { RiAuctionFill } from "react-icons/ri";
import { MdLeaderboard, MdDashboard } from "react-icons/md";
import { SiGooglesearchconsole } from "react-icons/si";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline, IoIosCreate } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { BrowserRouter, Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slice/userSlice";

const SideDrawer = () => {
    const [show, setShow] = useState(false);
    const {isAuthenticated,user} = useSelector((state) => state.user);

    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())  
    }
    
    
    return (
        <>
            <div
                onClick={() => setShow(!show)}
                className="fixed right-5 top-5 bg-[#D6482B] text-white text-3xl p-2 rounded-md hover:bg-[#b8381e] lg:hidden"
            >
                <GiHamburgerMenu />
            </div>
            <div
                className={`w-[100%] sm:w-[300px] bg-[#f6f4f0] h-full fixed top-0 ${show ? "left-0" : "left-[-100%]"
                    } transition-all duration-100 p-4 flex flex-col justify-between lg:left-0 border-r-[1px] border-r-stone-500`}
            >
                <div className="relative">
                    <h4 className="text-2xl font-semibold mb-4">
                        Prime<span className="text-[#D6482b]">Bid</span>
                    </h4>
                    <ul className="flex flex-col gap-3">
                  
                            <li>
                                <Link
                                    to={"/auctions"}
                                    className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
                                >
                                    <RiAuctionFill /> Auctions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/leaderboard"}
                                    className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
                                >
                                    <MdLeaderboard /> Leaderboard
                                </Link>
                            </li>
                            {isAuthenticated && user && user.role === "Auctioneer" && (
                                <>
                                    <li>
                                        <Link
                                            to={"/submit-commission"}
                                            className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
                                        >
                                            <FaFileInvoiceDollar /> Submit Commission
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/create-auction"}
                                            className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
                                        >
                                            <IoIosCreate /> Create Auction
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/view-my-auctions"}
                                            className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
                                        >
                                            <FaEye /> View My Auctions
                                        </Link>
                                    </li>
                                </>
                            )}
                            {isAuthenticated && user && user.role === "Super Admin" && (
                                <>
                                    <li>
                                        <Link
                                            to={"/submit-commission"}
                                            className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
                                        >
                                            <FaFileInvoiceDollar /> Submit Commission
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/create-auction"}
                                            className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
                                        >
                                            <IoIosCreate /> Create Auction
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/view-my-auctions"}
                                            className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
                                        >
                                            <FaEye /> View My Auctions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/dashboard"}
                                            className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
                                        >
                                            <MdDashboard /> Dashboard
                                        </Link>
                                    </li>

                                </>
                            )}
                            {!isAuthenticated ? (<>
                                <div className="my-4 flex gap-2">
                                    <NavLink
                                        to={{
                                            pathname: "/sign-up",
                                            
                                          }}
                                        className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl py-1 px-4 rounded-md text-white"
                                    >
                                        Sign Up
                                    </NavLink>
                                    <Link
                                     to={{
                                        pathname: "/login",
                                        
                                      }}
                                        className="text-[#DECCBE] bg-transparent border-[#DECCBE] border-2 hover:bg-[#fffefd] hover:text-[#fdba88] font-bold text-xl py-1 px-4 rounded-md"
                                    >
                                        Login
                                    </Link>
                                </div>
                            </>) :
                                <>
                                    <div className="my-4 flex gap-4 w-fit" >
                                        <button onClick={handleLogout} className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl py-1 px-4 rounded-md text-white">
                                            Logout
                                        </button>
                                    </div>
                                </>
                            }
                            <hr className="mb-4 border-t-[#d6482b]" />
                            <ul className="flex flex-col gap-3">
                            {isAuthenticated && (                                
                                <li>
                                    <Link
                                        to={"/me"}
                                        className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
                                    >
                                        <FaUserCircle /> Profile
                                    </Link>
                                </li>
                            )}
                            </ul>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default SideDrawer