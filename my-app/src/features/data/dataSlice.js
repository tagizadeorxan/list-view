import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData } from './dataAPI';

const initialState = {
 data:[]
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getData = createAsyncThunk(
  'data/fetchCount',
  async () => {
    const response = await fetchData();
    console.log(response.results)
   
    // The value we return becomes the `fulfilled` action payload
    return response.results
  }
);

export const counterSlice = createSlice({
  name: 'data',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers:(builder) => {
    builder.addCase(getData.fulfilled,(state,action)=> {
      state.data = action.payload
    })
  }
});



export default counterSlice.reducer;
