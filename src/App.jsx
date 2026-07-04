import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TopNav from './components/TopNav'
import EmployeeTable from './components/EmployeeTable'
import SummaryCards from './components/SummaryCards'

const initialEmployees = [
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

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [employees, setEmployees] = useState(initialEmployees)

  const handleAddEmployee = (newEmployee) => {
    setEmployees((prev) => [...prev, newEmployee])
  }

  return (
    <div className="bg-background text-on-background min-h-screen overflow-x-hidden">
      <Sidebar />
      <main className="ml-[240px] min-h-screen">
        <TopNav employees={employees} onSubmit={handleAddEmployee} />
        <div className="p-gutter">
          <div className="mb-xl flex flex-col md:flex-row md:items-end justify-between gap-md">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Employee Directory</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Manage and view all personnel information in one centralized view.</p>
            </div>
            <div className="flex items-center gap-sm">
              <div className="flex items-center gap-xs bg-surface-container-lowest border border-outline-variant p-1 rounded-lg">
                <button className="px-md py-xs bg-secondary-container text-on-secondary-container rounded-sm font-label-md text-label-md transition-all">List View</button>
                <button className="px-md py-xs text-on-surface-variant hover:bg-surface-container rounded-sm font-label-md text-label-md transition-all">Grid View</button>
              </div>
              <button className="flex items-center gap-xs px-md py-sm border border-outline-variant rounded-lg font-title-md text-title-md hover:bg-surface-container-low transition-colors">
                <span className="material-symbols-outlined text-[20px]">download</span>
                <span>Export CSV</span>
              </button>
            </div>
          </div>

          <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md mb-lg flex flex-wrap items-center gap-md">
            <div className="flex flex-col gap-xs flex-1 min-w-[200px]">
              <label className="font-label-md text-label-md text-on-surface-variant ml-1">Department</label>
              <select className="w-full bg-white border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md focus:ring-primary focus:border-primary">
                <option>All Departments</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Marketing</option>
                <option>Finance</option>
                <option>Product Design</option>
              </select>
            </div>
            <div className="flex flex-col gap-xs flex-1 min-w-[200px]">
              <label className="font-label-md text-label-md text-on-surface-variant ml-1">Employment Status</label>
              <select className="w-full bg-white border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md focus:ring-primary focus:border-primary">
                <option>All Statuses</option>
                <option>Permanent</option>
                <option>Contract</option>
                <option>Intern</option>
              </select>
            </div>
            <div className="flex flex-col gap-xs flex-1 min-w-[200px]">
              <label className="font-label-md text-label-md text-on-surface-variant ml-1">Job Position</label>
              <select className="w-full bg-white border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md focus:ring-primary focus:border-primary">
                <option>All Positions</option>
                <option>Lead Engineer</option>
                <option>Senior Designer</option>
                <option>HR Generalist</option>
                <option>Junior Analyst</option>
              </select>
            </div>
            <div className="flex items-end h-full">
              <button className="bg-surface-container-high text-on-surface px-lg py-sm rounded-lg font-title-md text-title-md hover:bg-surface-variant transition-colors flex items-center gap-xs">
                <span className="material-symbols-outlined text-[20px]">filter_list</span>
                <span>Reset Filters</span>
              </button>
            </div>
          </section>

          <div className="relative w-full max-w-md mb-lg">
            <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input
              className="w-full bg-surface-container-low border border-outline-variant rounded-lg pl-xl pr-md py-sm font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Search employees, NIK, or roles..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <EmployeeTable searchQuery={searchQuery} employees={employees} />
          <SummaryCards />
        </div>
      </main>

      <div className="md:hidden fixed bottom-6 right-6">
        <button className="bg-primary text-on-primary w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform active:scale-90">
          <span className="material-symbols-outlined">add</span>
        </button>
      </div>
    </div>
  )
}

export default App
