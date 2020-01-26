// import fetch from 'node-fetch'
const fetcher = async (url, inits) => {
  const payload = await fetch(url, inits)
  const result = await payload.json()
  return result
}

export default fetcher
