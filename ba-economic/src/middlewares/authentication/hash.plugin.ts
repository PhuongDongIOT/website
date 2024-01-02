
type TypeAlgorithms = {
    algorithm: "argon2id" | "argon2i" | "argon2d",
    memoryCost?: number,
    timeCost?: number

}
export class HashingPlugin {
    dataEncrypt: string;
    valueAlgorithms: TypeAlgorithms;

    constructor(dataEncrypt: any, valueAlgorithms: TypeAlgorithms) {
        this.dataEncrypt = String(dataEncrypt);
        this.valueAlgorithms = valueAlgorithms;
    }
   
    async hashData(): Promise<string> {
        const hash: string = await Bun.password.hash(this.dataEncrypt, this.valueAlgorithms);
        return hash;
    }

    async verifyData(hashString: string): Promise<boolean> {
        const hash: boolean = await Bun.password.verify(this.dataEncrypt, hashString);
        return hash;
    }
}
