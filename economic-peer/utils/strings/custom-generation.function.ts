const customGenerationFunction = (): string =>
	(Math.random().toString(36) + "0000000000000000000").substr(2, 16);


    export {
        customGenerationFunction
    }