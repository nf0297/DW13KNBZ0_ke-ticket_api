require('express-group-routes');
//Init Body parser
const bodyParser = require('body-parser')
//init express module
const express = require('express');
// use express in app variable
const app = express();
//define the server port
const port = process.env.PORT || 5000


const cors = require("cors");
//allow this app to receive incoming json request
app.use(bodyParser.json());
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

//middlewares
const { authenticated } = require("./middleware");

//import controllers
const AuthControllers = require('./controllers/auth')
const CategoryControllers = require('./controllers/category')
const EventControllers = require('./controllers/event')
const UserControllers = require('./controllers/user')
const OrderControllers = require('./controllers/order')

//membuat route home
app.get("/", (req, res) => {
  // res berarti response dan berfungsi mengirimkan "Welcome" kepada API
  res.send("Welcome, Ke-Ticket API");
});

app.group("/api/v1", (router) =>{
  //login register
  router.post('/register', UserControllers.register) //routing for register
  router.post('/login', AuthControllers.postLogin) //routing for login

  //category
  router.get('/categories', CategoryControllers.selectAll)   //routing for SHOW all category - number 1

  //event
  router.get('/events', EventControllers.selectAllEvent)   //routing for SHOW all event 
  router.get('/event/:id', EventControllers.showEventbyID)   //routing for SHOW event by Id - number 6
  router.post('/event/add', EventControllers.addNewEvent)   //routing for POST new event - number 10
  router.get('/category/:id/events', EventControllers.showEventbyCategory)   // routing for SHOW event by category - number 2

  //order
  router.get('/orders', OrderControllers.showApproved)   //routing SHOW order with approved status - number 9
  router.post('/order/add', OrderControllers.addOrder)   //routing for POST new order

  //sort
  router.get('/event/:title/search', EventControllers.sortEvent)   //routing for SHOW event by inpu

  //user
  router.get('/profile/:id', UserControllers.showProfilebyID)   //routing for SHOW profile by Id - number 7 
  router.put('/user/:id', UserControllers.updateProfile)   //routing for UPDATE user

  //change order status
  router.put('/order/:id', OrderControllers.updateStatus)   //routing for UPDATE order - number 8
  router.put('/status/:id', OrderControllers.updateConfirmed)   //routing for UPDATE confirm
  router.put('/approve/:id', OrderControllers.updateApproved)   //routing for UPDATE approve

  //payment
  router.get('/payment/:id', OrderControllers.showPayment)   //routing for SHOW payment

  //my-ticket
  router.get('/ticket/:id', OrderControllers.showTicketApproved)   //routing for SHOW ticket
})  


//when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port}!`))
