import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import { useLocation } from "react-router-dom"; // Import for tracking the current route

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("");
    const location = useLocation(); // Hook to get the current path

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Log In", path: "/login" },
        { name: "Sign Up", path: "/signup" },
        { name: "Contact Us", path: "/contact" },
    ];

    useEffect(() => {
        // Update activeItem based on the current URL path
        const currentItem = menuItems.find((item) => item.path === location.pathname);
        if (currentItem) {
            setActiveItem(currentItem.name);
        }
    }, [location.pathname]); // Runs when the location path changes

    return (
        <div>
            <Navbar maxWidth="xl" className="bg-transparent py-3" onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden text-white"
                    />
                    <NavbarBrand>
                        <p className="font-bold text-2xl text-white">ACME</p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="end">
                    {menuItems.map((item, index) => (
                        <NavbarItem key={index}>
                            <Link
                                color={activeItem === item.name ? "danger" : "success"}
                                href={item.path}
                                className="font-semibold"
                            >
                                {item.name}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>

                <NavbarMenu className="bg-transparent pt-10">
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={index}>
                            <Link
                                color={activeItem === item.name ? "primary" : "success"}
                                className="w-full"
                                href={item.path}
                                size="lg"
                            >
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </div>
    );
}
