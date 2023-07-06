//     ---- Destructuramos express y solo usamos router ----     //

const { Router } = require("express");
const router = Router();
const {mostrar, mostrarUno, registrar, editar, eliminar, historialPacientes } = require ("../controllers/historial")

//     ---- Creamos las rutas ----     //

router.get("/",mostrar)
router.get("/:id",mostrarUno)
router.post("/registrar",registrar)
router.put("/editar/:id",editar)
router.delete("/eliminar/:id",eliminar)
router.get("/historialPacientes",historialPacientes)

module.exports=router;