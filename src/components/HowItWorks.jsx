import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Audit & Intake (15 Mins)',
    desc: 'Submit your intake form outlining your current software bottlenecks, backlogged invoices, or scheduling friction.',
  },
  {
    num: '02',
    title: 'Secure Access & Protocol Sync',
    desc: 'Delegate access securely via 1Password or LastPass and align on communication channels (Slack, email, or weekly standup).',
  },
  {
    num: '03',
    title: 'Autonomous Execution (Within 48h)',
    desc: 'Your operational queue goes live. Tasks, daily triages, and bank reconciliations run quietly in the background without micromanagement.',
  },
];

export default function HowItWorks() {
  return (
    <section className="lp-sec lp-how" id="how">
      <div className="lp-wrap">
        <div className="lp-how-head">
          <span className="lp-how-eyebrow">Onboarding Process</span>
          <h2>Live within 48 hours. <br /> Zero complex onboarding.</h2>
          <p className="sub">
            Designed for busy operators who need execution immediately.
          </p>
        </div>

        <ol className="lp-how-steps">
          {steps.map((s) => (
            <li key={s.num}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}