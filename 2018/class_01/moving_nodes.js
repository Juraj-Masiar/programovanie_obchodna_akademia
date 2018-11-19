

async function moveNodeFromUpDown(node) {
  const timeoutPromise = waitingTime => new Promise(resolve => setTimeout(resolve, waitingTime));
  node.style.position = 'fixed';

  for (let i = 0; i < 1000; i++) {
    node.style.top = `${i}px`;
    // node.style.left = `${i}px`;
    await timeoutPromise(50);
  }
}

