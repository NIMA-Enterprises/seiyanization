import React from "react";
import Link from "next/link";
import {
  BarChart2Icon,
  BellIcon,
  BracesIcon,
  BugIcon,
  CheckCircleIcon,
  CloudIcon,
  CodesandboxIcon,
  CpuIcon,
  FilterIcon,
  FolderOpenIcon,
  FuelIcon,
  GitForkIcon,
  PlayCircle,
  Scroll,
  Briefcase,
  GlobeIcon,
  StickyNote,
  FileTerminal,
  MegaphoneIcon,
  PlayCircleIcon,
  FileQuestion,
  PuzzleIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
  WrenchIcon,
} from "lucide-react";

const SubMenuItemCard = ({ title, description, icon, href }: any) => {
  return (
    <Link
      href={href}
      target={href.includes("http") ? "_blank" : "_self"}
      className="flex flex-col gap-2 p-2 rounded-xl hover:bg-sei-card-inner-light hover:dark:bg-sei-card-inner-dark"
    >
      <div className="flex items-center gap-1">
        {icon === "cloud" && <CloudIcon size={16} />}
        {icon === "play-circle" && <PlayCircleIcon size={16} />}
        {icon === "puzzle" && <PuzzleIcon size={16} />}
        {icon === "settings" && <SettingsIcon size={16} />}
        {icon === "codesandbox" && <CodesandboxIcon size={16} />}
        {icon === "bug" && <BugIcon size={16} />}
        {icon === "bell" && <BellIcon size={16} />}
        {icon === "check-circle" && <CheckCircleIcon size={16} />}
        {icon === "users" && <UsersIcon size={16} />}
        {icon === "cpu" && <CpuIcon size={16} />}
        {icon === "braces" && <BracesIcon size={16} />}
        {icon === "search" && <SearchIcon size={16} />}
        {icon === "fuel" && <FuelIcon size={16} />}
        {icon === "wrench" && <WrenchIcon size={16} />}
        {icon === "git-fork" && <GitForkIcon size={16} />}
        {icon === "globe" && <GlobeIcon size={16} />}
        {icon === "megaphone" && <MegaphoneIcon size={16} />}
        {icon === "filter" && <FilterIcon size={16} />}
        {icon === "bar-chart-2" && <BarChart2Icon size={16} />}
        {icon === "folder-open" && <FolderOpenIcon size={16} />}
        {icon === "terminal" && <FileTerminal size={16} />}
        {icon === "video" && <PlayCircle size={16} />}
        {icon === "case" && <Briefcase size={16} />}
        {icon === "question" && <FileQuestion size={16} />}
        {icon === "scroll" && <Scroll size={16} />}
        {icon === "note" && <StickyNote size={16} />}

        <div className="font-bold">{title}</div>
      </div>
      <div className="text-sm opacity-80">{description}</div>
    </Link>
  );
};

export { SubMenuItemCard };
