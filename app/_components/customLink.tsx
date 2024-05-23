"use client"

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { CustomLinkProps } from "../types";

const CustomLink = ({href,children, name}:CustomLinkProps) => {
    const pathName =usePathname()
    const isActive = href === '/' ? pathName ===  '/' : pathName.startsWith(href)
    return (  
        <Button asChild className={`${isActive ? "bg-gray-800" : "bg-gray-400"} w-full flex items-center 
        justify-center gap-3 mb-4 text-gray-100`}
        >
        <Link href={href} aria-label={name}>{children}</Link>
        </Button>
    );
}
 
export default CustomLink;