import { useRouter } from 'next/router'
import es from '../locales/es'
import en from '../locales/en'

const dictionaries = { es, en }

export function useTranslation() {
    const { locale, defaultLocale } = useRouter()
    const t = dictionaries[locale] || dictionaries[defaultLocale] || dictionaries.es
    return { t, locale: locale || 'es' }
}
