import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { ScrollToTop } from "./ScrollToTop";

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-hidden">
          {children}
        </main>
      </div>
      <ScrollToTop />
    </div>
  );
};
