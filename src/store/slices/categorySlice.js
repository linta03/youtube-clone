import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name:"video",
    initialState:{
        video:[]
    },
    reducers:{
        handleVideo:(state,action)=>{
                 state.video = action.payload
        }
    }
    
})
export const {handleVideo} = categorySlice.actions
export default categorySlice.reducer;