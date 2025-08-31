import express from "express";
import promoRoutes from "./routes/promo.routes.js";

const app = express();
app.use(express.json());

app.use("/promos", promoRoutes);



const PORT = 3010;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});