import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { coordApi } from "../api/coord-api";

const name = 'coord';

/** initialState */
const initialState = {
  lat: '',
  lon: ''
}

/** async Thunk */
export const retrieveCoord = createAsyncThunk(`${name}/retrieveCoord`, async (payload, { rejectWithValue }) => {
  try {
    const { lat, lon } = await coordApi();
    return { lat, lon }
  }
  catch (err) {
    return rejectWithValue(err.response.data)
  }
});

/** reducers */
// dispatch(resetCoord('abc')); action.payload
// resetCoord(state, action) {
const reducers = {
  resetCoord(state, { payload }) { 
    state.lat = '';
    state.lon = '';
  }
}


/* const extraReducers = {
  [retrieveCoord.pending](state, action){
    state.lat = '';
    state.lon = '';
  },
  [retrieveCoord.fulfilled](state, action){
    state.lat = action.payload.lat;
    state.lon = action.payload.lon;
  },
  [retrieveCoord.rejected](state, action){
    state.lat = '';
    state.lon = '';
  },
} */


const extraReducers = builder => builder
.addCase(retrieveCoord.pending, (state, { payload }) => {
  state.lat = '';
  state.lon = '';
})
.addCase(retrieveCoord.fulfilled, (state, { payload }) => {
  state.lat = payload.lat;
  state.lon = payload.lon;
})
.addCase(retrieveCoord.rejected, (state, { payload }) => {
  state.lat = '';
  state.lon = '';
});

/* coord/retrieveCoord/pending
coord/retrieveCoord/pending
coord/retrieveCoord/pending
coord/resetCoord */


const coordSlice = createSlice({ name, initialState, reducers, extraReducers });

export const { resetCoord } = coordSlice.actions;
export default coordSlice;