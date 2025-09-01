import express from "express";
<<<<<<< HEAD
import niveauRoutes from "./routes/niveau.routes.js";
=======
import bodyParser from "body-parser";
import userRoutes from "./routes/user.routes.js";
>>>>>>> 04683e3bf7822c808d5d428f53c27337d073c9f5
import promoRoutes from "./routes/promo.routes.js";
<<<<<<< HEAD
import competenceRoutes from "./routes/competence.routes.js";
import refentielRoutes from "./routes/referentiel.route.js";
const app = express();
app.use(express.json());
<<<<<<< HEAD
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
=======
app.use("/users", userRoutes);
app.use("/promos", promoRoutes);
// <<<<<<< HEAD
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
>>>>>>> 04683e3bf7822c808d5d428f53c27337d073c9f5
const PORT = 3010;
app.listen(PORT, () => {
    console.log(` Server running at http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map