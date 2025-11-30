import { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
import "bun:test";

declare module "bun:test" {
  interface Matchers<T>
    extends TestingLibraryMatchers<typeof expect.stringContaining, T> {
      // Add a dummy member to avoid empty interface error
      _dummy?: never;
    }
}
