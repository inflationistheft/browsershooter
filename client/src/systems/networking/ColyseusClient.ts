/**
 * Colyseus client stub. Connect to room, send input, receive state.
 */

import { Client } from "colyseus.js";

export class ColyseusClient {
  private client: Client | null = null;
  private room: Awaited<ReturnType<Client["joinOrCreate"]>> | null = null;

  connect(serverUrl: string): void {
    this.client = new Client(serverUrl);
  }

  async joinOrCreate(roomName: string): Promise<boolean> {
    if (!this.client) return false;
    try {
      this.room = await this.client.joinOrCreate(roomName);
      return true;
    } catch {
      return false;
    }
  }

  sendInput(_input: unknown): void {
    this.room?.send("input", _input);
  }

  getRoom() {
    return this.room;
  }

  disconnect(): void {
    this.room?.leave();
    this.room = null;
  }
}
