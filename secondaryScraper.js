import fetch from 'node-fetch';
import open from 'open';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const response = await fetch(
    'https://www.maloneyaffordable.com/apartment-rentals/'
  );
  const body = await response.text();

  //While
  while (true) {
    const r = await fetch(
      'https://www.maloneyaffordable.com/apartment-rentals/'
    );
    const b = await r.text();

    if (b != body) {
      await open('https://www.maloneyaffordable.com/apartment-rentals/');
      console.log('update');
      break;
    } else {
      console.log('no update');
    }
  }
  await sleep(250);
}
main();
