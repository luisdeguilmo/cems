import express from "express";

const router = express.Router();

let events = [];
let id = 0;

// Retrieve all events
router.get("/", (req, res) => {
    res.send(events);
});

// Add a new event
router.post("/", (req, res) => {
    events.push({ id: ++id, ...req.body });
    res.send("New event added successfully.");
});

// Retrieve a specific event by ID
router.get("/:id", (req, res) => {
    const { id } = req.params;
    const event = events.find((event) => event.id === +id);

    if (!event) {
        return res.status(404).send({ message: "Event not found" });
    }

    res.send(event);
});

// Update an event by ID
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { titleValue, dateValue, organizerValue } = req.body;

    const event = events.find((event) => event.id === +id);

    if (!event) {
        return res.status(404).send({ message: "Event not found" });
    }

    event.title = titleValue;
    event.date = dateValue;
    event.organizer = organizerValue;
    
    res.send("Event successfully updated.");
});

// Delete an event by ID
router.delete("/:id", (req, res) => {
    const { id } = req.params;

    events = events.filter((event) => event.id !== +id);
    res.send("Event successfully deleted.");
});

export default router;
export { events };
