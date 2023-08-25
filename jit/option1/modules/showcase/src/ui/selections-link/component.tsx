import React, { FC, ReactNode } from "react";

export const SelectionsLink: FC<{
    selectionId: string;
    className: string;
    children: ReactNode;
  }> = ({
    selectionId,
    className,
    children,
  }) => <span className={className}>{children}</span>