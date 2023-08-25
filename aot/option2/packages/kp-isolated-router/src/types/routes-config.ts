import {RouteConfig} from './route-config';

export type RoutesConfig<RouteParams extends object = any> = Record<string, RouteConfig<RouteParams>>