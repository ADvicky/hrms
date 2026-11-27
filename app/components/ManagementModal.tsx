"use client";

import type { ReactNode } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { X } from "lucide-react";

interface ManagementModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

function ManagementModal({
  open,
  title,
  onClose,
  children,
}: ManagementModalProps) {

  return (
   <Dialog
  open={open}
  onClose={onClose}
  fullWidth
  maxWidth="md"
  slotProps={{
    paper: {
      sx: (theme) => ({
        backgroundColor:
          theme.palette.mode === "dark"
            ? "#000000"
            : "#ffffff",

        backgroundImage: "none",
        color: theme.palette.text.primary,
        borderRadius: "12px",

        border: "1px solid",
        borderColor: theme.palette.divider,
      }),
    },
  }}
>
  <DialogTitle>
    <div className="flex items-center justify-between">
      <span className="text-xl font-semibold">
        {title}
      </span>

      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="
          p-2
          rounded-lg
          cursor-pointer
          transition-colors
          hover:bg-gray-100
          dark:text-gray-300
          dark:hover:bg-slate-700
        "
      >
        <X size={22} />
      </button>
    </div>
  </DialogTitle>

  <DialogContent
    dividers
    sx={{
      borderColor: "divider",
      color: "text.primary",
    }}
  >
    {children}
  </DialogContent>
</Dialog>
  );
}

export default ManagementModal;