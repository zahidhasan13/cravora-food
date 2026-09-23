"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children, onClick }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`font-semibold uppercase ${pathname.startsWith(href) && "text-orange-500"}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
