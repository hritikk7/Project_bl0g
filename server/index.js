const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
// const { notFound, errorHandler } = requir    e("./middlewares/errorMiddleware");
require("dotenv").config();




const app = express();

app.use(cors({credentials: true, origin:"http://localhost:3000"}));
app.use(express.json({ extended: true }));




// app.use(notFound)
// app.use(errorHandler)


app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

connect(process.env.MONGO_URI)
  .then(
    app.listen(process.env.PORT, () => {
      console.log("listning on port", process.env.PORT);
    })
  )
  .catch((err) => console.log(err));
