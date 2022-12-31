const { Router } = require('express');
const { getAllCountries, getAllCountriesFromDb } = require('../controllers/countryControllers.js'); 
const { Op } = require('sequelize');
const { Country, Activity } = require('../db.js');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.get('/countries', async (req, res) => {
    const {name} = req.query;
    let options = {}
        getAllCountriesFromDb();
        if(name) {
            options = { 
                where: {
                    nombre: {
                        [Op.iLike]: `%${name}%`,
                        }
                }
            }
        }
        const nameSearch = await Country.findAll({...options, include: {
            model: Activity,
            attributes: ['id', 'nombre', 'dificultad', 'duracion', 'temporada', 'pais'],
            through: {attributes: []},
        }})
        if(!nameSearch.length) return res.status(404).send(`El nombre '${name}' no entregó ningún resultado`)
            res.json(nameSearch)
});

/*
- [ ] __GET /countries/{idPais}__:
- Obtener el detalle de un país en particular
- Debe traer solo los datos pedidos en la ruta de detalle de país
- Incluir los datos de las actividades turísticas correspondientes
*/


router.get('/countries/:id', async (req, res)=>{
    let id = req.params.id
        let searchId = await Country.findOne({
            where: {
                id: id
            },
            include:{
                model: Activity,
                attributes:['id', 'nombre', 'dificultad', 'duracion', 'temporada', 'pais'],
                through: { attributes: [] },
            }
                                                })
        if(!searchId) {
            res.status(404).send(`El código '${id}' no corresponde a un pais existente`)
            } else {
            res.json(searchId)
            }
});



/* 
- [ ] __POST /activity__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
  - 
  } Crea una actividad turística en la base de datos
*/

router.post('/activity', async (req, res) => {
    let { nombre, dificultad, duracion, temporada, pais } = req.body;
    let activityCreated = await Activity.create({ nombre, dificultad, duracion, temporada, pais });
    let countryDb = await Country.findAll({
        where: { nombre : pais },
    })
    activityCreated.addCountry(countryDb);
    res.status(200).send('Actividad creada con éxito');
})

router.get('/activities', async (req, res) => {
    Activity.findAll()
        .then((result) => res.json(result))
        .catch((error) => res.status(404).json('Error con la base de datos de actividades'))
})

/*

router.get('/activity', async (req, res) => {
    Activity.findAll()
        .then((result) => res.json(result))
        .catch((error) => res.status(404).json('Error con la base de datos de actividades'))
})
*/

module.exports = router;

