import { SelectionsRouteParams } from '@kinopoisk-int/kp-selections';
import {ShowcaseTitle} from '../ui/showcase-title/component'
import {createModuleConfig} from '@kinopoisk-int/module-kit';

const defaultUiRenderers = {ShowcaseTitle};
const defaultRoutesConfig = {
    selections: (params: SelectionsRouteParams) => ({
        href: '',
        isExternal: false,
    })
}


export const {getConfig, updateConfig: init, useConfig} = createModuleConfig({uiRerenderers: defaultUiRenderers, routesConfig: defaultRoutesConfig, isGraphqlEnabled: true, secret: ''});
