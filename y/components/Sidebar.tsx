import Link from 'next/link';
import Image from 'next/Image';
import { sidebarLinks } from '@/constants';


const Sidebar = ({ user }: SidebarProps) => {
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer items-center gap-2 flex">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon Logo"
            className="w-6 h-6"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>
        {sidebarLinks.map((item) => (
          <Link href={item.route} key={item.label} className="flex items-center gap-2">
            {item.label}
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default Sidebar;
