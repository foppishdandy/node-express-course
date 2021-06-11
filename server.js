const express = require('express');
const app = express();
app.use(express.json());
const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
];

app.get('/users',function(req,res){
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
});
//colons are used as variables that be viewed in the params
app.get('/users/:id',function(req,res){
    console.log(req.params.id);
    mockUserData.push({name:req.params.id});
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
});

app.post('/login',function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    //This should come from the database
    const mockUsername="billyTheKid";
    const mockPassword="superSecret";

    if (username===mockUsername && password===mockPassword){
        //In practice, use JSON web token sign method here to make an encrypted token
        res.json({
            success: true,
            message: 'password and username match!',
            token: 'encrypted token goes here'
        });
    }else{
        res.json({
            success: false,
            message: 'password and username do no match'
        });
    }
});

app.get('/porpy',function(req,res){
    console.log('PORPY');
    res.json({
        success:true,
        porpy:{porp:true,ok:true},
        message:'you just did porpy, OK?'
    });
});

app.listen(8000,function(){
    console.log("server is running")
});