const pool = require('./db');


const getparkingSys = ()=>{
    pool.query("SELECT * FROM parking_space_details", (error, results)=>{
        if(error) console.log(error);
        console.log(results.rows);
    });
};

getparkingSys();

EncodedVideoChunk.call();