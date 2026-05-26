import ProgressBar from './ProgressBar';

// One colour per phase — intentionally distinct
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
  onExport,
  onImport,
}) {
  return (
    <aside className="sidebar">
      {/* ── App header + overall progress ── */}
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <span className="sidebar-brand-icon">⚡</span>
          <span className="sidebar-brand-name">SDE Tracker</span>
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
          const stats = phaseStats[i];
          const color = PHASE_COLORS[i];
          const isActive = phase.id === activePhaseId;

          return (
            <button
              key={phase.id}
              className={`sidebar-phase${isActive ? ' active' : ''}`}
              onClick={() => onSelectPhase(phase.id)}
              aria-current={isActive ? 'page' : undefined}
            >
              <div className="sidebar-phase-top">
                <span className="sidebar-phase-num" style={{ color }}>
                  Phase {phase.number}
                </span>
                <span className="sidebar-phase-count">
                  {stats.done}/{stats.total}
                </span>
              </div>
              <div className="sidebar-phase-title">{phase.title}</div>
              <ProgressBar pct={stats.pct} color={color} height={3} />
              <div className="sidebar-phase-pct">{stats.pct}%</div>
            </button>
          );
        })}
      </nav>

      {/* ── Footer ── */}
      <div className="sidebar-footer">
        <div className="sidebar-footer-actions">
          <button className="footer-btn export-btn" onClick={onExport} title="Export progress to JSON">
            ↓ Export
          </button>
          <button className="footer-btn import-btn" onClick={onImport} title="Import progress from JSON">
            ↑ Import
          </button>
        </div>
        <button className="reset-btn" onClick={onReset} title="Reset all progress">
          Reset all progress
        </button>
      </div>
    </aside>
  );
}
