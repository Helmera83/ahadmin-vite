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
  UserRound, 
  Megaphone, 
  Share2 
} from 'lucide-react';
import FlipCard from './FlipCard';

const services = [
  {
    id: 'bookkeeping',
    name: 'Bookkeeping & Invoicing',
    badge: 'QuickBooks ProAdvisor',
    icon: ReceiptText,
    tagline: 'Clean ledgers, prompt billing, and zero revenue falling through the cracks.',
    description: 'Weekly accounts receivable upkeep, matching deposits from Stripe and merchant feeds, reconciling bank statements, and preparing clean books for CPA hand-off.',
    deliverables: [
      'Drafting, sending, and tracking client invoices',
      'Matching bank & credit card feed reconciliations',
      'Accounts receivable aging review & payment follow-up',
      'Clean expense categorization ready for CPA tax review',
    ],
    tools: ['QuickBooks Online', 'Stripe', 'FreshBooks', 'Square', 'Melio'],
    kpiLabel: 'Reconciliation Cadence',
    kpiValue: 'Weekly Matching',
  },
  {
    id: 'automations',
    name: 'Custom Automations',
    badge: 'Zapier & Make',
    icon: Workflow,
    tagline: 'Stop copy-pasting customer details across forms, spreadsheets, and apps.',
    description: 'Quiet background automations connecting lead capture forms, CRM pipelines, team notifications, and accounting software without manual data entry.',
    deliverables: [
      'Automated triggers routing inquiries directly into CRM',
      'Instant notification webhooks to Slack, email, or dashboards',
      'Webhooks connecting payment events straight to spreadsheets',
      'Multi-step onboarding sequences eliminating manual setup',
    ],
    tools: ['Zapier', 'Make', 'Webhooks', 'Google Workspace', 'Supabase'],
    kpiLabel: 'Repetitive Admin Saved',
    kpiValue: '8–15 hrs/mo',
  },
  {
    id: 'scheduling-email',
    name: 'Scheduling & Email Management',
    badge: 'Calendar Defense',
    icon: Mail,
    tagline: 'Defend your deep-work hours and stop notifications from running your day.',
    description: 'Frontline message screening, routine email drafting for one-click approval, meeting booking, and calendar buffering to protect core delivery hours.',
    deliverables: [
      'Daily inbox triage, custom folder structuring, and VIP flags',
      'Drafting routine client responses for one-click approval',
      'Meeting scheduling, agenda distribution, and reminders',
      'Calendar buffer rules to defend uninterrupted focus blocks',
    ],
    tools: ['Google Calendar', 'Outlook 365', 'Calendly', 'Gmail Rules'],
    kpiLabel: 'Inbox Maintenance',
    kpiValue: 'Daily Triage',
  },
  {
    id: 'sales-support',
    name: 'Sales Support & CRM',
    badge: 'Pipeline Hygiene',
    icon: TrendingUp,
    tagline: 'Fast lead follow-up, organized pipelines, and accurate estimate dispatch.',
    description: 'Prompt inquiry response, duplicate contact merging, deal stage tracking, and proposal generation so warm opportunities never go cold.',
    deliverables: [
      'Prompt lead follow-up and discovery appointment booking',
      'CRM cleanup, duplicate contact merging, and deal tagging',
      'Drafting proposals, scopes of work, and formal quotes',
      'Weekly pipeline audits to prevent stalled opportunities',
    ],
    tools: ['HubSpot', 'Pipedrive', 'Follow Up Boss', 'DocuSign', 'PandaDoc'],
    kpiLabel: 'Lead Response Time',
    kpiValue: '< 4 Hours',
  },
  {
    id: 'project-management',
    name: 'Project Coordination',
    badge: 'PMI Standards',
    icon: KanbanSquare,
    tagline: 'Structured milestones, clear ownership, and zero dropped operational balls.',
    description: 'Structuring task boards, tracking milestones across contractors, documenting recurring SOPs, and keeping client deliverables strictly on schedule.',
    deliverables: [
      'Task breakdown, sprint planning, and deadline assignment',
      'Written standard operating procedures (SOPs) for operations',
      'Cross-platform milestone tracking across internal toolsets',
      'Weekly status recaps summarizing progress and blockers',
    ],
    tools: ['Asana', 'ClickUp', 'Jira', 'Trello', 'Notion'],
    kpiLabel: 'Methodology',
    kpiValue: 'Predictive & Agile',
  },
  {
    id: 'executive-assistant',
    name: 'Executive Assistant Services',
    badge: 'Founder Leverage',
    icon: UserRound,
    tagline: 'High-touch operational leverage designed specifically for business owners.',
    description: 'Direct second-in-command assistance handling vendor research, meeting briefs, slide deck polishing, and follow-through on open founder action items.',
    deliverables: [
      'Daily action-item reviews and priority task follow-through',
      'Vendor comparisons, pricing research memos, and briefs',
      'Document formatting, slide deck cleanup, and correspondence',
      'Confidential operational support tailored to your routine',
    ],
    tools: ['Slack', 'Google Docs', 'Zoom', 'Loom', 'MS Office'],
    kpiLabel: 'Communication',
    kpiValue: 'Same-Day Sync',
  },
  {
    id: 'digital-marketing',
    name: 'Digital & Email Marketing',
    badge: 'Google Certified',
    icon: Megaphone,
    description: 'Drafting regular email newsletters, maintaining clean subscriber segments, running campaign pre-flight link checks, and reporting engagement metrics.',
    deliverables: [
      'Formatting and proofreading newsletter broadcasts',
      'List hygiene: segmenting subscribers and removing bounces',
      'Campaign scheduling and pre-flight link verification',
      'Monthly reporting on open rates, link clicks, and audience trends',
    ],
    tools: ['Mailchimp', 'Klaviyo', 'MailerLite', 'Google Analytics'],
    kpiLabel: 'Subscriber List Status',
    kpiValue: 'Clean & Segmented',
  },
  {
    id: 'social-media',
    name: 'Social Media Coordination',
    badge: 'Channel Consistency',
    icon: Share2,
    tagline: 'Maintain an active, consistent online presence without the daily distraction.',
    description: 'Organizing brand media assets, batch scheduling pre-approved posts across profiles, and monitoring incoming comments and direct messages for sales leads.',
    deliverables: [
      'Batch scheduling pre-approved posts across platforms',
      'Content calendar coordination and queue management',
      'Monitoring inbound comments and DMs to route sales leads',
      'Asset organization and media library maintenance',
    ],
    tools: ['Buffer', 'Meta Business Suite', 'Canva', 'LinkedIn Pages'],
    kpiLabel: 'Posting Cadence',
    kpiValue: 'Batch Scheduled',
  },
];

export default function ServicesFlipSection() {
  return (
    <section className="lp-sec lp-services-flip-sec" id="services">
      <div className="lp-wrap">
        <div className="lp-services-head">
          <span className="lp-services-eyebrow">Services</span>
          <h2>Learn how I can lighten your workload.</h2>
          <p className="sub">
            Explore the various ways I can support your business.
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
                      <span key={tool} className="lp-tool-pill-tag">{tool}</span>
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
                  shadowOpacity={0.12}
                  hoverScale={1.02}
                  tiltMax={1}
                  className="lp-service-flipcard"
                  ariaLabel={`${svc.name} card`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}