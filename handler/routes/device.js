const express = require('express');
const router = express.Router();

router.post('/store', (req, res, next) => {
    var incomingDevice = {
        id: req.body.id,
        readings: req.body.readings
    };

    var client = req.app.get('client');
    var updates = false;

    // If device already exists add new timestamps.
    // Discard events that are duplicate.
    if (client.has(incomingDevice.id)){
        var existingReadings = client.get(incomingDevice.id);

        // Look in existing readings for each incoming timestamp and add new ones.
        incomingDevice.readings.forEach(incomingReading =>{                        
            if (existingReadings.find(item => item.timestamp == incomingReading.timestamp) == undefined){
                existingReadings.push(incomingReading);
                updates = true;
            }
        });

        // Save updated object.
        if(updates){
            client.set(incomingDevice.id, existingReadings);
        }
    }
    else{
        client.set(incomingDevice.id, incomingDevice.readings);
        updates = true;
    }

    if(updates){
        //send back in-memory object that was updated
        incomingDevice = {
            id: incomingDevice.id,
            readings: client.get(incomingDevice.id)
        }
    }

    res.status(201).json({
        message: 'handling POST device route',
        storedDevice: incomingDevice
    });
});

router.get('/detail', (req, res, next) => {
    const id = req.query.id;

    var client = req.app.get('client');

    deviceReadings = client.get(id);

    if(deviceReadings == undefined){
        return res.status(400).json({
            message: 'No Device Exists'
        })    
    }
    device = {
        id: id,
        readings: deviceReadings
    }

    res.status(200).json({
        message: 'Device Detail',
        device: device
    })

});

router.get('/latest', (req, res, next) => {
    const id = req.query.id;

    var client = req.app.get('client');

    var readings = client.get(id);
    var latest = new Date(0);

    readings.forEach(reading =>{ 
        var deviceDate = new Date(reading.timestamp);

        if(latest < deviceDate){
            latest = reading.timestamp;
        }
    });

    if( latest==0 ){
        return res.status(400).json({
            message: 'Timestamp Error'
        })
    }
    
    res.status(200).json({
        latest_timestamp: latest
    })

});

router.get('/cummulative', (req, res, next) => {
    const id = req.query.id;

    var client = req.app.get('client');

    var readings = client.get(id);
    var result = 0;

    readings.forEach(reading =>{ 
       result = result + reading.count;
    });
    
    res.status(200).json({
        cummulative_count: result
    })

});

module.exports = router;