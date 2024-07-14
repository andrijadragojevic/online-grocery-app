"use client";

import { Button } from "@/components/ui/button";
import { LayoutGrid, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import GlobalApi from "../_utils/GlobalApi";

function Header() {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = () => {
        GlobalApi.getCategories().then((response) =>
            setCategoryList(response.data.data)
        );
    };
    return (
        <div className="p-5 shadow-md flex justify-between align-center">
            <div className="flex items-center gap-8">
                <Image src="/logo.png" width={150} height={150} alt="Logo" />
                <DropdownMenu>
                    <DropdownMenuTrigger
                        asChild
                        className="outline-none cursor-pointer"
                    >
                        <h2 className="sm:flex hidden gap-2 items-center border rounded-full p-2 px-10 bg-slate-200">
                            <LayoutGrid className="h-5 w-5" />
                            Category
                        </h2>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
                        {categoryList.map((category, index) => (
                            <DropdownMenuItem className="flex gap-4 items-center cursor-pointer" key={index}>
                                <Image
                                    src={
                                        process.env
                                            .NEXT_PUBLIC_BACKEND_BASE_URL +
                                        category?.attributes?.icon?.data[0]
                                            ?.attributes?.url
                                    }
                                    width={30}
                                    height={30}
                                    alt={`${category.attributes.name}-icon`}
                                    unoptimized={true}
                                    url={process.env
                                            .NEXT_PUBLIC_BACKEND_BASE_URL +
                                        category?.attributes?.icon?.data
                                            ?.attributes?.url}
                                />
                                <h2 className="text-lg">{category.attributes.name}</h2>
                            </DropdownMenuItem>
                        ))}
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
