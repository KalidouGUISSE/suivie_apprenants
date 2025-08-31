import express from "express";
import niveauRoutes from "./routes/niveau.routes.js";

const app = express();
app.use(express.json());

app.use("/niveaux", niveauRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
