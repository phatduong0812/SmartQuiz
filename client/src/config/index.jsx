const config = {
    NODE_ENV: import.meta.env.MODE || 'production',
    APP_API_URL: import.meta.env.VITE_API_URL,
    LOCALSTORAGE_TOKEN_NAME: 'token',
}

export const { NODE_ENV, LOCALSTORAGE_TOKEN_NAME, APP_API_URL } = config
