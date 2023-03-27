import { IconName } from "@/components/AppIcon";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isLoading?: boolean;
}

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  labelClass?: string;
  errorMessage?: string;
}

export interface SidebarData {
  name: string;
  icon: IconName;
  path: string;
  isParent: boolean;
  child: SidebarChildData[];
}

export interface SidebarItemProps {
  name: string;
  path: string;
  icon: IconName;
  isParent: boolean;
  child?: SidebarChildData[];
  children?: React.ReactNode;
}

export interface SidebarChildData {
  name: string;
  icon?: IconName;
  path: string;
}

export interface SidebarChildProps {
  name: string;
  icon?: IconName;
  path: string;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export interface DashboardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  grid?: string | number;
  gap?: string | number;
}

export interface NavigationBar {
  onToggleSidebar: () => void;
}

export interface NavigationBarIconProps {
  icon: IconName;
  badge?: string | number;
  badgeColor?: string;
}
