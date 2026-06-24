import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare
} from 'lucide-react';

/* ─────────────────────────────────────────
   DATA — ganti dengan info perusahaan asli
───────────────────────────────────────── */
const CONTACT_INFO = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'hello@hawkinsvalkyrie.id',
    link: 'mailto:hello@hawkinsvalkyrie.id',
    accent: '#6D28D9',
    bg: 'rgba(109,40,217,0.12)',
  },
  {
    icon: <Phone size={18} />,
    label: 'WhatsApp',
    value: '+62 813 8660 7123',
    link: 'https://wa.me/6281386607123',
    accent: '#0D9488',
    bg: 'rgba(13,148,136,0.12)',
  },
  {
    icon: <MapPin size={18} />,
    label: 'Lokasi',
    value: 'Jakarta, Indonesia',
    link: null,
    accent: '#2563EB',
    bg: 'rgba(37,99,235,0.12)',
  },
  {
    icon: <Clock size={18} />,
    label: 'Jam Respons',
    value: 'Dalam 24 jam',
    link: null,
    accent: '#7C3AED',
    bg: 'rgba(124,58,237,0.12)',
  },
];

/* ─────────────────────────────────────────
   VARIANTS
───────────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: 'easeOut' } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: 'easeOut' } },
};

/* ─────────────────────────────────────────
   INPUT STYLE HELPER
───────────────────────────────────────── */
const inputClass = `
  w-full rounded-xl px-4 py-3 text-sm text-[#E2E8F0]
  bg-[#0E0E18] border border-[rgba(255,255,255,0.08)]
  placeholder-[#334155] outline-none
  focus:border-violet-500 focus:ring-1 focus:ring-violet-500
  transition-colors duration-200
`;

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
const Contact = () => {
  const [form, setForm]           = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    const text = encodeURIComponent(
      `Halo, saya ${form.name}\nEmail: ${form.email}\nSubjek: ${form.subject || '-'}\n\n${form.message}`
    );
    window.open(`https://wa.me/6281386607123?text=${text}`, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 3500);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#0A0A0F] py-24 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Glow blobs */}
      <div className="absolute bottom-0 left-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(109,40,217,0.08) 0%, transparent 70%)' }} />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
            style={{
              background: 'rgba(139,92,246,0.1)',
              border: '1px solid rgba(139,92,246,0.25)',
              color: '#A78BFA',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Hubungi Kami
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-bold text-[#F8F8FC] mb-4"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(32px, 4vw, 48px)',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            Mulai Proyek Anda{' '}
            <span className="text-violet-400">Bersama Kami</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="mx-auto h-px w-48 mb-6"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.6), transparent)' }}
          />

          <motion.p
            variants={fadeUp}
            className="text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: '#8898AA' }}
          >
            Ceritakan kebutuhan bisnis Anda. Tim kami siap membantu menemukan
            solusi digital yang tepat — dari konsultasi awal hingga go-live.
          </motion.p>
        </motion.div>

        {/* ── Main Grid ── */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT — info + availability */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="space-y-5"
          >
            {/* Contact info cards */}
            <div
              className="rounded-2xl p-6 space-y-4"
              style={{ background: '#12121C', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(109,40,217,0.2)' }}
                >
                  <MessageSquare size={17} color="#A78BFA" />
                </div>
                <h3
                  className="font-semibold text-[#E2E8F0] text-base"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Informasi Kontak
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CONTACT_INFO.map((c) => (
                  <div
                    key={c.label}
                    className="rounded-xl p-4 flex items-start gap-3"
                    style={{ background: '#0E0E18', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                      style={{ background: c.bg, color: c.accent }}
                    >
                      {c.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs mb-0.5" style={{ color: '#556070' }}>{c.label}</p>
                      {c.link ? (
                        <a
                          href={c.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium break-words transition-colors hover:text-violet-400"
                          style={{ color: '#CBD5E1' }}
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium" style={{ color: '#CBD5E1' }}>{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div
              className="rounded-2xl p-6 flex items-start justify-between gap-4"
              style={{
                background: 'rgba(109,40,217,0.08)',
                border: '1px solid rgba(109,40,217,0.22)',
              }}
            >
              <div className="flex items-start gap-3">
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="mt-1 w-2.5 h-2.5 rounded-full bg-green-400 flex-shrink-0"
                />
                <div>
                  <p
                    className="font-semibold text-sm text-[#E2E8F0] mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Menerima Proyek Baru
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: '#8898AA' }}>
                    Kami saat ini terbuka untuk proyek baru, kemitraan, dan
                    kolaborasi jangka panjang. Konsultasi awal gratis.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick links — WA & Email buttons */}
            <div className="grid grid-cols-2 gap-3">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/6281386607123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white"
                style={{ background: '#0D9488' }}
              >
                <Phone size={15} />
                WhatsApp
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="mailto:hello@hawkinsvalkyrie.id"
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(139,92,246,0.35)',
                  color: '#A78BFA',
                }}
              >
                <Mail size={15} />
                Email
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="rounded-2xl p-7"
            style={{ background: '#12121C', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(109,40,217,0.2)' }}
              >
                <Send size={16} color="#A78BFA" />
              </div>
              <div>
                <h3
                  className="font-semibold text-[#E2E8F0] text-base"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Kirim Pesan
                </h3>
                <p className="text-xs" style={{ color: '#556070' }}>
                  Kami akan merespons dalam 24 jam
                </p>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                /* ── Success state ── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  className="flex flex-col items-center justify-center py-16 gap-4"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(13,148,136,0.15)' }}
                  >
                    <CheckCircle size={28} color="#2DD4BF" />
                  </div>
                  <div className="text-center">
                    <p
                      className="font-semibold text-[#E2E8F0] mb-1"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Pesan Terkirim!
                    </p>
                    <p className="text-xs" style={{ color: '#8898AA' }}>
                      Anda akan diarahkan ke WhatsApp. Kami akan segera menghubungi Anda.
                    </p>
                  </div>
                </motion.div>
              ) : (
                /* ── Form ── */
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: '#64748B' }}>
                        Nama Lengkap <span style={{ color: '#6D28D9' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="PT. Nama Perusahaan"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: '#64748B' }}>
                        Email <span style={{ color: '#6D28D9' }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="email@perusahaan.com"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: '#64748B' }}>
                      Kebutuhan / Subjek
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Pengembangan Website, Aplikasi Mobile, ERP…"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: '#64748B' }}>
                      Deskripsi Proyek <span style={{ color: '#6D28D9' }}>*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Ceritakan kebutuhan Anda: tujuan proyek, fitur yang diinginkan, estimasi waktu, dsb."
                      required
                      className={inputClass}
                      style={{ resize: 'none' }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-3.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2"
                    style={{ background: '#6D28D9' }}
                  >
                    <Send size={15} />
                    Kirim via WhatsApp
                  </motion.button>

                  <p className="text-xs text-center" style={{ color: '#334155' }}>
                    * Wajib diisi. Pesan akan diteruskan ke WhatsApp untuk respons lebih cepat.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;