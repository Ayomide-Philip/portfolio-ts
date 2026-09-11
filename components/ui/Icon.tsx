import React from "react";
import {
  ExternalLink,
  GitBranch,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";

interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  name:
    | "spark"
    | "server"
    | "bolt"
    | "shield"
    | "github"
    | "linkedin"
    | "external";
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, ...props }) => {
  const icons: Record<IconProps["name"], LucideIcon> = {
    spark: Sparkles,
    server: Server,
    bolt: Zap,
    shield: ShieldCheck,
    github: GitBranch,
    linkedin: Network,
    external: ExternalLink,
  };
  const IconComponent = icons[name];

  return <IconComponent size={size} {...props} />;
};
