import React, { FC, ReactNode } from "react";

import {SelectionsRouteParams} from '@kinopoisk-int/kp-selections';

export const SelectionsLink: FC<{
    routeParams: SelectionsRouteParams;
    className?: string;
    children: ReactNode;
    onClick?: () => {}
  }> = ({
    className,
    children,
    onClick
  }) => <span onClick={onClick} className={className}>{children}</span>