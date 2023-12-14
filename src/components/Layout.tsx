import { FC, ReactNode } from "react";

import { Header } from "./Header";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-400 px-6 pt-10">
        <div className="mx-auto max-w-5xl">{children}</div>
      </main>
      <footer className="bg-slate-400 py-20" />
    </>
  );
};
