import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../api/api";

export const place_order = createAsyncThunk(
    'order/place_order',
    async ({price, products, shipping_fee, items, shippingInfo, userId,navigate}, {fulfillWithValue, rejectWithValue}) => {
        try {
            const {data} = await api.post('/home/order/place-order', {
                price, products, shipping_fee, items, shippingInfo, userId, navigate
            })
            navigate('/payment', {
                state: {
                    price: price + shipping_fee,
                    items,
                    orderId: data.orderId,
                }
            })
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const get_orders = createAsyncThunk(
    'order/get_orders',
    async ({customerId, status}, {fulfillWithValue, rejectWithValue}) => {
        try {
            const {data} = await api.get(`/home/customer/get-orders/${customerId}/${status}`)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const get_order_details = createAsyncThunk(
    'order/get_order_details',
    async (orderId, {fulfillWithValue, rejectWithValue}) => {
        try {
            const {data} = await api.get(`/home/customer/get-order-details/${orderId}`)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const orderReducer = createSlice({
    name: "order",
    initialState: {
        myOrders: [],
        errorMessage: '',
        successMessage: '',
        myOrder: [],
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = "";
            state.successMessage = "";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(get_orders.fulfilled, (state, { payload }) => {
                state.myOrders = payload.myOrders;
            })
            .addCase(get_order_details.fulfilled, (state, { payload }) => {
                state.myOrder = payload.myOrder;
            })
    }
})

export const {messageClear} = orderReducer.actions
export default orderReducer.reducer;
