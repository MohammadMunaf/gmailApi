const express=require('express');
const PORT = process.env.PORT || 3000;
const app=express();

app.set('view engine','ejs');
const path=require('path')
app.set('views',path.join(__dirname,'/views'));

app.get('/',(req,res)=>{
    res.render('login');
})
app.post('/',(req,res)=>{

})


app.listen(PORT, () => {
    console.log(`Listining on port ${PORT}`)
})