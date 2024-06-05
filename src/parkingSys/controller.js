const pool = require('../../db');


const getparkingSys = (req,res)=>{
    pool.query("SELECT * FROM parking_space_details", (error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

// const getparkingSys =  (req,res) => {
//     console.log("getting parking system");
// };

module.exports = {
    getparkingSys,
};