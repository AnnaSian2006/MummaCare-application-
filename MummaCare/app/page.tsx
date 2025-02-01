"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Baby, Calendar, BookOpen, Users, PhoneCall } from "lucide-react"

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview")

  const features = [
    {
      id: "symptoms",
      title: "Symptom Tracker",
      description: "Track and understand your pregnancy symptoms",
      icon: <Baby className="h-6 w-6" />,
    },
    {
      id: "weekly",
      title: "Weekly Guidance",
      description: "Get week-by-week pregnancy insights",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      id: "library",
      title: "Education Library",
      description: "Access a wealth of pregnancy and parenting resources",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      id: "community",
      title: "Community Support",
      description: "Connect with other expectant mothers",
      icon: <Users className="h-6 w-6" />,
    },
    {
      id: "emergency",
      title: "Emergency & Appointments",
      description: "Manage your appointments and access emergency information",
      icon: <PhoneCall className="h-6 w-6" />,
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-pink-700 mb-4">Welcome to MummaCare</h1>
        <p className="text-xl text-gray-600">Your companion throughout pregnancy and beyond.</p>
      </div>

      <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          {features.map((feature) => (
            <TabsTrigger key={feature.id} value={feature.id}>
              {feature.title}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="overview" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.id}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {feature.icon}
                    <span className="ml-2">{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {features.map((feature) => (
          <TabsContent key={feature.id} value={feature.id}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {feature.icon}
                  <span className="ml-2">{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
                <Link
                  href={`/${feature.id}`}
                  className="mt-4 inline-block bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors"
                >
                  Go to {feature.title}
                </Link>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
  )
}

