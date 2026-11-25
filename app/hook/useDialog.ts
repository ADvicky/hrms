"use client";

import { useState } from "react";

export default function useDialog<T extends string | number = string>() {

  const [selectedId, setSelectedId] =
    useState<T | null>(null);

  function openDialog(id: T) {
    setSelectedId(id);
  }

  function closeDialog() {
    setSelectedId(null);
  }

  return {
    selectedId,
    openDialog,
    closeDialog,
    isOpen: selectedId !== null,
  };
}