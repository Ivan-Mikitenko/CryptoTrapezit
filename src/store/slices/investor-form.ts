import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
	activeSum: 0,
}


export const InvestorForm = createSlice({
	name: 'InvestorForm',
	initialState,

	reducers: {
		addOrder: (state, action: PayloadAction<string>) => {
		},
	}
});
