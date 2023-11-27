import { dlopen, FFIType, suffix } from "bun:ffi";
import { logger } from '~utils/logger.utils';

const handleFunction = (): number => {
    const path = `src/modules/users/addons/numbers/libadd.${suffix}`;
    logger.info(path);

    const lib = dlopen(path, {
    add: {
        args: [FFIType.i32, FFIType.i32],
        returns: FFIType.i32,
    },
    });


    const result: number = lib.symbols.add(1, 2);
    return result;
};

export {
    handleFunction,
}