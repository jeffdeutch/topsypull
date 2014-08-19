module.exports = {
  // Your twitter username
  username:'jsdeutch',
  // Your own Twitter app consumer/secret & access_token/secret
  //  for your account `username`
  oauth:{
    consumer_key: '8qA8MxGIcGlirPvOmnl32x4rb'
  , consumer_secret: 'sI1CVKgTQiUDpUbdtq7TtptkHe34XfVPPAaYeyqhcB4joLz4VM'
  , token: '2601319339-vujp3jOoXZ0kd83uYDUASyVXyqb8RZSg9KfUdl6'
  , token_secret: 'xQta64zqB9NWmlLTSkp4TMyf3pTZuz5LuK2EH1HpkGh9j'
  },
  // Topsy API key
  apikey: '09C43A9B270A470B8EB8F2946A9369F3',
  // Number of tweets to retrieve from topsy API
  perpage: 20000,
  // Only remove returned tweets from Topsy that are before
  beforeDate: new Date(2011, 0, 1)
};
