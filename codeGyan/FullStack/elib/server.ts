// this is the place where we run our express server
console.log("is coming here");
import app from "./src/app";
import { config } from "./src/config/config";
import connectDB from "./src/config/db";

const startServer = async () => {
  await connectDB();
  const port = config.port || 3000;

  app.listen(port, () => {
    console.log(`myListening port is: ${port}`);
  });
};

startServer();
