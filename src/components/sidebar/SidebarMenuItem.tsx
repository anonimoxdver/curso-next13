"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  Icon: JSX.Element;
  title: string;
  subTitle: string;
}

export const SidebarMenuItem = ({ Icon, path, subTitle, title }: Props) => {
  const currentName = usePathname();

  return (
    <Link
      href={path}
      className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 ${
        currentName == path ? "bg-blue-800" : ""
      }  hover:bg-white/5 transition ease-linear duration-150`}
    >
      <div>
        <div>{Icon}</div>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title} </span>
        <span className="text-sm text-white/50 hidden md:block">
          {subTitle}{" "}
        </span>
      </div>
    </Link>
  );
};
