import IORedis from 'ioredis';
import { env } from '~/config.module';
import { logger } from '~utils/logger.utils';

const connection = new IORedis(`${env.REDIS_HOST}:${env.REDIS_PORT}`);
console.log(`${env.REDIS_HOST}:${env.REDIS_PORT}`)
connection.on('error', (err: any) => { console.log(`>>>> Redis Error: ${err}`) })
logger.info(`<<<< Connected to Redis >>>>`)

// Reuse the ioredis instance
type TIMEEX = {
    EX: "EX",
    time: number
}

class IORedisHelper {
    private connection: IORedis = connection;
    key: string;
    dataOfKey: string;
    
    constructor(key: string, dataOfKey: string) {
        this.key = key;
        this.dataOfKey = dataOfKey;
    }
    
    async setKey(timeEx: TIMEEX): Promise<void> {
        await this.connection.set(this.key, this.dataOfKey, timeEx.EX, timeEx.time);
    }

    async getKey(): Promise<void> {
        await this.connection.get(this.key);
    }

    async deleteKey(): Promise<void> {
        await this.connection.del(this.key);
    }

    async compareKey(value: string): Promise<boolean> {
        const storedValue = await this.connection.get(this.key);
        return storedValue === value;
    }
}

export {
    IORedisHelper,
    connection
};