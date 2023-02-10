import { pkg2 } from "@zhud_test/pkg2";

export * from "@zhud_test/pkg2";

export * from "./run";

export function pkg1() {
  pkg2();
  console.log("hellow! this is pkg1");
}
