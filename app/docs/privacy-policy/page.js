'use client'

import { EmbedPDF } from "@simplepdf/react-embed-pdf";

export default function PrivacyPolicy() {
  return (
    <EmbedPDF mode="inline" companyIdentifier="react-viewer" className="document" documentURL="/documents/gdpr_1_0.pdf" />
  )
}