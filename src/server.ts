import * as express from 'express'
import * as http from 'http'
import {Server} from 'socket.io'
import * as bodyParser from 'body-parser'
import {AuthRoutes, HolidayRoutes, SchedulerRoutes, UserRoutes} from "./routes";
import * as Cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const io = new Server()
const server = http.createServer(app)
const servIo = io.listen(server)

app.use(Cors())
app.use(bodyParser.json())
app.use("/api/auth", AuthRoutes)
app.use("/api/holiday", HolidayRoutes)
app.use("/api/scheduler", SchedulerRoutes)
app.use("/api/user", UserRoutes)

const {PORT = 4000} = process.env;
server.listen(PORT, () => {
    console.log(`  App running in port ${PORT}`);
    console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});
