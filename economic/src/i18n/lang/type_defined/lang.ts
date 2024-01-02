type Home<T> = {
    title: T,
    content: T,
}

type TypeLanguageDefined = {
    Home: Home<string>
}

export default TypeLanguageDefined;