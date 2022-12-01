// This is our main file....
const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const app = express();
const Detail = require("./models/Detail"); // importing from Detail.js
const Slider = require("./models/Slider"); // importing from Slider.js

const routes = require("./routes/main");

app.use("/static", express.static("public"));
app.use("", routes);

// (template engine)
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials"); // setting partials

// Database connection.....
mongoose.connect("mongodb://0.0.0.0:27017/website_nodejs", (err) => {
  if (err) {
    console.log("unable to connect with the server");
  }
  else {
    console.log("Mongodb is connected");
    // Slider.create([
    //   {
    //     title:`Learn Java in very easy manner`,
    //     subTitle:`Java is one of the most popular programming language.`,
    //     imageUrl:"/static/images/bg.jpg"
    //   },       
    //   {
    //     title:`What is Django in Python`,
    //     subTitle:`Django is very famous web framework of python programming.`,
    //     imageUrl:"/static/images/bg1.jpg"
    //   },
    //   {
    //     title:`What about node js`,
    //     subTitle:`Node js is runtime environment to execute javascript outside browser.`,
    //     imageUrl:"/static/images/bg3.jpg"
    //   },
    // ])
  }
})

// data is storing in database...
// Detail({
//   brandName: "Sachin Kumar",
//   brandIconUrl: "https://www.youtube.com/watch?v=8hFlOtBDNT0",
//   links:[
//     {
//       label: "Home",
//       url: "/"
//     },
//     {
//       label: "Services",
//       url: "/services"
//     },
//     {
//       label: "Gallery",
//       url: "/gallery"
//     },
//     {
//       label: "About",
//       url: "/about"
//     },
//     {
//       label: "Contact",
//       url: "/contact-us"
//     },
//   ]
// }).save((err, db) => {
//   if(err) {
//     console.log("Error");
//   }
//   else {
//     console.log(`User data saved successfully ${db}`);
//   }
// })


// At this port, we are running our server
app.listen(process.env.PORT | 5000, () => {
  console.log("Server started");
});
