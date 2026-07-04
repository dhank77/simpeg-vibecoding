function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-[240px] bg-surface-container-lowest border-r border-outline-variant flex flex-col h-full p-md z-40">
      <div className="mb-xl px-sm">
        <h1 className="font-display text-display text-primary">HR Portal</h1>
        <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest opacity-70 mt-xs">Admin Console</p>
      </div>
      <nav className="flex-1 space-y-xs overflow-y-auto">
        <a className="flex items-center gap-md p-md text-secondary hover:bg-surface-container-low hover:transition-colors duration-200 scale-95 active:scale-90 transition-transform font-body-md text-body-md rounded-lg" href="#">
          <span className="material-symbols-outlined">dashboard</span>
          <span>Dashboard</span>
        </a>
        <a className="flex items-center gap-md p-md bg-secondary-container text-on-secondary-container font-bold rounded-lg hover:transition-colors duration-200 scale-95 active:scale-90 transition-transform font-body-md text-body-md" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>group</span>
          <span>Directory</span>
        </a>
        <a className="flex items-center gap-md p-md text-secondary hover:bg-surface-container-low hover:transition-colors duration-200 scale-95 active:scale-90 transition-transform font-body-md text-body-md rounded-lg" href="#">
          <span className="material-symbols-outlined">calendar_today</span>
          <span>Attendance</span>
        </a>
        <a className="flex items-center gap-md p-md text-secondary hover:bg-surface-container-low hover:transition-colors duration-200 scale-95 active:scale-90 transition-transform font-body-md text-body-md rounded-lg" href="#">
          <span className="material-symbols-outlined">pending_actions</span>
          <span>Leave</span>
        </a>
        <a className="flex items-center gap-md p-md text-secondary hover:bg-surface-container-low hover:transition-colors duration-200 scale-95 active:scale-90 transition-transform font-body-md text-body-md rounded-lg" href="#">
          <span className="material-symbols-outlined">payments</span>
          <span>Payroll</span>
        </a>
        <a className="flex items-center gap-md p-md text-secondary hover:bg-surface-container-low hover:transition-colors duration-200 scale-95 active:scale-90 transition-transform font-body-md text-body-md rounded-lg" href="#">
          <span className="material-symbols-outlined">settings</span>
          <span>Settings</span>
        </a>
      </nav>
      <div className="mt-auto pt-md border-t border-outline-variant">
        <button className="w-full flex items-center justify-center gap-sm bg-primary text-on-primary py-sm rounded-lg font-title-md text-title-md hover:brightness-110 transition-all active:scale-95">
          <span className="material-symbols-outlined">add</span>
          <span>New Request</span>
        </button>
        <div className="mt-md flex items-center gap-sm px-sm">
          <img
            className="w-10 h-10 rounded-full border border-outline-variant"
            alt="Sarah Chen"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGAlufYXPoH4piEsJH9f-g8-AnkuhyuLTVjBmWLO0fGHSFrBavF_Zz2WUBHE3r-L1VB5DblukmK1zIFXZ5pv5LD6nZ3r5zYdIvulnm2HfE7B0mRNn2SEGEz-UECsi4f2PgXCaKlCgbEmVpBI8mwIM40TtEMSrA2h9qBZZ9Sxu0V2k8jqnSvX2QiceozNZkt12hNEdchM6qugGUFfWSQfXB_kpvNrwXu94ZuZENmqBUvw9HLldyUgDy"
          />
          <div>
            <p className="font-title-md text-title-md leading-tight">Sarah Chen</p>
            <p className="font-label-sm text-label-sm text-on-surface-variant">HR Manager</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
