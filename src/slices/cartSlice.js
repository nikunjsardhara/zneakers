import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {

            let found = state.cart.some((cart_p) => cart_p.id === action.payload.id);
            if (found) {
                let toUpdate = state.cart.filter((cart_p) => cart_p.id === action.payload.id);
                toUpdate[0].quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
            console.log(state.cart);
        },
        increaseQuantity: (state, action) => {
            let found = state.cart.some((cart_p) => cart_p.id === action.payload.id);
            if (found) {
                found.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            let found = state.cart.some((cart_p) => cart_p.id === action.payload.id);
            if (found) {
                found.quantity -= 1;
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer