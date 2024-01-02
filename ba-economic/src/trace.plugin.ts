import { logger } from '~utils/logger.utils'
import { Elysia } from 'elysia';

const handleTrace = async ({handle} : any) => {
    const { time, end } = await handle

    logger.info((await end) - time)
};

const tracePlugin = new Elysia()
    .trace(handleTrace);

export {
    tracePlugin,
};