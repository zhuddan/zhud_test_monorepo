// import { is2 } from '@zhud_test/pkg2'
import {pkg1} from "@zhud_test/pkg1"

// import { run } from "@zhud_test/pkg1/dist/run";
console.log(pkg1)

setText(`
is2(1) : 
is2(3) :
`)



function setText(str: string = '') {
  document.getElementById('app')!.innerText = str
}