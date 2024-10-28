"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function Header() {
  const header: string[] = ["Home", "About", "Skills", "Projects"];
  return (
    <main className="py-4 bg-gray-300 flex justify-center">
      <NavigationMenu>
        <NavigationMenuList className="gap-x-5">
        {
          header.map((header, idx) =>
            <NavigationMenuItem key={idx}>{header}</NavigationMenuItem>
          )
        }
        </NavigationMenuList>
      </NavigationMenu>
    </main>
  );
}
