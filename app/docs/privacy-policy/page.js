'use client'

import { EmbedPDF } from "@simplepdf/react-embed-pdf";

export default function PrivacyPolicy() {
  return (
    <EmbedPDF mode="inline" className="document" documentURL="/documents/privacy_policy_1_0.pdf" />
  )
}