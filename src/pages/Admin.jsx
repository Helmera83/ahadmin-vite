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
        <h2>Admin</h2>
        {session === undefined ? null : !session ? (
          <form className="lp-form" onSubmit={signIn}>
            <label>Email<input name="email" type="email" required autoComplete="username" /></label>
            <label>Password<input name="password" type="password" required autoComplete="current-password" /></label>
            {error && <p className="lp-msg err" role="alert">{error}</p>}
            <div><button className="lp-btn">Sign in</button></div>
          </form>
        ) : (<>
          <p className="sub">{rows.length} intake request{rows.length === 1 ? '' : 's'}. <button className="lp-btn ghost" style={{ padding: '.3rem .8rem', marginLeft: '.5rem', color: 'var(--navy)' }} onClick={() => supabase.auth.signOut()}>Sign out</button></p>
          {error && <p className="lp-msg err" role="alert" style={{ marginTop: '1rem' }}>{error}</p>}
          <div className="lp-table-wrap">
            <table className="lp-table">
              <thead><tr><th>Received</th><th>Who</th><th>Interest</th><th>Message</th><th>Status</th></tr></thead>
              <tbody>{rows.map((r) => (
                <tr key={r.id}>
                  <td>{new Date(r.created_at).toLocaleDateString()}</td>
                  <td><strong>{r.name}</strong><br /><a href={`mailto:${r.email}`}>{r.email}</a>{r.company && <><br />{r.company}</>}</td>
                  <td>{r.interest}</td>
                  <td style={{ maxWidth: '24rem' }}>{r.message}</td>
                  <td><select value={r.status} onChange={(e) => setStatus(r.id, e.target.value)}>{STATUSES.map((s) => <option key={s}>{s}</option>)}</select></td>
                </tr>))}
              </tbody>
            </table>
          </div>
        </>)}
      </div></main>
    </div>
  );
}
