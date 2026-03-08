/**
 * Colyseus server entry. Serves FFA arena room.
 */

import { Server } from "@colyseus/core";
import { WebSocketTransport } from "@colyseus/ws-transport";
import { ArenaFFARoom } from "./rooms/ArenaFFA.js";
import { Arena1v1Room } from "./rooms/Arena1v1.js";
import { Arena1v1RefRoom } from "./rooms/Arena1v1Ref.js";
import { serverConfig } from "./config/index.js";

const server = new Server({
  transport: new WebSocketTransport(),
});
server.define("arena_ffa", ArenaFFARoom);
server.define("arena_1v1", Arena1v1Room);
server.define("arena_1v1_ref", Arena1v1RefRoom);

server.listen(serverConfig.port).then(() => {
  console.log(`Colyseus listening on ws://localhost:${serverConfig.port}`);
});
