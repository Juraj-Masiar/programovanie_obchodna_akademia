
const noop = () => {};
const byId = id => document.getElementById(id);
const px = pixels => `${pixels}px`;
const percent = percent => `${percent}%`;
const timeoutPromise = delay => new Promise(resolve => setTimeout(resolve, delay));
const getTime = () => Date.now();
const removeFromArray = (arr, item) => { for(let i = arr.length; i--;) if(arr[i] === item) arr.splice(i, 1) };
const removeFromArrayPredicate = (arr, fn) => { for(let i = arr.length; i--;) if(fn(arr[i])) arr.splice(i, 1) };
const flatten = arrayOfArrays => Array.prototype.concat.apply([], arrayOfArrays);   // todo: place optimizations
const promiseFactory = () => { const result = []; result.splice(0, 0, new Promise((resolve, reject) => {result.push(resolve, reject)})); return result };   // returns [promise, resolve, reject]

const setStyle = (node, style, value) => node.style.setProperty(style, value, 'important');
const styleNode = (styles = '') => (`all: initial; z-index: 2147483647; font-family: Verdana, Helvetica, sans-serif; font-size: 12px; ${styles}`).split(';').filter(x => x.trim()).map(s => s + '!important').join(';');
const styleBlock = (styles = '') => (`all: initial; z-index: 2147483647; font-family: Verdana, Helvetica, sans-serif; font-size: 12px; display: block; ${styles}`).split(';').filter(x => x.trim()).map(s => s + '!important').join(';');

const requestAnimationFramePromise = () => new Promise(resolve => window.requestAnimationFrame(resolve));

const shuffleArray = array => array.map(x => [Math.random(), x]).sort(([a], [b]) => a - b).map(([_, x]) => x);

const randomHexColor = () => '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

const NumberGenerator = (() => {
  let i = 0;
  return () => ++i;
})();

function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;   //The maximum is exclusive and the minimum is inclusive
}

function removeChildNodes(node) {
  while (node.hasChildNodes())
    node.removeChild(node.lastChild);
}
function replaceChildNodes(node, nodesList) {
  removeChildNodes(node);
  if (!nodesList) return;                                   // if there is nothing to append, we just clear and exit
  if (!Array.isArray(nodesList)) nodesList = [nodesList];   // upgrade to array
  const fragment = document.createDocumentFragment();
  nodesList.forEach(node => fragment.appendChild(node));
  node.appendChild(fragment);
}
function createFragment(nodesArray) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < nodesArray.length; i++) fragment.appendChild(nodesArray[i]);
  return fragment;
}

/**
 * NOTE:
 * - event handlers needs to be wrapped under "handlers" key
 * - dataset items like "data-custom-attr" are supported
 */
function buildElement(name, attrs, childNodesOpt) {
  const node = name === 'svg' || name === 'path' ? document.createElementNS('http://www.w3.org/2000/svg', name) : document.createElement(name);   // SVG requires createElementNS because the default one would lowercase element names
  if (attrs) {
    if (typeof attrs === 'string') attrs = {textContent: attrs};    // allow using text content as second parameter
    Object.entries(attrs).forEach(([key, value]) => {
      switch (key) {
        case 'text':  // falls through
        case 'textContent': node[key] = value; break;                   // todo: find out why do we use this instead of "setAttribute"
        case 'handlers': Object.assign(node, attrs.handlers); break;    // event handlers can be set only using `Object.assign` function!
        default: node.setAttribute(key, value); break;                  // everything else using `setAttribute` function - NOTE: this can handle "data-stuff" AND read-only "width" in SVG nodes!
      }
    });
  }
  if (childNodesOpt) {
    if (!Array.isArray(childNodesOpt)) childNodesOpt = [childNodesOpt];
    childNodesOpt.forEach(childNode => {if (childNode) node.appendChild(childNode)});
  }
  return node;
}
function buildHtml(construct) {
  const [a, b, array] = construct;
  if (typeof a !== 'string')
    return construct.map(item => item && buildHtml(item));
  return buildElement(a, b, array ? buildHtml(array) : null);
}

function buildCheckbox(value, attributes = {}) {
  return buildElement('input', {type: 'checkbox', ...attributes, ...(value ? {checked: true} : {})})
}

function getTextNodes() {
  const nodes = [], walker = document.createTreeWalker(document.body, window.NodeFilter.SHOW_TEXT, null, false);
  let node;
  while((node = walker.nextNode())) nodes.push(node);
  return nodes;
}

