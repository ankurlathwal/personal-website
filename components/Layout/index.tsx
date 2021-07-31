import { FC } from "react";
import Nav from "./Nav";

interface props {}

const Layout: FC<props> = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default Layout;
