/// <reference types="vite/client" />

/** Keyboard Lock API (experimental). */
interface Keyboard {
  lock(keys?: string[]): Promise<void>;
  unlock(): void;
}

interface Navigator {
  keyboard?: Keyboard;
}
