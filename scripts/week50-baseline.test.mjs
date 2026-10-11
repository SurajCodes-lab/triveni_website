import { test } from 'node:test';
import assert from 'node:assert/strict';
import { normalize, resolveExact } from './week50-baseline.mjs';

test('only site URLs enter the internal-link inventory', () => {
  assert.equal(normalize('https://www.trivenicabs.in/delhi/?x=1&amp;y=2#fare'), '/delhi');
  assert.equal(normalize('https://trivenicabs.in/delhi'), '/delhi');
  assert.equal(normalize('//trivenicabs.in.evil.example/delhi'), null);
  assert.equal(normalize('tel:+917668570551'), null);
  assert.equal(normalize('../agra', '/distance/delhi-to-agra'), '/agra');
  assert.equal(normalize('/jim corbett'), '/jim%20corbett');
});

test('redirect chains resolve to their final target without hiding cycles', () => {
  assert.deepEqual(resolveExact('/a', new Map([['/a', '/b'], ['/b', '/c']])), { target: '/c', cycle: false });
  assert.deepEqual(resolveExact('/a', new Map([['/a', '/b'], ['/b', '/a']])), { target: '/a', cycle: true });
  assert.deepEqual(resolveExact('/a', new Map([['/a', '/a']])), { target: '/a', cycle: true });
});
