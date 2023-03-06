import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="container mx-auto flex flex-col h-screen">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
