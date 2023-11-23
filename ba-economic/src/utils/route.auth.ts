import { logger } from './logger.utils';
import { TypeUrlRegrex, urlRegrex } from '~contants/url.contants';

type TypeAuthorization<T> = T;

interface AbstractRoute {
    createMethodCheckRoute(): TypeRouteRegrex | null;
}

interface TypeRouteRegrex {
    usefulFunction(urlRegrex: TypeUrlRegrex): string | boolean;
}


class ConcreteRouteRegrex implements TypeRouteRegrex {
    routeString: string;

    constructor(urlString: string) {
        this.routeString = urlString;
    }
    

    public usefulFunctionRegrexRoute(inputRegrex: string): boolean {
        const regexp = new RegExp(inputRegrex);
        const resultTest = regexp.test(this.routeString)
        return resultTest;
    }

    public usefulFunction(urlArrayRegrex: TypeUrlRegrex): string | boolean {
        let result: boolean = false
        for(let index = 0; index < urlArrayRegrex.length; index++) {
            const itemsCheck = this.usefulFunctionRegrexRoute(urlArrayRegrex[index]);
            if(itemsCheck) {
                result = true;
                break;
            }
        }
        return result;
    }
}

class ConcreteRouteAuth implements TypeRouteRegrex {
    authString: TypeAuthorization<any>;

    constructor(authString: TypeAuthorization<any>) {
        this.authString = authString;
    }

    public usefulFunction(urlRegrex: TypeUrlRegrex): string | boolean {
        return true;
    };

    public async usefulFunctionAuth(): Promise<boolean> {
        let result :boolean = false;
        return result;
    }
}

class AbstractRouteRegrex implements AbstractRoute {
    route: URL;
    auth: TypeAuthorization<any>;

    constructor(urlString: string, authString: TypeAuthorization<any>) {
        this.route = new URL(urlString);
        this.auth = authString;
    }

    public createMethodCheckRoute(): TypeRouteRegrex | null {    
        let checkAuthRoute: TypeRouteRegrex = new CheckAuthRoute(this.route.pathname);
        if(!checkAuthRoute) {
            checkAuthRoute = new ConcreteRouteAuth(this.auth);
        }
        return checkAuthRoute;
    }
}

class CheckAuthRoute implements TypeRouteRegrex {
    routeString: string;    

    constructor(urlString: string) {
        this.routeString = urlString;
    }

    public usefulFunction(urlArrayRegrex: TypeUrlRegrex): string | boolean {
        const concreteRouteRegrex = new ConcreteRouteRegrex(this.routeString);
        const concreteCheckRouteRegrex = concreteRouteRegrex.usefulFunction(urlArrayRegrex);
        return concreteCheckRouteRegrex;
    }
}

function clientCode(factory: AbstractRoute) {

    const routeCheckRegrex: TypeRouteRegrex | null = factory.createMethodCheckRoute();
    if(routeCheckRegrex) {
        const usefulFunctionRoute: string | boolean = routeCheckRegrex.usefulFunction(urlRegrex);
        logger.info(usefulFunctionRoute)
        return usefulFunctionRoute;
    }
}

const useCheckRoute = (urlString: string, authString: string | null) => clientCode(new AbstractRouteRegrex(urlString, authString));

export {
    useCheckRoute,
};