"use client";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { X } from "lucide-react";

interface DialogProp<T extends string | number> {
  id: T | null;
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: (id: T) => void;
  onClose: () => void;
}

function DialogPopup<T extends string | number>({
  id,
  title,
  description = "Are you sure you want to continue?",
  confirmText = "Yes",
  cancelText = "No",
  onConfirm,
  onClose,
}: DialogProp<T>) {

  return (
    <Dialog
      open={id !== null}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle>
        <div className="flex items-center justify-between">

          <span className="text-xl font-semibold">
            {title}
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={22} />
          </button>

        </div>
      </DialogTitle>

      <DialogContent dividers>

        <p className="text-gray-600">
          {description}
        </p>

        <div className="flex justify-end gap-3 pt-6">

          <button
            type="button"
            onClick={onClose}
            className="border px-5 py-2 rounded-md"
          >
            {cancelText}
          </button>

          <button
            type="button"
            onClick={() => {
              if (id !== null) {
                onConfirm(id);
              }
            }}
            className="bg-red-600 text-white px-5 py-2 rounded-md"
          >
            {confirmText}
          </button>

        </div>

      </DialogContent>
    </Dialog>
  );
}

export default DialogPopup;