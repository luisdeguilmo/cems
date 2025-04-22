import express from 'express';
import { events } from '../routes/events.js';

const router = express.Router();

router.get("/:eventId", (req, res) => {
    const { eventId } = req.params;
    let listOfAttendees;

    events.forEach(event => {
        if (event.id === +eventId) {
            listOfAttendees = event.attendees;
        }
    });
    res.send(listOfAttendees);
});

export default router;