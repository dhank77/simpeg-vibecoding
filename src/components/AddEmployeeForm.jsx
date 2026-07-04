import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

function AddEmployeeForm({ onClose, onSubmit }) {
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

  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data, error } = await supabase
      .from('employees')
      .insert([
        {
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
        },
      ])
      .select()

    if (error) {
      console.error('Error inserting employee:', error)
      alert('Failed to add employee: ' + error.message)
      return
    }

    if (data && data[0]) {
      onSubmit(data[0])
    }
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-xl w-full max-w-lg mx-4 overflow-hidden">
        <div className="px-lg py-md border-b border-outline-variant flex items-center justify-between">
          <h3 className="font-title-lg text-title-lg text-on-surface">Add New Employee</h3>
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
                placeholder="John Doe"
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
                placeholder="john.doe@company.com"
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
                placeholder="2024000001"
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
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Marketing</option>
                <option>Finance</option>
                <option>Product Design</option>
              </select>
            </div>
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface-variant ml-1">Position</label>
              <select
                value={form.position}
                onChange={(e) => update('position', e.target.value)}
                className="bg-white border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md focus:ring-primary focus:border-primary outline-none"
              >
                <option>Lead Engineer</option>
                <option>Senior Designer</option>
                <option>HR Generalist</option>
                <option>Junior Analyst</option>
                <option>Social Media Intern</option>
                <option>UX Researcher</option>
                <option>Senior Backend dev</option>
                <option>Head of Finance</option>
                <option>Recruitment Lead</option>
              </select>
            </div>
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface-variant ml-1">Status</label>
              <select
                value={form.status}
                onChange={(e) => update('status', e.target.value)}
                className="bg-white border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md focus:ring-primary focus:border-primary outline-none"
              >
                <option>Permanent</option>
                <option>Contract</option>
                <option>Intern</option>
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
            <button type="submit" className="bg-primary text-on-primary px-lg py-sm rounded-lg font-title-md text-title-md hover:brightness-110 transition-all">
              Save Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddEmployeeForm
