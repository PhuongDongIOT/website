import { dlopen, FFIType, suffix } from "bun:ffi";


const exportFuctionFfi = () => {
    
    const path = `./src/addons/libadd.${suffix}`;

    const lib = dlopen(path, {
    add: {
        args: [FFIType.i32, FFIType.i32],
        returns: FFIType.i32,
    },
    });

    const result = lib.symbols.add(1, 2);
    return result;
}

export {
    exportFuctionFfi
}