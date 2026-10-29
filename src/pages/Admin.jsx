import { useEffect, useState, useCallback } from 'react';
import SiteHeader from '../components/SiteHeader.jsx';
import { getSupabase } from '../lib/supabase.js';

const STATUSES = ['new', 'contacted', 'booked', 'closed'];

export default function Admin() {
  const supabase = getSupabase();
  const [session, setSession] = useState(undefined);
  const [rows, setRows] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, [supabase]);

  const load = useCallback(async () => {
    const { data, error } = await supabase.from('intake_requests').select('*').order('created_at', { ascending: false });
    if (error) setError('Could not load requests.'); else setRows(data);
  }, [supabase]);

  useEffect(() => { if (session) load(); }, [session, load]);

  async function signIn(e) {
    e.preventDefault(); setError('');
    const f = new FormData(e.currentTarget);
    const { error } = await supabase.auth.signInWithPassword({ email: f.get('email'), password: f.get('password') });
    if (error) setError('Email or password is incorrect.');
  }

  async function setStatus(id, status) {
    const { error } = await supabase.from('intake_requests').update({ status }).eq('id', id);
    if (error) setError('Could not update status.'); else setRows((r) => r.map((x) => x.id === id ? { ...x, status } : x));
  }

  return (
    <div className="lp-page lp">
      <SiteHeader />
      <main className="lp-sec"><div className="lp-wrap">
        <div className="lp-page-head"><h1>Admin</h1></div>
        {session === undefined ? null : !session ? (
          <form className="lp-form lp-form-narrow" onSubmit={signIn}>
            <label>Email<input name="email" type="email" required autoComplete="username" /></label>
            <label>Password<input name="password" type="password" required autoComplete="current-password" /></label>
            {error && <p className="lp-msg err" role="alert">{error}</p>}
            <div><button className="lp-btn">Sign in</button></div>
          </form>
        ) : (<>
          <div className="lp-admin-bar">
            <span>{rows.length} intake request{rows.length === 1 ? '' : 's'}</span>
            <button className="lp-btn ghost" onClick={() => supabase.auth.signOut()}>Sign out</button>
          </div>
          {error && <p className="lp-msg err" role="alert" style={{ marginTop: '1rem' }}>{error}</p>}
          {rows.length === 0 && !error && <p className="lp-empty">No requests yet. New intake submissions will show up here.</p>}
          {rows.length > 0 && <div className="lp-table-wrap">
            <table className="lp-table">
              <thead><tr><th>Received</th><th>Who</th><th>Interest</th><th>Message</th><th>Status</th></tr></thead>
              <tbody>{rows.map((r) => (
                <tr key={r.id}>
                  <td>{new Date(r.created_at).toLocaleDateString()}</td>
                  <td><strong>{r.name}</strong><br /><a href={`mailto:${r.email}`}>{r.email}</a>{r.company && <><br />{r.company}</>}</td>
                  <td>{r.interest}</td>
                  <td className="msg-cell">{r.message}</td>
                  <td><select data-status={r.status} aria-label={`Status for ${r.name}`} value={r.status} onChange={(e) => setStatus(r.id, e.target.value)}>{STATUSES.map((s) => <option key={s}>{s}</option>)}</select></td>
                </tr>))}
              </tbody>
            </table>
          </div>}
        </>)}
      </div></main>
    </div>
  );
}
