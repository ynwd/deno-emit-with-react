import { emit } from "https://deno.land/x/emit@0.0.1/mod.ts";
import {
  assert,
  assertEquals,
  assertStringIncludes,
} from "https://deno.land/std@0.138.0/testing/asserts.ts";

const url = new URL("./client.tsx", import.meta.url);
const result = await emit(url.href);

console.log(result);
assertEquals(Object.keys(result).length, 1);
const code = result[Object.keys(result)[0]];
assert(code);
assertStringIncludes(code, "export default function hello()");
