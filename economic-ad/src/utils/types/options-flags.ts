type OptionsFlags<Type, TypeExtends> = {
    [Property in keyof Type]: TypeExtends;
};

export type {
    OptionsFlags
}