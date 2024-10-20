import { Outlet } from "react-router-dom"
import Sidebar from "./sidebar";

function RootLayout({ children }) {
  console.log(children)
  return (
    <div className="flex gap-5">
      <Sidebar />
      <main className="max-w-5xl flex-1 mx-auto py-4">
      <Outlet />
        {children}      
      </main>
    </div>
  );
}

export default RootLayout;
