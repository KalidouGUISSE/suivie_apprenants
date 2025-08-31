import express from "express";
import niveauRoutes from "./routes/niveau.routes.js";
import promoRoutes from "./routes/promo.routes.js";
import competenceRoutes from "./routes/competence.routes.js";
const app = express();
app.use(express.json());
app.use("/niveaux", niveauRoutes);
app.use("/promos", promoRoutes);
<<<<<<< HEAD
<<<<<<< HEAD
=======
app.use("/competences", competenceRoutes);
app.get("/", (req, res) => {
    res.send('kali');
});
>>>>>>> 525e28a50e29f1ae3047b950b5e101a7d5a432ad
// app.listen(3000, () => console.log("Server running http://localhost:3000"));
=======
>>>>>>> 19d41536abf142b1fa9ae94f69260118a3f7bcd9
const PORT = 3010;
app.listen(PORT, () => {
    console.log(` Server running at http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map