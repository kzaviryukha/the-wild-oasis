import { useEffect, useRef } from "react"
import { useLatestRef } from "./useLatestRef"

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef()
  const refHandler = useLatestRef(handler)

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          refHandler.current?.()
        }
      }

      document.addEventListener("click", handleClick, listenCapturing)

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing)
    },
    [refHandler, listenCapturing]
  )

  return ref
}
