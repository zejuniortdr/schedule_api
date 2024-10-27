const express = require('express');
const router = express.Router();
const Event = require('./models');


// Rotas
router.post('/', async (req, res) => {
    const event = new Event(req.body);
    await event.save();
    res.status(201).send(event);
});

router.get('/', async (req, res) => {
    const events = await Event.find({});
    res.send(events);
});

router.get('/:id', async (req, res) => {
    try {
        const eventId = req.params.id;
        const event = await Event.findById(eventId);

        if (event) {
            res.json(event);
        } else {
            res.status(404).json({ message: 'Event not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server error', error });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const eventId = req.params.id;
        const updatedEvent = await Event.findByIdAndUpdate(eventId, req.body, { new: true });

        if (updatedEvent) {
            res.json(updatedEvent);
        } else {
            res.status(404).json({ message: 'Event not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server error', error });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const eventId = req.params.id;
        const updatedEvent = await Event.findByIdAndUpdate(eventId, req.body, { new: true });

        if (updatedEvent) {
            res.json(updatedEvent);
        } else {
            res.status(404).json({ message: 'Evento não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar o evento', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const eventId = req.params.id;
        const deletedEvent = await Event.findByIdAndDelete(eventId);

        if (deletedEvent) {
            res.json({ message: 'Event deleted', deletedEvent });
        } else {
            res.status(404).json({ message: 'Event not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server error', error });
    }
});



module.exports = router;
