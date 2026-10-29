import { Link } from 'react-router-dom';
import { ArrowRight, Clock, ShieldCheck, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
import CountUp from './CountUp.jsx';

const stats = [
    {
        label: 'Reclaimed / Mo',
        to: 40,
        suffix: '+ hrs',
        icon: Clock,
    },
    {
        label: 'Avg Response',
        to: 15,
        prefix: '< ',
        suffix: ' min',
        icon: Zap,
    },
    {
        label: 'Ledger Accuracy',
        to: 100,
        suffix: '%',
        icon: ShieldCheck,
    },
];

export default function Hero() {
    return (
        <section className="lp-hero">
            <div className="lp-wrap">
                <div className="lp-hero-copy">
                    <div className="lp-hero-pill">
                        <Sparkles size={14} className="lp-hero-spark" />
                        <span>Bookkeeping · Automations · Scheduling</span>
                    </div>
                    <h1>Dedicated Virtual Assistant <br/> for Small Business Owners</h1>
                    <p className="lead">
                        Let us handle the administrative heavy lifting,
                        <br />
                        <strong>so you can focus on growing your business.</strong>
                    </p>
                    <div className="lp-actions">
                        <Link to="/intake" className="lp-btn">
                            Start with a consultation <ArrowRight size={18} />
                        </Link>
                        <a href="#pricing" className="lp-btn ghost">See pricing</a>
                    </div>
                </div>
            </div>
            
        </section>
    );
}