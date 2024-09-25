"use client";
import Link from "next/link";

export default function Header() {
  const header: string[] = ["Home", "About", "Skills", "Portfolio"];
  return (
    <main>
      <div className="navbar px-24 ">
        <div className="flex-1">
          <Link href={"/"} className="btn btn-ghost text-xl">
            Chandan
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {header.map((header: string, idx: number) => (
              <li key={idx}>
                <Link
                  onClick={() => console.log("hello")}
                  href={""}
                  className="text-xl font-semibold"
                >
                  {header}
                </Link>
              </li>
            ))}
            <li>
              {/* <details>
                <summary>Parent</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details> */}
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
