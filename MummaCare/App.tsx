import React from "react"
import dynamic from "next/dynamic"

const Router = dynamic(() => import("react-router-dom").then((mod) => mod.BrowserRouter), { ssr: false })
const Routes = dynamic(() => import("react-router-dom").then((mod) => mod.Routes), { ssr: false })
const Route = dynamic(() => import("react-router-dom").then((mod) => mod.Route), { ssr: false })
const Link = dynamic(() => import("react-router-dom").then((mod) => mod.Link), { ssr: false })

const SymptomTracker = dynamic(() => import("./components/SymptomTracker").then((mod) => mod.SymptomTracker), {
  ssr: false,
})
const WeeklyGuidance = dynamic(() => import("./components/WeeklyGuidance").then((mod) => mod.WeeklyGuidance), {
  ssr: false,
})
const EducationLibrary = dynamic(() => import("./components/EducationLibrary").then((mod) => mod.EducationLibrary), {
  ssr: false,
})
const CommunitySupport = dynamic(() => import("./components/CommunitySupport").then((mod) => mod.CommunitySupport), {
  ssr: false,
})
const EmergencyAppointments = dynamic(
  () => import("./components/EmergencyAppointments").then((mod) => mod.EmergencyAppointments),
  { ssr: false },
)

export default function App() {
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // or a loading spinner
  }

  return (
    <Router>
      <div className="bg-gradient-to-r from-pink-100 to-white min-h-screen">
        <header className="bg-pink-200 p-4 text-center">
          <h1 className="text-3xl font-bold text-pink-700">Mumma Care</h1>
        </header>
        <nav className="bg-pink-100 p-4">
          <ul className="flex justify-around">
            <li>
              <Link to="/symptoms" className="text-pink-700 hover:text-pink-900">
                Symptom Tracker
              </Link>
            </li>
            <li>
              <Link to="/weekly" className="text-pink-700 hover:text-pink-900">
                Weekly Guidance
              </Link>
            </li>
            <li>
              <Link to="/library" className="text-pink-700 hover:text-pink-900">
                Education Library
              </Link>
            </li>
            <li>
              <Link to="/community" className="text-pink-700 hover:text-pink-900">
                Community Support
              </Link>
            </li>
            <li>
              <Link to="/emergency" className="text-pink-700 hover:text-pink-900">
                Emergency & Appointments
              </Link>
            </li>
          </ul>
        </nav>
        <main className="container mx-auto mt-8 p-4">
          <Routes>
            <Route path="/symptoms" element={<SymptomTracker />} />
            <Route path="/weekly" element={<WeeklyGuidance />} />
            <Route path="/library" element={<EducationLibrary />} />
            <Route path="/community" element={<CommunitySupport />} />
            <Route path="/emergency" element={<EmergencyAppointments />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

