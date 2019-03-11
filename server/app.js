const cors = require('cors');
const express = require("express");
var path = require('path')
const bodyParser = require("body-parser");
var db = require("./config/db");
const Login = require("./controllers/Login");
const task = require("./controllers/task");
const registertoken = require("./controllers/device_reg_token");
const projects = require("./controllers/project");
const Tiemsheet = require("./controllers/timesheet");


const app = express();
const port = process.env.PORT || 3301;
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    console.log('====================================');
    console.log('hy');
    console.log('====================================');
})

app
  .route("/api/userlogin/:email/:password", )
  .get(Login.userLogin)

app
  .route("/api/mytask/:userid", )
  .get(task.Mytask)

app
  .route("/api/subtask/:taskId", )
  .get(task.SubTask)

app
  .route("/api/registertoken/:uid/:token", )
  .get(registertoken.registerToken)

app
  .route("/api/projects", )
  .get(projects.Projects)

app
  .route("/api/alltasks/:pid", )
  .get(task.AllTask)

app
  .route("/api/timesheet/:taskid", )
  .get(Tiemsheet.Timesheet)

app
  .route("/api/inprogress/:pid", )
  .get(task.InProgress)

app
  .route("/api/donetasks/:pid", )
  .get(task.DoneTasks)
app.listen(port, ()=>{
    console.log('====================================');
    console.log('listening ', port);
    console.log('====================================');
})