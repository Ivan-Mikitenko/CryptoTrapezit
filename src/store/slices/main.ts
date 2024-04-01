import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: 0
};

export const Menu = createSlice({
	name: 'Menu',
	initialState,

	reducers: {
		addOrder: () => {}
	}
});
