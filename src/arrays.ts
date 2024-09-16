import { NAry } from './types'

export const areEqualArrays = <T>(array: T[], anotherArray: T[]): boolean => {
  if (array.length != anotherArray.length) return false
  return array.every((item: T) => anotherArray.includes(item))
}

export const chunkArray = <T>(array: T[], size: number): T[][] => {
  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}

export const uniqueElements = <T>(arr: T[]): T[] => {
  return Array.from(new Set(arr))
}

export const toArray = <T>(...values: NAry<T>[]): T[] => {
  if (values.length === 0) return []
  const [first, ...rest] = values
  const firstArray = Array.isArray(first) ? first : [first]
  return firstArray.concat(toArray(...rest))
}
