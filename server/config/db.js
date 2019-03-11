// var Odoo = require('node-odoo');

// var odoo = new Odoo({
//   host: '43.245.207.48',
//   port: 8069,
//   database: 'AlfAinTech',
//   username: '488taimoor@gmail.com',
//   password: '123'
// });


// odoo.connect(function (err) {
//     if (err) { return console.log('err'); }

//     odoo.get('res.partner', 4, function (err, partner) {
//         if (err) { return console.log(err); }

//         console.log('Partner', partner.length);
//       });
// }
// )











// const { Pool, Client } = require('pg');

// var pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'oodo',
//     password: 'admin',
//     port: 5432,
//   })

//  pool.connect().then(()=>{
//     console.log('====================================');
//     console.log('connected ');
//     console.log('====================================');
// }).catch(error=>{
//     console.log('====================================');
//     console.log(error);
//     console.log('====================================');
// })

// const pg = require('pg')
const { Pool, Client } = require('pg');
var FCM = require('fcm-node');
var serverKey = 'AAAA8IUdZA8:APA91bFaJNoPLp-jcN1nYJ7ve8cNFTqS1Y-E4ehfKCnFnoouuPHRcpW63OS7LsYLFo6JB-WNQoSNz4DaikoOOweHncwRH815Mx8nB1EDzGp0o-dnvxnjQtBQWDV3_oDph_xhnvabvYa5'; //put your server key here
var fcm = new FCM(serverKey);


var pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'oodo',
  password: 'admin',
  port: 5432,
})


// Connect to the DB
pool.connect(function (err, client) {
  if (err) {
    console.error(err)
  }
  // Handle notifications
  client.on('notification', function (msg) {
    const payload = JSON.parse(msg.payload)

    // get token from db. 
    const query = (`
    SELECT id, uid, token
	FROM public.register_device
  where uid='`+ payload.data.user_id + `'`)


    pool.query(query, (err, response) => {
      if (err) {
        console.log('error:', err)
      }else if(response.rowCount===0){
        console.log('Data...........')
      }
       else if(response.rowCount===1) {
        console.log('====================================');
        console.log('here is register device data:', response.rows);
        console.log('====================================');
        console.log('id.........:', response.rows[0].token)
        // return response.rows[0].id
        var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
          to: response.rows[0].token,
          collapse_key: 'Updates Available',

          notification: {
            // title: 'Title of your push notification', 
            body: payload.data.name,
            sound: "default"
          },

          data: {  //you can send only notification or only data(or include both)
            my_key: payload,

          }
        };

        fcm.send(message, function (err, response) {
          if (err) {
            console.log("Something has gone wrong!");
          } else {
            console.log("Successfully sent with response: ", response);
          }
        });



      }
    })






    // var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
    //   to: 'c-QzuCmnAGQ:APA91bFPdA1I_jpi7vxy68XeIc8jNU-Ubr5X8Bwb4qd2EYq77oprIjNg9Yx8w7nPdK7l0_MoHhlJ_B16Q0TIY2Sytd0sdtixcQ9a8vdOE9_iXvJiTLfjlkLo1E8yuqFo4tsfhDc0wcH7',
    //   collapse_key: 'Updates Available',

    //   notification: {
    //     // title: 'Title of your push notification', 
    //     body: 'New Message',
    //     sound : "default"
    //   },

    //   data: {  //you can send only notification or only data(or include both)
    //     my_key: payload,

    //   }
    // };

    // fcm.send(message, function (err, response) {
    //   if (err) {
    //     console.log("Something has gone wrong!");
    //   } else {
    //     console.log("Successfully sent with response: ", response);
    //   }
    // });








    console.log('here is notification: ', payload.data.user_id)
    // Send payload into a queue etc...
  })
  // Listen for NOTIFY calls
  var query = client.query('LISTEN db_notifications')
})






module.exports = {
  'pool': pool
}










// const mongoose = require("mongoose");

// const connectionstr =  "mongodb://localhost:27017/Login";

// const options = {
//   reconnectTries: Number.MAX_VALUE,
//   poolSize: 10
// };

// mongoose.connect(connectionstr, options).then(
//   () => {
//     console.log("Database connection established!");
//   },
//   err => {
//     console.log("Error connecting Database instance due to: ", err);
//   }
// );

