"use client"

import { useState } from "react"
import Link from "next/link"

const symptoms = [
  {
    id: 1,
    name: "Morning Sickness",
    normal: true,
    description: "Common in the first trimester, usually subsides by week 16-20.",
  },
  {
    id: 2,
    name: "Fatigue",
    normal: true,
    description: "Normal throughout pregnancy, especially in the first and third trimesters.",
  },
  {
    id: 3,
    name: "Headaches",
    normal: true,
    description: "Common, but consult your doctor if severe or persistent.",
  },
  {
    id: 4,
    name: "Severe Abdominal Pain",
    normal: false,
    description: "Could indicate a serious problem. Seek medical attention immediately.",
  },
  {
    id: 5,
    name: "Heavy Bleeding",
    normal: false,
    description: "Could be a sign of miscarriage or other complications. Contact your doctor right away.",
  },
  {
    id: 6,
    name: "Bloating and slight weight gain",
    normal: true,
    description: "Common in the first trimester, usually subsides by week 16-20.",
  },
  {
    id: 7,
    name: "Shortness of Breath",
    normal: false,
    description: "Could be a sign of congestion in the body and need to be cured immediately.",
  },
  {
    id: 8,
    name: "Mild cramping, spotting",
    normal: true,
    description: "Common in weeks 1-4, often mistaken for menstrual symptoms.",
  },
  {
    id: 9,
    name: "Tender breasts, nausea",
    normal: true,
    description: "Common in week 5 as hormonal changes begin to intensify.",
  },
  {
    id: 10,
    name: "Mood swings",
    normal: true,
    description: "Common in week 6, nausea may worsen during this time.",
  },
  {
    id: 11,
    name: "Food aversions, frequent urination",
    normal: true,
    description: "Common in week 7 due to increased blood flow affecting kidneys.",
  },
  {
    id: 12,
    name: "Heartburn, mild headaches",
    normal: true,
    description: "Common in week 9 due to hormonal relaxation of digestive tract.",
  },
  {
    id: 13,
    name: "Increased sense of smell, breast changes",
    normal: true,
    description: "Common in week 10, darkening areolas may occur.",
  },
  {
    id: 14,
    name: "Reduced nausea (in some women)",
    normal: true,
    description: "Common in week 11, appetite may start returning.",
  },
  {
    id: 15,
    name: "Energy levels may improve",
    normal: true,
    description: "Common in week 13, marking the transition into the second trimester.",
  },
  {
    id: 16,
    name: "Difficulty sleeping, baby movements",
    normal: true,
    description: "Baby becomes more active at night. (Week 28)",
  },
  {
    id: 17,
    name: "Increased urination, hemorrhoids",
    normal: true,
    description: "Pressure on bladder intensifies. (Week 29)",
  },
  {
    id: 18,
    name: "Shortness of breath, fatigue",
    normal: true,
    description: "Baby's growth limits lung capacity. (Week 30)",
  },
  {
    id: 19,
    name: "Frequent Braxton Hicks contractions",
    normal: true,
    description: "These contractions are irregular. (Week 31)",
  },
  {
    id: 20,
    name: "Leaking colostrum (pre-milk)",
    normal: true,
    description: "Breasts prepare for breastfeeding. (Week 32)",
  },
  {
    id: 21,
    name: "Pelvic pressure, waddling gait",
    normal: true,
    description: "Baby drops lower in the pelvis. (Week 33)",
  },
  {
    id: 22,
    name: "Swelling in feet/ankles, back pain",
    normal: true,
    description: "Elevate feet to reduce swelling. (Week 34)",
  },
  {
    id: 23,
    name: "Fatigue, difficulty moving",
    normal: false,
    description: "Baby's size creates physical strain. (Week 35)",
  },
  {
    id: 24,
    name: "Lightening (baby drops), nesting urge",
    normal: true,
    description: "Breathing may become easier. (Week 36)",
  },
  {
    id: 25,
    name: "Increased pelvic pain, cervical dilation",
    normal: true,
    description: "Body prepares for labor. (Week 37)",
  },
  {
    id: 26,
    name: "Frequent urination, lower back pain",
    normal: false,
    description: "Baby may engage in the birth canal. (Week 38)",
  },
  {
    id: 27,
    name: "Mild contractions, loss of mucus plug",
    normal: true,
    description: "Signs of early labor may appear. (Week 39)",
  },
  {
    id: 28,
    name: "Labor contractions, water breaking",
    normal: false,
    description: "Labor typically begins. (Week 40)",
  },
  {
    id: 29,
    name: "Reduced nausea, increased energy",
    normal: true,
    description: "Many women feel better this week. (Week 14)",
  },
  {
    id: 30,
    name: "Nasal congestion, vivid dreams",
    normal: true,
    description: "Due to increased blood flow. (Week 15)",
  },
  {
    id: 31,
    name: "Round ligament pain",
    normal: true,
    description: "Caused by stretching of abdominal ligaments. (Week 16)",
  },
  {
    id: 32,
    name: "Mild swelling in hands/feet, back pain",
    normal: true,
    description: "Weight gain begins to affect posture. (Week 17)",
  },
  {
    id: 33,
    name: "Fluttering fetal movements (quickening)",
    normal: true,
    description: "First noticeable baby movements. (Week 18)",
  },
  {
    id: 34,
    name: "Skin changes, darker patches",
    normal: true,
    description: 'Melasma may occur ("pregnancy mask"). (Week 19)',
  },
  {
    id: 35,
    name: "Fetal kicks, heartburn, indigestion",
    normal: true,
    description: "Uterus is at belly button level. (Week 20)",
  },
  {
    id: 36,
    name: "Increased appetite, mild fatigue",
    normal: true,
    description: "Baby grows rapidly during this stage. (Week 21)",
  },
  {
    id: 37,
    name: "Leg cramps, varicose veins",
    normal: true,
    description: "Improve circulation with movement. (Week 22)",
  },
  {
    id: 38,
    name: "Braxton Hicks contractions (mild)",
    normal: true,
    description: '"Practice" contractions for labor. (Week 23)',
  },
  {
    id: 39,
    name: "Stretch marks may appear",
    normal: true,
    description: "Common on abdomen, thighs, breasts. (Week 24)",
  },
  {
    id: 40,
    name: "Shortness of breath, heartburn",
    normal: true,
    description: "Baby pushes on diaphragm. (Week 25)",
  },
  {
    id: 41,
    name: "Backaches, mild swelling",
    normal: true,
    description: "Use support pillows when. (Week 26)",
  },
]

