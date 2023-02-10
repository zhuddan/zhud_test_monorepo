import { pkg1 } from '@zhud_test/pkg1'
import { is2 } from '@zhud_test/pkg2'


document.getElementById('app')!.innerText = `
is2(1) : ${is2(1)}
is2(3) : ${is2(3)}
${pkg1()}
`