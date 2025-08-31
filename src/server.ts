import express from "express";
import promoRoutes from "./routes/promo.routes.js";
import profilSortieRoutes from "./routes/profilSortie.routes.js";

const app = express();
app.use(express.json());

app.use("/promos", promoRoutes);
app.use("/profil-sortie", profilSortieRoutes);


app.get("/", (req,res) =>{
    res.send('kali');
})


// app.listen(3000, () => console.log("Server running http://localhost:3000"));
const PORT = 3010;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});