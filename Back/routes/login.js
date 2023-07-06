//     ---- Destructuramos express y solo usamos router ----     //

const { Router } = require("express");
const router = Router();
const {mostrar, mostrarUno, registrar, editar, eliminar, login } = require ("../controllers/login")

//     ---- Creamos las rutas ----     //

router.get("/",mostrar)
router.get("/:id",mostrarUno)
router.post("/registrar",registrar)
router.post("/login",login)
router.put("/editar/:id",editar)
router.delete("/eliminar/:id",eliminar)

module.exports=router;