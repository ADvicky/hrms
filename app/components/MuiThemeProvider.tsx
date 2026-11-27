"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";

export default function MuiThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDark ? "dark" : "light",

          // Global background colors
          background: {
            default: isDark ? "#111827" : "#ffffff",
            paper: isDark ? "#1f2937" : "#ffffff",
          },

          // Global text colors
          text: {
            primary: isDark ? "#ffffff" : "#111827",
            secondary: isDark ? "#d1d5db" : "#6b7280",
          },

          divider: isDark
            ? "rgba(255,255,255,0.15)"
            : "#e5e7eb",

          primary: {
            main: "#65A879",
          },
        },

        components: {
          // Dashboard Paper and cards
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundImage: "none",

                ...(isDark && {
                  backgroundColor: "rgba(51,65,85,0.2)",

                  border: "1px solid rgba(255,255,255,0.15)",

                  transition: "box-shadow 0.2s ease-in-out",

                  "&:hover": {
                    boxShadow:
                      "0 0 8px rgba(101,168,121,0.4)",
                  },
                }),
              },
            },
          },

          // Dialog background
          MuiDialog: {
            styleOverrides: {
              paper: {
                backgroundColor: isDark
                  ? "#1f2937"
                  : "#ffffff",

                backgroundImage: "none",
                borderRadius: "12px",

                "&:hover": {
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                },
              },
            },
          },

          // Dialog content borders
          MuiDialogContent: {
            styleOverrides: {
              root: {
                borderColor: isDark
                  ? "rgba(255,255,255,0.15)"
                  : "#e5e7eb",
              },
            },
          },

          // Popover background
          MuiPopover: {
            styleOverrides: {
              paper: {
                backgroundColor: isDark
                  ? "#1f2937"
                  : "#ffffff",

                backgroundImage: "none",

                "&:hover": {
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                },
              },
            },
          },

          // Select dropdown and pagination menu
          MuiMenu: {
            styleOverrides: {
              paper: {
                backgroundColor: isDark
                  ? "#1f2937"
                  : "#ffffff",

                backgroundImage: "none",
                borderRadius: "8px",

                border: isDark
                  ? "1px solid rgba(255,255,255,0.15)"
                  : "1px solid #e5e7eb",
              },
            },
          },

          // Dropdown menu items
          MuiMenuItem: {
            styleOverrides: {
              root: {
                fontSize: "13px",

                color: isDark ? "#ffffff" : "#111827",

                "&:hover": {
                  backgroundColor: isDark
                    ? "#374151"
                    : "#f3f4f6",
                },

                "&.Mui-selected": {
                  backgroundColor: "rgba(101,168,121,0.2)",
                },

                "&.Mui-selected:hover": {
                  backgroundColor: "rgba(101,168,121,0.3)",
                },
              },
            },
          },

          // Tabs indicator
          MuiTabs: {
            styleOverrides: {
              indicator: {
                backgroundColor: "#65A879",
              },
            },
          },

          // Individual tab
          MuiTab: {
            styleOverrides: {
              root: {
                textTransform: "none",

                color: isDark ? "#ffffff" : "#6b7280",

                "&.Mui-selected": {
                  color: "#65A879",
                },
              },
            },
          },

          // Table cells and header
          MuiTableCell: {
            styleOverrides: {
              root: {
                borderColor: isDark
                  ? "rgba(255,255,255,0.15)"
                  : "#e5e7eb",
              },

              head: {
                backgroundColor: isDark
                  ? "#1f2937"
                  : "#65A879",

                color: "#ffffff",
                fontWeight: 600,
                fontSize: "13px",
              },
            },
          },

          // Table pagination
          MuiTablePagination: {
            styleOverrides: {
              root: {
                color: isDark ? "#ffffff" : "#111827",
              },
            },
          },
        },
      }),
    [isDark]
  );

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider theme={muiTheme}>
      {children}
    </ThemeProvider>
  );
}