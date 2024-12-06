"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { perspective } from "@/app/ui/Perspective";

interface MobileProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },

];

const menu = {
  open: {
    width: "100%",
    height: "650px",
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
};

export default function Mobile({ isOpen, toggleOpen }: MobileProps) {
  const pathname = usePathname();

  return (
    <motion.nav
      variants={menu}
      animate={isOpen ? "open" : "closed"}
      initial="closed"
      className="w-full bg-gray-800 rounded-md h-[650px]"
    >
      {links.map((link, i) => (
        <motion.div
          key={link.name}
          custom={i}
          variants={perspective}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Link
            href={link.href}
            className={clsx(
              "text-white flex flex-col space-y-3 p-3 text-xl font-medium",
              { "text-orange-500": pathname === link.href }
            )}
            onClick={toggleOpen}
          >
            <span>{link.name}</span>
          </Link>
        </motion.div>
      ))}
    </motion.nav>
  );
}
