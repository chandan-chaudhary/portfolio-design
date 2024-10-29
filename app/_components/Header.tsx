"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Home, Phone, Projector, SkullIcon } from "lucide-react";

export default function Header() {
  const header = [
    { head: "Home", icon: Home, path: '/' }, { head: "Skills", icon: SkullIcon, path: '/' }, { head: "Projects", icon: Projector, path: '/' }, { head: "Contact", icon: Phone, path: '/' },];
  return (
    <div className="">
      <main className="xs:max-md:hidden py-24 bg-gray-300  p-2 rounded-3xl">
        <NavigationMenu>
          <NavigationMenuList className="gap-y-8 flex-col items-start">
            {
              header.map((header, idx) =>
                <NavigationMenuItem key={idx} className="text-xl cursor-pointer font-bold flex items-center gap-2">
                  <header.icon />
                  <h3>{header.head}</h3>
                </NavigationMenuItem>
              )
            }
          </NavigationMenuList>
        </NavigationMenu>
      </main>
      <main className="md:hidden flex justify-end w-full">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger><HamburgerMenuIcon /></NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-col gap-y-3 p-3">
                {
                  header.map((header, idx) =>
                    <NavigationMenuLink key={idx} className="ext-xl font-bold flex items-center gap-2">
                      <header.icon />
                      <h3>{header.head}</h3>
                    </NavigationMenuLink>
                  )
                }
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

      </main>
    </div>
  );
}
