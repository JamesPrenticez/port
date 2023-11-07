import { type ReactNode } from 'react'

export interface ISkills {
  id: number;
  title: string;
  icon: ReactNode;
  tags: string[];
}