const { env } = process

export const NODE_ENV = env.NODE_ENV as 'development' | 'test' | 'production'
export const PORT = parseInt(env.PORT as string)
export const API_VERSION = env.API_VERSION as string

// Database
export const DB_HOST = env.DB_HOST as string
export const DB_PORT = parseInt(env.DB_PORT as string)
export const DB_USER = env.DB_USER as string
export const DB_PASS = env.DB_PASS as string
export const DB_NAME = env.DB_NAME as string

export const JWT_SECRET = env.JWT_SECRET as string
export const HASH_SALT = parseInt(env.HASH_SALT as string)
