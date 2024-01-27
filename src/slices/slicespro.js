import { createSlice } from "@reduxjs/toolkit";

const slicespro = createSlice({

    name: 'fooditemsCard',
    initialState: {
        items: []
    },

    reducers: {
        additems: (state, action) => {
            state.items.push(action.payload)
        },

        clearItems : (state) => {
            state.items = null
        }
    }
})

export const { additems , clearItems } = slicespro.actions
export default slicespro.reducer;