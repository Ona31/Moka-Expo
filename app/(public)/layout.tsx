import React from "react";
import NavBarre from "../components/layout/NavBarre";



export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <NavBarre/>

      {/* Contenu principal */}
      <main className="flex-1 w-full h-screen ">
        {children}
      </main>

      {/* Footer */}
   
    </div>
  );
}
