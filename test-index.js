const assert = require("node:assert/strict");
const fs = require("node:fs");

const html = fs.readFileSync("index.html", "utf8");
const script = html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
const lines = html.match(/const lines = \[([\s\S]*?)\];/)?.[1]
  .match(/^\s*".*",?$/gm);

assert.match(html, /id="mascot"/);
assert.match(html, /id="mascot-placeholder"/);
assert.match(html, /setInterval\(nextLine, 5000\)/);
assert.equal(lines?.length, 24);
assert.doesNotThrow(() => new Function(script));

console.log("Big Big page check passed.");
