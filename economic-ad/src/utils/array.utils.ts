const generateItems = (numItems: number): any[] =>
    Array(numItems)
        .fill(true)
        .map(_ => ({
            isActive: false,
            label: Math.random()
                .toString(36)
                .substr(2),
        }));

export {
    generateItems
}