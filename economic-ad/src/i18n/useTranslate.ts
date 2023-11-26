import { useRouter } from 'next/router';
import en from './lang/en';
import vi from './lang/vi';

type TypeObjectLanguageDefined<T> = T;

const objectLanguageDefined: TypeObjectLanguageDefined<any>= {
    en: en,
    vi: vi
}

const useTranslate = () => {
    const { locale } = useRouter();

    const translate = objectLanguageDefined[`${locale}`] ?? objectLanguageDefined['vi']

    return translate
}

export default useTranslate