import express from "express";
import promoRoutes from "./routes/promo.routes.js";
const app = express();
app.use(express.json());
app.use("/promos", promoRoutes);
// app.listen(3000, () => console.log("Server running http://localhost:3000"));
const PORT = 3010;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map