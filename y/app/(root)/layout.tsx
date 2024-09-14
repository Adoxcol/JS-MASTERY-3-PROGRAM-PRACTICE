'use client';

import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from 'next/image'; // Correct import with lowercase 'image'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Assuming you're passing user data, not a boolean
  const loggedIn: User = { firstName: 'Mahmood', lastName: 'Tauhidul' }; // Added type annotation for loggedIn

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} /> {/* Passing user object */}
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src='/icons/logo.svg' width={30} height={30} alt='logo' /> {/* Correct Image import */}
          <div>
            <MobileNav user={loggedIn} /> 
          </div>
        </div>
        {children}
      </div>
    </main>
  );  
}

