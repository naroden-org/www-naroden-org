'use client'

import { EmbedPDF } from "@simplepdf/react-embed-pdf";

export default function ChildSafety() {
  return (
    <EmbedPDF mode="inline" className="document" documentURL="/documents/child_safety_1_0.pdf" />
  )
}