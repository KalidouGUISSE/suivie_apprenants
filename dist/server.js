import express from "express";
<<<<<<< HEAD
import niveauRoutes from "./routes/niveau.routes.js";
const app = express();
app.use(express.json());
app.use("/niveaux", niveauRoutes);
const PORT = 3000;
=======
import promoRoutes from "./routes/promo.routes.js";
import competenceRoutes from "./routes/competence.routes.js";
const app = express();
app.use(express.json());
app.use("/promos", promoRoutes);
<<<<<<< HEAD
=======
app.use("/competences", competenceRoutes);
app.get("/", (req, res) => {
    res.send('kali');
});
>>>>>>> 525e28a50e29f1ae3047b950b5e101a7d5a432ad
// app.listen(3000, () => console.log("Server running http://localhost:3000"));
const PORT = 3010;
>>>>>>> 7cce4fc1f9d7c0d3a046be61d9965a32f61dc7cd
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map