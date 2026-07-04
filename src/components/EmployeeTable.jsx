import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import EditEmployeeForm from './EditEmployeeForm'

const getStatusColor = (status) => {
  switch (status) {
    case 'Permanent':
      return 'bg-emerald-50 text-emerald-700'
    case 'Contract':
      return 'bg-blue-50 text-blue-700'
    case 'Intern':
      return 'bg-slate-100 text-slate-600'
    default:
      return 'bg-gray-100 text-gray-700'
  }
}

function EmployeeTable({ searchQuery }) {
  const [employees, setEmployees] = useState([])
  const [editingEmployee, setEditingEmployee] = useState(null)

  useEffect(() => {
    const fetchEmployees = async () => {
      const { data, error } = await supabase
        .from('employees')
        .select('*')
        .order('id', { ascending: true })

      if (error) {
        console.error('Error fetching employees:', error)
        return
      }

      if (data) {
        setEmployees(data)
      }
    }

    fetchEmployees()
  }, [])

  const handleEditSuccess = (updatedEmployee) => {
    setEmployees((prev) => prev.map((emp) => (emp.id === updatedEmployee.id ? updatedEmployee : emp)))
    setEditingEmployee(null)
  }

  const filtered = employees.filter((emp) => {
    const q = searchQuery.toLowerCase()
    return (
      emp.name.toLowerCase().includes(q) ||
      emp.nik.toLowerCase().includes(q) ||
      emp.position.toLowerCase().includes(q) ||
      emp.department.toLowerCase().includes(q)
    )
  })

  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-surface-container-low border-b border-outline-variant">
            <tr>
              <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Employee Name</th>
              <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">NIK</th>
              <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Department</th>
              <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Position</th>
              <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Join Date</th>
              <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Status</th>
              <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {filtered.map((emp) => (
              <tr key={emp.id} className="hover:bg-surface-container-low transition-colors group">
                <td className="px-lg py-md">
                  <div className="flex items-center gap-md">
                    {emp.avatar ? (
                      <img
                        className="w-9 h-9 rounded-full object-cover shadow-sm"
                        alt={emp.name}
                        src={emp.avatar}
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center font-title-md text-slate-600 shadow-sm">
                        {emp.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                      </div>
                    )}
                    <div>
                      <p className="font-title-md text-title-md text-on-surface">{emp.name}</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">{emp.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-lg py-md font-body-md text-body-md text-on-surface-variant">{emp.nik}</td>
                <td className="px-lg py-md font-body-md text-body-md text-on-surface">{emp.department}</td>
                <td className="px-lg py-md font-body-md text-body-md text-on-surface-variant">{emp.position}</td>
                <td className="px-lg py-md font-body-md text-body-md text-on-surface-variant">{emp.joinDate || emp.join_date}</td>
                <td className="px-lg py-md">
                  <span className={`inline-flex items-center px-sm py-xs rounded-full font-label-md text-label-md ${getStatusColor(emp.status)}`}>
                    {emp.status}
                  </span>
                </td>
                <td className="px-lg py-md text-right">
                  <div className="flex items-center justify-end gap-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-xs text-primary hover:bg-primary-fixed rounded-sm transition-colors" title="View Profile">
                      <span className="material-symbols-outlined text-[20px]">visibility</span>
                    </button>
                    <button
                      onClick={() => setEditingEmployee(emp)}
                      className="p-xs text-secondary hover:bg-surface-variant rounded-sm transition-colors"
                      title="Edit Employee"
                    >
                      <span className="material-symbols-outlined text-[20px]">edit</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-lg py-md border-t border-outline-variant bg-surface-container-lowest flex items-center justify-between">
        <p className="font-label-md text-label-md text-on-surface-variant">Showing 1 to {filtered.length} of {employees.length} employees</p>
        <div className="flex items-center gap-xs">
          <button className="p-sm text-on-surface-variant hover:bg-surface-container rounded-lg disabled:opacity-30 disabled:pointer-events-none" disabled>
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-on-primary font-label-md text-label-md">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container text-on-surface font-label-md text-label-md">2</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container text-on-surface font-label-md text-label-md">3</button>
          <span className="text-on-surface-variant px-xs">...</span>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container text-on-surface font-label-md text-label-md">25</button>
          <button className="p-sm text-on-surface-variant hover:bg-surface-container rounded-lg">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>

      {editingEmployee && (
        <EditEmployeeForm
          employee={editingEmployee}
          onClose={() => setEditingEmployee(null)}
          onSuccess={handleEditSuccess}
        />
      )}
    </div>
  )
}

export default EmployeeTable
