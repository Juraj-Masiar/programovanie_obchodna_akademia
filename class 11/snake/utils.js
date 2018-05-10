
const noop = () => {};
const byId = id => document.getElementById(id);
const px = pixels => `${pixels}px`;
const percent = percent => `${percent}%`;
const timeoutPromise = delay => new Promise(resolve => setTimeout(resolve, delay));


