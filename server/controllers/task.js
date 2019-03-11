// const {pool} = require("../config/db")

const { Pool, Client } = require('pg');
const {pool} = require('../config/db')
// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'oodo',
//     password: 'admin',
//     port: 5432,
//   })


//tasks
exports.Mytask = (req, res) => {
    // SELECT userid, username FROM tuser WHERE username = '$user_username' AND password = SHA('$user_password')
    const userid= req.params.userid
    // const email= '488taimoor@gmail.com'
    console.log('====================================');
    console.log('server side', userid);
    console.log('====================================');
    

    const query= (`
    SELECT 
	project_task.id, 
	res_users.partner_id, 
	res_partner.name as Assigned,  
	project_task.name,
	project_task.user_id, 
	project_task.planned_hours,
	project_task.date_deadline,
	project_task.create_date, 
	project_task.description,
	project_task.sequence,
	project_task.color,
	project_task.date_end,
	project_task.write_uid,
	project_task.displayed_image_id,
	project_task.partner_id,
	project_task.create_uid,
	project_task.date_start,
	project_task.message_last_post,
	project_task.company_id,
	project_task.priority,
	project_task.project_id,
	project_task.date_last_stage_update,
	project_task.date_assign,
	project_task.kanban_state,
	project_task.write_date,
	project_task.active,
	project_task.stage_id,
	project_task.notes,
	project_task.remaining_hours,
	project_task.sprint_id,
	project_task.delay_hours,
	project_task.parent_id,
	project_task.progress,
	project_task.total_hours_spent,
	project_task.effective_hours,
	project_task.total_hours,
	project_task.children_hours,
	project_sprint.display_name,
	account_analytic_account.name as projectname
    FROM public.project_task 
    INNER JOIN public.project_sprint ON public.project_task.sprint_id= public.project_sprint.id
    and user_id='`+userid+`'Inner join public.res_users on public.project_task.user_id=public.res_users.id
	inner join public.res_partner on public.res_users.partner_id= public.res_partner.id
	inner join public.account_analytic_account on public.account_analytic_account.id=public.project_task.project_id`)


    console.log("*********************************",pool)
    pool.query(query, (err, response) => {
        if (err) {
            res.status(500).json({'error':err})
        }else{
            console.log('====================================');
            console.log('here are result:', response);
            console.log('====================================');
           
                res.status(200).json( response.rows )
           
           
        }
    })



}

//subtask
exports.SubTask = (req, res) => {
    
    const taskId= req.params.taskId
   
    console.log('====================================');
    console.log('Task id', taskId);
    console.log('====================================');
    

    const query= (`SELECT 
    project_sub_task.id, 
    project_sub_task.assigned_user, 
    res_partner.name as AssignedName, 
    project_sub_task.create_date, 
    project_sub_task.description,  
    project_sub_task.name,
    project_sub_task.date_deadline, 
    project_sub_task.task_ref
        FROM public.project_sub_task
        inner join public.res_users on public.res_users.id= public.project_sub_task.assigned_user
        and project_sub_task.task_ref='`+taskId+`'inner join public.res_partner on public.res_partner.id= public.project_sub_task.assigned_user`)



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

//Alltasks of specific Project
exports.AllTask = (req, res) => {
    
    const pId= req.params.pid
   
    console.log('====================================');
    console.log('Task id', pId);
    console.log('====================================');
    

    const query= (`SELECT 
	project_task.id, 
	res_users.partner_id, 
	res_partner.name as Assigned,  
	project_task.name,
	project_task.user_id, 
	project_task.planned_hours,
	project_task.date_deadline,
	project_task.create_date, 
	project_task.description,
	project_task.sequence,
	project_task.color,
	project_task.date_end,
	project_task.write_uid,
	project_task.displayed_image_id,
	project_task.partner_id,
	project_task.create_uid,
	project_task.date_start,
	project_task.message_last_post,
	project_task.company_id,
	project_task.priority,
	project_task.project_id,
	project_task.date_last_stage_update,
	project_task.date_assign,
	project_task.kanban_state,
	project_task.write_date,
	project_task.active,
	project_task.stage_id,
	project_task.notes,
	project_task.remaining_hours,
	project_task.sprint_id,
	project_task.delay_hours,
	project_task.parent_id,
	project_task.progress,
	project_task.total_hours_spent,
	project_task.effective_hours,
	project_task.total_hours,
	project_task.children_hours, 
	project_sprint.display_name
    FROM public.project_task 
    INNER JOIN public.project_sprint ON public.project_task.sprint_id= public.project_sprint.id
    and project_id='`+pId+`'Inner join public.res_users on public.project_task.user_id=public.res_users.id
	inner join public.res_partner on public.res_users.partner_id= public.res_partner.id`)



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


exports.InProgress = (req, res) => {
    
    const pId= req.params.pid
   
    console.log('====================================');
    console.log('Task id', pId);
    console.log('====================================');
    

    const query= (`select * from project_task as task
	join project_task_type as task_type
	on task.stage_id = task_type.id
	join project_task_type_rel as x
	on x.type_id =task_type.id
	 where x.project_id='`+pId+`'and task_type.cancel_state=true`)



    pool.query(query, (err, response) => {
        if (err) {
            console.log('error:', err)
            res.status(500).json({'error':err})
        }else{
            console.log('====================================');
            console.log('here is result:', response);
            console.log('====================================');
           
                res.status(200).json( response.rows )
           
           
        }
    })



}


exports.DoneTasks = (req, res) => {
    
    const pId= req.params.pid
   
    console.log('====================================');
    console.log('Task id', pId);
    console.log('====================================');
    

    const query= (`select * from project_task as task
	join project_task_type as task_type
	on task.stage_id = task_type.id
	join project_task_type_rel as x
	on x.type_id =task_type.id
	 where x.project_id='`+pId+`'and task_type.done_state=true`)



    pool.query(query, (err, response) => {
        if (err) {
            console.log('error:', err)
            res.status(500).json({'error':err})
        }else{
            console.log('====================================');
            console.log('here is result:', response);
            console.log('====================================');
           
                res.status(200).json( response.rows )
           
           
        }
    })



}