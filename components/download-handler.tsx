"use client"

import { useEffect } from "react"

export default function DownloadHandler() {
  useEffect(() => {
    // Check if the browser supports the download attribute
    const isDownloadSupported = "download" in document.createElement("a")

    if (!isDownloadSupported) {
      // Add click event listeners to whitepaper links
      const whitepaperLinks = document.querySelectorAll(
        'a[href$="https://raw.githubusercontent.com/DannyYo696/svillage/23a9011674cf2a6bb667591e470c4283096cf3d8/mutant%20rolls.pdf"]',
      )

      whitepaperLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          // For browsers that don't support the download attribute,
          // open the PDF in a new tab/window
          const href = link.getAttribute("href")
          window.open(href, "_blank")
          e.preventDefault()
        })
      })
    }
  }, [])

  return null
}
