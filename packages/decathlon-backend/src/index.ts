import express from "express";
import cors from "cors";
import chatRouter from "./routes/chat.ts";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRouter);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
