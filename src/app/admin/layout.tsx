'use client'
import { globalAdminContext } from "@/context/AdminContext";



export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const {adminMode} = globalAdminContext()


  if(adminMode !== true) return <div className="adminMessage">You are not allowed!!!</div>


  return (

    <div>
        {children}
    </div>
        
        
  );
}