<<<<<<< HEAD
import { Outlet } from 'react-router-dom';

export function App() {
  return <Outlet />;
=======
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
>>>>>>> b630af94cf38e29d45b378547d97ff6279140bb0
}

export default App;
