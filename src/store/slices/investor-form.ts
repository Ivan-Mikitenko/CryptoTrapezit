import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	activeSum: 0,
}


export const InvestorForm = createSlice({
	name: 'InvestorForm',
	initialState,

	reducers: {
		addOrder: () => {
		},
	}
});
