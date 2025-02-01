"use client"

import { useState } from "react"
import Link from "next/link"

const weeklyData = [
  {
    week: 1,
    description: "Your baby is a tiny ball of cells.",
    exercise: "Light walking for 20-30 minutes daily.",
    nutrition: "Start taking prenatal vitamins with folic acid.",
  },
  {
    week: 2,
    description: "The embryo is implanting in your uterus.",
    exercise: "Gentle yoga or stretching.",
    nutrition: "Increase intake of leafy greens and whole grains.",
  },
  {
    week: 3,
    description: "The fertilized egg is now a blastocyst and is traveling to the uterus.",
    exercise: "Light walking or stretching is okay if you feel up to it.",
    nutrition: "Focus on a healthy, balanced diet with plenty of fruits and vegetables.",
  },
  {
    week: 4,
    description: "Implantation occurs, and hCG is produced. A home pregnancy test may now be positive.",
    exercise: "Continue with gentle activities like walking.",
    nutrition: "Ensure adequate intake of folic acid and other essential vitamins.",
  },
  {
    week: 5,
    description: "Rapid development of the baby's organs is occurring. You may experience early pregnancy symptoms.",
    exercise: "Continue with light exercise, but listen to your body and rest when needed.",
    nutrition: "Focus on nutrient-dense foods and stay hydrated.",
  },
  {
    week: 6,
    description: "Morning sickness may start. The baby's heart is beating.",
    exercise: "Short walks and light prenatal exercises.",
    nutrition: "Focus on easily digestible foods like crackers and ginger.",
  },
  {
    week: 7,
    description: "The baby's facial features are developing, and limb buds are forming.",
    exercise: "Continue with gentle exercise, avoiding high-impact activities.",
    nutrition: "Ensure adequate protein and calcium intake.",
  },
  {
    week: 8,
    description: "The baby is now considered a fetus. Fingers and toes are forming.",
    exercise: "Prenatal yoga, swimming, or walking are good options.",
    nutrition: "Maintain a balanced diet with plenty of fruits and vegetables.",
  },
  {
    week: 9,
    description: "The baby's organs are continuing to develop rapidly.",
    exercise: "Continue with moderate exercise and listen to your body.",
    nutrition: "Focus on iron-rich foods to support increased blood volume.",
  },
  {
    week: 10,
    description: "Major organs are developing. You may start to show.",
    exercise: "Prenatal yoga, swimming, or walking.",
    nutrition: "Ensure adequate protein and calcium intake.",
  },
  {
    week: 11,
    description: "The baby's bones are beginning to harden.",
    exercise: "Continue with regular prenatal exercise, adjusting as needed.",
    nutrition: "Maintain a balanced diet with plenty of fruits and vegetables.",
  },
  {
    week: 12,
    description: "The baby's reflexes are developing. The risk of miscarriage decreases significantly.",
    exercise: "Continue with moderate exercise and listen to your body.",
    nutrition: "Focus on iron-rich foods to support increased blood volume.",
  },
  {
    week: 13,
    description: "The baby is swallowing amniotic fluid and producing urine.",
    exercise: "Continue with regular prenatal exercise.",
    nutrition: "Maintain a healthy and varied diet.",
  },
  {
    week: 14,
    description: "The baby can now suck its thumb. Energy levels may increase.",
    exercise: "Continue with regular prenatal exercise, adjusting as needed.",
    nutrition: "Maintain a balanced diet with plenty of fruits and vegetables.",
  },
  {
    week: 15,
    description: "The baby's skin is developing.",
    exercise: "Continue with moderate exercise and listen to your body.",
    nutrition: "Focus on iron-rich foods to support increased blood volume.",
  },
  {
    week: 16,
    description: "The baby's ears are developing, and they may start to hear sounds.",
    exercise: "Continue with regular prenatal exercise.",
    nutrition: "Maintain a healthy and varied diet.",
  },
  {
    week: 17,
    description: "Fat is beginning to develop under the baby's skin.",
    exercise: "Continue with regular prenatal exercise, adjusting as needed.",
    nutrition: "Maintain a balanced diet with plenty of fruits and vegetables.",
  },
  {
    week: 18,
    description: "You may feel the baby's first movements (quickening).",
    exercise: "Continue with moderate exercise and listen to your body.",
    nutrition: "Focus on iron-rich foods to support increased blood volume.",
  },
  {
    week: 19,
    description: "The baby is growing rapidly.",
    exercise: "Continue with regular prenatal exercise.",
    nutrition: "Maintain a healthy and varied diet.",
  },
  {
    week: 20,
    description: "You're halfway there! An ultrasound is typically performed around this time.",
    exercise: "Continue with regular prenatal exercise, adjusting as needed.",
    nutrition: "Maintain a balanced diet with plenty of fruits and vegetables.",
  },
  {
    week: 21,
    description: "The baby's eyebrows and eyelids are developing.",
    exercise: "Continue with moderate exercise and listen to your body.",
    nutrition: "Focus on iron-rich foods to support increased blood volume.",
  },
  {
    week: 22,
    description:
      "The baby's lungs are beginning to develop surfactant, a substance that helps them breathe after birth.",
    exercise: "Continue with regular prenatal exercise.",
    nutrition: "Maintain a healthy and varied diet.",
  },
  {
    week: 23,
    description: "The baby's hearing is continuing to develop.",
    exercise: "Continue with regular prenatal exercise, adjusting as needed.",
    nutrition: "Maintain a balanced diet with plenty of fruits and vegetables.",
  },
  {
    week: 24,
    description: "The baby's skin is becoming less transparent.",
    exercise: "Continue with moderate exercise and listen to your body.",
    nutrition: "Focus on iron-rich foods to support increased blood volume.",
  },
  {
    week: 25,
    description: "The baby is gaining weight rapidly.",
    exercise: "Continue with regular prenatal exercise.",
    nutrition: "Maintain a healthy and varied diet.",
  },
  {
    week: 26,
    description: "The baby's eyes are starting to open.",
    exercise: "Continue with regular prenatal exercise, adjusting as needed.",
    nutrition: "Maintain a balanced diet with plenty of fruits and vegetables.",
  },
  {
    week: 27,
    description: "The baby's brain is developing rapidly.",
    exercise: "Continue with moderate exercise and listen to your body.",
    nutrition: "Focus on iron-rich foods to support increased blood volume.",
  },
  {
    week: 28,
    description: "You are now in your third trimester.",
    exercise: "Continue with regular prenatal exercise, adjusting as needed. Focus on low-impact activities.",
    nutrition: "Maintain a balanced diet with plenty of fruits and vegetables. Consider increasing calcium intake.",
  },
  {
    week: 29,
    description: "The baby is practicing breathing movements.",
    exercise: "Continue with moderate exercise and listen to your body.",
    nutrition: "Focus on iron-rich foods to support increased blood volume. Stay hydrated.",
  },
  {
    week: 30,
    description: "The baby's bones are hardening, but their skull remains soft for birth.",
    exercise:
      "Continue with regular prenatal exercise, but avoid strenuous activity. Pelvic floor exercises are beneficial.",
    nutrition: "Maintain a healthy and varied diet. Ensure adequate intake of omega-3 fatty acids.",
  },
  {
    week: 31,
    description: "The baby is gaining about half a pound per week.",
    exercise: "Continue with gentle exercise, such as walking or swimming. Rest when needed.",
    nutrition:
      "Maintain a balanced diet with plenty of fruits and vegetables. Pay attention to your body's signals for hunger and fullness.",
  },
  {
    week: 32,
    description: "The baby's toenails are now visible.",
    exercise: "Continue with light exercise, if comfortable. Focus on relaxation and stretching.",
    nutrition:
      "Focus on iron-rich foods to support increased blood volume. Consider eating smaller, more frequent meals.",
  },
  {
    week: 33,
    description: "The baby's lungs are almost fully developed.",
    exercise: "Continue with gentle movements and stretches. Avoid activities that could cause falls.",
    nutrition: "Maintain a healthy and varied diet. Stay well-hydrated.",
  },
  {
    week: 34,
    description: "The baby is considered full term if born now.",
    exercise: "Continue with light activity as tolerated. Focus on comfort and relaxation techniques.",
    nutrition: "Maintain a balanced diet. It's important to keep your energy levels up.",
  },
  {
    week: 35,
    description: "The baby is continuing to gain weight and build fat stores.",
    exercise: "Continue with very light activity, focusing on comfort measures and preparing for labor.",
    nutrition: "Maintain a healthy diet. Ensure adequate intake of fiber to prevent constipation.",
  },
  {
    week: 36,
    description: "The baby is likely head-down in preparation for birth.",
    exercise: "Focus on relaxation and breathing exercises.",
    nutrition: "Maintain a healthy diet.",
  },
  {
    week: 37,
    description: "The baby is considered full term.",
    exercise: "Continue with light activity and focus on preparing for labor.",
    nutrition: "Maintain a healthy diet.",
  },
  {
    week: 38,
    description: "The baby is continuing to gain weight.",
    exercise: "Continue with gentle activity and rest as needed.",
    nutrition: "Maintain a healthy diet.",
  },
]

