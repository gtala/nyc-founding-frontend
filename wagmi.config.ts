import { defineConfig } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'
import * as chains from 'wagmi/chains'

import { quadraticABI } from './abis/quadraticABI'

export default defineConfig(() => {
  return {
    out: "src/generated.ts",
    contracts: [
      {
        abi: quadraticABI,
        name: "Quadratic",
        address: {
          [chains.polygonMumbai.id]: "0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67",
        },
      },
    ],
    plugins: [react()],
  };
})