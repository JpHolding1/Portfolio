// KRONOS Disruption Dashboard — premium airline aesthetic
// Deep navy, crisp white, signal red.

const K = {
  navy:     '#0A1F44',
  navyDeep: '#061532',
  navyInk:  '#0E2756',
  navyLine: '#1E3564',
  navyChip: '#12295A',
  red:      '#E01933',
  redDeep:  '#B3132A',
  redSoft:  '#FFE5E9',
  white:    '#FFFFFF',
  ink70:    '#C9D3E8',
  ink50:    '#8A9ABF',
  ink35:    '#5B6C92',
  amber:    '#F5B744',
  amberSoft:'#FFF4DC',
  green:    '#2FB67C',
  greenSoft:'#DDF5E9',
  cloud:    '#F4F6FB',
  line:     '#E4E8F1',
  bg:       '#F6F7FB',
};

const font = `-apple-system, 'SF Pro Display', 'SF Pro Text', system-ui, sans-serif`;

const Ic = {
  back: (c = K.navy) => (
    <svg width="11" height="18" viewBox="0 0 11 18" fill="none">
      <path d="M9.5 1.5L2 9l7.5 7.5" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  bell: (c = K.navy) => (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
      <path d="M9 2c-3 0-5 2.3-5 5v3.2c0 .9-.3 1.7-.9 2.4L2 14h14l-1.1-1.4c-.6-.7-.9-1.5-.9-2.4V7c0-2.7-2-5-5-5z"
            stroke={c} strokeWidth="1.7" strokeLinejoin="round"/>
      <path d="M7 17a2 2 0 004 0" stroke={c} strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  ),
  alert: (c = '#fff') => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M11 3l9 16H2L11 3z" fill={c}/>
      <rect x="10.2" y="9" width="1.6" height="5.2" rx=".8" fill={K.red}/>
      <circle cx="11" cy="16.3" r=".95" fill={K.red}/>
    </svg>
  ),
  plane: (c = K.red) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M13 7L8.5 8l-2 4H5l.8-3.3L2 7.8 1 8.7 0 8l2-2.2L8 4l3-3 1.3.2.2 1.2L10 6l3 1z" fill={c}/>
    </svg>
  ),
  chevron: (c = K.ink35) => (
    <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
      <path d="M1 1l5 5-5 5" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  sparkle: (c = K.red) => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 1l1.8 5.4L16 8l-5.2 1.6L9 15l-1.8-5.4L2 8l5.2-1.6L9 1z" fill={c}/>
    </svg>
  ),
  radar: (c = K.navy) => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7" stroke={c} strokeWidth="1.4" opacity=".35"/>
      <circle cx="9" cy="9" r="3.5" stroke={c} strokeWidth="1.4"/>
      <circle cx="9" cy="9" r="1.2" fill={c}/>
    </svg>
  ),
  wallet: (c = K.navy) => (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
      <rect x="1.5" y="3.5" width="17" height="13" rx="2.5" stroke={c} strokeWidth="1.5"/>
      <path d="M1.5 7h17" stroke={c} strokeWidth="1.5"/>
      <circle cx="14.5" cy="11.5" r="1.2" fill={c}/>
    </svg>
  ),
  headset: (c = K.navy) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 12V10a7 7 0 0114 0v2" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
      <rect x="2" y="12" width="4" height="6" rx="1.5" stroke={c} strokeWidth="1.6"/>
      <rect x="14" y="12" width="4" height="6" rx="1.5" stroke={c} strokeWidth="1.6"/>
      <path d="M17 17.5c0 1.4-1.3 2.5-3 2.5h-2" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  check: (c = K.green) => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M1.5 5l2.5 2.5L8.5 2.5" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  down: (c = K.green) => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M5 1v7m0 0L2 5m3 3l3-3" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  dot: (c) => (
    <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: 99, background: c }} />
  ),
  tabHome: (c, filled) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="16" rx="3" stroke={c} strokeWidth="1.7" fill={filled ? c : 'none'} opacity={filled ? .12 : 1}/>
      <rect x="3" y="4" width="18" height="16" rx="3" stroke={c} strokeWidth="1.7" fill="none"/>
      <rect x="6" y="12" width="3" height="5" rx="1" fill={c}/>
      <rect x="10.5" y="9" width="3" height="8" rx="1" fill={c}/>
      <rect x="15" y="7" width="3" height="10" rx="1" fill={c}/>
    </svg>
  ),
  tabOptions: (c) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 7h12M4 12h16M4 17h9" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="18" cy="7" r="2.2" stroke={c} strokeWidth="1.8" fill="#fff"/>
      <circle cx="14" cy="17" r="2.2" stroke={c} strokeWidth="1.8" fill="#fff"/>
    </svg>
  ),
  tabStatus: (c) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.8"/>
      <path d="M12 6v6l4 2" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  tabSupport: (c) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 13V11a8 8 0 0116 0v2" stroke={c} strokeWidth="1.7" strokeLinecap="round"/>
      <rect x="3" y="13" width="4.5" height="7" rx="1.7" stroke={c} strokeWidth="1.7"/>
      <rect x="16.5" y="13" width="4.5" height="7" rx="1.7" stroke={c} strokeWidth="1.7"/>
    </svg>
  ),
};

