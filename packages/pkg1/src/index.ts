import { pkg2, is2 } from "@zhud_test/pkg2";
import { run, run2 } from "./run";
export function pkg1() {
  pkg2();
  console.log("this is pkg1");
  console.log(`run ${run()}`)
  console.log(`run2 ${run2()}`)
}

export const isTwo = is2;
