const { pool } = require('../config/db')

exports.registerToken = (req, res) => {
    // SELECT userid, username FROM tuser WHERE username = '$user_username' AND password = SHA('$user_password')
    const uid = req.params.uid
    const token = req.params.token
    // const email= '488taimoor@gmail.com'
    console.log('====================================');
    console.log('server side', uid, token);
    console.log('====================================');
    const Selectquery = (`
    SELECT id, uid, token
	FROM public.register_device
  where uid='`+ uid + `'`)




    const Insertquery = (`
    INSERT INTO public.register_device(
        uid, token)
       VALUES ('`+ uid + `', '` + token + `');
    `)


    pool.query(Selectquery, (err, response) => {
        if (err) {
            res.status(500).json({ 'error': err })
        } else {
            console.log('====================================');
            console.log('here are result:', response);
            console.log('====================================');
            if (response.rowCount === 0) {
                pool.query(Insertquery, (err, responsee) => {
                    if (err) {
                        res.status(500).json({ 'error': err })
                    } else {
                        console.log('====================================');
                        console.log('new token registerd:', responsee);
                        console.log('====================================');
                        res.status(200).json(responsee)
                    }
                })
            } else if (response.rowCount === 1) {
                if (response.rows[0].token === token) {
                    console.log('same token generated')
                    res.status(200).json(response)
                } else {
                    var Updatequery = (`
                    UPDATE public.register_device 
	                SET  token = REPLACE(token, '`+ response.rows[0].token + `', '` + token + `') WHERE  uid='` + uid + `';
                    `)

                    pool.query(Updatequery, (err, responsees) => {
                        if (err) {
                            res.status(500).json({ 'error': err })
                        } else {
                            console.log('====================================');
                            console.log('Updated Token:', responsees);
                            console.log('====================================');
                            res.status(200).json(responsees)
                        }
                    })

                }
            } else {
                console.log('more than two rows')
            }




        }
    })



}



