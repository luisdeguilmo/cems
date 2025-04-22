import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import eventsRouter from './routes/events.js';
import registersRouter from './routes/register.js';
import registrationsRouter from './routes/registrations.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(cors());

app.use('/events', eventsRouter);
app.use('/register', registersRouter);
app.use('/registration', registrationsRouter);

app.get('/', (req, res) => {
    res.send("Hello");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});