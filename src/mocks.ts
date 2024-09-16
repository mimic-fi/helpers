import { Contract } from 'ethers'

import { deploy } from './contracts'

/* eslint-disable no-secrets/no-secrets */

export async function deployWrappedNativeTokenMock(): Promise<Contract> {
  return deploy('@mimic-fi/helpers/artifacts/contracts/mocks/WrappedNativeTokenMock.sol/WrappedNativeTokenMock')
}

export async function deployTokenMock(symbol: string, decimals = 18): Promise<Contract> {
  return deploy('@mimic-fi/helpers/artifacts/contracts/mocks/TokenMock.sol/TokenMock', [symbol, decimals])
}
