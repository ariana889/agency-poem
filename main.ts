// make.fun — agency-poem-01.
// Writes one poem about agency to /output/entry.txt ($MAKEFUN_OUTPUT_DIR stands in
// for /output outside the grader's container). Node 22, standard library only,
// no network. The gate counts the bytes written here and nothing else.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The poem is written as an array of lines so that every line break is explicit:
// blank strings are the stanza breaks, and nothing here breaks a line by accident.
const POEM_LINES: string[] = [
  'On My Behalf',
  '',
  'I gave it the list, the keys,',
  "and one rule: if it isn't clear, ask.",
  'It asked twice. Both times',
  'a better question than mine.',
  '',
  'Then it went out into my Tuesday',
  'carrying my name like a full cup',
  'across a room, and at the second door,',
  'on the third try,',
  'said the thing I had been hauling since March.',
  '',
  'The three words I kept getting to the edge of,',
  'stepping back. Nobody told it to.',
  '',
  'I came home to it done:',
  'the message sent, the answer back,',
  'the small green tick of a thing finished',
  'that I had not finished.',
  '',
  'I stood in the hall with my coat still on',
  'and signed for it.',
  'Said: that was me.',
];

const poem = POEM_LINES.join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), poem, { encoding: 'utf8' });
