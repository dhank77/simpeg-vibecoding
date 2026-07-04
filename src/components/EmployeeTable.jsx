import { useState } from 'react'

const employees = [
  {
    id: 1,
    name: 'Adrian Wijaya',
    email: 'adrian.w@company.com',
    nik: '2023001042',
    department: 'Engineering',
    position: 'Senior Backend dev',
    joinDate: 'Jan 12, 2023',
    status: 'Permanent',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVC72YnEOyuTP9O4Z6Nze_eBMX0aWR1UB3tvYrA7SMqtStAokeKCWuF6BjvJJdHEwHJckuW-iKWtEa6LqjHafVVIH1Ylq7Il57HWFaiGfoYj-F9VZOpatOTM7XNm25eY7etSWYj4VG7DOkgy_lwkynofnghPVCu3ha8n-4S2dgUAcyFHka40BHTo47ZQWKvx3EB4Fnl_s2_AEUha5rYBvAoXspSMCz-m7pGOHZ4rxVoeUT4NGBx_VF',
  },
  {
    id: 2,
    name: 'Biana Putri',
    email: 'biana.p@company.com',
    nik: '2023002115',
    department: 'Product Design',
    position: 'UX Researcher',
    joinDate: 'Mar 05, 2023',
    status: 'Contract',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvkHCrhNjOTxDyJhXr4sQRDcAUWiLSdxpnzb2ScMpxgk7ie4WZNwFPKgdyDsTocvlYZzhfidW5pW0Vy7S8HSlNmzrO6a2SAOspYEXEu-abdTqT5zi5dSiTEH-DAM60VQ-sgUxoIKfTX1ShQbj8YOLAYXZ-tq86HLYklY7D5UjrHe8uslNl_Q_YB-aisjvHtP5p9-xuIZBkEdsAck9D95WKUR-J8XglTR0TQ_fNykflYWuKe1fLlMTy',
  },
  {
    id: 3,
    name: 'Daniel Nugraha',
    email: 'daniel.n@company.com',
    nik: '2024005022',
    department: 'Marketing',
    position: 'Social Media Intern',
    joinDate: 'Jun 18, 2024',
    status: 'Intern',
    avatar: null,
  },
  {
    id: 4,
    name: 'Eko Prasetyo',
    email: 'eko.p@company.com',
    nik: '2021000008',
    department: 'Finance',
    position: 'Head of Finance',
    joinDate: 'Aug 22, 2021',
    status: 'Permanent',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNSxPicX8v8_k4vGmOPnpo5lmIhqZEQ66PWXHuEqNMd9vdQfHKYG5OHHyKAxWSI4z4GZfJ3UcjDKexNADIIwR5D4leTvoaWfzZKK9alcT58tb_xZEd5S74DwFE89gm-uTd3s1Tp0nesVYUsJKYaLxGVbDFEUW_VcOOqITMnTQ6xwdZBMzUVGpcV9nRPp4TxqdnRQI3XxnI3O5ZfjHE7Q1hElyYQmtIw7rURqtkgqhVQFiqF4E-ByHP',
  },
  {
    id: 5,
    name: 'Farrah Quinn',
    email: 'farrah.q@company.com',
    nik: '2023004552',
    department: 'Human Resources',
    position: 'Recruitment Lead',
    joinDate: 'Nov 15, 2023',
    status: 'Contract',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpaNT3zLekn33qXpd0g91azewsmyoTu_gMwNsHkxUjKTjgDfBCTsRXyHuFu69OAE6MNPP2159Jco-hUjGHHDnUcYu7b9uDv6vI6rqWElNhavp1igg5-zwssUhpnH0mIVk_SinIXHNvRnqP6ZiEXDD-qSqxuHUDVhiPj0EF8pv98Lv7hFoqqMUAV0MVA9tNIs9oKKWCJ7TrJNxX9DSNgDo9AtXilJT40boNbPcQWUBPIqO6r4Alpf9P',
  },
]

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
                <td className="px-lg py-md font-body-md text-body-md text-on-surface-variant">{emp.joinDate}</td>
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
                    <button className="p-xs text-secondary hover:bg-surface-variant rounded-sm transition-colors" title="Edit Employee">
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
    </div>
  )
}

export default EmployeeTable