function Eyebrow({ children, color = K.ink35, style }) {
  return (
    <div style={{
      fontFamily: font, fontSize: 11, fontWeight: 700,
      letterSpacing: 1.8, textTransform: 'uppercase',
      color, ...style,
    }}>{children}</div>
  );
}

function Card({ children, pad = 18, style = {} }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 18, padding: pad,
      boxShadow: '0 1px 0 rgba(10,31,68,0.04), 0 6px 20px rgba(10,31,68,0.06), 0 24px 48px -20px rgba(10,31,68,0.10)',
      border: '1px solid rgba(10,31,68,0.05)',
      ...style,
    }}>{children}</div>
  );
}

function StatusBar({ time = '9:41', dark = false }) {
  const c = dark ? '#fff' : '#000';
  return (
    <div style={{
      height: 54, display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', padding: '0 28px',
      fontFamily: font, color: c,
    }}>
      <div style={{ fontWeight: 600, fontSize: 15, paddingTop: 4 }}>{time}</div>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center', paddingTop: 4 }}>
        <svg width="17" height="11" viewBox="0 0 17 11"><rect x="0" y="7" width="3" height="4" rx=".5" fill={c}/><rect x="4.5" y="5" width="3" height="6" rx=".5" fill={c}/><rect x="9" y="2.5" width="3" height="8.5" rx=".5" fill={c}/><rect x="13.5" y="0" width="3" height="11" rx=".5" fill={c}/></svg>
        <svg width="15" height="11" viewBox="0 0 15 11"><path d="M7.5 2.5c2 0 3.9.8 5.3 2.2l1-1A9 9 0 007.5 1 9 9 0 001.2 3.7l1 1A7.5 7.5 0 017.5 2.5zm0 3.2c1.2 0 2.3.5 3.1 1.3l1-1A6 6 0 007.5 4.3 6 6 0 003.4 6l1 1a4.5 4.5 0 013.1-1.3zm0 3.2c.6 0 1.1.2 1.5.6l1-1a4 4 0 00-5.1 0l1 1c.4-.4.9-.6 1.6-.6z" fill={c}/></svg>
        <svg width="25" height="12" viewBox="0 0 25 12"><rect x=".5" y=".5" width="21" height="11" rx="2.5" stroke={c} opacity=".45" fill="none"/><rect x="2" y="2" width="18" height="8" rx="1.5" fill={c}/><rect x="22" y="4" width="1.5" height="4" rx=".5" fill={c} opacity=".45"/></svg>
      </div>
    </div>
  );
}

