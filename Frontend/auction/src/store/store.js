import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import commissionReducer from "./slice/commissionSlice";
import auctionReducer from "./slice/auctionSlice";
import bidReducer from "./slice/bidSlice";
import superAdminReducer from "./slice/superAdminSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    commission: commissionReducer,
    auction: auctionReducer,
    bid: bidReducer,
    superAdmin: superAdminReducer,
  },
});