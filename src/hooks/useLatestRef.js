import { useEffect, useRef } from "react"

export const useLatestRef = (val) => {
  const ref = useRef(val)

  useEffect(() => {
    ref.current = val
  }, [val])

  return ref
}
