import 'dotenv/config';

export const appConstant = {
  UPLOAD_PATH: 'public/images',
  BASE_URL: 'http://localhost:3001',
  //BASE_URL:'http://ec2-3-6-170-107.ap-south-1.compute.amazonaws.com:3000',
  WEB_URL: 'https://demo.vipulac.in',
  PUBLIC_PATH: './public/',
  BUCKET_NAME: process.env.BUCKET,
  BUCKET_URL: `https://storage.googleapis.com/${process.env.BUCKET}`,
  BUCKET_URL_MACHINE: `https://storage.googleapis.com/${process.env.BUCKET_MACHINE}`,
  ROLE: {
    SUPER_ADMIN: 1,
    BRANCH_ADMIN: 2,
    TECHNICIAN: 3,
    SALES: 4,
  },
  DEFAULT_IMAGE: {
    USER: `https://storage.googleapis.com/${process.env.BUCKET}/placeholders/user-no-image.svg`,
  },
  GOOGLE: {
    CLIENT_ID: '',
    CLIENT_SECRET: '',
  },
  TWITTER: {
    CONSUMER_KEY: '',
    CONSUMER_SECRET: '',
  },
  FACEBOOK: {
    APP_ID: '',
    APP_SECRET: '',
  },
  LINKEDIN: {
    CLIENT_ID: '',
    CLIENT_SECRET: '',
  },
  JWT: {
    SECRETKEY: 'jwt_vipul_Ac_SaV_145689',
    EXPIRESIN: '100w',
  },
  EMAIL_HOST: '',
  EMAIL_PORT: '',
  EMAIL_HOST_USER: '',
  EMAIL_HOST_PASSWORD: '',
  RECORD_PER_PAGE: 10,
  SENDGRID_API_KEY: '',
};
