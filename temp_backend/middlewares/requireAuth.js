import jwt from "jsonwebtoken";

const requireAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]; // Bearer token

        if (!token) {
            return res.status(401).json({ error: "Token no proporcionado" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // aquí va el { id } que firmaste en el token
        next();
    } catch (error) {
        return res.status(401).json({ error: "Token inválido o expirado" });
    }
};

export default requireAuth;
