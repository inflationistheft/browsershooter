/**
 * Colyseus client stub. Connect to room, send input, receive state.
 */

import { Client, Room } from "colyseus.js";
import { ArenaState } from "shared";

export class ColyseusClient {
  private client: Client | null = null;
  private room: Room<ArenaState> | null = null;

  connect(serverUrl: string): void {
    this.client = new Client(serverUrl);
  }

  async joinOrCreate(roomName: string): Promise<boolean> {
    if (!this.client) return false;
    try {
      this.room = (await this.client.joinOrCreate(roomName, {}, ArenaState)) as Room<ArenaState>;
      return true;
    } catch (err) {
      console.error("Colyseus joinOrCreate failed:", err);
      return false;
    }
  }

  sendInput(_input: unknown): void {
    this.room?.send("input", _input);
  }

  getRoom(): Room<ArenaState> | null {
    return this.room;
  }

  disconnect(): void {
    this.room?.leave();
    this.room = null;
  }
}
