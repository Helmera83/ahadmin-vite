import { Link } from 'react-router-dom';
import { 
  Check, 
  ArrowRight, 
  ReceiptText, 
  Workflow, 
  Mail, 
  TrendingUp, 
  KanbanSquare, 
  UserRound, 
  Megaphone, 
  Share2 
} from 'lucide-react';

const services = [
  {
    id: 'bookkeeping',
    name: 'Bookkeeping & Invoicing',
    badge: 'QuickBooks ProAdvisor',
    icon: ReceiptText,
    tagline: 'Clean ledgers, timely billing, and zero unpaid work slipping past.',
    description: 'Daily accounts receivable upkeep, matching deposits from Stripe and merchant feeds, reconciling bank statements, and preparing clean books for CPA hand-off.',
    deliverables: [
      'Drafting, sending, and tracking progress on customer invoices',
      'Monthly bank & credit card feed matching and reconciliation',
      'Accounts receivable aging review and professional payment follow-up',
      'Clean expense categorization ready for quarterly CPA review',
    ],
    tools: ['QuickBooks Online', 'Stripe', 'FreshBooks', 'Square', 'Melio'],
    kpiLabel: 'Reconciliation Cadence',
    kpiValue: 'Weekly Matching',
    variant: 'featured', // Taller card to create dynamic masonry staggering
  },
  {
    id: 'automations',
    name: 'Custom Automations',
    badge: 'Zapier & Make',
    icon: Workflow,
    tagline: 'Stop copy-pasting customer details across forms, spreadsheets, and apps.',
    description: 'Quiet background automations connecting lead capture forms, CRM pipelines, team notifications, and accounting software without manual data entry.',
    deliverables: [
      'Automated triggers routing new inquiries from web forms directly into CRM',
      'Instant notification webhooks to Slack, email, or team dashboards',
      'Multi-step onboarding sequences eliminating manual setup',
    ],
    tools: ['Zapier', 'Make', 'Webhooks', 'Google Workspace'],
    kpiLabel: 'Repetitive Admin Saved',
    kpiValue: '8–15 hrs/mo',
    variant: 'compact',
  },
  {
    id: 'scheduling-email',
    name: 'Scheduling & Email Management',
    badge: 'Calendar Defense',
    icon: Mail,
    tagline: 'Defend your deep-work hours and stop notifications from running your day.',
    description: 'Frontline message screening, routine email drafting for one-click approval, meeting booking, and calendar buffering to protect core delivery hours.',
    deliverables: [
      'Daily inbox triage, custom folder structuring, and VIP priority flagging',
      'Drafting routine client responses for one-click approval',
      'Meeting scheduling and agenda distribution',
    ],
    tools: ['Google Calendar', 'Outlook 365', 'Calendly', 'Gmail Rules'],
    kpiLabel: 'Inbox Maintenance',
    kpiValue: 'Daily Triage',
    variant: 'compact',
  },
  {
    id: 'sales-support',
    name: 'Sales Support & CRM Administration',
    badge: 'Pipeline Hygiene',
    icon: TrendingUp,
    tagline: 'Fast lead follow-up, organized pipelines, and accurate estimate dispatch.',
    description: 'Prompt inquiry response, duplicate contact merging, deal stage tracking, and proposal generation so warm opportunities never go cold.',
    deliverables: [
      'Prompt lead follow-up and discovery appointment booking',
      'CRM database cleanup and pipeline stage tagging',
      'Drafting proposals, scopes of work, and formal quote templates',
      'Weekly pipeline audits so no active deals slip through the cracks',
    ],
    tools: ['HubSpot', 'Pipedrive', 'Follow Up Boss', 'DocuSign'],
    kpiLabel: 'Lead Response Time',
    kpiValue: '< 4 Hours',
    variant: 'featured',
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
      'Written standard operating procedures (SOPs) for repeatable operations',
      'Weekly status recaps summarizing progress and blockers',
    ],
    tools: ['Asana', 'ClickUp', 'Jira', 'Trello', 'Notion'],
    kpiLabel: 'Methodology',
    kpiValue: 'Predictive & Agile',
    variant: 'compact',
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
      'Vendor comparisons, pricing research memos, and background briefs',
      'Document formatting, slide deck cleanup, and administrative correspondence',
      'Confidential operational support tailored to your leadership routine',
    ],
    tools: ['Slack', 'Google Docs', 'Zoom', 'MS Office'],
    kpiLabel: 'Communication',
    kpiValue: 'Same-Day Sync',
    variant: 'featured',
  },
  {
    id: 'digital-marketing',
    name: 'Digital & Email Marketing',
    badge: 'Google Certified',
    icon: Megaphone,
    tagline: 'Keep past, present, and prospective clients engaged automatically.',
    description: 'Drafting regular email newsletters, maintaining clean subscriber segments, running campaign pre-flight link checks, and reporting engagement metrics.',
    deliverables: [
      'Formatting and proofreading newsletter broadcasts and announcements',
      'List hygiene: segmenting subscribers and removing bounces',
      'Monthly reporting on open rates and engagement trends',
    ],
    tools: ['Mailchimp', 'Klaviyo', 'MailerLite', 'Google Analytics'],
    kpiLabel: 'List Status',
    kpiValue: 'Clean & Segmented',
    variant: 'compact',
  },
  {
    id: 'social-media',
    name: 'Social Media Coordination',
    badge: 'Channel Consistency',
    icon: Share2,
    tagline: 'Maintain an active, consistent online presence without the daily distraction.',
    description: 'Organizing brand media assets, batch scheduling pre-approved posts across profiles, and monitoring incoming comments and direct messages for sales leads.',
    deliverables: [
      'Batch scheduling pre-approved posts and announcements',
      'Content calendar coordination and queue management',
      'Monitoring inbound comments and routing leads',
    ],
    tools: ['Buffer', 'Meta Business Suite', 'Canva', 'LinkedIn Pages'],
    kpiLabel: 'Posting Cadence',
    kpiValue: 'Batch Scheduled',
    variant: 'compact',
  },
];