export default function SymptomTracker() {
  const [selectedSymptom, setSelectedSymptom] = useState<string | null>(null)

  const handleSymptomSelect = (symptom: string) => {
    setSelectedSymptom(symptom)
  }

  const selectedSymptomInfo = symptoms.find((s) => s.name === selectedSymptom)

  return (
    <div className="grid gap-6">
      <h2 className="text-2xl font-semibold text-pink-700">Symptom Tracker</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-semibold mb-4">Select a Symptom</h3>
          <ul className="space-y-2">
            {symptoms.map((symptom) => (
              <li key={symptom.id}>
                <button
                  onClick={() => handleSymptomSelect(symptom.name)}
                  className={`w-full text-left p-2 rounded ${
                    selectedSymptom === symptom.name ? "bg-pink-200" : "bg-white"
                  } hover:bg-pink-100`}
                >
                  {symptom.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {selectedSymptomInfo && (
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">{selectedSymptomInfo.name}</h3>
              <p className={`mb-2 ${selectedSymptomInfo.normal ? "text-green-600" : "text-red-600"}`}>
                {selectedSymptomInfo.normal ? "Normal" : "Potentially Concerning"}
              </p>
              <p>{selectedSymptomInfo.description}</p>
            </div>
          )}
        </div>
      </div>
      <Link href="/" className="text-pink-600 hover:underline">
        Back to Home
      </Link>
    </div>
  )
}

