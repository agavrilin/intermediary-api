const authConstants = {
  jwt: {
    secret: 'superSecurity',
    expirationTime: {
      accessToken: '1h',
      refreshToken: '7d',
    },
    secrets: {
      accessToken: process.env.ACCESS_TOKEN || '283f01ccce922bcc2399e7f8ded981285963cec349daba382eb633c1b3a5f282',
      refreshToken: process.env.REFRESH_TOKEN || 'c15476aec025be7a094f97aac6eba4f69268e706e603f9e1ec4d815396318c86',
    },
  },
  redis: {
    expirationTime: {
      jwt: {
        accessToken: 86400, // 1d
        refreshToken: 604800, // 7d
      },
    },
  },
};

export default authConstants;
