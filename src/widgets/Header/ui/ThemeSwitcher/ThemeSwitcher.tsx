import { useTheme } from "@/shared/config";
import { Button } from "@/shared/ui";
import Circle from "@/shared/assets/icons/Circle.svg?react";

import { AppIcon } from "@/shared/ui/AppIcon/AppIcon";

export const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} variant="ghost">
      <AppIcon Icon={Circle} filled />
    </Button>
  );
};
