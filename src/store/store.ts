import {configureStore} from "@reduxjs/toolkit";
import {CreateOrder} from "./slices/create-order.ts";
import {Menu} from "./slices/main.ts";
import {InvestorForm} from "./slices/investor-form.ts";

export const store = configureStore({
	reducer: {
		CreateOrder: CreateOrder.reducer,
		Menu: Menu.reducer,
		InvestorForm: InvestorForm.reducer
	},
});
