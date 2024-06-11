"use client";
import { Bug } from "lucide-react";
import Link from "next/link";
import React from "react";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const links = [
        {
            label: "Dashboard",
            href: "/",
        },
        {
            label: "Issues",
            href: "/issues",
        },
    ];
    const pathname = usePathname();
    return (
        <nav className="w-full flex py-4 px-16 h-14 border-b items-center gap-8">
            <Link href="/">
                <Bug />
            </Link>
            <ul className="flex gap-8 ">
                {links.map((link) => {
                    return (
                        <Link
                            className={classNames({
                                "text-zinc-900": pathname===link.href,
                                "text-zinc-500": pathname!==link.href,
                                "transition-colors hover:text-zinc-900 cursor-pointer": true
                            })}
                            key={link.label}
                            href={link.href}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavBar;
