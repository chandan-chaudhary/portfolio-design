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
import { Home, Phone, Projector, SkullIcon, LucideProps } from "lucide-react";
import { useRouter } from "next/navigation";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const header = [
    { head: "Home", icon: Home, path: '/' }, { head: "Skills", icon: SkullIcon, path: '/skills' }, { head: "Projects", icon: Projector, path: '/projects' }, { head: "Contact", icon: Phone, path: '/' },];
  const [selectedHeader, setSelectedHeader] = useState<string>('Home');

  const handleNavigationClick = (header: 
     {
    head: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;  // Use ReactNode to represent a React component
    path: string;
    }
  ) => {
    setSelectedHeader(header.head)
    router.push(header.path);
  }

  // function selectedHeader(header:string){
  //   if(header === 'Skills') return
  //   }

  return (
    <div className="">
      <main className="xs:max-md:hidden bg-gray-400 dark:bg-[#102844]  rounded-full w-full items-center justify-center p-1 ">
        <div className="w-full flex justify-center items-center">
          <NavigationMenu className="">
            <NavigationMenuList className=" gap-x-8 lg:gap-x-12 flex items-center ">
              {
                header.map((header, idx) =>
                  <NavigationMenuItem onClick={() => handleNavigationClick(header)} key={idx} className={` ${selectedHeader === header.head && 'bg-[#09182a] text-white rounded-full '} p-2 px-5 text-xl font-mono cursor-pointer font-normal flex items-center gap-2`}>
                    <header.icon className="size-6" />
                    <h3>{header.head}</h3>
                  </NavigationMenuItem>
                )
              }
              <ThemeToggle />
            </NavigationMenuList>
          </NavigationMenu>
        </div>

      </main>
      <main className="md:hidden flex justify-between gap-5 w-full px-12 items-center ">
        <ThemeToggle />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className=""> <HamburgerMenuIcon className="size-7" /></NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-col gap-y-5 p-3">
                {
                  header.map((header, idx) =>
                    <NavigationMenuLink key={idx} onClick={() => handleNavigationClick(header)} className="text-xl font-bold flex items-center gap-2">
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
