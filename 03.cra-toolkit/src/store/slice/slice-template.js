import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const name = '';

/** initialState */
const initialState = {
  
}

/** async Thunk */
export const asyncAction = createAsyncThunk(`${name}/asyncAction`, async (payload, thunkApi) => {

});

/** reducers */
const reducers = {
  syncAction(state, action) {
    
  }
}

const extraReducers = builder => builder
.addCase(`${name}.pending`, (state, action) => {

})
.addCase(`${name}.fulfilled`, (state, action) => {

})
.addCase(`${name}.rejected`, (state, action) => {

})





export default createSlice({ name, initialState, reducers, extraReducers });