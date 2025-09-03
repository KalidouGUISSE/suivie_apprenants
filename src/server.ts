console.log("Serveur lancé")
import express from "express";
import dotenv from "dotenv";

import niveauRoutes from "./routes/niveau.routes.js";


import bodyParser from "body-parser";
import userRoutes from "./routes/user.routes.js";

import promoRoutes from "./routes/promo.routes.js";

import competenceRoutes from "./routes/competence.routes.js";

import refentielRoutes from "./routes/referentiel.route.js"

import profilSortieRoutes from "./routes/profilSortie.routes.js";

import profileRoute from "./routes/profil.routes.js";
import AuthRoute from "./routes/auth.route.js";

const app = express();

dotenv.config();
app.use(express.json());


app.get("/", (req, res) => {
  res.json({ message: "API Gestion Apprenants", version: "1.0.0" });
});


app.use("/niveaux", niveauRoutes);


app.use("/users", userRoutes);

app.use("/promos", promoRoutes);
app.use("/profil-sortie", profilSortieRoutes);

app.use("/competences", competenceRoutes)

app.use("/referentiels",refentielRoutes)

app.use("/profiles",profileRoute)

app.use("/auth",AuthRoute)

// app.get("/", (req,res) =>{
//     res.send('kali');
// })


// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

const PORT = 3010;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
