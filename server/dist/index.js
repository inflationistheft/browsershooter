/**
 * Colyseus server entry. Serves FFA arena room.
 */
import { Server } from "colyseus";
import { ArenaFFARoom } from "./rooms/ArenaFFA.js";
import { serverConfig } from "./config/index.js";
const server = new Server();
server.define("arena_ffa", ArenaFFARoom);
server.listen(serverConfig.port).then(() => {
    console.log(`Colyseus listening on ws://localhost:${serverConfig.port}`);
});
