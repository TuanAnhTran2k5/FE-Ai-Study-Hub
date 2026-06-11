<<<<<<< HEAD
export const rootReducer = {
  documents: null,
};
=======
import { combineReducers } from "@reduxjs/toolkit";
import  userSlice  from "./features/userSlice";

const rootReducer = combineReducers({
    user: userSlice,
})
export default rootReducer;
>>>>>>> b630af94cf38e29d45b378547d97ff6279140bb0
