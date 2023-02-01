
const { Dog, Temperamento } = require('../db');
const { Router } = require('express');
const axios = require('axios');
const router = Router();
require("dotenv").config();

//const { API_KEY } = process.env;
//https://api.thedogapi.com/v1/breeds?api_key={API_KEY}

//api
const getApiInfo = async () => {
    const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds`)
    const apiInfo = await apiUrl.data.map(dog => {
        return {
            id: dog.id,
            image: dog.image.url,
            name: dog.name,
            height: dog.height.metric,
            weight: dog.weight.metric,
            temperament: dog.temperament?.replace(/,/g, " "),
            life_span: dog.life_span,
        }
    })
    return apiInfo;
}


//bsDatos
const getDbInfo = async () => {
    const db = await Dog.findAll({
        include: {
            model: Temperamento,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    })

    return db
}

//Ambas info concatenada
const allData = async () => {
    const apiData = await getDbInfo();
    const dbData = await getApiInfo();
    const allDataContainer = apiData?.concat(dbData);
    return allDataContainer
};


//////////////////////////////////////Rutas/////////////////////////////////
//Busca por name 
router.get('/', async (req, res) => {
    const { name } = req.query;

    try {
        let dataAll = await allData();
        // console.log("data", dataAll)
        if (name) {
            let dogName = await dataAll.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()))

            dogName.length ?
                res.status(200).send(dogName) :
                res.status(404).send("No se encontro nada");
        } else {

            res.status(200).send(dataAll);
        }

    } catch (error) {
        //res.status(500).send("Error");
        console.error(error);
    }

})

///Id detalles

router.get('/:id', async (req, res) => {

    try {

        const { id } = req.params

        if (id.length > 6) {
            const dataDb = await Dog.findByPk(id, {
                include: {
                    model: Temperamento,
                    atributes: ["name"],
                    through: {
                        attributes: [],
                    }
                }
            })

            return res.status(200).send(dataDb);
        }
        else {

            const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`)
            const result = await apiUrl.data

            let obj = {};

            obj = {
                id: result.id,
                name: result.name,
                reference_image_id: result.reference_image_id.concat("", '.jpg').replace("", "https://cdn2.thedogapi.com/images/"),
                height: result.height.metric,
                weight: result.weight.metric,
                temperament: result.temperament?.replace(/,/g, " "),
                life_span: result.life_span,
            }
            return res.status(200).send(obj);

        }


    } catch {
        res.status(404).send("No se encontro  perro");
    }

})




// crear Dog
router.post('/', async (req, res) => {

    const { name, image, weight, height, life_span, temperament } = req.body

    // if (!name || !weight || !height || !image || !life_span || !temperament ) {
    //     return res.status(404).json('Data Incomplete');
    // };

    try {
        const newDog = await Dog.create({
            name,
            image,
            weight,
            life_span,
            height,
            createInDb: true
        });

        await temperament.forEach(async (t) => {
            const dbRace = await Temperamento.findOrCreate({
                where: {
                    name: t
                }
            })
            await newDog.addTemperamento(dbRace[0])
        })
        res.status(200).send("Dog Creado con exito")

    } catch (error) {
        res.status(404).send("error")
    }
})


// router.delete('/:id', async (req, res) => {

//     const { id } = req.params
//     try {

//        await Dog.destroy({ where: { id } })
//         res.status(200).send("borrar")

//     } catch (error) {
//         console.log(error)

//     }
// })





module.exports = router;





