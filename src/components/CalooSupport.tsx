import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, ExternalLink, CheckCircle, Camera, Sparkles, Leaf } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const SUPPORT_EMAIL = 'oppopp1313@gmail.com';
const APP_STORE_URL = 'https://apps.apple.com/tw/app/caloo-%E6%A5%B5%E7%B0%A1%E5%8D%A1%E8%B7%AF%E9%87%8C%E7%B4%80%E9%8C%84/id6742639699';

const FEATURE_ICONS = [Camera, Sparkles, Leaf];

const CalooSupport = () => {
  const { t } = useLanguage();
  const cs = t.calooSupport;
  const [mounted, setMounted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'bug',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    requestAnimationFrame(() => setMounted(true));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const categoryLabel = cs.form.categories[formData.category as keyof typeof cs.form.categories];
    const subject = encodeURIComponent(`[Caloo ${categoryLabel}] ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCategory: ${categoryLabel}\n\n${formData.message}`
    );
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', category: 'bug', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#060606] relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-[30vh] -right-[20vw] w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full opacity-[0.07]"
          style={{
            background: 'radial-gradient(circle, #34d399 0%, #06b6d4 40%, transparent 70%)',
            animation: 'orbFloat 20s ease-in-out infinite',
          }}
        />
        <div
          className="absolute top-[60vh] -left-[15vw] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, #a78bfa 0%, #6366f1 40%, transparent 70%)',
            animation: 'orbFloat 25s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute top-[140vh] right-[5vw] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, #2dd4bf 0%, #10b981 40%, transparent 70%)',
            animation: 'orbFloat 18s ease-in-out infinite',
          }}
        />
      </div>

      <div className="grain-overlay" />

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          {/* Back link */}
          <div
            className={`absolute top-10 left-6 lg:left-16 xl:left-24 transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs text-zinc-600 hover:text-emerald-400 transition-colors duration-300 group tracking-[0.2em] uppercase font-medium"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
              {cs.backHome}
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen py-32">
            {/* Left: text */}
            <div className="lg:col-span-7 xl:col-span-6">
              <div
                className={`transition-all duration-700 delay-100 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <span className="text-[10px] tracking-[0.4em] uppercase text-emerald-400/70 font-bold block mb-6">
                  {cs.heroTag}
                </span>
              </div>

              <div
                className={`transition-all duration-700 delay-200 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <h1 className="mb-2">
                  <span
                    className="text-[clamp(4rem,10vw,8rem)] font-serif font-bold leading-[0.9] tracking-tight block"
                    style={{
                      background: 'linear-gradient(135deg, #ffffff 0%, #a7f3d0 50%, #6ee7b7 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {cs.title}
                  </span>
                </h1>
              </div>

              <div
                className={`transition-all duration-700 delay-300 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-zinc-300 leading-snug mt-6 whitespace-pre-line">
                  {cs.heroLine}
                </p>
              </div>

              <div
                className={`transition-all duration-700 delay-[400ms] ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <p className="text-base text-zinc-500 leading-relaxed mt-8 max-w-lg">
                  {cs.heroDesc}
                </p>
              </div>

              <div
                className={`flex flex-wrap items-center gap-4 mt-10 transition-all duration-700 delay-500 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 text-black font-bold tracking-widest uppercase text-xs overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {cs.appStore} <ExternalLink size={13} />
                  </span>
                  <div className="absolute inset-0 bg-emerald-300 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </a>
              </div>

              {/* Badges */}
              <div
                className={`flex gap-6 mt-8 transition-all duration-700 delay-[600ms] ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {[cs.free, cs.noAds, cs.rating].map((badge, i) => (
                  <span
                    key={i}
                    className="text-[10px] tracking-[0.25em] uppercase text-zinc-500 font-bold border border-zinc-800 px-3 py-1.5"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: decorative app mockup silhouette */}
            <div className="lg:col-span-5 xl:col-span-6 hidden lg:flex justify-center items-center">
              <div
                className={`relative transition-all duration-1000 delay-500 ${
                  mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
                }`}
              >
                <div className="relative w-[280px] h-[560px]">
                  {/* Phone frame */}
                  <div
                    className="absolute inset-0 rounded-[3rem] border border-zinc-700/50"
                    style={{
                      background: 'linear-gradient(180deg, rgba(16,185,129,0.06) 0%, rgba(6,6,6,0.8) 50%, rgba(16,185,129,0.03) 100%)',
                      boxShadow: '0 0 80px rgba(16,185,129,0.08), inset 0 1px 0 rgba(255,255,255,0.05)',
                    }}
                  />
                  {/* Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#060606] rounded-full border border-zinc-800/50" />
                  {/* Screen content mockup */}
                  <div className="absolute inset-6 top-14 flex flex-col gap-4 p-4">
                    <div className="h-3 w-16 bg-emerald-500/20 rounded-full" />
                    <div className="h-2 w-24 bg-zinc-700/30 rounded-full" />
                    <div className="mt-4 flex-1 rounded-2xl border border-zinc-700/20 bg-zinc-800/10 flex flex-col items-center justify-center gap-3 p-4">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                        <Camera size={24} className="text-emerald-500/50" />
                      </div>
                      <div className="h-2 w-20 bg-zinc-700/30 rounded-full" />
                      <div className="h-2 w-14 bg-zinc-700/20 rounded-full" />
                    </div>
                    <div className="space-y-2.5">
                      {[0.6, 0.8, 0.4].map((w, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-lg bg-zinc-700/20 flex-shrink-0" />
                          <div className="flex-1 space-y-1.5">
                            <div className="h-2 bg-zinc-700/30 rounded-full" style={{ width: `${w * 100}%` }} />
                            <div className="h-1.5 w-12 bg-zinc-700/15 rounded-full" />
                          </div>
                          <div className="h-2 w-8 bg-emerald-500/15 rounded-full flex-shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Home indicator */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-28 h-1 bg-zinc-600/30 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll line */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="relative py-32 lg:py-40">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="mb-20">
            <span className="text-[10px] tracking-[0.4em] uppercase text-emerald-400/70 font-bold block mb-4">
              {cs.intro.tag}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
              {cs.intro.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {cs.intro.features.map((feature, i) => {
              const Icon = FEATURE_ICONS[i];
              return (
                <div
                  key={i}
                  className="group relative p-8 lg:p-10 border border-white/[0.04] hover:border-emerald-500/20 transition-all duration-700 bg-white/[0.01] hover:bg-emerald-500/[0.02]"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Corner accent */}
                  <div className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-0 left-0 w-px h-8 bg-gradient-to-b from-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="w-12 h-12 border border-zinc-800 flex items-center justify-center mb-8 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/5 transition-all duration-500">
                    <Icon size={20} className="text-zinc-500 group-hover:text-emerald-400 transition-colors duration-500" />
                  </div>

                  <span className="text-[9px] tracking-[0.3em] uppercase text-zinc-600 font-bold block mb-3">
                    {feature.subtitle}
                  </span>
                  <h3 className="text-xl font-serif text-white mb-4 group-hover:text-emerald-50 transition-colors duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors duration-500">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FEEDBACK FORM ===== */}
      <section className="relative py-32 lg:py-40 border-t border-white/[0.03]">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left: context */}
            <div className="lg:col-span-5">
              <span className="text-[10px] tracking-[0.4em] uppercase text-emerald-400/70 font-bold block mb-4">
                {cs.form.tag}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-6">
                {cs.form.title}
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-12">
                {cs.form.desc}
              </p>

              {/* Email */}
              <div className="border border-white/[0.04] p-8 bg-white/[0.01]">
                <span className="text-[9px] tracking-[0.3em] uppercase text-zinc-600 font-bold block mb-3">
                  Email
                </span>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-lg font-serif text-white hover:text-emerald-400 transition-colors duration-500 underline underline-offset-8 decoration-white/10 decoration-1"
                >
                  {SUPPORT_EMAIL}
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-7">
              <div
                className="relative p-8 lg:p-12 border border-white/[0.04] bg-white/[0.015]"
                style={{
                  boxShadow: '0 0 120px rgba(16,185,129,0.02)',
                }}
              >
                {submitted && (
                  <div className="mb-8 flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 px-5 py-4 text-emerald-400 text-sm">
                    <CheckCircle size={18} />
                    {cs.form.success}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="relative group">
                      <label className="text-[9px] tracking-[0.3em] uppercase text-zinc-600 font-bold block mb-3">
                        {cs.form.name}
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-transparent border-b border-white/[0.08] py-3 text-white text-sm focus:border-emerald-400/60 focus:outline-none transition-all duration-500 placeholder:text-zinc-800"
                        placeholder="—"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="relative group">
                      <label className="text-[9px] tracking-[0.3em] uppercase text-zinc-600 font-bold block mb-3">
                        {cs.form.email}
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-transparent border-b border-white/[0.08] py-3 text-white text-sm focus:border-emerald-400/60 focus:outline-none transition-all duration-500 placeholder:text-zinc-800"
                        placeholder="—"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[9px] tracking-[0.3em] uppercase text-zinc-600 font-bold block mb-4">
                      {cs.form.category}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {(Object.entries(cs.form.categories) as [string, string][]).map(([key, label]) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setFormData({ ...formData, category: key })}
                          className={`px-4 py-2.5 text-[10px] tracking-[0.2em] uppercase font-bold border transition-all duration-400 ${
                            formData.category === key
                              ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400'
                              : 'border-white/[0.06] text-zinc-600 hover:border-white/[0.12] hover:text-zinc-400'
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="text-[9px] tracking-[0.3em] uppercase text-zinc-600 font-bold block mb-3">
                      {cs.form.message}
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full bg-transparent border-b border-white/[0.08] py-3 text-white text-sm focus:border-emerald-400/60 focus:outline-none transition-all duration-500 placeholder:text-zinc-800 resize-none"
                      placeholder="—"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold tracking-widest uppercase text-xs overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {cs.form.submit} <Send size={13} />
                    </span>
                    <div className="absolute inset-0 bg-emerald-400 translate-y-full group-hover:translate-y-0 transition-transform duration-400" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative border-t border-white/[0.03] py-12">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-700 text-[10px] tracking-[0.3em] uppercase font-bold">
            Caloo &copy; 2025 by Navia Studio
          </p>
          <Link
            to="/"
            className="text-zinc-700 text-[10px] tracking-[0.3em] uppercase font-bold hover:text-emerald-400 transition-colors duration-300"
          >
            NAVIA STUDIO
          </Link>
        </div>
      </footer>

      {/* Keyframe animations */}
      <style>{`
        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
      `}</style>
    </div>
  );
};

export default CalooSupport;
