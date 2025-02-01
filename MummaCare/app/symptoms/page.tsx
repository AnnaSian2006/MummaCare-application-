import React from "react"
import dynamic from "next/dynamic"

const SymptomTracker = dynamic(() => import("@/components/SymptomTracker"), { ssr: false })

export default function SymptomsPage() {
  return <SymptomTracker />
}

