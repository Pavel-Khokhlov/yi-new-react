import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { BASE_URL } from "../utils/config";

export const fetchSubsciber = createAsyncThunk(
  "subscribers/fetchSubsciber",
  async function ({ name, email }, thunkAPI) {
    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });
      let data = await response.json();
      if (response.ok) {
        return { ...data, name: name, email: email };
      } else {
        return thunkAPI.rejectWithValue(data.message);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteSubscriber = createAsyncThunk(
  "subscribers/deleteSubscriber",
  async function (email, thunkAPI) {
    try {
      const response = await fetch(BASE_URL, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      });
      let data = await response.json();
      if (response.ok) {
        return { ...data, email: email };
      } else {
        return thunkAPI.rejectWithValue(data.message);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.status = false;
  state.error = action.payload;
};

const setLoading = (state) => {
  state.status = "loading";
      state.tooltip = null;
      state.error = null;
};

const subscriberSlice = createSlice({
  name: "subscribers",
  initialState: {
    subscriber: {},
    tooltip: null,
    status: null,
    error: null,
  },
  extraReducers: {
    [fetchSubsciber.pending]: setLoading,
    [deleteSubscriber.pending]: setLoading,
    [fetchSubsciber.fulfilled]: (state, action) => {
      state.status = true;
      state.error = null;
      state.tooltip = {
        name: action.payload.name,
        message: `Cпасибо за подписку!`,
      };
    },
    [deleteSubscriber.fulfilled]: (state, action) => {
      state.status = true;
      state.error = null;
      state.tooltip = {
        name: action.payload.name,
        message: `Опс, мы будем скучать!`,
      };
    },
    [fetchSubsciber.rejected]: setError,
    [deleteSubscriber.rejected]: setError,
  },
});

export default subscriberSlice.reducer;
