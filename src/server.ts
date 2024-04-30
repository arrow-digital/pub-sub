import { app } from './app';
// import './util/subscribe';/

async function main() {
  app.listen(3000, () => console.log('http://localhost:%d', 3000));
}

main();
