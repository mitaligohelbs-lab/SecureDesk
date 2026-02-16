"use client";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";

const provider = ({ children }) => {
  return (
    <ClerkProvider>
      <Provider store={store}>
        {children}
        <ToastContainer />
      </Provider>
    </ClerkProvider>
  );
};

export default provider;
