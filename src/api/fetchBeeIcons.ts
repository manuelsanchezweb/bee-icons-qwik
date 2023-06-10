import { Icon } from '../types/types'

export async function fetchBeeIcons(): Promise<Icon[]> {
  const url = 'https://bee-icons.com/api/icons'
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Failed to fetch icons')
  }
  const results = await response.json()

  return results as Icon[]
}
