import express from 'express';
import { events } from '../routes/events.js';

const router = express.Router();

let users = [];

router.post('/', (req, res) => {
    users.push(req.body);
    let f = false;

    events.forEach(event => {
        if (+event.id === +req.body.eventId) {
            f = true;
            event.attendees.push(req.body);
        }
    });

    res.send(f);
});

export default router;