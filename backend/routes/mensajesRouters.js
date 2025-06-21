import { Router } from "express";
import requireAuth from "../middlewares/requireAuth.js";
import { crearMensaje, listarMensajesPorPublicacion } from "../controllers/mensajesController.js";

const router = Router();

router.post("/mensajes", requireAuth, crearMensaje);
router.get("/mensajes/publicacion/:id", listarMensajesPorPublicacion);
router.get("/api/perfil", requireAuth, (req, res) => {
  // req.user contiene los datos del usuario autenticado
  res.json({ usuario: req.user });
});

export default router;