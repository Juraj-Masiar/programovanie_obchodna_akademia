
let direction = 'ArrowRight';
const allowedKeys = ['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp'];

window.addEventListener('keydown', e => {
  console.log('e', e);
  if (allowedKeys.includes(e.keyCode)) {
    direction = e.keyCode
  }
});

window.addEventListener('load', run);

async function run() {
  while (false) {
    console.log('staring loop');

  }
}

