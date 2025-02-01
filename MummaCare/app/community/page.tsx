import React from "react"
import dynamic from "next/dynamic"

const CommunitySupport = dynamic(() => import("@/components/CommunitySupport"), { ssr: false })

export default function CommunityPage() {
  return <CommunitySupport />
}

