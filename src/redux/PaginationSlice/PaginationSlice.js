// paginationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
        currentPage: 1,
        totalCount: 0,
        itemsPerPage: 20,
    },
    reducers: {
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setTotalCount(state, action) {
            state.totalCount = action.payload;
        },
    },
});

export const { setCurrentPage, setTotalCount } = paginationSlice.actions;

export const selectCurrentPage = (state) => state.pagination.currentPage;
export const selectTotalCount = (state) => state.pagination.totalCount;

export default paginationSlice.reducer;
