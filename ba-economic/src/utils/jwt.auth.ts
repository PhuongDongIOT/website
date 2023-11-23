import { JwtAuthGuard } from '~middlewares/authentication/guard/jwt-auth.guard';

interface Abstractauth {
    getInformationToken(): any;
}

type TypeAuthString = any | null;

class CheckAuthJwt implements Abstractauth{
    jwt: any
    authString: TypeAuthString;

    constructor(jwt: any, authString: string) {
        this.jwt = jwt;
        this.authString = authString;
    }

    async getInformationToken(): Promise<any> {
        let responseAuthJson: any = null
        if(this.authString) {            
            const jwtAuthGuard: JwtAuthGuard = new JwtAuthGuard(this.jwt, this.authString);
            responseAuthJson = await jwtAuthGuard.verify();
        }

        return responseAuthJson;
    }    
}

function clientAuth(factory: Abstractauth) {
    const routeCheckRegrex: any = factory.getInformationToken();
    return routeCheckRegrex;
}

const useHandleEncodeAuth = (jwt: any, authString: TypeAuthString) => clientAuth(new CheckAuthJwt(jwt, authString));

export {
    useHandleEncodeAuth,
};