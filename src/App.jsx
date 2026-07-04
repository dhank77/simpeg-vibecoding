import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TopNav from './components/TopNav'
import EmployeeTable from './components/EmployeeTable'
import SummaryCards from './components/SummaryCards'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [refreshKey, setRefreshKey] = useState(0)

  return (
    <div className="bg-background text-on-background min-h-screen overflow-x-hidden">
      <Sidebar />
      <main className="ml-[240px] min-h-screen">
        <TopNav onSuccess={() => setRefreshKey((k) => k + 1)} />
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

          <EmployeeTable key={refreshKey} searchQuery={searchQuery} />
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
