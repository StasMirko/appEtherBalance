export const config = {
  PORT: process.env.PORT || 5000,
  HOST: process.env.PORT || 'http://localhost',
  CRON_JOB_PERIOD: process.env.CRON_JOB_PERIOD || '*/10 * * * * *',
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/ether',
  WALLET_ADDRESS: process.env.WALLET_ADDRESS || '0xA145ac099E3d2e9781C9c848249E2e6b256b030D',
  PROVIDER: process.env.PROVIDER || 'https://mainnet.infura.io/v3/b2f2012b94fd45869feb6f154583572b'
};
