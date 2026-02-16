"use client";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ClerkProvider } from "@clerk/nextjs";

const provider = ({ children }) => {
  return (
    <ClerkProvider>
      <Provider store={store}>{children}</Provider>
    </ClerkProvider>
  );
};

export default provider;
