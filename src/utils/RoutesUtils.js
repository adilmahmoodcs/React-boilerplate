class RoutesUtils {

    static setRoutes(config)
    {
        let routes = [...config.routes];
        return [...routes];
    }

    static generateRoutesFromConfigs(configs)
    {
        let allRoutes = [];
        configs.forEach((config) => {
            allRoutes = [
                ...allRoutes,
                ...this.setRoutes(config)
            ]
        });
        return allRoutes;
    }

}

export default RoutesUtils;