export default function WeeklyGuidance() {
  const [selectedWeek, setSelectedWeek] = useState(1)

  const handleWeekChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWeek(Number(event.target.value))
  }

  const weekInfo = weeklyData.find((w) => w.week === selectedWeek)

  return (
    <div className="grid gap-6">
      <h2 className="text-2xl font-semibold text-pink-700">Weekly Guidance</h2>
      <div>
        <label htmlFor="week-select" className="block mb-2">
          Select Week:
        </label>
        <select
          id="week-select"
          value={selectedWeek}
          onChange={handleWeekChange}
          className="w-full p-2 border border-pink-300 rounded"
        >
          {weeklyData.map((week) => (
            <option key={week.week} value={week.week}>
              Week {week.week}
            </option>
          ))}
        </select>
      </div>
      {weekInfo && (
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Week {weekInfo.week}</h3>
          <p className="mb-4">{weekInfo.description}</p>
          <h4 className="font-semibold">Suggested Exercise:</h4>
          <p className="mb-2">{weekInfo.exercise}</p>
          <h4 className="font-semibold">Nutrition Tip:</h4>
          <p>{weekInfo.nutrition}</p>
        </div>
      )}
      <Link href="/" className="text-pink-600 hover:underline">
        Back to Home
      </Link>
    </div>
  )
}

