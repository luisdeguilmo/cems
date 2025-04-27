import express from 'express';
import { events } from '../routes/events.js'; // Assuming events is an array

const router = express.Router();

router.post('/', (req, res) => {
    const { eventId, name, email } = req.body;

    const event = events.find(e => +e.id === +eventId); // Find the event by ID

    if (!event) {
        return res.status(404).send({ message: "Event not found" });
    }

    const alreadyRegistered = event.attendees.some(attendee => attendee.email === email);

    if (alreadyRegistered) {
        return res.status(400).send({ message: "Already registered" });
    }

    event.attendees.push({ name, email }); // Only save name and email in attendees
    return res.send({ message: "Registered for Tech Conference" });
});

export default router;
