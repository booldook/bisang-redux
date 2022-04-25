import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const name = 'coord';

/** initialState */
const initialState = {

}

/** async Thunk */
export const retrieveUser = createAsyncThunk();

/** reducers */
const reducers = () => {

}

const extraReducers = () => {

} 




export default createSlice({ name, initialState, reducers, extraReducers });