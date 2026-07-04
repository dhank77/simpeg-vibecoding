function SummaryCards() {
  return (
    <div className="mt-2xl grid grid-cols-1 md:grid-cols-4 gap-lg">
      <div className="bg-surface-container border border-outline-variant p-lg rounded-xl flex flex-col gap-sm">
        <div className="flex items-center justify-between">
          <span className="material-symbols-outlined text-primary">groups</span>
          <span className="font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed px-xs py-[2px] rounded-sm">+4 this month</span>
        </div>
        <p className="font-headline-md text-headline-md text-on-surface">124</p>
        <p className="font-label-md text-label-md text-on-surface-variant">Total Employees</p>
      </div>
      <div className="bg-surface-container border border-outline-variant p-lg rounded-xl flex flex-col gap-sm">
        <div className="flex items-center justify-between">
          <span className="material-symbols-outlined text-tertiary">assignment_turned_in</span>
          <span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed px-xs py-[2px] rounded-sm">82%</span>
        </div>
        <p className="font-headline-md text-headline-md text-on-surface">102</p>
        <p className="font-label-md text-label-md text-on-surface-variant">Permanent Staff</p>
      </div>
      <div className="bg-surface-container border border-outline-variant p-lg rounded-xl flex flex-col gap-sm">
        <div className="flex items-center justify-between">
          <span className="material-symbols-outlined text-secondary">history</span>
        </div>
        <p className="font-headline-md text-headline-md text-on-surface">18</p>
        <p className="font-label-md text-label-md text-on-surface-variant">On Probation</p>
      </div>
      <div className="bg-surface-container border border-outline-variant p-lg rounded-xl flex flex-col gap-sm">
        <div className="flex items-center justify-between">
          <span className="material-symbols-outlined text-error">trending_up</span>
          <span className="font-label-sm text-label-sm bg-error-container text-on-error-container px-xs py-[2px] rounded-sm">Low</span>
        </div>
        <p className="font-headline-md text-headline-md text-on-surface">3.2%</p>
        <p className="font-label-md text-label-md text-on-surface-variant">Annual Turnover</p>
      </div>
    </div>
  )
}

export default SummaryCards
