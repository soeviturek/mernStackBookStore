import express from "express";
import { PORT,mongoDBURL } from "./config.js";
import  mongoose  from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';

const app = express();

//middleware for parsing request body
app.use(express.json());

// default value of * that allows everything
app.use(cors());

// customized
// app.use(
//     cors(
//         {
//             origigin :'http://localhost:3000',
//             methods:['GET','POST','PUT','DELETE'],
//             allowedHeaders:['Content-Type'],
//         }
//     )
// );


app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send("Welcome to MERN STACK");
});

app.use('/books',booksRoute);


//connect to mongodb. mongoose allows interaction with mongodb with js
mongoose.connect(mongoDBURL).then(()=>{
    console.log('App launched successfully!');
    app.listen(PORT, ()=>{
        console.log(`App is listening to port: ${PORT}`);
    });
}).catch((error)=>{
    console.log(error);
});