function AppBar() {
  return (
    <div style={{ position: 'relative', background: K.navy, color: '#fff', paddingBottom: 18 }}>
      <StatusBar dark />
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '6px 20px 0', position: 'relative',
      }}>
        <button aria-label="back" style={{
          width: 36, height: 36, borderRadius: 18, border: 'none',
          background: 'rgba(255,255,255,0.10)', display: 'grid', placeItems: 'center',
        }}>{Ic.back('#fff')}</button>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: font, fontWeight: 700, fontSize: 15, letterSpacing: 5, color: '#fff' }}>KRONOS</div>
          <div style={{ fontFamily: font, fontWeight: 600, fontSize: 8.5, letterSpacing: 2.6, color: '#8FA9D9', marginTop: 2 }}>RECOVERY SYSTEM</div>
        </div>
        <button aria-label="alerts" style={{
          width: 36, height: 36, borderRadius: 18, border: 'none', position: 'relative',
          background: 'rgba(255,255,255,0.10)', display: 'grid', placeItems: 'center',
        }}>
          {Ic.bell('#fff')}
          <span style={{
            position: 'absolute', top: 7, right: 7, width: 8, height: 8,
            borderRadius: 99, background: K.red, border: '1.5px solid ' + K.navy,
          }} />
        </button>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div style={{ background: K.navy, padding: '20px 20px 28px', color: '#fff' }}>
      <h1 style={{ margin: 0, fontFamily: font, fontSize: 28, fontWeight: 700, letterSpacing: -0.6, lineHeight: 1.15 }}>
        Disruption Dashboard
      </h1>
      <p style={{ margin: '8px 0 0', fontFamily: font, fontSize: 14, color: '#9CB0D6', lineHeight: 1.4, maxWidth: 300 }}>
        We've identified a disruption affecting your trip.
      </p>
    </div>
  );
}

function AlertBanner() {
  return (
    <div style={{
      margin: '-14px 16px 0', position: 'relative', borderRadius: 18, overflow: 'hidden',
      background: `linear-gradient(135deg, ${K.red} 0%, ${K.redDeep} 100%)`,
      boxShadow: '0 10px 28px -6px rgba(224,25,51,0.45), 0 2px 0 rgba(255,255,255,0.6) inset',
      color: '#fff',
    }}>
      <svg style={{ position: 'absolute', right: -40, top: -40, opacity: .14 }} width="160" height="160" viewBox="0 0 160 160">
        <circle cx="80" cy="80" r="70" stroke="#fff" strokeWidth="1" fill="none"/>
        <circle cx="80" cy="80" r="48" stroke="#fff" strokeWidth="1" fill="none"/>
        <circle cx="80" cy="80" r="26" stroke="#fff" strokeWidth="1" fill="none"/>
      </svg>
      <div style={{ display: 'flex', gap: 14, padding: '16px 18px' }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: 'rgba(255,255,255,0.18)', display: 'grid', placeItems: 'center', flexShrink: 0,
        }}>
          {Ic.alert('#fff')}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: font, fontSize: 11, fontWeight: 800, letterSpacing: 2 }}>
            FLIGHT CANCELLED
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              background: 'rgba(255,255,255,0.15)', padding: '2px 7px', borderRadius: 99, fontSize: 9.5, letterSpacing: 1,
            }}>
              <span style={{
                width: 5, height: 5, borderRadius: 99, background: '#fff',
                animation: 'kronos-pulse 1.6s infinite',
              }}/>
              LIVE
            </span>
          </div>
          <div style={{ marginTop: 6, fontFamily: font, fontSize: 16, fontWeight: 600, letterSpacing: -0.2 }}>
            DL 2187 &middot; LAX &rarr; ATL
          </div>
          <div style={{ marginTop: 6, fontFamily: font, fontSize: 12, color: 'rgba(255,255,255,0.82)' }}>
            Updated 8:42 PM &middot; Action recommended now
          </div>
        </div>
      </div>
    </div>
  );
}

