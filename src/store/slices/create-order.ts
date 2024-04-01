import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	summary: 0,
}


export const CreateOrder = createSlice({
	name: 'CreateOrder',
	initialState,

	reducers: {
		addOrder: () => {
		},
	}
});

