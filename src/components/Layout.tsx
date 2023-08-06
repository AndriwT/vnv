import { PropsWithChildren } from "react";
import PartyNav from "./PartyNav";
import FlavorNav from "./FlavorNav";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <FlavorNav />
      <PartyNav />

      {children}
    </div>
  );
};

export default Layout;
