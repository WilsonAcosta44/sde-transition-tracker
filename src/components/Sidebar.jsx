import ProgressBar from './ProgressBar';

const PHASE_COLORS = ['#58a6ff', '#bc8cff', '#3fb950', '#e3b341', '#f78166'];

export default function Sidebar({
  phases,
  phaseStats,
  totalDone,
  totalTasks,
  totalPct,
  activePhaseId,
  onSelectPhase,
  onReset,
  user,
  onSignOut,
  isOpen,
  onClose,
}) {
  const handleSelectPhase = (id) => {
    onSelectPhase(id);
    onClose?.();
  };

  return (
    <aside className={`sidebar${isOpen ? ' open' : ''}`}>
      {/* ── App header + overall progress ── */}
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <span className="sidebar-brand-icon">⚡</span>
          <span className="sidebar-brand-name">SDE Tracker</span>
          <button className="sidebar-close-btn" onClick={onClose} aria-label="Close menu">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <div className="sidebar-overall">
          <div className="sidebar-overall-row">
            <span className="sidebar-overall-label">Overall progress</span>
            <span className="sidebar-overall-count">
              {totalDone}&thinsp;/&thinsp;{totalTasks}
            </span>
          </div>
          <ProgressBar pct={totalPct} color="var(--accent)" height={5} />
          <span className="sidebar-overall-pct">{totalPct}% complete</span>
        </div>
      </div>

      {/* ── Phase list ── */}
      <nav className="sidebar-nav" aria-label="Phases">
        {phases.map((phase, i) => {
          const stats    = phaseStats[i];
          const color    = PHASE_COLORS[i];
          const isActive = phase.id === activePhaseId;

          return (
            <button
              key={phase.id}
              className={`sidebar-phase${isActive ? ' active' : ''}`}
              onClick={() => handleSelectPhase(phase.id)}
              aria-current={isActive ? 'page' : undefined}
            >
              <div className="sidebar-phase-top">
                <span className="sidebar-phase-num" style={{ color }}>
                  Phase {phase.number}
                </span>
                <span className="sidebar-phase-count">{stats.done}/{stats.total}</span>
              </div>
              <div className="sidebar-phase-title">{phase.title}</div>
              <ProgressBar pct={stats.pct} color={color} height={3} />
              <div className="sidebar-phase-pct">{stats.pct}%</div>
            </button>
          );
        })}
      </nav>

      {/* ── Footer actions ── */}
      <div className="sidebar-footer">
        <button className="reset-btn" onClick={onReset} title="Reset all progress">
          Reset all progress
        </button>
      </div>

      {/* ── Signed-in user ── */}
      {user && (
        <div className="sidebar-user">
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt=""
              className="sidebar-avatar"
              referrerPolicy="no-referrer"
            />
          )}
          <span className="sidebar-user-name" title={user.email}>
            {user.displayName || user.email}
          </span>
          <button className="sidebar-signout-btn" onClick={onSignOut}>
            Sign out
          </button>
        </div>
      )}
    </aside>
  );
}
