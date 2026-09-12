import React, { useState, useRef } from 'react';
import {
  Mail,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { InquiryFormData } from '../types';
import {
  GOOGLE_APPS_SCRIPT_URL,
  CONCEPTA_EMAIL,
  CONCEPTA_WHATSAPP_DISPLAY,
  CONCEPTA_WHATSAPP_CLEAN,
} from '../config/appConfig';

interface ContactSectionProps {
  initialService?: string;
  initialIndustry?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService,
  initialIndustry,
}) => {
  const serviceOptions = [
    'Marketing',
    'Paid Ads',
    'Design',
    'Editing',
    'Sales',
  ];

  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    businessName: '',
    email: '',
    phoneOrWhatsapp: '',
    servicesNeeded: initialService ? [initialService] : [],
    message: initialIndustry ? `Looking to grow our ${initialIndustry} business.` : '',
  });

  // Anti-Spam Honeypot field (hidden from real visitors)
  const [websiteHp, setWebsiteHp] = useState('');

  // Field validation errors
  const [formErrors, setFormErrors] = useState<{
    name?: string;
    businessName?: string;
    email?: string;
  }>({});

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  // Duplicate submission throttle
  const lastSubmitTimeRef = useRef<number>(0);

  // Concepta contact details
  const agencyEmail = CONCEPTA_EMAIL;
  const whatsappDisplayNumber = CONCEPTA_WHATSAPP_DISPLAY;
  const whatsappCleanNumber = CONCEPTA_WHATSAPP_CLEAN;
  const whatsappUrl = `https://wa.me/${whatsappCleanNumber}?text=${encodeURIComponent(
    "Hi Concepta team, I'd like to discuss creative marketing and growth for my business."
  )}`;

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.servicesNeeded.includes(service);
      return {
        ...prev,
        servicesNeeded: exists
          ? prev.servicesNeeded.filter((s) => s !== service)
          : [...prev.servicesNeeded, service],
      };
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(agencyEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validateForm = () => {
    const errors: { name?: string; businessName?: string; email?: string } = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Please enter your name.';
    }

    if (!formData.businessName.trim()) {
      errors.businessName = 'Please enter your business name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid work email address.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent duplicate clicks if already processing
    if (isSubmitting) return;

    // Prevent accidental rapid duplicate submissions (within 3 seconds)
    const now = Date.now();
    if (now - lastSubmitTimeRef.current < 3000) {
      return;
    }

    // Reset previous error state
    setSubmissionError(null);

    // 1. Anti-Spam Honeypot check
    // If the hidden website_hp field has been populated, silently reject bot
    if (websiteHp.trim().length > 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 500);
      return;
    }

    // 2. Validate required fields
    const isValid = validateForm();
    if (!isValid) {
      return;
    }

    setIsSubmitting(true);
    lastSubmitTimeRef.current = now;

    try {
      const payload = {
        name: formData.name.trim(),
        businessName: formData.businessName.trim(),
        email: formData.email.trim(),
        phoneOrWhatsapp: formData.phoneOrWhatsapp.trim(),
        servicesNeeded: formData.servicesNeeded,
        message: formData.message.trim(),
        website_hp: websiteHp,
      };

      const isConfigured =
        GOOGLE_APPS_SCRIPT_URL &&
        GOOGLE_APPS_SCRIPT_URL.startsWith('http') &&
        !GOOGLE_APPS_SCRIPT_URL.includes('PASTE_YOUR_');

      if (isConfigured) {
        // Send directly to Google Apps Script Web App
        // Note: Content-Type: 'text/plain;charset=utf-8' prevents the browser from triggering
        // an HTTP OPTIONS preflight request, which Google Apps Script does not support.
        const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`Server returned status ${response.status}`);
        }

        const result = await response.json();
        if (!result || !result.success) {
          throw new Error(result?.message || 'Unable to send inquiry');
        }
      } else {
        // Fallback simulation when Google Apps Script URL has not been pasted yet
        // This ensures the site remains functional and demonstrable in preview mode
        await new Promise((resolve) => setTimeout(resolve, 850));
        console.info(
          '[Concepta Lead System] Google Apps Script URL not configured yet. Set GOOGLE_APPS_SCRIPT_URL in src/config/appConfig.ts to receive live emails in your Gmail inbox.'
        );
      }

      // 3. Success state
      setSubmitted(true);
      setFormData({
        name: '',
        businessName: '',
        email: '',
        phoneOrWhatsapp: '',
        servicesNeeded: [],
        message: '',
      });
      setFormErrors({});
      setSubmissionError(null);
    } catch (err: any) {
      console.error('Lead submission failure:', err);
      // 4. Failure state: Do NOT clear the form, show requested error message
      setSubmissionError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-black border-t border-zinc-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact info, WhatsApp, Email, Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <span className="text-violet-500 font-mono text-xs tracking-widest uppercase font-semibold">
                  Get In Touch
                </span>
              </div>

              <h2
                id="contact-heading"
                className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
              >
                Let's Talk.
              </h2>

              <p
                id="contact-copy"
                className="mt-4 text-lg text-gray-400 font-normal leading-relaxed"
              >
                Have a project, idea, or business that you want to grow? Reach out directly or fill out the quick brief.
              </p>

              {/* Direct channels */}
              <div className="mt-10 space-y-4">
                {/* WhatsApp */}
                <a
                  id="contact-whatsapp-link"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4.5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-emerald-500/60 hover:bg-zinc-900/90 shadow-lg hover:shadow-emerald-500/10 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-5 h-5 fill-emerald-500/20 text-emerald-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs text-emerald-400 font-mono tracking-wide font-medium">
                          Concepta WhatsApp Business
                        </span>
                      </div>
                      <span className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors block mt-0.5">
                        {whatsappDisplayNumber}
                      </span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-300 group-hover:bg-emerald-500 group-hover:text-black group-hover:border-emerald-400 transition-all duration-200 shrink-0">
                    <span>Chat Now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </a>

                {/* Email */}
                <div
                  id="contact-email-card"
                  className="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-violet-500/50 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs text-gray-400 font-mono block">Direct Email</span>
                      <a
                        href={`mailto:${agencyEmail}`}
                        className="text-sm sm:text-base font-semibold text-white hover:text-violet-300 transition-colors truncate block"
                      >
                        {agencyEmail}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer shrink-0 ml-2"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 shadow-lg">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-300 font-semibold flex items-center justify-between mb-3.5">
                  <span className="flex items-center gap-2">
                    <span className="text-violet-400">Official Social Media</span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-zinc-300 font-mono lowercase tracking-normal font-medium">
                      @growwithconcepta
                    </span>
                  </span>
                  <span className="text-[11px] text-gray-500 font-mono lowercase tracking-normal hidden sm:inline-block">
                    follow & connect
                  </span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <a
                    id="contact-social-instagram"
                    href="https://instagram.com/growwithconcepta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-zinc-800/80 border border-zinc-700/50 hover:border-pink-500/60 hover:bg-zinc-800 transition-all duration-200 group/soc"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 shrink-0 group-hover/soc:scale-105 transition-transform">
                        <Instagram className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-white group-hover/soc:text-pink-300 transition-colors block truncate">
                          Instagram
                        </span>
                        <span className="text-[11px] text-gray-400 font-mono block truncate">
                          @growwithconcepta
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover/soc:text-pink-400 group-hover/soc:translate-x-0.5 transition-all shrink-0 ml-1.5" />
                  </a>

                  <a
                    id="contact-social-facebook"
                    href="https://facebook.com/growwithconcepta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-zinc-800/80 border border-zinc-700/50 hover:border-blue-500/60 hover:bg-zinc-800 transition-all duration-200 group/soc"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover/soc:scale-105 transition-transform">
                        <Facebook className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-white group-hover/soc:text-blue-300 transition-colors block truncate">
                          Facebook
                        </span>
                        <span className="text-[11px] text-gray-400 font-mono block truncate">
                          @growwithconcepta
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover/soc:text-blue-400 group-hover/soc:translate-x-0.5 transition-all shrink-0 ml-1.5" />
                  </a>

                  <a
                    id="contact-social-linkedin"
                    href="https://linkedin.com/company/growwithconcepta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-zinc-800/80 border border-zinc-700/50 hover:border-sky-500/60 hover:bg-zinc-800 transition-all duration-200 group/soc"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0 group-hover/soc:scale-105 transition-transform">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-white group-hover/soc:text-sky-300 transition-colors block truncate">
                          LinkedIn
                        </span>
                        <span className="text-[11px] text-gray-400 font-mono block truncate">
                          @growwithconcepta
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover/soc:text-sky-400 group-hover/soc:translate-x-0.5 transition-all shrink-0 ml-1.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-900 text-xs font-mono text-gray-500">
              <span>Concepta Agency • Response time usually under 4 business hours</span>
            </div>
          </div>

          {/* Right Column: Simple Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-zinc-900/50 border border-zinc-800 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-emerald-500/10">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Inquiry Received!
                  </h3>
                  <p className="mt-4 text-base text-gray-300 max-w-lg mx-auto leading-relaxed">
                    Thank you! Your inquiry has been sent successfully. Our team will get back to you shortly.
                  </p>
                  <p className="mt-2 text-xs font-mono text-violet-400">
                    A copy of your lead has been forwarded directly to Concepta's Gmail inbox.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      id="send-another-message-btn"
                      onClick={() => {
                        setSubmitted(false);
                        setSubmissionError(null);
                        setFormErrors({});
                        setFormData({
                          name: '',
                          businessName: '',
                          email: '',
                          phoneOrWhatsapp: '',
                          servicesNeeded: [],
                          message: '',
                        });
                      }}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700/50 transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
                    >
                      <span>Send Another Inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-950/60 border border-emerald-700/40 transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form id="contact-inquiry-form" onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">
                      Start an Inquiry
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      Fill out the fields below and our team will get back to you with next steps.
                    </p>
                  </div>

                  {/* Submission Error Banner */}
                  {submissionError && (
                    <div
                      id="submission-error-banner"
                      className="p-4 rounded-2xl bg-rose-950/40 border border-rose-800/60 text-rose-200 text-sm flex flex-col gap-3"
                    >
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-rose-300">{submissionError}</p>
                          <p className="text-xs text-rose-200/80 mt-1">
                            Your filled information is preserved below so you can try submitting again or reach out directly.
                          </p>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-rose-900/50 flex flex-wrap items-center gap-3 text-xs">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp: {whatsappDisplayNumber}</span>
                        </a>
                        <a
                          href={`mailto:${agencyEmail}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-500/20 text-violet-300 border border-violet-500/30 hover:bg-violet-500/30 transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Direct Email: {agencyEmail}</span>
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Anti-Spam Honeypot (hidden from real visitors) */}
                  <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                    <label htmlFor="form-website-hp">Website Security Field</label>
                    <input
                      id="form-website-hp"
                      type="text"
                      name="website_hp"
                      tabIndex={-1}
                      autoComplete="off"
                      value={websiteHp}
                      onChange={(e) => setWebsiteHp(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="form-name"
                        className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                        }}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-3.5 rounded-xl bg-zinc-800 border text-white placeholder-gray-500 text-sm focus:outline-none transition-colors ${
                          formErrors.name
                            ? 'border-rose-500 focus:border-rose-400'
                            : 'border-zinc-700/50 focus:border-violet-500'
                        }`}
                      />
                      {formErrors.name && (
                        <span className="text-[11px] font-mono text-rose-400 mt-1 block">
                          {formErrors.name}
                        </span>
                      )}
                    </div>

                    {/* Business Name */}
                    <div>
                      <label
                        htmlFor="form-business"
                        className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2"
                      >
                        Business Name *
                      </label>
                      <input
                        id="form-business"
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => {
                          setFormData({ ...formData, businessName: e.target.value });
                          if (formErrors.businessName)
                            setFormErrors({ ...formErrors, businessName: undefined });
                        }}
                        placeholder="e.g. Ember & Spice"
                        className={`w-full px-4 py-3.5 rounded-xl bg-zinc-800 border text-white placeholder-gray-500 text-sm focus:outline-none transition-colors ${
                          formErrors.businessName
                            ? 'border-rose-500 focus:border-rose-400'
                            : 'border-zinc-700/50 focus:border-violet-500'
                        }`}
                      />
                      {formErrors.businessName && (
                        <span className="text-[11px] font-mono text-rose-400 mt-1 block">
                          {formErrors.businessName}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="form-email"
                        className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2"
                      >
                        Work Email *
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (formErrors.email) setFormErrors({ ...formErrors, email: undefined });
                        }}
                        placeholder="you@company.com"
                        className={`w-full px-4 py-3.5 rounded-xl bg-zinc-800 border text-white placeholder-gray-500 text-sm focus:outline-none transition-colors ${
                          formErrors.email
                            ? 'border-rose-500 focus:border-rose-400'
                            : 'border-zinc-700/50 focus:border-violet-500'
                        }`}
                      />
                      {formErrors.email && (
                        <span className="text-[11px] font-mono text-rose-400 mt-1 block">
                          {formErrors.email}
                        </span>
                      )}
                    </div>

                    {/* Phone / WhatsApp */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label
                          htmlFor="form-phone"
                          className="block text-xs font-mono uppercase tracking-wider text-gray-400"
                        >
                          Phone or WhatsApp
                        </label>
                        <span className="text-[10px] font-mono text-gray-500 uppercase">Optional</span>
                      </div>
                      <input
                        id="form-phone"
                        type="tel"
                        value={formData.phoneOrWhatsapp}
                        onChange={(e) =>
                          setFormData({ ...formData, phoneOrWhatsapp: e.target.value })
                        }
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3.5 rounded-xl bg-zinc-800 border border-zinc-700/50 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* What do you need help with? */}
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-400">
                        What Do You Need Help With?
                      </label>
                      <span className="text-[10px] font-mono text-gray-500">Multi-select</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((service) => {
                        const isSelected = formData.servicesNeeded.includes(service);
                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => handleServiceToggle(service)}
                            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer ${
                              isSelected
                                ? 'bg-violet-600 text-white border border-violet-500 shadow-md shadow-violet-600/20'
                                : 'bg-zinc-800 text-gray-300 border border-zinc-700/50 hover:border-zinc-600 hover:text-white'
                            }`}
                          >
                            {isSelected ? '✓ ' : '+ '}
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="form-message"
                        className="block text-xs font-mono uppercase tracking-wider text-gray-400"
                      >
                        Message
                      </label>
                      <span className="text-[10px] font-mono text-gray-500 uppercase">Optional</span>
                    </div>
                    <textarea
                      id="form-message"
                      rows={3}
                      maxLength={5000}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us a little about your brand, current challenges, and goals..."
                      className="w-full px-4 py-3.5 rounded-xl bg-zinc-800 border border-zinc-700/50 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-inquiry-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-bold text-white bg-violet-600 hover:bg-violet-500 shadow-lg shadow-violet-600/25 transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed group/submit"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin text-white" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-violet-200 group-hover/submit:translate-x-0.5 transition-transform" />
                        <span>Send Inquiry</span>
                        <ArrowRight className="w-4 h-4 text-violet-200 group-hover/submit:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
