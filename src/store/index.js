import { configureStore } from "@reduxjs/toolkit";
import subscriberReduser from "./subscriberSlice";

export default configureStore({
  reducer: {
    subscribers: subscriberReduser,
  },
});
