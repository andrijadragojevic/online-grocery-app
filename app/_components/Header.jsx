import { Button } from "@/components/ui/button";
import { LayoutGrid, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
    return (
        <div className="p-5 shadow-md flex justify-between align-center">
            <div className="flex items-center gap-8">
                <Image src="/logo.png" width={50} height={50} />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className="outline-none cursor-pointer">
                        <h2 className="sm:flex hidden gap-2 items-center border rounded-full p-2 px-10 bg-slate-200">
                            <LayoutGrid className="h-5 w-5" />
                            Category
                        </h2>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Fruits</DropdownMenuItem>
                        <DropdownMenuItem>Vegetables</DropdownMenuItem>
                        <DropdownMenuItem>Drinks</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className="md:flex hidden gap-3 items-center border rounded-full p-2 mx-5 ">
                    <Search />
                    <input
                        type="text"
                        placeholder="Search"
                        className="outline-none"
                    />
                </div>
            </div>
            <div className="flex gap-5 items-center">
                <h2 className="flex gap-2 items-center text-lg">
                    <ShoppingBag />0
                </h2>
                <Button>Login</Button>
            </div>
        </div>
    );
}

export default Header;
