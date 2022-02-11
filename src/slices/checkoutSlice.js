import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    checkout: {}
}

export const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        filterProducts: (state, action) => {

        }
    },
})

// Action creators are generated for each case reducer function
export const { filterProducts } = checkoutSlice.actions

export default checkoutSlice.reducer