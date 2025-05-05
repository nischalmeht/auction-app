// import { Routes, Route, useLocation } from "react-router-dom";

// import './App.css';
// import SideDrawer from './layout/SideDrawer';
// import Login from './pages/Login';
// import SignUp from './pages/SignUp';
// import Contact from './pages/Contact';
// import UserProfile from './pages/userProfile';
// import About from './pages/About';
// import ViewmyAuction from './pages/ViewmyAuction';
// import HowitWorks from './pages/HowitWorks';
// import LeaderBoard from './pages/LeaderBoard';
// import SubmitCommission from './pages/SubmitCommission';
// import ViewAuctionDetails from './pages/ViewAuctionDetails';
// import AuctionItem from './pages/AuctionItem';
// import Home from './pages/Home';
// import Auctions from './pages/Auctions';
// import CreateAuction from './pages/createAuction';

// function App() {
//   const location = useLocation();
//   const hideSideDrawerPaths = ['/sign-up', '/login'];
//   const shouldShowSideDrawer = !hideSideDrawerPaths.includes(location.pathname);

//   return (
//     <div className="app-container" style={{ display: 'flex' }}>
//       {shouldShowSideDrawer && <SideDrawer />}
//       <div className="page-content" style={{ flex: 1 }}>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/auctions' element={<Auctions />} />
//           <Route path='/sign-up' element={<SignUp />} />
//           <Route path='/login' element={<Login />} />
//           <Route path='/submit-commission' element={<SubmitCommission />} />
//           <Route path='/how-it-works-info' element={<HowitWorks />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/leaderboard' element={<LeaderBoard />} />
//           <Route path='/auction/item/:id' element={<AuctionItem />} />
//           <Route path='/view-my-auctions' element={<ViewmyAuction />} />
//           <Route path='/auction/details/:id' element={<ViewAuctionDetails />} />
//           <Route path='/contact' element={<Contact />} />
//           <Route path='/me' element={<UserProfile />} />
//           <Route path='/create-auction' element={<CreateAuction />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideDrawer from './layout/SideDrawer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Contact from './pages/Contact';
import UserProfile from './pages/userProfile';
import About from './pages/About';
import ViewmyAuction from './pages/ViewmyAuction';
import HowitWorks from './pages/HowitWorks';
import LeaderBoard from './pages/LeaderBoard';
import SubmitCommission from './pages/SubmitCommission';
import ViewAuctionDetails from './pages/ViewAuctionDetails';
import AuctionItem from './pages/AuctionItem';
import Home from './pages/Home';
import Auctions from './pages/Auctions';
import CreateAuction from './pages/createAuction';
import { ToastContainer } from "react-toastify";
import { fetchLeaderboard, fetchUser } from "./store/slice/userSlice";
import { getAllAuctionItems } from "./store/slice/auctionSlice";
import { useDispatch } from "react-redux";



const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(getAllAuctionItems());
    dispatch(fetchLeaderboard());
  }, []);


  return (
    // <Router>
    //   <SideDrawer />
    //   {/* <ToastContainer position="top-right" /> */}
    // </Router>
   
    <Router>

    <SideDrawer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/submit-commission" element={<SubmitCommission />} />
        <Route path="/how-it-works-info" element={<HowitWorks />} />
        <Route path="/about" element={<About />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/auctions" element={<Auctions />} />
        <Route path="/auction/item/:id" element={<AuctionItem />} />
        <Route path="/create-auction" element={<CreateAuction />} />
        <Route path="/view-my-auctions" element={<ViewmyAuction />} />
        <Route path="/auction/details/:id" element={<ViewAuctionDetails />} />
        {/* <Route path="/dashboard" element={<Dashboar />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/me" element={<UserProfile />} />
      </Routes>
      <ToastContainer position="top-right" />
    </Router>
    
  );
};

export default App;