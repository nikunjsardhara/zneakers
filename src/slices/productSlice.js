import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: []
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        filterProducts: (state, action) => {

        }
    },
})

// Action creators are generated for each case reducer function
export const { filterProducts } = productSlice.actions

export default productSlice.reducer