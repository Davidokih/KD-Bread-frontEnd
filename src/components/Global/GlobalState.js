import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    product: [],
    cartItem: [],
    qty: 0,
    totalPrice: 0,
};

const GlobalState = createSlice({
    name: "userAuth",
    initialState,
    reducers: {
        // createUser: (state, { payload }) => {
        //     state.user = payload;
        // },
        addProduct: (state, { payload }) => {
            state.product = payload;
        },

        addToCart: (state, { payload }) => {
            const check = state.cartItem.findIndex((el) => el._id === payload._id);

            if (check >= 0) {
                state.cartItem[ check ].qty += 1;
            } else {
                state.cartItem.push({ ...payload, qty: 1 });
            }

            state.qty += 1;
            state.totalPrice += payload.qty * payload.price;
        },

        removeCart: (state, { payload }) => {
            const check = state.cartItem.findIndex((el) => el._id === payload._id);

            if (state.cartItem[ check ].qty > 1) {
                state.cartItem[ check ].qty -= 1;
            } else {
                state.cartItem = state.cartItem.filter((el) => el._id !== payload._id);
            }
            state.qty -= 1;
            state.totalPrice -= payload.price;
        },

        signOut: (state) => {
            state.user = null;
        }
    }
});

export const { signOut, addProduct, addToCart, removeCart } = GlobalState.actions;

export default GlobalState.reducer;