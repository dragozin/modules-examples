import {useRunOnce} from '../hooks/use-run-once';

export const createModuleConfig = <ConfigType extends Record<string, any>>(defaultConfig: ConfigType) => {
    let config = {...defaultConfig};

    const getConfig = () => config;
    const updateConfig = (partialConfig: Partial<ConfigType>) => config = {...config, ...partialConfig};
    const resetConfigToDefault = () => config = {...defaultConfig}
    const setConfig = (newConfig: ConfigType) => config = {...newConfig};
    const useConfig = (partialConfig: Partial<ConfigType>) => {
        const init = useRunOnce(updateConfig);
        init(partialConfig);

        return () => resetConfigToDefault();
    }

    return {
        getConfig,
        updateConfig,
        resetConfigToDefault,
        setConfig,
        useConfig,
    }
}