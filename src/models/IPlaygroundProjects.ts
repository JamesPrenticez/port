import { type ReactNode } from "react"

export interface IPlaygroundProjects {
  id: string;
  title: string;
  slug: string;
  desc: string;
  component: ReactNode;
  image: string;
}