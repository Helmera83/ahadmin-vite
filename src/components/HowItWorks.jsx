const steps = [
  {
    title: 'Tell me what is piling up',
    body: 'Send a short request describing the tasks that keep slipping. I reply by email within one business day.',
  },
  {
    title: 'We run a workflow review',
    body: 'We walk through your invoicing, inbox, scheduling, and client records, then pick the plan that fits.',
  },
  {
    title: 'Hand it off and get your time back',
    body: 'I take the recurring work on, and you get a steady, predictable operation to build on.',
  },
];

export default function HowItWorks() {
  return (
    <section className="lp-sec lp-how" id="how">
      <div className="lp-wrap">
        <div className="lp-how-head">
          <span className="lp-how-eyebrow">How it works</span>
          <h2>Three steps from overwhelmed to handled.</h2>
        </div>
        <ol className="lp-how-steps">
          {steps.map((s) => (
            <li key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
