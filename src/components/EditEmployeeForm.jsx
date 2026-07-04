import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

const departments = ['Engineering', 'Human Resources', 'Marketing', 'Finance', 'Product Design']
const statuses = ['Permanent', 'Contract', 'Intern']
const positions = ['Lead Engineer', 'Senior Designer', 'HR Generalist', 'Junior Analyst', 'Social Media Intern', 'UX Researcher', 'Senior Backend dev', 'Head of Finance', 'Recruitment Lead']

function EditEmployeeForm({ employee, onClose, onSuccess }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    nik: '',
    department: 'Engineering',
    position: 'Senior Backend dev',
    joinDate: '',
    status: 'Permanent',
    avatar: null,
  })
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (!employee) return
    const joinDateRaw = employee.joinDate || employee.join_date || ''
    let joinDateValue = ''
    if (joinDateRaw) {
      const d = new Date(joinDateRaw)
      if (!Number.isNaN(d.getTime())) {
        const yyyy = d.getFullYear()
        const mm = String(d.getMonth() + 1).padStart(2, '0')
        const dd = String(d.getDate()).padStart(2, '0')
        joinDateValue = `${yyyy}-${mm}-${dd}`
      }
    }
    setForm({
      name: employee.name || '',
      email: employee.email || '',
      nik: employee.nik || '',
      department: employee.department || 'Engineering',
      position: employee.position || 'Senior Backend dev',
      joinDate: joinDateValue,
      status: employee.status || 'Permanent',
      avatar: employee.avatar || null,
    })
  }, [employee])

  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    const { data, error } = await supabase
      .from('employees')
      .update({
        name: form.name,
        email: form.email,
        nik: form.nik,
        department: form.department,
        position: form.position,
        join_date: form.joinDate
          ? new Date(form.joinDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
          : '',
        status: form.status,
        avatar: form.avatar,
      })
      .eq('id', employee.id)
      .select()

    if (error) {
      console.error('Error updating employee:', error)
      alert('Failed to update employee: ' + error.message)
      setSaving(false)
      return
    }

    if (data && data[0]) {
      onSuccess(data[0])
    }
    setSaving(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-xl w-full max-w-lg mx-4 overflow-hidden">
        <div className="px-lg py-md border-b border-outline-variant flex items-center justify-between">
          <h3 className="font-title-lg text-title-lg text-on-surface">Edit Employee</h3>
          <button onClick={onClose} className="p-xs text-on-surface-variant hover:bg-surface-container rounded-full transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-lg space-y-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface-variant ml-1">Full Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                className="bg-white border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface-variant ml-1">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                className="bg-white border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface-variant ml-1">NIK</label>
              <input
                type="text"
                required
                value={form.nik}
                onChange={(e) => update('nik', e.target.value)}
                className="bg-white border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface-variant ml-1">Join Date</label>
              <input
                type="date"
                required
                value={form.joinDate}
                onChange={(e) => update('joinDate', e.target.value)}
                className="bg-white border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface-variant ml-1">Department</label>
              <select
                value={form.department}
                onChange={(e) => update('department', e.target.value)}
                className="bg-white border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md focus:ring-primary focus:border-primary outline-none"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface-variant ml-1">Position</label>
              <select
                value={form.position}
                onChange={(e) => update('position', e.target.value)}
                className="bg-white border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md focus:ring-primary focus:border-primary outline-none"
              >
                {positions.map((pos) => (
                  <option key={pos} value={pos}>{pos}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface-variant ml-1">Status</label>
              <select
                value={form.status}
                onChange={(e) => update('status', e.target.value)}
                className="bg-white border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md focus:ring-primary focus:border-primary outline-none"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface-variant ml-1">Avatar URL</label>
              <input
                type="url"
                value={form.avatar || ''}
                onChange={(e) => update('avatar', e.target.value || null)}
                className="bg-white border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="https://..."
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-sm pt-md border-t border-outline-variant">
            <button type="button" onClick={onClose} className="px-lg py-sm rounded-lg font-title-md text-title-md text-on-surface hover:bg-surface-container transition-colors">
              Cancel
            </button>
            <button type="submit" disabled={saving} className="bg-primary text-on-primary px-lg py-sm rounded-lg font-title-md text-title-md hover:brightness-110 transition-all">
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditEmployeeForm
