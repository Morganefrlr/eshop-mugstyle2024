'use client'
import AdminContext from "@/context/AdminContext";
import { useContext } from "react";


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const {adminMode} = useContext(AdminContext)


  if(adminMode !== true) return <div>You are not allowed!!</div>


  return (

    <div>
        {children}
    </div>
        
        
  );
}