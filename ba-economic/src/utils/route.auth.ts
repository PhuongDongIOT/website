import { logger } from './logger.utils';
import { JwtAuthGuard } from '~middlewares/authentication/guard/jwt-auth.guard';

interface AbstractRoute {
    async createMethodCheckRoute(): Promise<TypeRouteRegrex | null>;
}

interface TypeRouteRegrex {
    usefulFunction(urlRegrex: TypeUrlRegrex): string | boolean;
}

type TypeUrlRegrex = Array<string>;
type TypeAuthorization = string | null;

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
    authString: TypeAuthorization;
    jwt: any;

    constructor(jwt: any, authString: TypeAuthorization) {
        this.authString = authString;
        this.jwt = jwt;
    }

    public usefulFunction(urlRegrex: TypeUrlRegrex): string | boolean {
        return true;
    };

    public async usefulFunctionAuth(): Promise<boolean> {
        let result :boolean = false;
        if(this.authString) {
            const checkAuth: JwtAuthGuard = new JwtAuthGuard(this.jwt, this.authString);
            const checkAuthVerify: string = await checkAuth.verify()
            if(checkAuthVerify) {
                result = !result;
            }

        }
        return result;
    }
}

class AbstractRouteRegrex implements AbstractRoute {
    route: URL;
    auth: TypeAuthorization;
    jwt: any;

    constructor(urlString: string, jwt: any, authString: TypeAuthorization) {
        this.route = new URL(urlString);
        this.auth = authString;
        this.jwt = jwt;
    }

    public async createMethodCheckRoute(): Promise<TypeRouteRegrex | null>  {    
        let checkAuthRoute: TypeRouteRegrex = new CheckAuthRoute(this.route.pathname);
        if(!checkAuthRoute) {
            const concreteRouteAuth: ConcreteRouteAuth = new ConcreteRouteAuth(this.jwt, this.auth);
            const checkAuthRouteFunc: any = await concreteRouteAuth.usefulFunctionAuth();
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

async function clientCode(factory: AbstractRoute) {
    const urlRegrex: TypeUrlRegrex = [
        '\/api\\/*.'
    ]
    const routeCheckRegrex: TypeRouteRegrex | null = await factory.createMethodCheckRoute();
    if(routeCheckRegrex) {
        const usefulFunctionRoute: string | boolean = routeCheckRegrex.usefulFunction(urlRegrex);
        logger.info(usefulFunctionRoute)
        return usefulFunctionRoute;
    }
}

const useCheckRoute = async (urlString: string, jwt: any, authString: string | null) => await clientCode(new AbstractRouteRegrex(urlString, jwt, authString));

export {
    useCheckRoute,
};