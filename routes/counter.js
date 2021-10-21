const express = require("express");
const router = express.Router();

let number = 3

router.get('/api', (req, res) => {
    res.json({
        status: "hello world"
    })
});

router.get('/api/counter', (req, res) => {
    //send the current value of the counter to the client
});

// adding 1 to the current value of the counter
router.post('/api/counter', (req, res) => {

    //increment the number
    
    //send an object back to client
    //{status: 'incremented', value: }
    
});

// subtract 1 from the current value of the counter
router.put('/api/counter', (req, res) => {
    //decrement the number
    
    //send an object back to client
    //{status: 'decremented', value: }
});

// reset: to variable number to zero
router.delete('/api/counter', (req, res) => {
    //reset the value of number to zero
    
    
    //send an object back to client
    //{status: 'reset', value: }
});

module.exports = router;