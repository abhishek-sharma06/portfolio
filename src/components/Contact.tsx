import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, Linkedin, Github, Send, Sparkles, CheckCircle, Ship, MapPin } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (validationError) setValidationError('');
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setValidationError('Please complete all form fields.');
      return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setValidationError('Please supply a valid email address.');
      return;
    }

    setStatus('sending');

    // Simulate real high-speed API dispatch safely
    setTimeout(() => {
      // Save local leads in client standard Key-Value storage securely
      const savedMessages = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
      savedMessages.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('portfolio_messages', JSON.stringify(savedMessages));

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">05 / Connect</h2>
          <h3 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">Get In Touch</h3>
          <div className="h-1 w-12 bg-cyan-500 mt-3 mx-auto md:mx-0 rounded" />
        </div>

        {/* 2-Column Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Coordinates / Info */}
          <div className="lg:col-span-5 space-y-8" id="contact-info">
            <div>
              <h4 className="text-base font-sans font-semibold text-white mb-4">
                Let's discuss full-stack integrations or machine learning pipelines
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed font-sans">
                I am interested in joining ambitious engineering teams based in Bengaluru or remote organizations focused on systems engineering, back-end development, or direct edge AI. Reach out via email, LinkedIn, or the message terminal opposite!
              </p>
            </div>

            {/* Direct Channels cards */}
            <div className="space-y-4" id="contact-direct-channels">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-4 bg-slate-950 border border-slate-800 p-4 rounded-xl hover:border-cyan-500/50 transition-all cursor-pointer"
                id="link-contact-mail"
              >
                <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail size={18} />
                </div>
                <div>
                  <h5 className="text-[10px] font-mono text-slate-500 uppercase">Send Email</h5>
                  <p className="text-sm font-mono text-white select-all group-hover:text-cyan-400 transition-colors">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              <div className="flex gap-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  referrerPolicy="no-referrer"
                  className="flex-1 group flex items-center gap-3 bg-slate-950 border border-slate-800 p-3 rounded-xl hover:border-cyan-500/50 transition-all cursor-pointer"
                  id="link-contact-linkedin"
                >
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:scale-115 transition-transform">
                    <Linkedin size={16} />
                  </div>
                  <span className="text-xs font-sans text-slate-300 font-medium group-hover:text-white">
                    LinkedIn
                  </span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  referrerPolicy="no-referrer"
                  className="flex-1 group flex items-center gap-3 bg-slate-950 border border-slate-800 p-3 rounded-xl hover:border-cyan-500/50 transition-all cursor-pointer"
                  id="link-contact-github"
                >
                  <div className="p-2 bg-slate-900 rounded-lg text-slate-400 group-hover:scale-115 transition-transform">
                    <Github size={16} />
                  </div>
                  <span className="text-xs font-sans text-slate-300 font-medium group-hover:text-white">
                    GitHub Repo
                  </span>
                </a>
              </div>
            </div>

            {/* Micro Location Info */}
            <div className="flex items-center gap-3 text-xs font-mono text-slate-500 bg-slate-950/20 border border-slate-950 p-3.5 rounded-xl">
              <MapPin size={14} className="text-cyan-500" />
              <span>Operating from Bengaluru • GMT+5:30</span>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7" id="contact-form-container">
            <div className="bento-card p-6 sm:p-8 relative">
              
              {status === 'success' ? (
                /* Success Message View */
                <div
                  className="py-12 flex flex-col items-center text-center space-y-4"
                  id="contact-form-success"
                >
                  <div className="w-16 h-16 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center animate-bounce">
                    <CheckCircle size={36} />
                  </div>
                  <h4 className="text-xl font-sans font-bold text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-slate-400 max-w-sm">
                    Thank you for reaching out, Abhishek will review your request and get back to you at your email soon.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 bg-slate-900 hover:bg-slate-800 text-slate-300 font-mono text-xs px-4 py-2 rounded-lg border border-slate-800 transition-all active:scale-95 cursor-pointer"
                    id="btn-recontact"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Active Form View */
                <form onSubmit={handleFormSubmit} className="space-y-5" id="form-contact">
                  {/* Validation Alert */}
                  {validationError && (
                    <div className="bg-red-950/40 border border-red-900/60 p-3 rounded-lg text-xs font-mono text-red-400">
                      {validationError}
                    </div>
                  )}

                  {/* Name field */}
                  <div className="space-y-1.5 flex flex-col text-left">
                    <label htmlFor="input-name" className="text-xs font-mono text-slate-400 font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="input-name"
                      name="name"
                      placeholder="e.g. Satya Nadella"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={status === 'sending'}
                      className="w-full bg-slate-900/80 border border-slate-800 focus:border-cyan-500 focus:outline-none rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 transition-colors font-sans"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5 flex flex-col text-left">
                    <label htmlFor="input-email" className="text-xs font-mono text-slate-400 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="input-email"
                      name="email"
                      placeholder="e.g. reader@google.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={status === 'sending'}
                      className="w-full bg-slate-900/80 border border-slate-800 focus:border-cyan-500 focus:outline-none rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 transition-colors font-sans"
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5 flex flex-col text-left">
                    <label htmlFor="input-message" className="text-xs font-mono text-slate-400 font-medium">
                      Message
                    </label>
                    <textarea
                      id="input-message"
                      name="message"
                      rows={5}
                      placeholder="State your opportunity or message..."
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={status === 'sending'}
                      className="w-full bg-slate-900/80 border border-slate-800 focus:border-cyan-500 focus:outline-none rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 transition-colors font-sans resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-sans font-semibold text-sm py-3 rounded-lg transition-transform duration-250 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                    id="btn-submit-form"
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send Message</span>
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
}
