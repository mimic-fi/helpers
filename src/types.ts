import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address'
import { Contract } from 'ethers'

export type Optional<N> = undefined | N

export type NAry<N> = N | N[]

export type Account = string | Contract | SignerWithAddress
