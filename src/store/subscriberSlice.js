import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSubscibers = createAsyncThunk(
  "subscribers/fetchSubscribers",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error('SERVER ERROR!');
      }
        const data = await response.json();
        return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

const subscriberSlice = createSlice({
  name: "subscribers",
  initialState: {
    subscribers: [],
    status: null,
    error: null,
  },
  reducers: {
    addSubscriber(state, action) {
      state.subscribers.push({
        id: new Date().toISOString(),
        name: action.payload.name,
        email: action.payload.email,
      });
    },
    removeSubscriber(state, action) {
      state.subscribers = state.subscribers.filter(
        (subscriber) => subscriber.email !== action.payload.subscriber.email
      );
    },
    getSubscribers(state, action) {},
  },
  extraReducers: {
    [fetchSubscibers.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchSubscibers.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.subscribers = action.payload;
    },
    [fetchSubscibers.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { addSubscriber, removeSubscriber, getSubscribers } =
  subscriberSlice.actions;

export default subscriberSlice.reducer;
