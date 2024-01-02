type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};

type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
  };

export type {
    Getters,
    OptionsFlags
}