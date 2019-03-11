const {pool} = require('../config/db')
exports.Timesheet = (req, res) => {
    
    const Taskid= req.params.taskid
   
    console.log('====================================');
    console.log('Task id', Taskid);
    console.log('====================================');
    

    const query= (`SELECT 
	account_analytic_line.id, 
	account_analytic_line.amount,
	account_analytic_line.user_id,
	account_analytic_line.unit_amount, 
	account_analytic_line.date, 
	account_analytic_line.create_date, 
	account_analytic_line.write_date, 
	account_analytic_line.partner_id, 
	account_analytic_line.name as description, 
	account_analytic_line.code,   
	account_analytic_line.project_id,  
	account_analytic_line.task_id,
  	res_partner.name as Assigned
	FROM public.account_analytic_line
 	inner join public.res_partner on public.account_analytic_line.user_id=public.res_partner.id
	where task_id='`+Taskid+`'`)



    pool.query(query, (err, response) => {
        if (err) {
            console.log('error:', err)
            res.status(500).json({'error':err})
        }else{
            console.log('====================================');
            console.log('here are result:', response);
            console.log('====================================');
           
                res.status(200).json( response.rows )
           
           
        }
    })



}