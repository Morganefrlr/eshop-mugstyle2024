'use client'

import { useGlobalContext } from "@/hooks/useGlobalContext";



export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const {adminMode} = useGlobalContext()


  if(adminMode !== true) return <div className="adminMessage">You are not allowed!!!</div>


  return (

    <div>
        {children}
    </div>
        
        
  );
}