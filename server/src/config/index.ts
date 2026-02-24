const PORT = Number(process.env.PORT) || 2567;

export const serverConfig = {
  port: PORT,
  tickRate: 30,
  tickMs: 1000 / 30,
};