export default function ServicesMasonry() {
  return (
    <section className="lp-sec lp-services-masonry-sec" id="services">
      <div className="lp-wrap">
        <div className="lp-services-head">
          <span className="lp-services-eyebrow">Services Overview</span>
          <h2>Eight ways I can take work off your plate.</h2>
          <p className="sub">
            Modular operational support tailored to your workflows—from daily ledgers and inbox defense to custom automated pipelines.
          </p>
        </div>

        <div className="lp-masonry-container">
          {services.map((svc) => {
            const Icon = svc.icon;

            return (
              <div 
                key={svc.id} 
                className={`lp-masonry-card ${svc.variant === 'featured' ? 'is-featured' : ''}`}
              >
                <div className="lp-card-header">
                  <div className="lp-card-icon-wrap">
                    <Icon size={22} className="lp-card-icon" />
                  </div>
                  <span className="lp-card-badge">{svc.badge}</span>
                </div>

                <h3 className="lp-card-title">{svc.name}</h3>
                <p className="lp-card-tagline">{svc.tagline}</p>
                <p className="lp-card-desc">{svc.description}</p>

                <div className="lp-card-deliverables">
                  <span className="lp-card-label">Key Deliverables</span>
                  <ul className="lp-card-list">
                    {svc.deliverables.map((item) => (
                      <li key={item}>
                        <Check size={15} className="lp-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lp-card-stack">
                  <span className="lp-card-label">Tools & Stack</span>
                  <div className="lp-card-tags">
                    {svc.tools.map((tool) => (
                      <span key={tool} className="lp-tool-pill-tag">{tool}</span>
                    ))}
                  </div>
                </div>

                <div className="lp-card-footer">
                  <div className="lp-card-kpi">
                    <span className="lp-cadence-dot" />
                    <span>{svc.kpiLabel}: <strong>{svc.kpiValue}</strong></span>
                  </div>

                  <Link 
                    to={`/intake?service=${encodeURIComponent(svc.name)}`}
                    className="lp-card-cta"
                    aria-label={`Hand off ${svc.name} work`}
                  >
                    <span>Hand off</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}