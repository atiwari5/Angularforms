const server = require('express') ;
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000

const app = server()
app.use(bodyParser.json());
app.use(cors());

app.get('/' , function(rq, rs){
    rs.send('Hello from Server');
})

app.post('/enroll' , function(rq,rs){
    console.log(rq.body);
    rs.status(200).send({"message":"Data Received"});
})

app.post('/enrollerror' , function(rq,rs){
    console.log(rq.body);
    rs.status(401).send({"message":"Data Received"});
})

app.listen(PORT , function(){
    console.log('Server is Running : ' + PORT);

})
