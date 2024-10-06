import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GET_TRAVELDATA_API_URL } from '../../utils/apiUrl';
import { getRequest } from '../../utils/requestMethods';

const getItemsFetchThunk = (actionType, apiURL) => {
  return createAsyncThunk(actionType, async (project_idx) => {
    // console.log(apiURL, userId);
    const fullPath = `${apiURL}/${project_idx}`;
    return await getRequest(fullPath);
  });
};

export const fetchGetItemsData = getItemsFetchThunk(
  'fetchGetItems',
  GET_TRAVELDATA_API_URL
);

const handleFullfilled = (stateKey) => (state, action) => {
  state[stateKey] = action.payload;
};

const handleRejected = (state, action) => {
  console.log(action.payload);
  state.isError = true;
};

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    getItemsData: null,
    // postItemData: null,
    // deleteItemData: null,
    // updateCompletedData: null,
    // updatePutData: null,
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchGetItemsData.fulfilled, handleFullfilled('getItemsData'))
      .addCase(fetchGetItemsData.rejected, handleRejected);
    // .addCase(fetchPostItemData.fulfilled, handleFullfilled('postItemData'))
    // .addCase(fetchPostItemData.rejected, handleRejected)
    // .addCase(
    //   fetchDeleteItemData.fulfilled,
    //   handleFullfilled('deleteItemData')
    // )
    // .addCase(fetchDeleteItemData.rejected, handleRejected)
    // .addCase(
    //   fetchupdateCompletedData.fulfilled,
    //   handleFullfilled('updateCompletedData')
    // )
    // .addCase(fetchupdateCompletedData.rejected, handleRejected)
    // .addCase(fetchPutItemData.fulfilled, handleFullfilled('updatePutData'))
    // .addCase(fetchPutItemData.rejected, handleRejected);
  },
});

export default apiSlice.reducer;
