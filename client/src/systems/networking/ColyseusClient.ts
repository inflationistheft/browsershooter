/**
 * Colyseus client stub. Connect to room, send input, receive state.
 */

import { Client, Room } from "colyseus.js";
import { ArenaState } from "shared";

const PING_INTERVAL_MS = 1500;

export class ColyseusClient {
  private client: Client | null = null;
  private room: Room<ArenaState> | null = null;
  private lastPingMs: number | null = null;
  private pingIntervalId: ReturnType<typeof setInterval> | null = null;

  connect(serverUrl: string): void {
    this.client = new Client(serverUrl);
  }

  async joinOrCreate(roomName: string): Promise<boolean> {
    if (!this.client) return false;
    try {
      this.room = (await this.client.joinOrCreate(roomName, {}, ArenaState)) as Room<ArenaState>;
      this.setupPing();
      return true;
    } catch (err) {
      console.error("Colyseus joinOrCreate failed:", err);
      return false;
    }
  }

  private setupPing(): void {
    const r = this.room;
    if (!r) return;
    this.stopPing();
    this.lastPingMs = null;
    r.onMessage("pong", (payload: { t: number }) => {
      this.lastPingMs = Math.round(performance.now() - payload.t);
    });
    r.onLeave(() => this.stopPing());
    const sendPing = () => {
      if (r.connection?.isOpen) r.send("ping", { t: performance.now() });
    };
    sendPing();
    this.pingIntervalId = setInterval(sendPing, PING_INTERVAL_MS);
  }

  private stopPing(): void {
    if (this.pingIntervalId) {
      clearInterval(this.pingIntervalId);
      this.pingIntervalId = null;
    }
  }

  getPing(): number | null {
    return this.lastPingMs;
  }

  sendInput(_input: unknown): void {
    this.room?.send("input", _input);
  }

  getRoom(): Room<ArenaState> | null {
    return this.room;
  }

  disconnect(): void {
    this.stopPing();
    this.room?.leave();
    this.room = null;
  }
}
