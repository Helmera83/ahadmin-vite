import { Link } from 'react-router-dom';
import { 
  Check, 
  ArrowRight, 
  RotateCw, 
  ReceiptText, 
  Workflow, 
  Mail, 
  TrendingUp, 
  KanbanSquare, 
  UserRound 
} from 'lucide-react';
import FlipCard from './FlipCard.jsx';

const services = [
  {
    id: 'bookkeeping',
    name: 'Bookkeeping & Invoicing',
    badge: 'QuickBooks Certified',
    icon: ReceiptText,
    tagline: 'Clean ledgers, prompt billing, and zero revenue slipping through the cracks.',
    description: 'Weekly accounts receivable upkeep, matching deposits from Stripe and merchant feeds, bank reconciliations, and clean books ready for CPA hand-off.',
    deliverables: [
      'Invoicing clients & tracking aging balances',
      'Matching Stripe, Square & bank account feeds',
      'Categorizing expenses & filing digital receipts',
      'Monthly account reconciliations for CPA review',
    ],
    tools: ['QuickBooks Online', 'Stripe', 'Melio', 'Square', 'Xero'],
    kpiLabel: 'Reconciliation',
    kpiValue: 'Weekly Matching',
  },
  {
    id: 'automations',
    name: 'Custom Workflow Automations',
    badge: 'Zapier & Make',
    icon: Workflow,
    tagline: 'Eliminate repetitive manual data entry across disparate software apps.',
    description: 'Connect lead capture forms, CRM pipelines, accounting software, and internal team notifications into autonomous background workflows.',
    deliverables: [
      'Routing form leads straight to your CRM pipeline',
      'Real-time Slack & email sales notifications',
      'Payment-triggered spreadsheet & client updates',
      'Multi-step automated onboarding sequences',
    ],
    tools: ['Zapier', 'Make', 'Webhooks', 'Google Workspace'],
    kpiLabel: 'Admin Saved',
    kpiValue: '8–15 hrs/mo',
  },
  {
    id: 'scheduling-email',
    name: 'Calendar & Inbox Defense',
    badge: 'Time Defense',
    icon: Mail,
    tagline: 'Protect deep-work hours and stop notifications from running your workday.',
    description: 'Frontline email triage, routine response drafting for one-click approval, meeting coordination, and strategic focus buffer blocks.',
    deliverables: [
      'Daily inbox cleanup & priority VIP tagging',
      'Drafting routine client responses for quick approval',
      'Meeting scheduling with focus buffers configured',
      'Vendor correspondence and agenda distribution',
    ],
    tools: ['Google Calendar', 'Outlook 365', 'Calendly', 'Gmail Rules'],
    kpiLabel: 'Triage Speed',
    kpiValue: 'Daily Routine',
  },
  {
    id: 'sales-support',
    name: 'Sales Pipeline & CRM Admin',
    badge: 'Pipeline Hygiene',
    icon: TrendingUp,
    tagline: 'Fast lead follow-up, organized pipelines, and accurate estimate dispatch.',
    description: 'Prompt inquiry response, duplicate contact merging, deal stage tracking, and proposal generation so warm opportunities never stall.',
    deliverables: [
      'Under-4-hour lead follow-up & discovery booking',
      'De-duplicating & tagging pipeline records',
      'Drafting proposals, estimates & contract agreements',
      'Weekly active pipeline audits to flag stalled deals',
    ],
    tools: ['HubSpot', 'Pipedrive', 'Follow Up Boss', 'DocuSign', 'PandaDoc'],
    kpiLabel: 'Inquiry Response',
    kpiValue: '< 4 Hours',
  },
  {
    id: 'project-management',
    name: 'Project Coordination',
    badge: 'PMI Standards',
    icon: KanbanSquare,
    tagline: 'Clear accountability, structured timelines, and zero dropped balls.',
    description: 'Managing task boards, assigning contractor deadlines, maintaining operational SOPs, and keeping client deliverables strictly on schedule.',
    deliverables: [
      'Task breakdown & sprint deadline tracking',
      'Step-by-step SOP & playbook documentation',
      'Cross-platform milestone and contractor tracking',
      'Weekly milestone progress & blocker reporting',
    ],
    tools: ['Asana', 'ClickUp', 'Notion', 'Trello', 'Linear'],
    kpiLabel: 'Methodology',
    kpiValue: 'Predictive & Agile',
  },
  {
    id: 'executive-assistant',
    name: 'Executive Assistant Services',
    badge: 'Founder Leverage',
    icon: UserRound,
    tagline: 'High-touch operational bandwidth dedicated to founder priorities.',
    description: 'Confidential administrative support handling supplier research, briefing preparation, presentation cleanup, and operational follow-through.',
    deliverables: [
      'Daily action-item tracking & priority follow-ups',
      'Vendor vetting & pricing comparison memos',
      'Slide deck styling & executive correspondence',
      'Confidential operational support tailored to your routine',
    ],
    tools: ['Slack', 'Google Docs', 'Loom', 'MS Office', 'Zoom'],
    kpiLabel: 'Turnaround',
    kpiValue: 'Same-Day Priority',
  },
];

