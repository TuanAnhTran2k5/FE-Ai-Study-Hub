import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./configs/router";
import { Provider } from 'react-redux'
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./configs/queryClient";

function App() {
  return (
<QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
        {/* Thêm ToastContainer để hiển thị thông báo toast */}
         <ToastContainer /> 
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
