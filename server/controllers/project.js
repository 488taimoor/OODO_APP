const { pool } = require('../config/db')

exports.Projects = (req, res) => {
    // SELECT userid, username FROM tuser WHERE username = '$user_username' AND password = SHA('$user_password')



    const query = (`
    SELECT 
    account_analytic_account.id, 
    account_analytic_account.code, 
    account_analytic_account.create_date, 
    account_analytic_account.message_last_post, 
    account_analytic_account.write_uid, 
    account_analytic_account.partner_id, 
    account_analytic_account.create_uid, 
    account_analytic_account.company_id, 
    account_analytic_account.write_date, 
    account_analytic_account.active, 
    account_analytic_account.name,
    account_analytic_account.use_tasks, 
    account_analytic_account.use_issues,
    count (account_analytic_account.id) as Task
    FROM public.account_analytic_account
    inner join public.project_task on public.project_task.project_id=public.account_analytic_account.id
    group by public.account_analytic_account.id
    `)


    console.log("*********************************", pool)
    pool.query(query, (err, response) => {
        if (err) {
            res.status(500).json({ 'error': err })
        } else {
            console.log('====================================');
            console.log('here are result:', response);
            console.log('====================================');

            res.status(200).json(response.rows)


        }
    })



}