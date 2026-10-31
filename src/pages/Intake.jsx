import React, { useState } from 'react';
import { getSupabase } from '../lib/supabase.js';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldAlert, 
  Sparkles, 
  Clock, 
  Shield, 
  Building2, 
  MessageSquare, 
  Cpu, 
  FileText, 
  Target 
} from 'lucide-react';

export default function Intake() {
  const supabase = getSupabase();
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const [formData, setFormData] = useState({
    legalBusinessName: '',
    dbaName: '',
    website: '',
    businessPhone: '',
    primaryContactName: '',
    primaryContactRole: '',
    primaryContactEmail: '',
    primaryContactPhone: '',
    billingContact: '',
    scopeApprover: '',
    primaryCommChannel: 'Slack',
    operatingHours: '',
    timeZone: '',
    urgentProtocol: '',
    statusUpdateCadence: 'Weekly recap',
    projectManagementTool: 'Asana',
    crmTool: 'HubSpot',
    bookkeepingTool: 'QuickBooks Online',
    workspaceSuite: 'Google Workspace',
    calendarTool: 'Google Calendar',
    fileStorageTool: 'Google Drive',
    passwordManager: '1Password',
    twoFactorAuth: '',
    existingSops: 'Partially documented',
    sopsLink: '',
    tonePreference: 'Professional, polished, and direct',
    approvalThreshold: 'Draft first for approval',
    quickWin1: '',
    quickWin2: '',
    quickWin3: '',
    imminentDeadlines: '',
    additionalNotes: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('intake_submissions')
        .insert([
          {
            full_name: formData.primaryContactName || formData.legalBusinessName,
            email: formData.primaryContactEmail,
            phone: formData.primaryContactPhone,
            service_type: formData.serviceType || 'Comprehensive Retainer',
            notes: JSON.stringify(formData, null, 2),
            status: 'pending'
          }
        ]);

      if (error) throw error;

      setSuccessMessage('Intake questionnaire submitted successfully! Our team will review your details and be in touch within 24 hours.');
    } catch (err) {
      console.error('Error submitting intake:', err.message);
      setErrorMessage(err.message || 'Failed to submit intake form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="lp lp-page">
      <SiteHeader />

      <main>
        <section className="lp-sec">
          <div className="lp-wrap">
            <div className="lp-page-head">
              <div className="lp-hero-pill" style={{ background: 'var(--mint)', color: 'var(--teal-d)', border: '1px solid rgba(21,158,156,0.3)' }}>
                <Sparkles size={14} />
                <span>Client Intake Questionnaire</span>
              </div>
              <h1>Configure your back-office workflows.</h1>
              <p className="sub">
                Please complete this comprehensive questionnaire to help establish clear operational boundaries and configure your systems before our kickoff call.
              </p>
            </div>

            {successMessage && (
              <div className="lp-msg ok" role="status" style={{ marginBottom: '2rem' }}>
                <CheckCircle2 size={18} style={{ display: 'inline', marginRight: '0.4rem', verticalAlign: '-2px' }} />
                {successMessage}
              </div>
            )}

            {errorMessage && (
              <div className="lp-msg err" role="alert" style={{ marginBottom: '2rem' }}>
                <ShieldAlert size={18} style={{ display: 'inline', marginRight: '0.4rem', verticalAlign: '-2px' }} />
                {errorMessage}
              </div>
            )}

            {!successMessage && (
              <div className="lp-intake">
                <form onSubmit={handleSubmit} className="lp-form">
                  <div className="lp-intake-progress-bar">
                    <span className="lp-intake-step-indicator">
                      Step {step} of {totalSteps}
                    </span>
                    <div className="lp-intake-dots">
                      {Array.from({ length: totalSteps }).map((_, idx) => (
                        <div
                          key={idx}
                          className={`lp-intake-dot ${step === idx + 1 ? 'active' : ''} ${step > idx + 1 ? 'passed' : ''}`}
                        />
                      ))}
                    </div>
                  </div>

                  {step === 1 && (
                    <div className="lp-form-step">
                      <h3>
                        <Building2 size={20} style={{ display: 'inline', marginRight: '0.5rem', color: 'var(--teal-d)' }} />
                        Section 1: Business Profile & Primary Contacts
                      </h3>
                      <div className="lp-form-grid">
                        <label>
                          Legal Business Name <span className="opt">*</span>
                          <input type="text" name="legalBusinessName" required value={formData.legalBusinessName} onChange={handleChange} placeholder="Company Name" />
                        </label>
                        <label>
                          DBA / Brand Name <span className="opt">(optional)</span>
                          <input type="text" name="dbaName" value={formData.dbaName} onChange={handleChange} placeholder="Brand Name" />
                        </label>
                        <label>
                          Primary Website <span className="opt">(optional)</span>
                          <input type="url" name="website" value={formData.website} onChange={handleChange} placeholder="https://example.com" />
                        </label>
                        <label>
                          Business Phone & Address <span className="opt">*</span>
                          <input type="text" name="businessPhone" required value={formData.businessPhone} onChange={handleChange} placeholder="City, State | Phone number" />
                        </label>
                        <label>
                          Primary Point of Contact (Name & Role) <span className="opt">*</span>
                          <input type="text" name="primaryContactName" required value={formData.primaryContactName} onChange={handleChange} placeholder="Full Name, Title" />
                        </label>
                        <label>
                          Primary Contact Email <span className="opt">*</span>
                          <input type="email" name="primaryContactEmail" required value={formData.primaryContactEmail} onChange={handleChange} placeholder="email@example.com" />
                        </label>
                        <label>
                          Primary Contact Mobile (Urgent matters) <span className="opt">*</span>
                          <input type="tel" name="primaryContactPhone" required value={formData.primaryContactPhone} onChange={handleChange} placeholder="Phone number" />
                        </label>
                        <label>
                          Secondary / Billing Contact <span className="opt">(optional)</span>
                          <input type="text" name="billingContact" value={formData.billingContact} onChange={handleChange} placeholder="Name & Email" />
                        </label>
                        <label style={{ gridColumn: '1 / -1' }}>
                          Who is authorized to approve scope adjustments or additional hours? <span className="opt">*</span>
                          <input type="text" name="scopeApprover" required value={formData.scopeApprover} onChange={handleChange} placeholder="Authorized approver name/role" />
                        </label>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="lp-form-step">
                      <h3>
                        <MessageSquare size={20} style={{ display: 'inline', marginRight: '0.5rem', color: 'var(--teal-d)' }} />
                        Section 2: Communication Preferences & Boundaries
                      </h3>
                      <div className="lp-form-grid">
                        <label>
                          Primary Communication Channel <span className="opt">*</span>
                          <select name="primaryCommChannel" value={formData.primaryCommChannel} onChange={handleChange}>
                            <option value="Slack">Slack</option>
                            <option value="Email">Email</option>
                            <option value="Microsoft Teams">Microsoft Teams</option>
                            <option value="Project Management tool comments only">Project Management tool comments only</option>
                            <option value="Other">Other</option>
                          </select>
                        </label>
                        <label>
                          Operating Hours & Time Zone <span className="opt">*</span>
                          <input type="text" name="timeZone" required value={formData.timeZone} onChange={handleChange} placeholder="Operating hours & Time zone" />
                        </label>
                        <label style={{ gridColumn: '1 / -1' }}>
                          Urgent Escalation Protocol <span className="opt">*</span>
                          <input type="text" name="urgentProtocol" required value={formData.urgentProtocol} onChange={handleChange} placeholder="Describe how to flag urgent matters" />
                        </label>
                        <label style={{ gridColumn: '1 / -1' }}>
                          Status Updates & Cadence <span className="opt">*</span>
                          <select name="statusUpdateCadence" value={formData.statusUpdateCadence} onChange={handleChange}>
                            <option value="Weekly recap">Weekly recap</option>
                            <option value="Daily end-of-day bullet points">Daily end-of-day bullet points</option>
                            <option value="Real-time task completion updates via project board">Real-time task updates via project board</option>
                          </select>
                        </label>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="lp-form-step">
                      <h3>
                        <Cpu size={20} style={{ display: 'inline', marginRight: '0.5rem', color: 'var(--teal-d)' }} />
                        Section 3: Tech Stack & System Access
                      </h3>
                      <div className="lp-form-grid">
                        <label>
                          Task & Project Management <span className="opt">*</span>
                          <select name="projectManagementTool" value={formData.projectManagementTool} onChange={handleChange}>
                            <option value="Asana">Asana</option>
                            <option value="ClickUp">ClickUp</option>
                            <option value="Trello">Trello</option>
                            <option value="Notion">Notion</option>
                            <option value="Monday.com">Monday.com</option>
                            <option value="Other">Other</option>
                          </select>
                        </label>
                        <label>
                          CRM & Client Records <span className="opt">*</span>
                          <select name="crmTool" value={formData.crmTool} onChange={handleChange}>
                            <option value="HubSpot">HubSpot</option>
                            <option value="Salesforce">Salesforce</option>
                            <option value="Dubsado">Dubsado</option>
                            <option value="HoneyBook">HoneyBook</option>
                            <option value="ActiveCampaign">ActiveCampaign</option>
                            <option value="Other">Other</option>
                          </select>
                        </label>
                        <label>
                          Invoicing & Bookkeeping <span className="opt">*</span>
                          <select name="bookkeepingTool" value={formData.bookkeepingTool} onChange={handleChange}>
                            <option value="QuickBooks Online">QuickBooks Online</option>
                            <option value="Xero">Xero</option>
                            <option value="FreshBooks">FreshBooks</option>
                            <option value="Stripe">Stripe</option>
                            <option value="Other">Other</option>
                          </select>
                        </label>
                        <label>
                          Email & Workspace Suite <span className="opt">*</span>
                          <select name="workspaceSuite" value={formData.workspaceSuite} onChange={handleChange}>
                            <option value="Google Workspace">Google Workspace</option>
                            <option value="Microsoft 365">Microsoft 365</option>
                            <option value="Other">Other</option>
                          </select>
                        </label>
                        <label>
                          Password Manager <span className="opt">*</span>
                          <select name="passwordManager" value={formData.passwordManager} onChange={handleChange}>
                            <option value="1Password">1Password</option>
                            <option value="Bitwarden">Bitwarden</option>
                            <option value="LastPass">LastPass</option>
                            <option value="Keeper">Keeper</option>
                            <option value="Other">Other vault</option>
                          </select>
                        </label>
                        <label>
                          Two-Factor Authentication (2FA) <span className="opt">*</span>
                          <input type="text" name="twoFactorAuth" required value={formData.twoFactorAuth} onChange={handleChange} placeholder="How 2FA codes are handled" />
                        </label>
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="lp-form-step">
                      <h3>
                        <FileText size={20} style={{ display: 'inline', marginRight: '0.5rem', color: 'var(--teal-d)' }} />
                        Section 4: SOPs & Brand Guidelines
                      </h3>
                      <div className="lp-form-grid">
                        <label style={{ gridColumn: '1 / -1' }}>
                          Existing Documentation (SOPs, Loom recordings) <span className="opt">*</span>
                          <select name="existingSops" value={formData.existingSops} onChange={handleChange}>
                            <option value="Partially documented">Partially documented</option>
                            <option value="Yes, fully documented">Yes, fully documented</option>
                            <option value="Not yet documented">Not yet documented</option>
                          </select>
                        </label>
                        <label style={{ gridColumn: '1 / -1' }}>
                          Link to Documentation Repository <span className="opt">(optional)</span>
                          <input type="url" name="sopsLink" value={formData.sopsLink} onChange={handleChange} placeholder="https://example.com/docs" />
                        </label>
                        <label>
                          Preferred Tone for External Communications <span className="opt">*</span>
                          <select name="tonePreference" value={formData.tonePreference} onChange={handleChange}>
                            <option value="Professional, polished, and direct">Professional, polished, and direct</option>
                            <option value="Warm, casual, and conversational">Warm, casual, and conversational</option>
                            <option value="Formal and corporate">Formal and corporate</option>
                          </select>
                        </label>
                        <label>
                          Approval & Autonomy Thresholds <span className="opt">*</span>
                          <select name="approvalThreshold" value={formData.approvalThreshold} onChange={handleChange}>
                            <option value="Draft first for approval">Draft first for approval during initial weeks</option>
                            <option value="Full autonomy within established guidelines">Full autonomy within established guidelines</option>
                            <option value="Always require explicit approval before sending">Always require explicit approval before sending</option>
                          </select>
                        </label>
                      </div>
                    </div>
                  )}

                  {step === 5 && (
                    <div className="lp-form-step">
                      <h3>
                        <Target size={20} style={{ display: 'inline', marginRight: '0.5rem', color: 'var(--teal-d)' }} />
                        Section 5: Immediate Priorities & First Sprint Goals
                      </h3>
                      <div className="lp-form-grid">
                        <label style={{ gridColumn: '1 / -1' }}>
                          Quick Win #1 (Top bottleneck for week 1) <span className="opt">*</span>
                          <input type="text" name="quickWin1" required value={formData.quickWin1} onChange={handleChange} placeholder="First priority task or bottleneck" />
                        </label>
                        <label style={{ gridColumn: '1 / -1' }}>
                          Quick Win #2 <span className="opt">(optional)</span>
                          <input type="text" name="quickWin2" value={formData.quickWin2} onChange={handleChange} placeholder="Second priority task" />
                        </label>
                        <label style={{ gridColumn: '1 / -1' }}>
                          Quick Win #3 <span className="opt">(optional)</span>
                          <input type="text" name="quickWin3" value={formData.quickWin3} onChange={handleChange} placeholder="Third priority task" />
                        </label>
                        <label style={{ gridColumn: '1 / -1' }}>
                          Imminent Deadlines / Key Deliverables <span className="opt">(optional)</span>
                          <input type="text" name="imminentDeadlines" value={formData.imminentDeadlines} onChange={handleChange} placeholder="Upcoming dates or deadlines" />
                        </label>
                        <label style={{ gridColumn: '1 / -1' }}>
                          Additional Notes or Context <span className="opt">(optional)</span>
                          <textarea name="additionalNotes" rows="3" value={formData.additionalNotes} onChange={handleChange} placeholder="Additional context or preferences..."></textarea>
                        </label>
                      </div>
                    </div>
                  )}

                  <div className="lp-intake-nav-buttons">
                    {step > 1 && (
                      <button type="button" onClick={prevStep} className="lp-btn ghost" style={{ color: 'var(--navy)', borderColor: 'var(--rule)' }}>
                        <ArrowLeft size={16} /> Previous
                      </button>
                    )}
                    {step < totalSteps ? (
                      <button type="button" onClick={nextStep} className="lp-btn" style={{ marginLeft: 'auto' }}>
                        Next Section <ArrowRight size={16} />
                      </button>
                    ) : (
                      <button type="submit" disabled={submitting} className="lp-btn" style={{ marginLeft: 'auto' }}>
                        {submitting ? 'Submitting...' : 'Complete & Submit Questionnaire'} <ArrowRight size={16} />
                      </button>
                    )}
                  </div>
                </form>

                <aside className="lp-aside">
                  <h3>Onboarding Standards</h3>
                  <ul>
                    <li>
                      <Clock size={18} />
                      <span><strong>Sprint Mapping:</strong> Your responses directly configure your dedicated project board and daily task queue.</span>
                    </li>
                    <li>
                      <Shield size={18} />
                      <span><strong>Strict Security:</strong> Credential sharing is managed exclusively through encrypted password vaults.</span>
                    </li>
                    <li>
                      <CheckCircle2 size={18} />
                      <span><strong>Ready for Kickoff:</strong> Once submitted, we will review your tech stack and confirm your exact deployment date.</span>
                    </li>
                  </ul>
                </aside>
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}