import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./userSlice";
import appReduser from "./appSlice";
import subscriberReduser from "./subscriberSlice";

export default configureStore({
  reducer: {
    app: appReduser,
    users: userReduser,
    subscribers: subscriberReduser,
  },
});
