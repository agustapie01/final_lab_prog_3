//     ---- Destructuramos express y solo usamos router ----     //

const { Router } = require("express");
const router = Router();
const {mostrar, mostrarUno, registrar, editar, eliminar} = require ("../controllers/dentista")

//     ---- Creamos las rutas ----     //

router.get("/",mostrar)
router.get("/:id",mostrarUno)
router.post("/registrar",registrar)
router.put("/editar/:id",editar)
router.delete("/eliminar/:id",eliminar)

module.exports=router;