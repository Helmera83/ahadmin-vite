import LogoLoop from './LogoLoop.jsx';

const toolLogos = [
  {
    title: 'QuickBooks',
    ariaLabel: 'QuickBooks Online',
    node: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <circle cx="12" cy="12" r="10" fill="#2CA01C" />
        <path d="M10.2 7.5A4.5 4.5 0 0 0 6 12a4.5 4.5 0 0 0 4.2 4.5V14a2.5 2.5 0 0 1-1.7-2.4c0-1.3 1-2.4 2.3-2.5v7.4h1.4V7.5h-2z" fill="#fff" />
        <path d="M13.8 16.5A4.5 4.5 0 0 0 18 12a4.5 4.5 0 0 0-4.2-4.5V10a2.5 2.5 0 0 1 1.7 2.4c0 1.3-1 2.4-2.3 2.5V7.5h-1.4v9h2z" fill="#fff" />
      </svg>
    ),
  },
  {
    title: 'Jira',
    ariaLabel: 'Jira Software',
    node: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <path d="M11.5 2.5a8.5 8.5 0 0 0-8.5 8.5h4.25a4.25 4.25 0 0 1 4.25-4.25V2.5z" fill="#0052CC" />
        <path d="M16 6.75A8.5 8.5 0 0 0 7.5 15.25h4.25A4.25 4.25 0 0 1 16 11V6.75z" fill="#2684FF" />
        <path d="M20.5 11A8.5 8.5 0 0 0 12 19.5h4.25A4.25 4.25 0 0 1 20.5 15.25V11z" fill="#0052CC" />
      </svg>
    ),
  },
  {
    title: 'HubSpot',
    ariaLabel: 'HubSpot CRM',
    node: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <circle cx="16.5" cy="7.5" r="2.2" fill="#FF7A59" />
        <circle cx="7.5" cy="14" r="2.2" fill="#FF7A59" />
        <circle cx="16.5" cy="14" r="3.2" fill="#FF7A59" />
        <path d="M16.5 4v1.5M16.5 17.2V20M14 14H9.5M16.5 9.7V11" stroke="#FF7A59" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'monday.com',
    ariaLabel: 'monday.com Work OS',
    node: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <path d="M4 16.5a2.5 2.5 0 0 1 2.5-2.5h.5a2.5 2.5 0 0 1 2.5 2.5V19H4v-2.5z" fill="#F65F7C" />
        <path d="M9.5 13.5a2.5 2.5 0 0 1 2.5-2.5h.5a2.5 2.5 0 0 1 2.5 2.5V19h-5.5v-5.5z" fill="#FDBB2D" />
        <path d="M15 10a2.5 2.5 0 0 1 2.5-2.5h.5A2.5 2.5 0 0 1 20.5 10V19H15V10z" fill="#00CA72" />
        <circle cx="6.75" cy="9.5" r="2.25" fill="#F65F7C" />
      </svg>
    ),
  },
  {
    title: 'Google Workspace',
    ariaLabel: 'Google Workspace',
    node: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <path d="M5 8.5L12 4l7 4.5v7l-7 4.5-7-4.5v-7z" stroke="#4285F4" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 4v16M5 8.5l14 7M19 8.5l-14 7" stroke="#EA4335" strokeWidth="1.5" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: 'ClickUp',
    ariaLabel: 'ClickUp Project Management',
    node: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <path d="M4.5 15.5l2.2-1.8A7.3 7.3 0 0 0 12 15.8c2 0 3.8-.8 5.3-2.1l2.2 1.8A10.1 10.1 0 0 1 12 18.6a10.1 10.1 0 0 1-7.5-3.1z" fill="#7B68EE" />
        <path d="M12 7.2L6.8 11.4l1.8 2.2L12 10.8l3.4 2.8 1.8-2.2L12 7.2z" fill="#FF4088" />
      </svg>
    ),
  },
  {
    title: 'Notion',
    ariaLabel: 'Notion Workspace',
    node: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" fill="#000" />
        <path d="M7 7.5h2.5l5 7V7.5H17v9h-2.5l-5-7v7H7v-9z" fill="#fff" />
      </svg>
    ),
  },
  {
    title: 'Trello',
    ariaLabel: 'Trello Boards',
    node: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <rect x="3.5" y="3.5" width="17" height="17" rx="3" fill="#0079BF" />
        <rect x="6.5" y="6.5" width="4.5" height="10" rx="1" fill="#fff" />
        <rect x="13" y="6.5" width="4.5" height="6.5" rx="1" fill="#fff" />
      </svg>
    ),
  },
  {
    title: 'Zapier',
    ariaLabel: 'Zapier Automations',
    node: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <circle cx="12" cy="12" r="10" fill="#FF4A00" />
        <path d="M12 6v12M6 12h12M7.75 7.75l8.5 8.5M7.75 16.25l8.5-8.5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Microsoft 365',
    ariaLabel: 'Microsoft 365',
    node: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <rect x="4" y="4" width="7" height="7" rx="1" fill="#F25022" />
        <rect x="13" y="4" width="7" height="7" rx="1" fill="#7FBA00" />
        <rect x="4" y="13" width="7" height="7" rx="1" fill="#00A4EF" />
        <rect x="13" y="13" width="7" height="7" rx="1" fill="#FFB900" />
      </svg>
    ),
  },
];

export default function TrustBar() {
  return (
    <section className="lp-trust-bar">
      <div className="lp-wrap lp-trust-inner">
        <div className="lp-trust-label">
          <span>Seamless Compatibility</span>
          <strong>Plugs straight into your everyday software</strong>
        </div>

        <div className="lp-trust-loop-container">
          <LogoLoop
            logos={toolLogos}
            speed={45}
            direction="left"
            logoHeight={26}
            gap={36}
            labels="inline"
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutWidth={0.08}
            draggable={true}
            ariaLabel="Supported business applications"
          />
        </div>
      </div>
    </section>
  );
}