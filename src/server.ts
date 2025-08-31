import express from "express";

import niveauRoutes from "./routes/niveau.routes.js";

import promoRoutes from "./routes/promo.routes.js";
import competenceRoutes from "./routes/competence.routes.js";



const app = express();
app.use(express.json());


app.use("/niveaux", niveauRoutes);


app.use("/promos", promoRoutes);


app.use("/competences", competenceRoutes)

app.get("/", (req,res) =>{
    res.send('kali');
})



const PORT = 3010;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
