import React from "react"

const emergencyInfo = {
  doctorName: "Dr. Sarah Johnson",
  phoneNumber: "+1 (555) 123-4567",
  hospitalAddress: "123 Maternity Ave, Babytown, BT 12345",
}

const appointments = [
  { date: "2023-06-15", time: "10:00 AM", description: "Regular checkup" },
  { date: "2023-07-01", time: "2:00 PM", description: "Ultrasound" },
]

export function EmergencyAppointments() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-pink-700 mb-4">Emergency & Appointments</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-pink-600 mb-2">Emergency Contact</h3>
        <p>
          <strong>Doctor:</strong> {emergencyInfo.doctorName}
        </p>
        <p>
          <strong>Phone:</strong> {emergencyInfo.phoneNumber}
        </p>
        <p>
          <strong>Hospital:</strong> {emergencyInfo.hospitalAddress}
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-pink-600 mb-2">Upcoming Appointments</h3>
        <ul className="space-y-2">
          {appointments.map((apt, index) => (
            <li key={index} className="bg-pink-50 p-2 rounded">
              <p>
                <strong>{apt.date}</strong> at {apt.time}
              </p>
              <p>{apt.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

