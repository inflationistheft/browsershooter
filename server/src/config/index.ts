import { TICK_RATE, TICK_MS } from "shared";

const PORT = Number(process.env.PORT) || 2567;
const ARENA_MAP_PATH =
  process.env.ARENA_MAP_PATH || "maps/arena_blockout.json";

export const serverConfig = {
  port: PORT,
  tickRate: TICK_RATE,
  tickMs: TICK_MS,
  arenaMapPath: ARENA_MAP_PATH,
};
