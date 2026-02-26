import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    set => ({
      isDarkMode: false,
      toggleDarkMode: () =>
        set(state => {
          const nextMode = !state.isDarkMode;
          document.documentElement.setAttribute(
            "data-theme",
            nextMode ? "dark" : "light",
          );
          return { isDarkMode: nextMode };
        }),
    }),
    {
      name: `theme-storage`,
    },
  ),
);
