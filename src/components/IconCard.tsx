import React from "react";

import {
  BarChart2Icon,
  BellIcon,
  BracesIcon,
  BugIcon,
  CheckCircleIcon,
  CloudIcon,
  CodesandboxIcon,
  CpuIcon,
  CreditCardIcon,
  FilterIcon,
  FolderOpenIcon,
  FuelIcon,
  GitForkIcon,
  GitPullRequestIcon,
  GlobeIcon,
  MegaphoneIcon,
  NetworkIcon,
  PlayCircleIcon,
  PuzzleIcon,
  SearchIcon,
  ServerIcon,
  SettingsIcon,
  ShieldCheckIcon,
  UserIcon,
  UsersIcon,
  WrenchIcon,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const IconCard = ({
  title,
  description,
  href,
  icon,
  className,
  noCard,
}: { title: string; description: string; href: string; icon: string } & {
  noCard?: boolean;
  className?: string;
}) => {
  if (noCard) {
    return (
      <Link
        href={href}
        className={cn(
          "cursor-pointer block bg-sei-card-bg-light rounded-xl  dark:bg-sei-card-bg-dark  hover:dark:bg-sei-card-hover-dark hover:dark:border-transparent hover:border-transparent hover:bg-sei-card-hover-light",
          className
        )}
      >
        <div className="flex flex-col">
          <div className="flex items-start gap-4 p-2">
            <div className="text-sei-main-light dark:text-sei-main-dark">
              {icon === "cloud" && <CloudIcon size={28} />}
              {icon === "settings" && <SettingsIcon size={28} />}
              {icon === "codesandbox" && <CodesandboxIcon size={28} />}
              {icon === "bug" && <BugIcon size={28} />}
              {icon === "check-circle" && <CheckCircleIcon size={28} />}
              {icon === "fuel" && <FuelIcon size={28} />}
              {icon === "wrench" && <WrenchIcon size={28} />}
              {icon === "filter" && <FilterIcon size={28} />}
              {icon === "globe" && <GlobeIcon size={28} />}
              {icon === "users" && <UsersIcon size={28} />}
              {icon === "cpu" && <CpuIcon size={28} />}
              {icon === "braces" && <BracesIcon size={28} />}
              {icon === "search" && <SearchIcon size={28} />}
              {icon === "megaphone" && <MegaphoneIcon size={28} />}
              {icon === "bar-chart-2" && <BarChart2Icon size={28} />}
              {icon === "shield-check" && <ShieldCheckIcon size={28} />}
              {icon === "credit-card" && <CreditCardIcon size={28} />}
              {icon === "network" && <NetworkIcon size={28} />}
              {icon === "puzzle" && <PuzzleIcon size={28} />}
              {icon === "bell" && <BellIcon size={28} />}
              {icon === "git-fork" && <GitForkIcon size={28} />}
              {icon === "server" && <ServerIcon size={28} />}
              {icon === "play-circle" && <PlayCircleIcon size={28} />}
              {icon === "folder-open" && <FolderOpenIcon size={28} />}
              {icon === "user" && <UserIcon size={28} />}
              {icon === "git-pull-request" && <GitPullRequestIcon size={28} />}
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm dark:text-white/80">{description}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "cursor-pointer block bg-white border border-sei-border-light rounded-xl hover:bg-gray-100 dark:bg-[#191919] dark:border-sei-border-dark dark:hover:bg-sei-black/70",
        className
      )}
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-2 text-xl p-4 border-b rounded-t-xl bg-gray-50 dark:bg-[#141414] border-sei-border-light dark:border-sei-border-dark">
          <div className="text-sei-main-light dark:text-sei-main-dark">
            {icon === "cloud" && <CloudIcon />}
            {icon === "settings" && <SettingsIcon />}
            {icon === "codesandbox" && <CodesandboxIcon />}
            {icon === "bug" && <BugIcon />}
            {icon === "check-circle" && <CheckCircleIcon />}
            {icon === "fuel" && <FuelIcon />}
            {icon === "wrench" && <WrenchIcon />}
            {icon === "filter" && <FilterIcon />}
            {icon === "globe" && <GlobeIcon />}
            {icon === "users" && <UsersIcon />}
            {icon === "cpu" && <CpuIcon />}
            {icon === "braces" && <BracesIcon />}
            {icon === "search" && <SearchIcon />}
            {icon === "megaphone" && <MegaphoneIcon />}
            {icon === "bar-chart-2" && <BarChart2Icon />}
            {icon === "shield-check" && <ShieldCheckIcon />}
            {icon === "credit-card" && <CreditCardIcon />}
            {icon === "network" && <NetworkIcon />}
            {icon === "puzzle" && <PuzzleIcon />}
            {icon === "bell" && <BellIcon />}
            {icon === "git-fork" && <GitForkIcon />}
            {icon === "server" && <ServerIcon />}
            {icon === "play-circle" && <PlayCircleIcon />}
            {icon === "folder-open" && <FolderOpenIcon />}
            {icon === "user" && <UserIcon />}
            {icon === "git-pull-request" && <GitPullRequestIcon />}
          </div>
          <h3 className="font-semibold">{title}</h3>
        </div>
        <div className="p-4">
          <p className="dark:text-white/80">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export { IconCard };
