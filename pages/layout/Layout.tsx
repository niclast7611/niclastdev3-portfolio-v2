import React from "react";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";

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
