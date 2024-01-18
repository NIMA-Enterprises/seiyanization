import React from "react";

export type PostType = {
  title: string;
  description: string;
  xUsername?: string;
  date: string;
  href: string;
  author?: string;
  image: string;
  tags: string[];
  featured?: boolean;
};

export type EcosystemItem = {
  url: string;
  title: string;
  logo: string;
  tags: string[];
};

export type HomeTool = {
  title: string;
  items: {
    title: string;
    desc: string;
    icon: JSX.Element;
    href: string;
  }[];
};

export type Topic = {
  title: string;
  image?: string;
  href: string;
};
export type Supporter = {
  name: string;
  url: string;
  image: React.ReactNode;
};
export type HomeVideo = {
  title: string;
  description: string;
  image: string;
  url: string;
};
export type SeiBuilder = {
  id: string;
  image: string;
  name: string;
  href: string;
};

export type Changelog = {
  id: string;
  title: string;
  href: string;
  date: string;
};

export type HomePost = {
  url: string;
  title: string;
  description: string;
  image: string;
};
