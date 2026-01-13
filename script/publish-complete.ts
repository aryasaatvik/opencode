#!/usr/bin/env bun

import { Script } from "@opencoder-ai/script"
import { $ } from "bun"

if (!Script.preview) {
  await $`gh release edit v${Script.version} --draft=false`
}

await $`bun install`

await $`gh release download --pattern "opencoder-linux-*64.tar.gz" --pattern "opencoder-darwin-*64.zip" -D dist`

// AUR/Homebrew not needed for fork
// await import(`../packages/opencode/script/publish-registries.ts`)
