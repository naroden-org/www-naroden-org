'use client'

import { EmbedPDF } from "@simplepdf/react-embed-pdf";

export default function GeneralTerms() {
  return (
    <EmbedPDF mode="inline" className="document" documentURL="/documents/general_terms.pdf" />
  );
}