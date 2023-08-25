import React, { FC, ReactNode } from "react";

import { RouteConfig } from "../types/route-config";
import { RoutesConfig } from "../types/routes-config";

export function createRoutes<Config extends RoutesConfig>(
  getConfig: () => Config
) {
  type RouteName = keyof Config;

  const Link: FC<{
    routeName: RouteName;
    params: Config[RouteName] extends RouteConfig<infer Params>
      ? Params
      : unknown;
    children?: ReactNode;
    scrollRestoration?: boolean;
    replace?: boolean;
  }> = ({ params, routeName, children, scrollRestoration, replace }) => {
    if (!params) {
      return null;
    }
    const config = getConfig();

    const { makeLinkProps, navigate } = config[routeName];

    const linkProps = makeLinkProps(params);

    return (
      <a
        onClick={(event) => {
          event.preventDefault();  
          navigate({
            routeParams: params,
            navigationParams: { replace, scrollRestoration },
          });
        }}
        href={linkProps.href}
      >
        {children}
      </a>
    );
  };

  return { Link };
}
