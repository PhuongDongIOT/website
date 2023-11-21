import { jwt } from '@elysiajs/jwt';
import { env } from './config.module';

interface TypeJwtSetup {
    usefulFunction(): any;
}

type TypeParamSetupJwt = {
    name: string,
    secret: string,
    audience: string,
    issuer: string
}

class JwtSetup  implements TypeJwtSetup{
    paramSetupJwt: TypeParamSetupJwt;

    constructor(paramSetupJwt: TypeParamSetupJwt) {
        this.paramSetupJwt = paramSetupJwt;
    }

    usefulFunction () {
        return jwt(this.paramSetupJwt)
    }
}

const jwtPlugin = new JwtSetup({
    name: env.JWT_NAME,
    secret: env.JWT_SECRET,
    audience: env.JWT_AUDIENCE,
    issuer: env.JWT_ISSUER,
}).usefulFunction();


export {
    jwtPlugin
};