import express from "express";
import cors from "cors";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { serve } from "inngest/express";
import { inngest } from "./lib/inngest.js";

const app = express();

// middlewares
app.use(express.json());
//credentials=true => server allows browser to include cookies on request
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));

app.use("/api/inngest", serve({ client: inngest, functions }));

app.get("/", (req, res) => {
  res.status(200).json({ msg: "success from api" });
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log("Server is running on port: ", ENV.PORT);
    });
  } catch (error) {
    console.log("💥Error starting the server: ", error);
  }
};

startServer();
