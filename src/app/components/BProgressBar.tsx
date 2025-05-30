"use client";

import React from "react";
import { ProgressProvider } from "@bprogress/next/app";
const BProgressBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProgressProvider
      height="6px"
      style=""
      color="#F472B6"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};

export default BProgressBar;
