import {ShowcaseTitle} from '../ui/showcase-title/component'
import {SelectionsLink} from '../ui/selections-link/component'
import {createModuleConfig} from '@kinopoisk-int/module-kit';
import {RouteConfig} from '@kinopoisk-int/kp-isolated-router/src/types/route-config';
import {SelectionsRouteParams} from '@kinopoisk-int/kp-selections';
import { createRoutes } from '@kinopoisk-int/kp-isolated-router/src/utils/create-routes';

export const defaultUiRenderers = {ShowcaseTitle};
export const defaultRouteRerenderers = {selections: SelectionsLink}


export const {getConfig, updateConfig: init, useConfig} = createModuleConfig({uiRerenderers: defaultUiRenderers, routeRerenderers: defaultRouteRerenderers, isGraphqlEnabled: true, secret: ''});

const routerConfig: {selections: RouteConfig<SelectionsRouteParams>} = {selections: {makeLinkProps: () => ({href: 'hello'}), navigate: () => {}}};

export const {getConfig: getRoutesConfig, updateConfig: updateRoutesConfig, useConfig: useRoutesConfig} = createModuleConfig(routerConfig);

export const {Link} = createRoutes<typeof routerConfig>(getRoutesConfig);
