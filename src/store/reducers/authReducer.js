import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../api/api";
import {jwtDecode} from "jwt-decode";

export const customer_register = createAsyncThunk(
    'auth/customer_register',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post('/customer-register', info, {withCredentials: true});
            localStorage.setItem('customerToken', data.token)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const customer_login = createAsyncThunk(
    'auth/customer_login',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post('/customer-login', info, {withCredentials: true});
            localStorage.setItem('customerToken', data.token)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

const decodeToken = (token) => {
    if (token) {
        return jwtDecode(token)
    } else {
        return ''
    }
}

export const authReducer = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        userInfo: decodeToken(localStorage.getItem('customerToken')),
        errorMessage: "",
        successMessage: "",
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = "";
            state.successMessage = "";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(customer_register.pending, (state, { payload }) => {
                state.loading = true;
            })
            .addCase(customer_register.rejected, (state, { payload }) => {
                state.loading = false;
                state.errorMessage = payload.error;
            })
            .addCase(customer_register.fulfilled, (state, { payload }) => {
                const userInfo = decodeToken(payload.token);
                state.loading = false;
                state.successMessage = payload.message;
                state.userInfo = userInfo;
            })
            .addCase(customer_login.pending, (state, { payload }) => {
                state.loading = true;
            })
            .addCase(customer_login.rejected, (state, { payload }) => {
                state.loading = false;
                state.errorMessage = payload.error;
            })
            .addCase(customer_login.fulfilled, (state, { payload }) => {
                const userInfo = decodeToken(payload.token);
                state.loading = false;
                state.successMessage = payload.message;
                state.userInfo = userInfo;
            })
    }
})

export const {messageClear} = authReducer.actions
export default authReducer.reducer
