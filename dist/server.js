import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/user.routes.js";
import promoRoutes from "./routes/promo.routes.js";
const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/promos", promoRoutes);
// <<<<<<< HEAD
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
const PORT = 3010;
app.listen(PORT, () => {
    console.log(` Server running at http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map