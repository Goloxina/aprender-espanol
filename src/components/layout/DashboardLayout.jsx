import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";

export default function DashboardLayout() {
  return (
    <>
      <TopNav />
      <Outlet />
    </>
  );
}
