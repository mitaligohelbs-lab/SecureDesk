"use client";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";

const Providers = ({ children }) => {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <Provider store={store}>
        {children}
        <ToastContainer />
      </Provider>
    </ClerkProvider>
  );
};

export default Providers;
