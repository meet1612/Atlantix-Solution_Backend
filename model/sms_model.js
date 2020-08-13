require('dotenv').config();
const accountSid=process.env.TWILIO_ACCOUNT_SID;
const authToken=process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid,authToken);

var sms={
  sendMsg:function(mobile_no,msg)
    {
        client.messages.create({
            to: '+91'+mobile_no,
            from: '+12512559187',
            body:msg
          })
          .then(message=> console.log(message))
          .catch(err=> console.log(err));
    }
};

module.exports=sms;