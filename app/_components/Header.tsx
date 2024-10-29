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
import { Home, LucideProps, Phone, Projector, SkullIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const router = useRouter();
  const header = [
    { head: "Home", icon: Home, path: '/' }, { head: "Skills", icon: SkullIcon, path: '/skills' }, { head: "Projects", icon: Projector, path: '/projects' }, { head: "Contact", icon: Phone, path: '/' },];

  const handleNavigationClick = (header: {
    head: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;  // Use ReactNode to represent a React component
    path: string;
  }) => {
    router.push(header.path);
  }

  return (
    <div className="">
      <main className="xs:max-md:hidden py-24 bg-gray-400 dark:bg-zinc-700  p-2 rounded-3xl ">

        <NavigationMenu>
          <NavigationMenuList className="gap-y-8 flex-col items-start">
            <ThemeToggle />
            {
              header.map((header, idx) =>
                <NavigationMenuItem onClick={() => handleNavigationClick(header)} key={idx} className="text-2xl font-landingPageFont cursor-pointer font-medium flex items-center gap-2">
                  <header.icon className="" />
                  <h3>{header.head}</h3>
                </NavigationMenuItem>
              )
            }
          </NavigationMenuList>
        </NavigationMenu>
      </main>
      <main className="md:hidden flex justify-center gap-5 w-full ">
        <ThemeToggle />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-2xl font-landingPageFont font-medium">Menu <HamburgerMenuIcon /></NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-col gap-y-3 p-3">
                {
                  header.map((header, idx) =>
                    <NavigationMenuLink key={idx} className="text-xl font-bold flex items-center gap-2">
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
