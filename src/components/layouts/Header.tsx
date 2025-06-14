import { FloatingNav } from "../ui/floating-navbar";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { GiSkills } from "react-icons/gi";

export default function Header() {
  const navItems = [
    {
      name: "Home",
      link: "/#home",
      icon: <FaRegUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: (
        <GoProjectSymlink className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Services",
      link: "/#services",
      icon: <GiSkills className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <MdOutlineMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full">
        <FloatingNav navItems={navItems} />
    </div>
  );
}
