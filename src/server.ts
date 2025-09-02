import express from "express";

// Importe le framework Express pour créer le serveur web.

import dotenv from "dotenv";

import niveauRoutes from "./routes/niveau.routes.js";


import bodyParser from "body-parser";
import userRoutes from "./routes/user.routes.js";


import promoRoutes from "./routes/promo.routes.js";
// Importe les routes liées au modèle Promo.

import tagRoutes from "./routes/tag.routes.js";
// Importe les routes liées au modèle Tag.

import competenceRoutes from "./routes/competence.routes.js";

import refentielRoutes from "./routes/referentiel.route.js"

import profilSortieRoutes from "./routes/profilSortie.routes.js";

import profileRoute from "./routes/profil.routes.js";
import AuthRoute from "./routes/auth.route.js";

const app = express();
// Crée une nouvelle application Express.



dotenv.config();

app.use(express.json());
// Ajoute le middleware pour parser le corps des requêtes en JSON.


app.get("/", (req, res) => {
  res.json({ message: "API Gestion Apprenants", version: "1.0.0" });
});


app.use("/niveaux", niveauRoutes);


app.use("/users", userRoutes);

app.use("/promos", promoRoutes);

// Monte les routes Promo sur le chemin /promos.

app.use("/tags", tagRoutes);
// Monte les routes Tag sur le chemin /tags.

app.use("/profil-sortie", profilSortieRoutes);

app.use("/competences", competenceRoutes)

app.use("/referentiels",refentielRoutes)

app.use("/profiles",profileRoute)

app.use("/login",AuthRoute)

// app.get("/", (req,res) =>{
//     res.send('kali');
// })


// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

const PORT = 3010;
// Définit le port sur lequel le serveur va écouter.

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
