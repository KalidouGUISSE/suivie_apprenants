import express from "express";
import promoRoutes from "./routes/promo.routes.js";
import competenceRoutes from "./routes/competence.routes.js";
const app = express();
app.use(express.json());
app.use("/promos", promoRoutes);
app.use("/competences", competenceRoutes);
app.get("/", (req, res) => {
    res.send('kali');
});
// app.listen(3000, () => console.log("Server running http://localhost:3000"));
const PORT = 3010;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map