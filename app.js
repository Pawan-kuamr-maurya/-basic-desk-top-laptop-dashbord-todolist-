//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const { default: ejs } = require("ejs");
const _=require("lodash");
const date = require(__dirname + "/date.js");
// const Newserch = require("./model/newlist")

mongoose.connect("mongodb://127.0.0.1:27017/todolist");
const itemsschema= new mongoose.Schema({
  name:String
})
const Items = mongoose.model("item",itemsschema);
const Work= mongoose.model("work",itemsschema)
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


let data1= new Items({
  name:"wellcome"
});
let data2= new Items({
  name:"to"
});
let data3= new Items({
  name:"new task"
});
const defaultitem = [ data1,data2,data3];

const home="today work";
const work="Work List"





app.get("/", async (req, res)=> {
  const items = await Items.find({});
 res.render("list", {listTitle:home, newListItems: items});
});

// app.get("/work", async function(req,res){
//   let dataw= await Work.find({});
//   res.render("list", {listTitle: work, newListItems: dataw});
// });

app.get("/about", function(req, res){
  res.render("about");
});

const lists=mongoose.Schema({
  topic:String,
  data:[itemsschema]
})
const Newserch= mongoose.model("newserch",lists);

// app.get("/:data",async function (req ,res) {
//   const requestpage=_.capitalize(req.params.data);
//   console.log(requestpage);
//  if(await Newserch.find({topic:requestpage}).count()==0 && requestpage!="Favicon.ico" ){ 
//  var newdata=({topic:requestpage,
//     data: defaultitem})
//  Newserch.insertMany(newdata);
//  console.log("new created"+requestpage);
// }else{
//   console.log("already");
//  }
// const items= await Newserch.findOne({topic:requestpage},{data:true});


// //res.send(items["data"]);
// const r = items ? items.data : [];
// //console.log(items["data"]);
// res.render("list", {listTitle:requestpage,newListItems:r});
// })








app.post("/", async function(req, res){
  const item = req.body.newItem;
  const topic1=req.body.topic;
  console.log(req.body.topic);
  await Items.insertMany({name:item})
  res.redirect("/");
//   if (req.body.topic === work) {
//     await Work.insertMany({name:item})
//     res.redirect("/work");
//   } else if (req.body.topic === home){
//     await Items.insertMany({name:item})
//     res.redirect("/");
//   }else{
//     let insert= new Items({
//       name:item
//     });
//     const dc= await Newserch.findOne({topic:topic1},{data:true});
//     const r = dc ? dc.data : [];
//     // r.push(insert);
//     // await Newserch.findOneAndUpdate({topic:topic1}, {data:r}, { upsert: true, new: true });

//     await Newserch.updateOne({topic:topic1},{"$push":{"data":insert}});
//    res.redirect("/"+topic1);
//  }
});

app.post("/delete",async function(req,res){
  const datatoD=req.body.check;
  if(req.body.type==home){
    Items.deleteOne({_id:datatoD}).then(console.log("sussful delete"));
    res.redirect("/");}
    else if(req.body.type === work){
      Work.deleteOne({_id:datatoD}).then(console.log("sussful delete"));
      res.redirect("/work"); }
     else{
      await Newserch.updateOne({topic:req.body.type},{"$pull":{"data":{_id:datatoD}}});
      res.redirect("/"+req.body.type);
     }
    }
  );
  

           
              






app.listen(3000, function() {
  console.log("Server started on port 3000");
});
