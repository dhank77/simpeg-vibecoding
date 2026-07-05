import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

function SummaryCards() {
  const [stats, setStats] = useState({
    total: 0,
    permanent: 0,
    probation: 0,
    turnover: 0,
  })

  useEffect(() => {
    const fetchStats = async () => {
      const { data, error } = await supabase
        .from('employees')
        .select('status')

      if (error) {
        console.error('Error fetching stats:', error)
        return
      }

      if (data) {
        const total = data.length
        const permanent = data.filter((e) => e.status === 'Permanent').length
        const probation = data.filter((e) => e.status === 'Contract').length
        const turnover = total > 0 ? ((data.filter((e) => e.status === 'Intern').length / total) * 100).toFixed(1) : 0

        setStats({ total, permanent, probation, turnover: Number(turnover) })
      }
    }

    fetchStats()
  }, [])

  return (
    <div className="mt-2xl grid grid-cols-1 md:grid-cols-4 gap-lg">
      <div className="bg-surface-container border border-outline-variant p-lg rounded-xl flex flex-col gap-sm">
        <div className="flex items-center justify-between">
          <span className="material-symbols-outlined text-primary">groups</span>
          <span className="font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed px-xs py-[2px] rounded-sm">Live</span>
        </div>
        <p className="font-headline-md text-headline-md text-on-surface">{stats.total}</p>
        <p className="font-label-md text-label-md text-on-surface-variant">Total Employees</p>
      </div>
      <div className="bg-surface-container border border-outline-variant p-lg rounded-xl flex flex-col gap-sm">
        <div className="flex items-center justify-between">
          <span className="material-symbols-outlined text-tertiary">assignment_turned_in</span>
          {stats.total > 0 && (
            <span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed px-xs py-[2px] rounded-sm">
              {((stats.permanent / stats.total) * 100).toFixed(0)}%
            </span>
          )}
        </div>
        <p className="font-headline-md text-headline-md text-on-surface">{stats.permanent}</p>
        <p className="font-label-md text-label-md text-on-surface-variant">Permanent Staff</p>
      </div>
      <div className="bg-surface-container border border-outline-variant p-lg rounded-xl flex flex-col gap-sm">
        <div className="flex items-center justify-between">
          <span className="material-symbols-outlined text-secondary">history</span>
        </div>
        <p className="font-headline-md text-headline-md text-on-surface">{stats.probation}</p>
        <p className="font-label-md text-label-md text-on-surface-variant">On Probation</p>
      </div>
      <div className="bg-surface-container border border-outline-variant p-lg rounded-xl flex flex-col gap-sm">
        <div className="flex items-center justify-between">
          <span className="material-symbols-outlined text-error">trending_up</span>
          <span className="font-label-sm text-label-sm bg-error-container text-on-error-container px-xs py-[2px] rounded-sm">
            {stats.turnover < 5 ? 'Low' : stats.turnover < 15 ? 'Medium' : 'High'}
          </span>
        </div>
        <p className="font-headline-md text-headline-md text-on-surface">{stats.turnover}%</p>
        <p className="font-label-md text-label-md text-on-surface-variant">Intern Ratio</p>
      </div>
    </div>
  )
}

export default SummaryCards
