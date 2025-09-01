import express from "express";
import userRoutes from "./routes/user.routes.js";
import promoRoutes from "./routes/promo.routes.js";
const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/promos", promoRoutes);
app.use("/api/users", userRoutes);
app.get("/test", (req, res) => {
    res.json({ message: "User route OK" });
});
app.get("/ping", (req, res) => {
    res.send("pong");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map