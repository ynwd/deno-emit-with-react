import { emit } from "https://deno.land/x/emit@0.0.1/mod.ts";

const url = new URL("./client.tsx", import.meta.url);
const result = await emit(url.href);

console.log(result);
