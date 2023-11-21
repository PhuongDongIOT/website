export class JwtAuthGuard {
    content: string;
    jwt: any;
    constructor(content: string, jwtHook: any) {
        this.content = content;
        this.jwt = jwtHook;
    }

    async sign():Promise<string> {
        const result: string = await this.jwt.sign(this.content)
        return result;
    }

    async verify():Promise<string> {
        const result: string = await this.jwt.verify(this.content)
        return result;
    }
}