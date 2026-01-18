import Header from "./Header";
import Sidebar from "./Sidebar";
import "./Layout.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="Layout">
      <Sidebar />
      <div className="main_content">
        <Header />
        <main className="content_area">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
