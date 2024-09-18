// features/orderSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define Order interface
interface Order {
  id: string;
  name: string;
  telNomer: string;
  manzil: string;
  sana: string;
  telegInsta: string;
  status: string;
}

// Define OrderState interface
interface OrderState {
  order: Order | null;
  loading: boolean;
  error: string | null;
}

// Define initial state
const initialState: OrderState = {
  order: null,
  loading: false,
  error: null,
};

// Create Async Thunk for fetching an order by ID
export const getOrderById = createAsyncThunk(
  'order/fetchOrderById',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://6654bb3e1c6af63f46791dbf.mockapi.io/bestposter7/orderId/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue('Xatolik yuz berdi!');
    }
  }
);

// Create the slice
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrderById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOrderById.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(getOrderById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default orderSlice.reducer;
