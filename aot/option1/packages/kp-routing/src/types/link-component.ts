import {FC} from 'react';

export type LinkComponent<RouteParams extends object> = FC<Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'onClick'> & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLAnchorElement> & {routeParams: RouteParams; className?: string; onClick?: () => {}}>