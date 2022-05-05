export interface getUrlParameters {
  path: string
  vertices: number
  subdivisions: number
  points: number
  jumps?: number[]
}

export function getUrl({
  path,
  vertices,
  points,
  subdivisions,
  jumps,
}: getUrlParameters): string {
  if (typeof window === "undefined") return ""
  const url = `${window?.location.origin}${path}?vertex=${vertices}&subdivisions=${subdivisions}&points=${points}`
  let jumpsUrl = ""
  if (jumps !== undefined && jumps.length !== 0) {
    jumpsUrl = `&jumps=${jumps.join("&jumps=")}`
  }
  return `${url}${jumpsUrl}`
}
