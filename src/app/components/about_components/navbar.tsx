"use client";

import { usePathname, useRouter } from "next/navigation";

export default function AboutNavBar() {
  const pathname = usePathname();
  const router = useRouter();

  const items = [
    { id: "about", label: "Sobre", path: "/about" },
    { id: "register", label: "Registrar", path: "/register" },
    { id: "login", label: "Entrar", path: "/login" },
  ];

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex gap-6 md:gap-8 flex-wrap justify-center">
      {items.map((item) => {
        const isActive = pathname === item.path;

        return (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center cursor-pointer"
            onClick={() => handleClick(item.path)}
          >
            <p
              className={`text-sm ${
                isActive ? "text-amber-950" : "text-zinc-400"
              }`}
            >
              {item.label}
            </p>
            <hr
  className={`w-16 md:w-24 h-1 bg-amber-800 border-0 rounded transition-all ${
    isActive ? "opacity-100" : "opacity-0"
  }`}
/>
          </div>
        );
      })}
    </div>
  );
}
