import {ShowcaseTitle} from '../ui/showcase-title/component'
import {SelectionsLink} from '../ui/selections-link/component'
import { createModuleConfig } from '@kinopoisk-int/module-kit';

export const defaultUiRenderers = {ShowcaseTitle};
export const defaultRouteRerenderers = {selections: SelectionsLink}


export const {getConfig, updateConfig: init, useConfig} = createModuleConfig({uiRerenderers: defaultUiRenderers, routeRerenderers: defaultRouteRerenderers, isGraphqlEnabled: true, secret: ''});