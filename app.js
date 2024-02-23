const express = require('express');

const app = express();

app.use(express.json());

app.get('/', function(req, res) {
  return res.send('Hello World!');
});

app.get("/mean/", function(req, res) {

const { nums } = req.query;
let vals=nums.split(',').map(Number)

let sum=vals.reduce((a,b)=>a+b)

let mean = sum/vals.length
response={
  operation:'mean',
  value:mean
}

return res.json(response)

})

app.get("/median/", function(req, res) {
  const { nums } = req.query;
  let vals=nums.split(',').map(Number)
  let mid = Math.floor(vals.length/ 2)

 let median=(vals[mid])
 response={
  operation:'median',
  value:median
}
return res.json(response)

})

app.get("/mode/", function(req, res) {
  const { nums } = req.query;
  let frequency={}
  let maxFrequency=0
  let vals=nums.split(',').map(Number)

  for(let num  of vals){
    if(frequency[num]){
      frequency[num]++
    } else {
      frequency[num]=1
    }
    if(frequency[num]>maxFrequency){
      maxFrequency=frequency[num]
      mode=num
    }

  }

 response={
  operation:'mode',
  value:mode
}
return res.json(response)

})




app.listen(3000, () => {
  console.log("Server running on port 3000")
})
