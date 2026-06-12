const securityHeaders = [
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'X-Frame-Options', value: 'DENY' },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
]

module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ['es', 'en'],
        defaultLocale: 'es',
        // Sin detección automática: la web es en español por defecto
        // y el cambio de idioma es siempre una decisión del visitante.
        localeDetection: false
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: securityHeaders
            }
        ]
    }
}
