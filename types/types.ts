import { IconName } from "@/components/AppIcon";

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

export interface SidebarProps {
  name: string;
  path: string;
  icon: IconName;
  isParent: boolean;
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
