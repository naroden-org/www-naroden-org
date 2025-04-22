'use client'

import { EmbedPDF } from "@simplepdf/react-embed-pdf";

export default function CookiesPolicies() {
  return (
    <EmbedPDF mode="inline" className="document" documentURL="/documents/cookies_policies_1_0.pdf" />
  )
}