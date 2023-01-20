const { Router } = require('express');
const router = Router();
const { Temperamento } = require('../db');
const axios = require('axios');



router.get('/', async (req, res) => {

    let dogi = [{ name: 'Adventurous' }, { name: 'Responsive' }, { name: 'Stubborn' }, { name: 'Curious' }, { name: 'Clownish' },
    { name: 'Wild' }, { name: 'Hardworking' }, { name: 'Fun' }, { name: 'Energetic' }, { name: 'Alert' }, { name: 'Confident' }, { name: 'Intelligent' },]

    try {
        let allTemperaments = dogi.map(dog => dog.name);
        let temperaments = allTemperaments.join().split(',').map(temp => temp.trim());
        temperaments.map(temperament => {
            Temperamento.findOrCreate({
                where: {
                    name: temperament,
                },
            });
        });

        const allTemp = await Temperamento.findAll()
        res.status(200).json(allTemp);

    } catch (error) {
        res.status(500).json('No se pudo traer ningun temperamento');
    }



})

module.exports = router;