function ImpactedTripCard() {
  return (
    <div style={{ margin: '18px 16px 0' }}>
      <Card pad={0} style={{ overflow: 'hidden' }}>
        <div style={{ padding: '16px 18px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <Eyebrow color={K.red}>Impacted Trip</Eyebrow>
            <div style={{ marginTop: 6, fontFamily: font, fontSize: 12.5, color: K.ink35 }}>
              Tue, Apr 21 &middot; Delta Air Lines
            </div>
          </div>
          <div style={{
            background: K.navy, color: '#fff',
            fontFamily: font, fontSize: 11, fontWeight: 800, letterSpacing: 1,
            padding: '5px 10px', borderRadius: 8,
          }}>DL 2187</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 22px 6px' }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontFamily: font, fontSize: 34, fontWeight: 700, color: K.navy, letterSpacing: -1, lineHeight: 1 }}>LAX</div>
            <div style={{ marginTop: 8, fontFamily: font, fontSize: 12, color: K.ink35 }}>6:35 PM</div>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, paddingBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: 22, height: 1, background: K.line }}/>
              <div style={{ width: 26, height: 26, borderRadius: 99, background: K.redSoft, display: 'grid', placeItems: 'center', border: '1px solid #FFC9D0' }}>
                {Ic.plane(K.red)}
              </div>
              <div style={{ width: 22, height: 1, background: K.line }}/>
            </div>
            <div style={{ fontFamily: font, fontSize: 9, fontWeight: 700, letterSpacing: 1.4, color: K.red, textTransform: 'uppercase' }}>
              Non-stop &middot; 4h 13m
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: font, fontSize: 34, fontWeight: 700, color: K.navy, letterSpacing: -1, lineHeight: 1 }}>ATL</div>
            <div style={{ marginTop: 8, fontFamily: font, fontSize: 12, color: K.ink35 }}>
              1:48 AM<span style={{ color: K.red, fontSize: 10, fontWeight: 700 }}>+1</span>
            </div>
          </div>
        </div>
        <div style={{ position: 'relative', height: 22, margin: '2px 0' }}>
          <div style={{ position: 'absolute', left: -12, top: 4, width: 24, height: 24, borderRadius: 99, background: K.bg }}/>
          <div style={{ position: 'absolute', right: -12, top: 4, width: 24, height: 24, borderRadius: 99, background: K.bg }}/>
          <div style={{ position: 'absolute', left: 20, right: 20, top: 15, height: 1.5, borderTop: '1.5px dashed ' + K.line }}/>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 18px 18px', gap: 12 }}>
          <div>
            <div style={{ fontFamily: font, fontSize: 10, letterSpacing: 1.2, color: K.ink35, fontWeight: 700, textTransform: 'uppercase' }}>Confirmation</div>
            <div style={{ marginTop: 3, fontFamily: font, fontSize: 13.5, fontWeight: 700, color: K.navy, letterSpacing: 1 }}>Q7M2LK</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: font, fontSize: 10, letterSpacing: 1.2, color: K.ink35, fontWeight: 700, textTransform: 'uppercase' }}>Cabin / Pax</div>
            <div style={{ marginTop: 3, fontFamily: font, fontSize: 13, fontWeight: 600, color: K.navy }}>Main &middot; 1 Adult</div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function ImpactChips() {
  const chips = [
    { label: 'Cancellation Confirmed', color: K.red,   soft: K.redSoft,   text: K.redDeep, icon: '✕' },
    { label: 'Overnight Impact Likely', color: K.amber, soft: K.amberSoft, text: '#8A5A00', icon: '⚠' },
    { label: 'Hotel Voucher Likely',    color: K.navy,  soft: '#E8EEFB',   text: K.navy,    icon: '🏨' },
    { label: 'Rebooking Window Open',   color: K.green, soft: K.greenSoft, text: '#0E6B48', icon: '↻' },
  ];
  return (
    <div style={{ margin: '22px 16px 0' }}>
      <Eyebrow>Trip Impact</Eyebrow>
      <div style={{ marginTop: 10, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {chips.map((c, i) => (
          <div key={i} style={{
            background: '#fff', borderRadius: 12, padding: '10px 12px',
            display: 'flex', alignItems: 'center', gap: 10,
            border: '1px solid ' + K.line,
            boxShadow: '0 1px 2px rgba(10,31,68,0.04)',
          }}>
            <div style={{
              width: 22, height: 22, borderRadius: 7, background: c.soft,
              display: 'grid', placeItems: 'center',
              color: c.color, fontSize: 12, fontWeight: 800, fontFamily: font,
            }}>{c.icon}</div>
            <div style={{ fontFamily: font, fontSize: 12, fontWeight: 600, color: c.text, lineHeight: 1.2 }}>{c.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RecommendedStep() {
  return (
    <div style={{ margin: '22px 16px 0' }}>
      <Card pad={0} style={{
        background: `linear-gradient(180deg, ${K.navy} 0%, #081A3A 100%)`,
        borderRadius: 20, color: '#fff', overflow: 'hidden', position: 'relative',
        border: '1px solid rgba(255,255,255,0.06)',
      }}>
        <svg style={{ position: 'absolute', right: -30, bottom: -40, opacity: .14 }} width="220" height="220" viewBox="0 0 220 220">
          <circle cx="110" cy="110" r="100" stroke="#6B8CC9" strokeWidth=".8" fill="none"/>
          <circle cx="110" cy="110" r="70" stroke="#6B8CC9" strokeWidth=".8" fill="none"/>
          <circle cx="110" cy="110" r="40" stroke="#6B8CC9" strokeWidth=".8" fill="none"/>
        </svg>
        <div style={{ padding: '18px 20px 18px', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {Ic.sparkle(K.red)}
            <Eyebrow color="#FF6A7C" style={{ letterSpacing: 2 }}>Recommended Next Step</Eyebrow>
          </div>
          <div style={{ marginTop: 10, fontFamily: font, fontSize: 15, fontWeight: 500, color: '#E1E9F8', lineHeight: 1.45, maxWidth: 290 }}>
            Based on your itinerary and current inventory, the fastest path is to review recovery options now.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 16 }}>
            <button style={{
              background: K.red, color: '#fff', border: 'none',
              fontFamily: font, fontSize: 14.5, fontWeight: 700, letterSpacing: -0.1,
              padding: '13px 18px', borderRadius: 14, flex: 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              boxShadow: '0 8px 24px -6px rgba(224,25,51,0.55), inset 0 1px 0 rgba(255,255,255,0.25)',
            }}>
              Review Recovery Options &rarr;
            </button>
          </div>
          <div style={{ marginTop: 10, fontFamily: font, fontSize: 11.5, color: '#8FA3CB' }}>
            Compare paths &middot; Hold a seat while you decide
          </div>
        </div>
      </Card>
    </div>
  );
}

function RecoveryActions() {
  const tiles = [
    { title: 'Ranked Options',  sub: 'Best rebooking paths',    icon: Ic.sparkle(K.red),  tint: K.redSoft, new: true },
    { title: 'Recovery Status', sub: 'Track submitted actions',  icon: Ic.radar(K.navy),   tint: '#E8EEFB' },
    { title: 'Vouchers',        sub: 'Hotel & meal support',     icon: Ic.wallet(K.navy),  tint: '#E8EEFB' },
    { title: 'Need Help?',      sub: 'Escalate to an agent',     icon: Ic.headset(K.navy), tint: '#E8EEFB' },
  ];
  return (
    <div style={{ margin: '22px 16px 0' }}>
      <Eyebrow>Recovery Actions</Eyebrow>
      <div style={{ marginTop: 10, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {tiles.map((t, i) => (
          <div key={i} style={{
            background: '#fff', borderRadius: 16, padding: 16,
            border: '1px solid ' + K.line, position: 'relative',
            boxShadow: '0 2px 4px rgba(10,31,68,0.03), 0 10px 24px -12px rgba(10,31,68,0.12)',
            minHeight: 96,
          }}>
            {t.new && (
              <div style={{
                position: 'absolute', top: 12, right: 12,
                background: K.red, color: '#fff',
                fontFamily: font, fontSize: 8.5, fontWeight: 800, letterSpacing: 1,
                padding: '3px 6px', borderRadius: 99,
              }}>NEW</div>
            )}
            <div style={{ width: 34, height: 34, borderRadius: 10, background: t.tint, display: 'grid', placeItems: 'center' }}>{t.icon}</div>
            <div style={{ marginTop: 14, fontFamily: font, fontSize: 14.5, fontWeight: 700, color: K.navy, letterSpacing: -0.2 }}>{t.title}</div>
            <div style={{ marginTop: 2, fontFamily: font, fontSize: 11.5, color: K.ink35, lineHeight: 1.3 }}>{t.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Snapshot() {
  const rows = [
    { k: 'Case ID',        v: 'KR-2026-0418-9821', mono: true },
    { k: 'Status',         v: 'Awaiting your action', amber: true },
    { k: 'Refund status',  v: 'Not started' },
    { k: 'eCredit option', badge: { label: 'AVAILABLE', bg: K.greenSoft, fg: '#0E6B48' } },
    { k: 'Voucher status', v: 'Check eligibility', link: true },
  ];
  return (
    <div style={{ margin: '22px 16px 0' }}>
      <Card pad={0}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 18px 8px' }}>
          <Eyebrow>Recovery Snapshot</Eyebrow>
          <div style={{ fontFamily: font, fontSize: 10, color: K.ink35, display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: 99, background: K.green }}/>
            Live
          </div>
        </div>
        <div style={{ padding: '0 18px 10px' }}>
          {rows.map((r, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '12px 0',
              borderTop: i === 0 ? 'none' : '1px solid ' + K.line,
            }}>
              <div style={{ fontFamily: font, fontSize: 13, color: K.ink35 }}>{r.k}</div>
              {r.badge ? (
                <div style={{
                  background: r.badge.bg, color: r.badge.fg,
                  fontFamily: font, fontSize: 10, fontWeight: 800, letterSpacing: 1,
                  padding: '4px 8px', borderRadius: 6,
                }}>{r.badge.label}</div>
              ) : (
                <div style={{
                  fontFamily: font, fontSize: 13.5, fontWeight: r.mono ? 700 : 600,
                  color: r.amber ? K.amber : r.link ? K.red : K.navy,
                  letterSpacing: r.mono ? 0.5 : 0,
                  display: 'flex', alignItems: 'center', gap: 4,
                }}>
                  {r.v}
                  {r.link && Ic.chevron(K.red)}
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function TopPreview() {
  return (
    <div style={{ margin: '22px 16px 0' }}>
      <div style={{
        position: 'relative', borderRadius: 20, overflow: 'hidden',
        background: `linear-gradient(135deg, #0F6B4A 0%, #0A5136 100%)`,
        boxShadow: '0 14px 32px -10px rgba(15,107,74,0.45)',
        color: '#fff',
      }}>
        <svg style={{ position: 'absolute', inset: 0, opacity: .08 }} width="100%" height="100%" preserveAspectRatio="none">
          <defs>
            <pattern id="kg" width="18" height="18" patternUnits="userSpaceOnUse">
              <path d="M18 0H0v18" stroke="#fff" strokeWidth=".5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#kg)"/>
        </svg>
        <div style={{ padding: '16px 20px 18px', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              background: 'rgba(255,255,255,0.15)', borderRadius: 99,
              padding: '3px 8px', fontFamily: font, fontSize: 9.5, fontWeight: 800, letterSpacing: 1.6,
            }}>
              <span style={{ width: 5, height: 5, borderRadius: 99, background: '#7BE3B2' }}/>
              TOP RECOVERY PREVIEW
            </span>
          </div>
          <div style={{ marginTop: 10, fontFamily: font, fontSize: 20, fontWeight: 700, letterSpacing: -0.4 }}>
            Arrive tomorrow by 9:10 AM
          </div>
          <div style={{ marginTop: 3, fontFamily: font, fontSize: 12.5, color: '#B9EBCE' }}>
            1 stop via SLC &middot; Seats available
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 14, flexWrap: 'wrap' }}>
            <span style={{
              background: 'rgba(255,255,255,0.15)', borderRadius: 8, padding: '6px 10px',
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontFamily: font, fontSize: 11, fontWeight: 600, color: '#DDF6E7',
            }}>{Ic.check('#7BE3B2')} Seats available</span>
            <span style={{
              background: 'rgba(255,255,255,0.15)', borderRadius: 8, padding: '6px 10px',
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontFamily: font, fontSize: 11, fontWeight: 600, color: '#DDF6E7',
            }}>{Ic.down('#7BE3B2')} Lower disruption risk</span>
          </div>
          <div style={{
            marginTop: 14, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.12)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <div style={{ fontFamily: font, fontSize: 11, color: '#9FD6B5' }}>3 more options ranked</div>
            <div style={{ fontFamily: font, fontSize: 13, fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: 6 }}>
              See all {Ic.chevron('#fff')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SupportBenefits() {
  const rows = [
    { dot: K.amber, label: 'Meal voucher',  badge: { bg: K.amberSoft, fg: '#8A5A00', text: 'LIKELY ELIGIBLE' } },
    { dot: K.navy,  label: 'Hotel voucher', badge: { bg: '#E8EEFB',   fg: K.navy,     text: 'IF OVERNIGHT REQUIRED' } },
  ];
  return (
    <div style={{ margin: '22px 16px 0' }}>
      <Card pad={0}>
        <div style={{ padding: '16px 18px 8px' }}><Eyebrow>Support Benefits</Eyebrow></div>
        <div style={{ padding: '0 18px 14px' }}>
          {rows.map((r, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '12px 0', borderTop: i === 0 ? 'none' : '1px solid ' + K.line,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                {Ic.dot(r.dot)}
                <span style={{ fontFamily: font, fontSize: 13.5, color: K.navy, fontWeight: 600 }}>{r.label}</span>
              </div>
              <div style={{
                background: r.badge.bg, color: r.badge.fg,
                fontFamily: font, fontSize: 10, fontWeight: 800, letterSpacing: 1,
                padding: '4px 8px', borderRadius: 6,
              }}>{r.badge.text}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function ContactAgent() {
  return (
    <div style={{ margin: '22px 16px 0' }}>
      <Card pad={16}>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: '#E8EEFB', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
            {Ic.headset(K.navy)}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: font, fontSize: 13.5, fontWeight: 700, color: K.navy }}>Need personal assistance?</div>
            <div style={{ marginTop: 3, fontFamily: font, fontSize: 11.5, color: K.ink35, lineHeight: 1.35 }}>
              KRONOS transfers your case context to an agent &mdash; no need to repeat yourself.
            </div>
          </div>
          <button style={{
            background: '#fff', color: K.navy, border: '1.5px solid ' + K.navy,
            fontFamily: font, fontSize: 12, fontWeight: 700,
            padding: '9px 14px', borderRadius: 10, whiteSpace: 'nowrap',
          }}>Contact Agent</button>
        </div>
      </Card>
    </div>
  );
}

function TabBar() {
  const tabs = [
    { key: 'dash',    label: 'Dashboard', icon: Ic.tabHome,    active: true },
    { key: 'opts',    label: 'Options',   icon: Ic.tabOptions },
    { key: 'status',  label: 'Status',    icon: Ic.tabStatus  },
    { key: 'support', label: 'Support',   icon: Ic.tabSupport },
  ];
  return (
    <div style={{
      position: 'sticky', bottom: 0, left: 0, right: 0,
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(18px) saturate(180%)',
      WebkitBackdropFilter: 'blur(18px) saturate(180%)',
      borderTop: '0.5px solid rgba(10,31,68,0.1)',
      paddingTop: 8, paddingBottom: 24, zIndex: 40,
    }}>
      <div style={{ display: 'flex' }}>
        {tabs.map(t => {
          const c = t.active ? K.red : K.ink35;
          return (
            <div key={t.key} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, padding: '4px 0' }}>
              <div style={{ opacity: t.active ? 1 : .9 }}>{t.icon(c, t.active)}</div>
              <div style={{ fontFamily: font, fontSize: 10.5, fontWeight: t.active ? 700 : 500, color: c, letterSpacing: 0.1 }}>
                {t.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DisruptionDashboard() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: K.bg, position: 'relative' }}>
      <style>{`
        @keyframes kronos-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(255,255,255,0.8); }
          70%  { box-shadow: 0 0 0 7px rgba(255,255,255,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
        }
        *::-webkit-scrollbar { display: none; }
      `}</style>
      <div style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'none' }}>
        <AppBar />
        <Header />
        <AlertBanner />
        <ImpactedTripCard />
        <ImpactChips />
        <RecommendedStep />
        <RecoveryActions />
        <Snapshot />
        <TopPreview />
        <SupportBenefits />
        <ContactAgent />
        <div style={{ height: 24 }} />
      </div>
      <TabBar />
    </div>
  );
}

window.DisruptionDashboard = DisruptionDashboard;
