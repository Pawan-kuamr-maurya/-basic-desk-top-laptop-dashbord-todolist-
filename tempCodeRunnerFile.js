//  if (req.body.topic === work) {
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