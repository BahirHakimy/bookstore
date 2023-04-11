const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  categories: [],
  status: '',
};

const categorySlice = createSlice({
  initialState,
  name: 'categories',
  reducers: {
    checkStatus: (state) => ({
      ...state,
      status: 'Under construction',
    }),
  },
});

export const { checkStatus } = categorySlice.actions;
export default categorySlice.reducer;
