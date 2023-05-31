const express=require('express');
const crypto=require('crypto');
const app=express();

app.use(express.json);


app.post('/login',(req,res)=>{
 
  key=Buffer.from("KeyForExtencheDataOverTheHTTPp==");
  iv=Buffer.from("IvForServer==App");

  //decrypt
  console.log(req.body.email);
  let dataToDecrypt = req.body.email;
  const decipher=crypto.createDecipheriv("aes-256-cbs",key,iv);
  let decrypted=decipher.update(dataToDecrypt,'base64','utf');
  decrypted += decipher.final("utf8")
  console.log(decrypted);

});

app.listen(4000,"192.168.176.3",(req,res)=>{
    console.log("Running on 4000");
});