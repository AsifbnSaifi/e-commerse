import { configureStore } from "@reduxjs/toolkit"
import slicespro from "../slices/slicespro";

const store = configureStore({
  reducer: {
    fooditemsCard : slicespro    
  }

})

export default store;