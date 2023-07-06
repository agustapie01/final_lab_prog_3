const { Router }= require('express')
const router = Router();
const {innerjoin, innerjoin2} = require ("../controllers/join")

//     ---- Creamos las rutas ----     //

router.get("/",innerjoin)
router.get("/join",innerjoin2)
// router.post("/registrar",registrar)
// router.put("/editar/:id",editar)
// router.delete("/eliminar/:id",eliminar)

module.exports=router;