export default function ServicesFlipSection() {
  return (
    <section className="lp-sec lp-services-flip-sec" id="services">
      <div className="lp-wrap">
        <div className="lp-services-head">
          <span className="lp-services-eyebrow">Operational Capabilities</span>
          <h2>We can handle it all.</h2>
          <p className="sub">
            Click or drag any card to flip it over for supported tool stacks, cadence KPIs, and delegation options.
          </p>
        </div>

        <div className="lp-services-flip-grid">
          {services.map((svc) => {
            const Icon = svc.icon;

            const frontFace = (
              <div className="lp-flip-face lp-flip-face-front">
                <div className="lp-flip-topbar">
                  <div className="lp-card-icon-wrap" aria-hidden="true">
                    <Icon size={20} />
                  </div>
                  <span className="lp-card-badge">{svc.badge}</span>
                </div>

                <h3 className="lp-flip-title">{svc.name}</h3>
                <p className="lp-flip-tagline">{svc.tagline}</p>

                <div className="lp-flip-deliverables-wrap">
                  <span className="lp-card-label">Core Deliverables</span>
                  <ul className="lp-card-list">
                    {svc.deliverables.map((item) => (
                      <li key={item}>
                        <Check size={14} className="lp-check" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lp-flip-hint">
                  <RotateCw size={13} aria-hidden="true" />
                  <span>Click or drag to flip</span>
                </div>
              </div>
            );

            const backFace = (
              <div className="lp-flip-face lp-flip-face-back">
                <div className="lp-flip-topbar">
                  <span className="lp-card-badge">{svc.name}</span>
                  <div className="lp-card-kpi">
                    <span className="lp-cadence-dot" aria-hidden="true" />
                    <span>{svc.kpiValue}</span>
                  </div>
                </div>

                <p className="lp-flip-desc">{svc.description}</p>

                <div className="lp-flip-stack-wrap">
                  <span className="lp-card-label">Supported Stack</span>
                  <div className="lp-card-tags">
                    {svc.tools.map((tool) => (
                      <span key={tool} className="lp-tool-pill-tag">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div 
                  className="lp-flip-cta-bar"
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Link 
                    to={`/intake?service=${encodeURIComponent(svc.name)}`}
                    className="lp-btn lp-btn-rounded lp-flip-action-btn"
                  >
                    <span>Hand off this work</span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );

            return (
              <div key={svc.id} className="lp-flip-card-wrapper">
                <FlipCard
                  front={frontFace}
                  back={backFace}
                  height={470}
                  radius={18}
                  background="#ffffff"
                  color="var(--ink)"
                  shadow={true}
                  shadowOpacity={0.08}
                  hoverScale={1.02}
                  tiltMax={10}
                  className="lp-service-flipcard"
                  ariaLabel={`${svc.name} service card`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}