import DashboardSidebar from "./_components/common/DashboardSidebar";
import DashboardTopbar from "./_components/common/DashboardTopbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex">
      <DashboardSidebar />

      <div className="flex flex-col flex-1 lg:ml-64 ml-0">
        <DashboardTopbar />

        <main className="flex-1 p- mt-16">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
