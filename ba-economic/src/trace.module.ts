import { logger } from '~utils/logger.utils'

const handleTrace = async ({handle} : any) => {
    const { time, end } = await handle

    logger.info((await end) - time)
};

export {
    handleTrace,
};