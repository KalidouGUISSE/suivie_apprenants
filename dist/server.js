import express from "express";
import niveauRoutes from "./routes/niveau.routes.js";
import promoRoutes from "./routes/promo.routes.js";
<<<<<<< HEAD
import competenceRoutes from "./routes/competence.routes.js";
import refentielRoutes from "./routes/referentiel.route.js";
const app = express();
app.use(express.json());
app.use("/niveaux", niveauRoutes);
app.use("/promos", promoRoutes);
app.use("/competences", competenceRoutes);
app.use("/referentiels", refentielRoutes);
app.get("/", (req, res) => {
    res.send('kali');
});
=======
import profilSortieRoutes from "./routes/profilSortie.routes.js";
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "API Gestion Apprenants", version: "1.0.0" });
});
app.use("/promos", promoRoutes);
app.use("/profil-sortie", profilSortieRoutes);
>>>>>>> 6d6acaedf9c963ef92e652f3950ec9d0a124a6ac
const PORT = 3010;
app.listen(PORT, () => {
    console.log(` Server running at http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map