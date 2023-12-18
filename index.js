const express=require('express');
const PORT = process.env.PORT || 3000;
const app=express();

app.set('view engine','ejs');
const path=require('path')
app.set('views',path.join(__dirname,'/views'));

const methodOverride = require('method-override');
const passport = require('passport');
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(methodOverride('_methid'));



app.get('/login',(req,res)=>{
    res.render('login');
})
app.post('/login',passport.authenticate('local', { failureRedirect: '/login' }),(req,res)=>{
    const {email,password}=req.body;
    console.log(email);
    console.log(password);
})


app.listen(PORT, () => {
    console.log(`Listining on port ${PORT}`)
})