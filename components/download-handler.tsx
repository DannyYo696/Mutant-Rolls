"use client"

import { useEffect } from "react"

export default function DownloadHandler() {
  useEffect(() => {
    // Find all whitepaper links
    const whitepaperLinks = document.querySelectorAll(
      'a[href$="https://raw.githubusercontent.com/DannyYo696/svillage/23a9011674cf2a6bb667591e470c4283096cf3d8/mutant%20rolls.pdf"]',
    )

    // Update each link to open in a new tab instead of downloading
    whitepaperLinks.forEach((link) => {
      // Change the href to use Google Docs Viewer
      link.setAttribute(
        "href",
        "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/DannyYo696/svillage/23a9011674cf2a6bb667591e470c4283096cf3d8/mutant%20rolls.pdf",
      )

      // Add target and rel attributes
      link.setAttribute("target", "_blank")
      link.setAttribute("rel", "noopener noreferrer")

      // Remove any download attribute
      link.removeAttribute("download")

      // Remove any existing click event listeners
      const newLink = link.cloneNode(true)
      link.parentNode?.replaceChild(newLink, link)
    })
  }, [])

  return null
}
