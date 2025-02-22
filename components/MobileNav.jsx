"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "project",
    path: "/work",
  },
  // {
  //   name: "services",
  //   path: "/services",
  // },
  {
    name: "blog",
    path: "/blog",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-[#FF8C00] " />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" onClick={closeMenu}>
            <h1 className="text-4xl font-semibold">
              RenFaa <span className="text-[#FF8C00]">.</span>
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              onClick={closeMenu}
              className={`${
                link.path === pathname &&
                "text-[#FF8C00] border-b-2 border-[#FF8C00]"
              } text-xl capitalize hover:text-[#FF8C00] transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
