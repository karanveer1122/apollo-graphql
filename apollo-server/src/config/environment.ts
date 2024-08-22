import dotenv from 'dotenv';

dotenv.config();

export const environment = {
  PORT: process.env.PORT || 4000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  OPEN_LIBRARY_API_URL: process.env.OPEN_LIBRARY_API_URL || 'https://openlibrary.org/',
};
