import React from "react"
import dynamic from "next/dynamic"

const WeeklyGuidance = dynamic(() => import("@/components/WeeklyGuidance"), { ssr: false })

export default function WeeklyPage() {
  return <WeeklyGuidance />
}

