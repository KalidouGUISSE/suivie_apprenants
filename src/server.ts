import express from "express";
import promoRoutes from "./routes/promo.routes.js";
import profilSortieRoutes from "./routes/profilSortie.routes.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Gestion Apprenants", version: "1.0.0" });
});

app.use("/promos", promoRoutes);
app.use("/profil-sortie", profilSortieRoutes);




const PORT = 3010;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});