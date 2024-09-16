import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { BigNumber } from 'ethers'

export async function getSigner(indexOrAddress: number | string = 0): Promise<SignerWithAddress> {
  if (typeof indexOrAddress === 'string') {
    const { ethers } = await import('hardhat')
    const signer = ethers.provider.getSigner(indexOrAddress)
    return SignerWithAddress.create(signer)
  } else {
    const signers = await getSigners()
    return signers[indexOrAddress]
  }
}

export async function getSigners(size?: number, offset = 0): Promise<SignerWithAddress[]> {
  const { ethers } = await import('hardhat')
  const signers = await ethers.getSigners()
  return size ? signers.slice(offset, offset + size) : signers
}

export async function impersonate(address: string, balance?: BigNumber): Promise<SignerWithAddress> {
  const { network, ethers } = await import('hardhat')
  await network.provider.request({ method: 'hardhat_impersonateAccount', params: [address] })

  if (balance) {
    const rawHexBalance = ethers.utils.hexlify(balance)
    const hexBalance = rawHexBalance.replace('0x0', '0x')
    await network.provider.request({ method: 'hardhat_setBalance', params: [address, hexBalance] })
  }

  return getSigner(address)
}
