const express = require ('express');
const parkingSysRoutes = require(`./src/parkingSys/routes`);


const app = express();
const port = 3000;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("I am Ready");
});

app.use("/api/v1/parkingSys", parkingSysRoutes);

app.listen(port, ()=> console.log(`listen in port ${port}`));
