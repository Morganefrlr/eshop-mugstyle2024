'use client'
import { useGlobalAdminContext } from "@/context/AdminContext";



export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const {adminMode} = useGlobalAdminContext()


  if(adminMode !== true) return <div>You are not allowed!!</div>


  return (

    <div>
        {children}
    </div>
        
        
  );
}