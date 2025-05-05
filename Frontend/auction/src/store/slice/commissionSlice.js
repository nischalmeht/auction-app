import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const commissionSlice = createSlice({
    name: "commission",
    initialState: {
        
        loading: false,
        // error: null,
    },
    reducers: {
        postCommissionProofRequest(state, action) {
            state.loading = true;
          },
          postCommissionProofSuccess(state, action) {
            state.loading = false;
          },
          postCommissionProofFailed(state, action) {
            state.loading = false;
          },
    },
});


export const fetchCommissions = (data) => async (dispatch) => {
    dispatch(commissionSlice.actions.postCommissionProofRequest);
    try {
        const response = await axios.post("/api/commissionBidroute/proof-of-payment",data,
            {
                withCredentials: true,
                headers: { "Content-Type": "multipart/form-data" },
              }
        );
        dispatch(commissionSlice.actions.postCommissionProofSuccess);
        
        toast.success("Commissions fetched successfully!");
    } catch (error) {
        dispatch(commissionSlice.actions.postCommissionProofFailed);        
        toast.error("Failed to fetch commissions.");
    }
};

export default commissionSlice.reducer;