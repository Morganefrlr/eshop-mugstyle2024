

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    const admin = true

    if(admin !== true) return <div>You are not allowed!!</div>




  return (

    <div>
        {children}
    </div>
        
        
  );
}