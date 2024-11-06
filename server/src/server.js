const http = require("http");
const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();

const { loadPlanetsData } = require("./models/planets.model");
const PORT = process.env.PORT;

const server = http.createServer(app);

async function createServer() {
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
}

createServer();
