import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import { getSupabase } from '../lib/supabase.js';

const OPTIONS = ['Workflow Review', 'Virtual Assistant Retainer', 'Dedicated Assistant', 'Not sure yet'];

function IntakeForm() {
  const [params] = useSearchParams();
  const plan = params.get('plan');
  const [state, setState] = useState({ status: 'idle', error: '' });

  async function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get('website')) return; // honeypot
    setState({ status: 'sending', error: '' });
    const { error } = await getSupabase().from('intake_requests').insert({
      name: f.get('name').trim(),
      email: f.get('email').trim(),
      company: f.get('company').trim() || null,
      interest: f.get('interest'),
      message: f.get('message').trim() || null,
    });
    setState(error
      ? { status: 'error', error: 'Your request did not send. Please try again, or email operations@ahadmin.com.' }
      : { status: 'done', error: '' });
  }

  if (state.status === 'done') {
    return <p className="lp-msg ok" role="status" style={{ marginTop: '2rem', maxWidth: '36rem' }}>Thanks. Your request is in, and I will reply by email within one business day.</p>;
  }

  return (
    <form className="lp-form" onSubmit={onSubmit}>
      <label>Your name<input name="name" required maxLength={120} autoComplete="name" /></label>
      <label>Email<input name="email" type="email" required maxLength={200} autoComplete="email" /></label>
      <label>Company<input name="company" maxLength={160} autoComplete="organization" /></label>
      <label>What are you interested in?
        <select name="interest" defaultValue={OPTIONS.includes(plan) ? plan : 'Not sure yet'}>
          {OPTIONS.map((o) => <option key={o}>{o}</option>)}
        </select>
      </label>
      <label>What tasks are piling up?<textarea name="message" maxLength={4000} placeholder="For example: invoices go out late, and I can't keep up with scheduling." /></label>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }} />
      {state.status === 'error' && <p className="lp-msg err" role="alert">{state.error}</p>}
      <div><button className="lp-btn" disabled={state.status === 'sending'}>{state.status === 'sending' ? 'Sending...' : 'Send request'}</button></div>
    </form>
  );
}

export default function Intake() {
  return (
    <div className="lp-page lp">
      <SiteHeader />
      <main className="lp-sec"><div className="lp-wrap">
        <h2>Tell me what you need off your plate.</h2>
        <p className="sub">Your answers stay confidential. I will reply with next steps and a time for your workflow review.</p>
        <IntakeForm />
      </div></main>
      <SiteFooter />
    </div>
  );
}
