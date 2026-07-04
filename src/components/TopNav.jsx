function TopNav() {
  return (
    <header className="docked full-width top-0 sticky z-30 bg-surface border-b border-outline-variant flex items-center justify-between px-gutter py-sm transition-all duration-300 ease-in-out">
      <div className="flex items-center gap-lg flex-1">
        <div className="relative w-full max-w-md">
          <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          <input
            className="w-full bg-surface-container-low border border-outline-variant rounded-lg pl-xl pr-md py-sm font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Search employees, NIK, or roles..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-lg">
        <div className="flex items-center gap-sm">
          <button className="p-sm text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
          </button>
          <button className="p-sm text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
        </div>
        <button className="bg-primary text-on-primary px-lg py-sm rounded-lg font-title-md text-title-md hover:brightness-110 transition-all flex items-center gap-sm">
          <span className="material-symbols-outlined">person_add</span>
          <span>Add Employee</span>
        </button>
      </div>
    </header>
  )
}

export default TopNav
