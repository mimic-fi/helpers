import { utils } from 'ethers'

export function randomAddress(): string {
  return randomHex(20)
}

export function randomHex(length: number): string {
  return utils.hexlify(utils.randomBytes(length))
}
