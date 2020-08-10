const express = require('express');
const router = express.Router();


const people = [
    {firstName: "Daniel"},
    {firstName: "Erika"},
    {firstName: "Christian"}
];

router.get("/", (req, res) => {
    res.send(people);
})

router.post("/", (req, res) => {
    let x = people.find( x => req.params.firstName)

    if(!x){
        return res.send(people.push({firstName: req.params.firstName}) && console.log("The name has been posted"))
    } else {
        return res.send("The Name Already Exists")
    }
})

router.delete("/:firstName", (req, res) => {
    let x = people.find( x => x.firstName === req.params.firstName)

    if(x){
      let num = people.indexOf(x)
      people.splice(num, 1);  
      return res.status(200).send()
    }else{
        console.log("This name does not exist")
        return res.status(404).send()
    }
})

router.put("/:firstName", (req, res) => {
    //checking if theres anyone with the same name already.
    let x = people.find( x => x.firstName === req.params.firstName)
    if (!x) return res.status(404).send("There's no person with this name");


    x.firstName = req.body.firstName;
    res.send(x);

})







module.exports = router;