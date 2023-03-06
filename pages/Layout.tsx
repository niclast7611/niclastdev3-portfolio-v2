import React from "react";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};
