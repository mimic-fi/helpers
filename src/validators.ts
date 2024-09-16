import { isAddress } from 'ethers/lib/utils'

export function isValidUrl(url?: string): boolean {
  if (typeof url !== 'string') return false
  const urlRegex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/
  return urlRegex.test(url)
}

export function isValidAddress(address?: string): boolean {
  if (typeof address !== 'string') return false
  return isAddress(address.toLowerCase())
}
