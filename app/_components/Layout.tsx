import DashboardSidebar from "./common/DashboardSidebar";
import DashboardTopbar from "./common/DashboardTopbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex">
      <DashboardSidebar />

      <div className="flex flex-col flex-1 ml-64">
        <DashboardTopbar />

        <main className="flex-1 p- mt-16">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
