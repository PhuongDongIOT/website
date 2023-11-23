const getUniqueAryByKey = <T>(arr: T[], key:string):T[] => {
    const filtered = arr.filter(
    (v, i, a) => a.findIndex(
        (v2) => (v2[key as keyof T] === v[key as keyof T]),
    ) === i,
    );

    return filtered;
};

const getRouterParam = (
    val: string | string[] | undefined,
    defaultVal: string = '',
):string => (val && Array.isArray(val) ? val.join(',') : val || defaultVal);

export {
    getUniqueAryByKey,
    getRouterParam
};