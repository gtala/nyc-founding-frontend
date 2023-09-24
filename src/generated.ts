import {
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  Address,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Quadratic
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export const quadraticABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      {
        name: '_compoundCometAddress',
        internalType: 'address',
        type: 'address',
      },
      { name: '_oneInchAddress', internalType: 'address', type: 'address' },
      { name: '_wethAddress', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'COMPOUND_COMET_ADDRESS',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'ONEINCH_ADDRESS',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'WETH_ADDRESS',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'projectIndex', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'contribute',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'contributorFlags',
    outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_endRoundDate', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createPodiumRound',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_name', internalType: 'string', type: 'string' }],
    name: 'createProject',
    outputs: [
      { name: 'projectIndex', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: '_endProjectApplicationDate',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: '_startRoundDate', internalType: 'uint256', type: 'uint256' },
      { name: '_endRoundDate', internalType: 'uint256', type: 'uint256' },
      {
        name: '_platform',
        internalType: 'enum QuadraticFunding.StakingPlatform',
        type: 'uint8',
      },
    ],
    name: 'createRound',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'currentRound',
    outputs: [
      {
        name: 'endProjectApplicationDate',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'startRoundDate', internalType: 'uint256', type: 'uint256' },
      { name: 'endRoundDate', internalType: 'uint256', type: 'uint256' },
      { name: 'matchAmount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'platform',
        internalType: 'enum QuadraticFunding.StakingPlatform',
        type: 'uint8',
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'deleteRound',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'distributePodiumPrizes',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'projectIndex', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'podiumVote',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'podiumVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'projectIPFSHashes',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'projectNextIPFSHashIDs',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'quadraticFunding',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'contributor', internalType: 'address', type: 'address' }],
    name: 'revokeWhitelistContributor',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_ipfsHashes', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'uploadResults',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'contributor', internalType: 'address', type: 'address' }],
    name: 'whitelistContributor',
    outputs: [],
  },
] as const

/**
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export const quadraticAddress = {
  80001: '0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67',
} as const

/**
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export const quadraticConfig = {
  address: quadraticAddress,
  abi: quadraticABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link quadraticABI}__.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function useQuadraticRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof quadraticABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof quadraticABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  > & { chainId?: keyof typeof quadraticAddress } = {} as any,
) {
  return useContractRead({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    ...config,
  } as UseContractReadConfig<typeof quadraticABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"COMPOUND_COMET_ADDRESS"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function useQuadraticCompoundCometAddress<
  TFunctionName extends 'COMPOUND_COMET_ADDRESS',
  TSelectData = ReadContractResult<typeof quadraticABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof quadraticABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof quadraticAddress } = {} as any,
) {
  return useContractRead({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'COMPOUND_COMET_ADDRESS',
    ...config,
  } as UseContractReadConfig<typeof quadraticABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"ONEINCH_ADDRESS"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function useQuadraticOneinchAddress<
  TFunctionName extends 'ONEINCH_ADDRESS',
  TSelectData = ReadContractResult<typeof quadraticABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof quadraticABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof quadraticAddress } = {} as any,
) {
  return useContractRead({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'ONEINCH_ADDRESS',
    ...config,
  } as UseContractReadConfig<typeof quadraticABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"WETH_ADDRESS"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function useQuadraticWethAddress<
  TFunctionName extends 'WETH_ADDRESS',
  TSelectData = ReadContractResult<typeof quadraticABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof quadraticABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof quadraticAddress } = {} as any,
) {
  return useContractRead({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'WETH_ADDRESS',
    ...config,
  } as UseContractReadConfig<typeof quadraticABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"contributorFlags"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function useQuadraticContributorFlags<
  TFunctionName extends 'contributorFlags',
  TSelectData = ReadContractResult<typeof quadraticABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof quadraticABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof quadraticAddress } = {} as any,
) {
  return useContractRead({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'contributorFlags',
    ...config,
  } as UseContractReadConfig<typeof quadraticABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"currentRound"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function useQuadraticCurrentRound<
  TFunctionName extends 'currentRound',
  TSelectData = ReadContractResult<typeof quadraticABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof quadraticABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof quadraticAddress } = {} as any,
) {
  return useContractRead({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'currentRound',
    ...config,
  } as UseContractReadConfig<typeof quadraticABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"podiumVotes"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function useQuadraticPodiumVotes<
  TFunctionName extends 'podiumVotes',
  TSelectData = ReadContractResult<typeof quadraticABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof quadraticABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof quadraticAddress } = {} as any,
) {
  return useContractRead({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'podiumVotes',
    ...config,
  } as UseContractReadConfig<typeof quadraticABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"projectIPFSHashes"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function useQuadraticProjectIpfsHashes<
  TFunctionName extends 'projectIPFSHashes',
  TSelectData = ReadContractResult<typeof quadraticABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof quadraticABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof quadraticAddress } = {} as any,
) {
  return useContractRead({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'projectIPFSHashes',
    ...config,
  } as UseContractReadConfig<typeof quadraticABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"projectNextIPFSHashIDs"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function useQuadraticProjectNextIpfsHashIDs<
  TFunctionName extends 'projectNextIPFSHashIDs',
  TSelectData = ReadContractResult<typeof quadraticABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof quadraticABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof quadraticAddress } = {} as any,
) {
  return useContractRead({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'projectNextIPFSHashIDs',
    ...config,
  } as UseContractReadConfig<typeof quadraticABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link quadraticABI}__.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function useQuadraticWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof quadraticAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof quadraticABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof quadraticABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  return useContractWrite<typeof quadraticABI, TFunctionName, TMode>({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"contribute"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function useQuadraticContribute<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof quadraticAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof quadraticABI,
          'contribute'
        >['request']['abi'],
        'contribute',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'contribute' }
    : UseContractWriteConfig<typeof quadraticABI, 'contribute', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'contribute'
      } = {} as any,
) {
  return useContractWrite<typeof quadraticABI, 'contribute', TMode>({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'contribute',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"createPodiumRound"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function useQuadraticCreatePodiumRound<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof quadraticAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof quadraticABI,
          'createPodiumRound'
        >['request']['abi'],
        'createPodiumRound',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'createPodiumRound'
      }
    : UseContractWriteConfig<
        typeof quadraticABI,
        'createPodiumRound',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'createPodiumRound'
      } = {} as any,
) {
  return useContractWrite<typeof quadraticABI, 'createPodiumRound', TMode>({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'createPodiumRound',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"createProject"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function useQuadraticCreateProject<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof quadraticAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof quadraticABI,
          'createProject'
        >['request']['abi'],
        'createProject',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'createProject'
      }
    : UseContractWriteConfig<typeof quadraticABI, 'createProject', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'createProject'
      } = {} as any,
) {
  return useContractWrite<typeof quadraticABI, 'createProject', TMode>({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'createProject',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"createRound"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function useQuadraticCreateRound<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof quadraticAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof quadraticABI,
          'createRound'
        >['request']['abi'],
        'createRound',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'createRound'
      }
    : UseContractWriteConfig<typeof quadraticABI, 'createRound', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'createRound'
      } = {} as any,
) {
  return useContractWrite<typeof quadraticABI, 'createRound', TMode>({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'createRound',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"deleteRound"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function useQuadraticDeleteRound<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof quadraticAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof quadraticABI,
          'deleteRound'
        >['request']['abi'],
        'deleteRound',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'deleteRound'
      }
    : UseContractWriteConfig<typeof quadraticABI, 'deleteRound', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'deleteRound'
      } = {} as any,
) {
  return useContractWrite<typeof quadraticABI, 'deleteRound', TMode>({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'deleteRound',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"distributePodiumPrizes"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function useQuadraticDistributePodiumPrizes<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof quadraticAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof quadraticABI,
          'distributePodiumPrizes'
        >['request']['abi'],
        'distributePodiumPrizes',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'distributePodiumPrizes'
      }
    : UseContractWriteConfig<
        typeof quadraticABI,
        'distributePodiumPrizes',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'distributePodiumPrizes'
      } = {} as any,
) {
  return useContractWrite<typeof quadraticABI, 'distributePodiumPrizes', TMode>(
    {
      abi: quadraticABI,
      address: quadraticAddress[80001],
      functionName: 'distributePodiumPrizes',
      ...config,
    } as any,
  )
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"podiumVote"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function useQuadraticPodiumVote<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof quadraticAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof quadraticABI,
          'podiumVote'
        >['request']['abi'],
        'podiumVote',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'podiumVote' }
    : UseContractWriteConfig<typeof quadraticABI, 'podiumVote', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'podiumVote'
      } = {} as any,
) {
  return useContractWrite<typeof quadraticABI, 'podiumVote', TMode>({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'podiumVote',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"quadraticFunding"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function useQuadraticQuadraticFunding<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof quadraticAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof quadraticABI,
          'quadraticFunding'
        >['request']['abi'],
        'quadraticFunding',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'quadraticFunding'
      }
    : UseContractWriteConfig<typeof quadraticABI, 'quadraticFunding', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'quadraticFunding'
      } = {} as any,
) {
  return useContractWrite<typeof quadraticABI, 'quadraticFunding', TMode>({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'quadraticFunding',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"revokeWhitelistContributor"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function useQuadraticRevokeWhitelistContributor<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof quadraticAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof quadraticABI,
          'revokeWhitelistContributor'
        >['request']['abi'],
        'revokeWhitelistContributor',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'revokeWhitelistContributor'
      }
    : UseContractWriteConfig<
        typeof quadraticABI,
        'revokeWhitelistContributor',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'revokeWhitelistContributor'
      } = {} as any,
) {
  return useContractWrite<
    typeof quadraticABI,
    'revokeWhitelistContributor',
    TMode
  >({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'revokeWhitelistContributor',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"uploadResults"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function useQuadraticUploadResults<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof quadraticAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof quadraticABI,
          'uploadResults'
        >['request']['abi'],
        'uploadResults',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'uploadResults'
      }
    : UseContractWriteConfig<typeof quadraticABI, 'uploadResults', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'uploadResults'
      } = {} as any,
) {
  return useContractWrite<typeof quadraticABI, 'uploadResults', TMode>({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'uploadResults',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"whitelistContributor"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function useQuadraticWhitelistContributor<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof quadraticAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof quadraticABI,
          'whitelistContributor'
        >['request']['abi'],
        'whitelistContributor',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'whitelistContributor'
      }
    : UseContractWriteConfig<
        typeof quadraticABI,
        'whitelistContributor',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'whitelistContributor'
      } = {} as any,
) {
  return useContractWrite<typeof quadraticABI, 'whitelistContributor', TMode>({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'whitelistContributor',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link quadraticABI}__.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function usePrepareQuadraticWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof quadraticABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof quadraticAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    ...config,
  } as UsePrepareContractWriteConfig<typeof quadraticABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"contribute"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function usePrepareQuadraticContribute(
  config: Omit<
    UsePrepareContractWriteConfig<typeof quadraticABI, 'contribute'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof quadraticAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'contribute',
    ...config,
  } as UsePrepareContractWriteConfig<typeof quadraticABI, 'contribute'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"createPodiumRound"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function usePrepareQuadraticCreatePodiumRound(
  config: Omit<
    UsePrepareContractWriteConfig<typeof quadraticABI, 'createPodiumRound'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof quadraticAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'createPodiumRound',
    ...config,
  } as UsePrepareContractWriteConfig<typeof quadraticABI, 'createPodiumRound'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"createProject"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function usePrepareQuadraticCreateProject(
  config: Omit<
    UsePrepareContractWriteConfig<typeof quadraticABI, 'createProject'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof quadraticAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'createProject',
    ...config,
  } as UsePrepareContractWriteConfig<typeof quadraticABI, 'createProject'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"createRound"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function usePrepareQuadraticCreateRound(
  config: Omit<
    UsePrepareContractWriteConfig<typeof quadraticABI, 'createRound'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof quadraticAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'createRound',
    ...config,
  } as UsePrepareContractWriteConfig<typeof quadraticABI, 'createRound'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"deleteRound"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function usePrepareQuadraticDeleteRound(
  config: Omit<
    UsePrepareContractWriteConfig<typeof quadraticABI, 'deleteRound'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof quadraticAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'deleteRound',
    ...config,
  } as UsePrepareContractWriteConfig<typeof quadraticABI, 'deleteRound'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"distributePodiumPrizes"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function usePrepareQuadraticDistributePodiumPrizes(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof quadraticABI,
      'distributePodiumPrizes'
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof quadraticAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'distributePodiumPrizes',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof quadraticABI,
    'distributePodiumPrizes'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"podiumVote"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function usePrepareQuadraticPodiumVote(
  config: Omit<
    UsePrepareContractWriteConfig<typeof quadraticABI, 'podiumVote'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof quadraticAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'podiumVote',
    ...config,
  } as UsePrepareContractWriteConfig<typeof quadraticABI, 'podiumVote'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"quadraticFunding"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function usePrepareQuadraticQuadraticFunding(
  config: Omit<
    UsePrepareContractWriteConfig<typeof quadraticABI, 'quadraticFunding'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof quadraticAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'quadraticFunding',
    ...config,
  } as UsePrepareContractWriteConfig<typeof quadraticABI, 'quadraticFunding'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"revokeWhitelistContributor"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function usePrepareQuadraticRevokeWhitelistContributor(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof quadraticABI,
      'revokeWhitelistContributor'
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof quadraticAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'revokeWhitelistContributor',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof quadraticABI,
    'revokeWhitelistContributor'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"uploadResults"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function usePrepareQuadraticUploadResults(
  config: Omit<
    UsePrepareContractWriteConfig<typeof quadraticABI, 'uploadResults'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof quadraticAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'uploadResults',
    ...config,
  } as UsePrepareContractWriteConfig<typeof quadraticABI, 'uploadResults'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link quadraticABI}__ and `functionName` set to `"whitelistContributor"`.
 *
 * [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84aFE7D82eE49D0cf581C50469CA54dda27E7C67)
 */
export function usePrepareQuadraticWhitelistContributor(
  config: Omit<
    UsePrepareContractWriteConfig<typeof quadraticABI, 'whitelistContributor'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof quadraticAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: quadraticABI,
    address: quadraticAddress[80001],
    functionName: 'whitelistContributor',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof quadraticABI,
    'whitelistContributor'
  >)
}
