export interface getUrlParameters {
  path: string
  vertices: number
  subdivisions?: number
  points?: number
  jumps?: number[]
  reduction?: number
}

export function getUrl({
  path,
  vertices,
  points,
  subdivisions,
  jumps,
  reduction,
}: getUrlParameters): string {
  if (typeof window === "undefined") return ""
  const url = `${window?.location.origin}${path}?vertex=${vertices}${
    subdivisions ? `&subdivisions=${subdivisions}` : ""
  }${reduction ? `&reduction=${reduction}` : ""}${
    points ? `&points=${points}` : ""
  }`
  let jumpsUrl = ""
  if (jumps !== undefined && jumps.length !== 0) {
    jumpsUrl = `&jumps=${jumps.join("&jumps=")}`
  }
  return `${url}${jumpsUrl}`
}
