'use client'

import { EmbedPDF } from "@simplepdf/react-embed-pdf";

export default function GeneralTerms() {
  return (
    <EmbedPDF mode="inline" companyIdentifier="react-viewer" className="document" documentURL="/documents/general_terms_1_0.pdf" />
  );
}