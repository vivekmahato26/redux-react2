import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
    name: "Products",
    initialState: {
        value: [],
        error: null,
        status: "pending"

    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = "pending";
            state.error = null;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.error = null;
            state.value = action.payload
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        })
    }
})


export const fetchProducts = createAsyncThunk("/fetchProducts", async () => {
    const url = "https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=30&language=en&search=type.slug:grocery%3Bstatus:publish";
    try {
        const { data } = await axios.get(url);
        return data.data;
    } catch (error) {
        return error
    }
})

export default productsSlice;