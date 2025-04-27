import express from 'express';
import { events } from '../routes/events.js';

const router = express.Router();
let users = []; 

// Retrieve all attendees for a specific event 
router.get("/:eventId", (req, res) => {
    const { eventId } = req.params;

    events.forEach(event => {
        if (event.id === +eventId) {
            users = event.attendees;
        }
    });
    res.send(users);
});

export default router;
