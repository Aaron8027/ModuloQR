const{Router} = require('express');
const router = Router();

router.get('/', (require,res)=>{ //ruta
    const datos = {
        "id": "508695",
        "nombre": "Elsa Badillo",
        "telefono": "5577724863"
    }
    res.json(datos);
});

module.exports = router;
