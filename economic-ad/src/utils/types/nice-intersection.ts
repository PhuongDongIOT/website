type NiceIntersection<S, T> = {
    [K in keyof (S & T)]: (S & T)[K];
};

export type { NiceIntersection };