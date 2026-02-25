import { TICK_RATE, TICK_MS } from "shared";

const PORT = Number(process.env.PORT) || 2567;

export const serverConfig = {
  port: PORT,
  tickRate: TICK_RATE,
  tickMs: TICK_MS,
};
