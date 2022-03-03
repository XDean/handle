import DATA from '../data/idioms.json';
import { getHint } from '../logic';

const DATA_SET = DATA.length;

export function getAnswerOfDay(day: number) {
  const word = DATA[Math.floor(Math.random() * DATA_SET)][0];
  const hint = getHint(word);
  return {
    word,
    hint,
  };
}
