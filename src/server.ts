import express from "express";
// Importe le framework Express pour créer le serveur web.

import promoRoutes from "./routes/promo.routes.js";
// Importe les routes liées au modèle Promo.

import tagRoutes from "./routes/tag.routes.js";
// Importe les routes liées au modèle Tag.

const app = express();
// Crée une nouvelle application Express.

app.use(express.json());
// Ajoute le middleware pour parser le corps des requêtes en JSON.

app.use("/promos", promoRoutes);
// Monte les routes Promo sur le chemin /promos.

app.use("/tags", tagRoutes);
// Monte les routes Tag sur le chemin /tags.

const PORT = 3010;
// Définit le port sur lequel le serveur va écouter.

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
// Démarre le serveur et affiche un message dans la console quand il est prêt.