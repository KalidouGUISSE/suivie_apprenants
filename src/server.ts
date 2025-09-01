import express from "express";

import niveauRoutes from "./routes/niveau.routes.js";

import promoRoutes from "./routes/promo.routes.js";

import competenceRoutes from "./routes/competence.routes.js";

import refentielRoutes from "./routes/referentiel.route.js"

import profilSortieRoutes from "./routes/profilSortie.routes.js";


const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Gestion Apprenants", version: "1.0.0" });
});


app.use("/niveaux", niveauRoutes);

app.use("/promos", promoRoutes);
app.use("/profil-sortie", profilSortieRoutes);

app.use("/competences", competenceRoutes)

app.use("/referentiels",refentielRoutes)

app.get("/", (req,res) =>{
    res.send('kali');
})



const PORT = 3010;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
