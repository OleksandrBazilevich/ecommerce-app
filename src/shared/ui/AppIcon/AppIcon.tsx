import { cn } from "@/shared/lib";
import type { FunctionComponent, SVGProps } from "react";
import styles from "./AppIcon.module.scss";

type AppIconTheme = "clean" | "background";

interface AppIconProps {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  theme?: AppIconTheme;
  size?: number;
  className?: string;
  filled?: boolean;
}

export const AppIcon = (props: AppIconProps) => {
  const { Icon, className, theme = "clean", size = 24, filled = false } = props;

  const AppIcon = (
    <Icon
      className={cn(styles.icon, className, { [styles.primary]: filled })}
      width={size}
      height={size}
    />
  );

  if (theme === "background") {
    return <div className={styles.wrapper}>{AppIcon}</div>;
  }

  return AppIcon;
};
