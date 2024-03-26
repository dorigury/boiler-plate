const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const { User } = require('./models/User');
const config = require('./config/key');

//application/x-www-form-urlencoded 형식의 데이터를 분석해서 가져올 수 있게 해줌
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(`Could not connect to MongoDB : ${err}`));

app.get('/', (req, res) => {
    res.send('Hello, world! hi');
});

app.post('/register' , async (req , res)=>{

    console.log('registering user');

//    res.send('hello from simple server :)')
    const user = new User(req.body);

    console.log(user);

    // user.save((err, userInfo) => {
    //     if (err) return res.json({ success: false, err });
    //     return res.status(200).json({
    //         success: true
    //     });
    // });

    const result = await user.save().then(()=>{
        res.status(200).json({
          success: true
        })
      }).catch((err)=>{
        res.json({ success: false, err })
      })

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});