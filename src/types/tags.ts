
import Angular from "@icons/Angular.astro";
import Tailwind from "@icons/Tailwind.astro";
import Contentful from "@icons/Contentful.astro";
import Wordpress from "@icons/Wordpress.astro";
import Appsmith from "@icons/Appsmith.astro";
import React from "@icons/React.astro";
import N8N from "@icons/N8N.astro";
import Redis from "@icons/Redis.astro";
import Photoshop from "@icons/Photoshop.astro";
import Zod from "@icons/Zod.astro";
import Astro from "@icons/Astro.astro";
import Typescript from "@icons/Typescript.astro";
import Next from "@icons/Next.astro";
import Shadcn from "@icons/shadcn.astro";
import Javascript from "@icons/Javascript.astro";

export const TAGS = {
  ASTRO:      { label: "Astro",           icon: Astro },
  ANGULAR:    { label: "Angular",         icon: Angular },
  APPSMITH:   { label: "Appsmith",        icon: Appsmith },
  CONTENTFUL: { label: "Contentful",      icon: Contentful },
  JAVASCRIPT: { label: "Javascript",      icon: Javascript },
  N8N:        { label: "N8N",             icon: N8N },
  NEXT:       { label: "Next.js",         icon: Next },
  REACT:      { label: "React",           icon: React },
  REDIS:      { label: "Redis",           icon: Redis },
  SHADCN:     { label: "Shadcn/ui",       icon: Shadcn },
  PHOTOSHOP:  { label: "Adobe Photoshop", icon: Photoshop },
  TAILWIND:   { label: "Tailwind",        icon: Tailwind },
  TYPESCRIPT: { label: "Typescript",      icon: Typescript },
  WORDPRESS:  { label: "Wordpress",       icon: Wordpress },
  Zod:        { label: "Zod",             icon: Zod }
} as const satisfies Record<string, { label: string; icon: any }>;

export type TagKey = keyof typeof TAGS;
export type Tag    = (typeof TAGS)[TagKey];

export const findTag = (label: string): Tag | undefined =>
  Object.values(TAGS).find(
    (tag) => tag.label.toLowerCase() === label.toLowerCase()
  );