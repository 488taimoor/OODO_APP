var Odoo = require('node-odoo');
 


// const { Pool, Client } = require('pg');

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'oodo',
//     password: 'admin',
//     port: 5432,
//   })




exports.userLogin = (req, res) => {
    // SELECT userid, username FROM tuser WHERE username = '$user_username' AND password = SHA('$user_password')
    const email= req.params.email
    const password= req.params.password
    console.log('====================================');
    console.log('server side', email, password);
    console.log('====================================');
    

    var odoo = new Odoo({
        host: '43.245.207.48',
        port: 8069,
        database: 'AlfAinTech',
        username: email,
        password: password
      });
      
      odoo.connect((err, response)=>{
          if(err){
              console.log('error:', err)
              res.status(500).json({ 'error':err })
          }else{
              console.log('response: ', res)
              res.status(200).json( response )
          }
      })

    //   function (err) {
    //     if (err) { return console.log('err'); }
    
    //     odoo.get('res.partner', 4, function (err, partner) {
    //         if (err) { return console.log(err); }
         
    //         console.log('Partner', partner.length);
    //       });
    // }

   
    // odoo.search('res_users', x , function (err, response){
    //     if(err){
    //         console.log('error:', err)
    //     }else{
    //         console.log('response', response)
    //     }
    // })

    // odoo.get('res_users', 4, (err, response)=>{
    //     if(err){
    //         console.log('error:', err)
    //     }else{
    //         console.log('response', response)
    //     }
    // })
    
    


  
    // const passwordd='$pbkdf2-sha512$19000$1lrrPWestdZa673X2rt3Dg$fHR5AKUYkRquWDyPsXZXYUavC7hPWtTMLwxueSGRvKwjHHhu8CaN3glOa9aZBAWMf1umqi.3heIO.ySoKK4cmg'

    // const query= ("SELECT id, login FROM public.res_users where login='"+email+"' AND password_crypt='"+passwordd+"'")
    // pool.query(query, (err, response) => {
    //     if (err) {
    //         res.status(500).json({'error':err})
    //     }else{
    //         console.log('====================================');
    //         console.log('here are result:', response);
    //         console.log('====================================');
    //         if(response.rowCount==1){
    //             res.status(200).json({ 'data':response })
    //         }else{
    //             res.status(200).json({ 'data': 0 })
    //         }
           
    //     }
    // })


    

}