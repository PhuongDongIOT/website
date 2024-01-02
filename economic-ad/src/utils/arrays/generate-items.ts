const generateItems = (numItems: number): any[] =>
    Array(numItems)
        .fill(true)
        .map(_ => ({
            isActive: false,
            label: 'hihi',
        }));

export { generateItems };