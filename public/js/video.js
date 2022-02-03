// Referencing the following documentation
// https://www.twilio.com/docs/video/tutorials/user-identity-access-tokens#generate-helper-lib
const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioApiKey = process.env.TWILIO_API_KEY;
const twilioApiSecret = process.env.TWILIO_API_SECRET;

// Create an access token which we will sign and return to the client,
// containing the grant we just created
const token = new AccessToken(
    twilioAccountSid,
    twilioApiKey,
    twilioApiSecret,
    {identity: identity}
  );


// Example of connecting to a room
const { connect } = require('twilio-video');

connect('$TOKEN', { name:'my-new-room' }).then(room => {
  console.log(`Successfully joined a Room: ${room}`);
  room.on('participantConnected', participant => {
    console.log(`A remote Participant connected: ${participant}`);
  });
}, error => {
  console.error(`Unable to connect to Room: ${error.message}`);
});


  // Serialize the token to a JWT string
console.log(token.toJwt());