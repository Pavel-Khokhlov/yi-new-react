import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/config";

export const createUser = createAsyncThunk(
  "users/createUser",
  async function ({ name, lastname, phone, email, password1 }, thunkAPI) {
    try {
      const response = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          lastname,
          phone,
          email,
          password: password1,
        }),
      });
      let data = await response.json();
      if (response.ok) {
        return { ...data, name, lastname, phone, email };
      } else {
        return thunkAPI.rejectWithValue(data.message);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const userSlice = createSlice({
  name: "users",
  initialState: {
    loggedIn: true,
    currentUser: {},
    tooltip: null,
    status: null,
    error: null,
  },
  reducers: {
    setLoggedIn(state) {
      state.LoggedIn = true;
    },
  },
  extraReducers: {
    [createUser.pending]: (state) => {
      state.status = "loading";
      state.tooltip = null;
      state.error = null;
    },
    [createUser.fulfilled]: (state, action) => {
      state.status = true;
      state.tooltip = `${action.payload.name}, вы успешно зарегистрировались!`;
      state.currentUser = action.payload;
      localStorage.setItem("jwt", action.payload.token);
    },
    [createUser.rejected]: setError,
  },
});

export const { setLoggedIn } = userSlice.actions;

export default userSlice.reducer;
