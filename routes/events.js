import express from "express";

const router = express.Router();

let events = [];
let id = 0;

router.get("/", (req, res) => {
    res.send(events);
});

router.post("/", (req, res) => {
    events.push({ id: ++id, ...req.body });
    res.send("New event added successfully.");
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const event = events.find((event) => event.id === +id);

    res.send(event);
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { titleValue, dateValue, organizerValue } = req.body;

    events.forEach(event => {
        if (+event.id === +id) {
            event.title = titleValue;
            event.date = dateValue;
            event.organizer = organizerValue;
        }
    });
    
    res.send("Event successfully updated.");
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    events = events.filter((event) => event.id !== +id);
    res.send(id);
});

export default router;
export { events };