export interface RouteConfig<RouteParams extends object> {
    navigate: (params: {routeParams: RouteParams; navigationParams: {scrollRestoration?: boolean; replace?: boolean;}}) => void;
    makeLinkProps: (routeParams: RouteParams) => {href?: string; isActive?: boolean;};
}