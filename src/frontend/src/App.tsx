import {
  Building2,
  MapPin,
  MessageCircle,
  Phone,
  User,
  Wheat,
} from "lucide-react";
import type { Variants } from "motion/react";
import { motion } from "motion/react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const PRODUCTS_SERVICES = [
  "Government Ration Rice Processing",
  "Bulk Rice Supply",
  "Rice Husk Supply",
  "Rice Bran Supply",
  "Short Grain Rice Supply",
  "Bulk Orders for Authorised Private Buyers",
];

function CardHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div
      className="px-6 py-4 flex items-center gap-3"
      style={{ background: "oklch(0.94 0.03 145)" }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: "oklch(0.30 0.11 145)" }}
      >
        {icon}
      </div>
      <h2
        className="font-display font-semibold text-lg"
        style={{ color: "oklch(0.22 0.10 145)" }}
      >
        {title}
      </h2>
    </div>
  );
}

export default function App() {
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <div className="min-h-screen flex flex-col bg-background font-body">
      {/* ── Header ── */}
      <header
        data-ocid="header.section"
        className="text-center px-6 py-10 md:py-14"
        style={{ background: "oklch(0.27 0.11 145)" }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
        >
          <div
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
            style={{
              background: "oklch(0.68 0.18 150 / 0.22)",
              color: "oklch(0.88 0.1 150)",
              border: "1px solid oklch(0.68 0.18 150 / 0.35)",
            }}
          >
            <Wheat size={13} />
            Authorised Tamil Nadu Government Rice Processing Mill
          </div>
        </motion.div>
        <motion.h1
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
          className="font-display text-3xl md:text-5xl font-bold tracking-tight"
          style={{ color: "oklch(0.98 0.005 90)", lineHeight: 1.2 }}
        >
          🏢 Venkateswara Rice Mill
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeUp}
          className="mt-3 text-base md:text-lg font-semibold"
          style={{ color: "oklch(0.80 0.08 145)" }}
        >
          TNCSC Ltd – Regular Hulling Agent
        </motion.p>
      </header>

      {/* ── Main ── */}
      <main
        className="flex-1 px-4 py-10 md:py-14 w-full mx-auto space-y-6"
        style={{ maxWidth: "1000px" }}
      >
        {/* 1 – About Our Company */}
        <motion.div
          id="about"
          data-ocid="about.card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-2xl shadow-card overflow-hidden"
        >
          <CardHeader
            icon={
              <Building2 size={20} style={{ color: "oklch(0.98 0.005 90)" }} />
            }
            title="About Our Company"
          />
          <div
            className="px-6 py-6 space-y-4"
            style={{ color: "oklch(0.32 0.07 145)", lineHeight: 1.8 }}
          >
            <p>
              Venkateswara Rice Mill is an authorised Tamil Nadu Government
              Hulling Agent working with{" "}
              <strong style={{ color: "oklch(0.22 0.10 145)" }}>
                TNCSC Ltd
              </strong>
              . Our mill processes paddy supplied for the Government Public
              Distribution System (PDS) and supplies rice to Government Ration
              Shops.
            </p>
            <p>
              We also provide bulk supply services to authorised private buyers.
              Our mill is known for quality processing and reliable supply.
            </p>
          </div>
        </motion.div>

        {/* 2 – Our Products & Services */}
        <motion.div
          id="services"
          data-ocid="services.card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-card rounded-2xl shadow-card overflow-hidden"
        >
          <CardHeader
            icon={<span className="text-lg">🌾</span>}
            title="Our Products &amp; Services"
          />
          <ul className="px-6 py-6 space-y-3">
            {PRODUCTS_SERVICES.map((item, i) => (
              <li
                key={item}
                data-ocid={`services.item.${i + 1}`}
                className="flex items-start gap-3"
              >
                <span
                  className="mt-2 w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: "oklch(0.48 0.14 145)" }}
                />
                <span
                  style={{ color: "oklch(0.32 0.07 145)", lineHeight: 1.7 }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 3 – Owner Details */}
        <motion.div
          data-ocid="owner.card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-card rounded-2xl shadow-card overflow-hidden"
        >
          <CardHeader
            icon={<User size={20} style={{ color: "oklch(0.98 0.005 90)" }} />}
            title="Owner Details"
          />
          <div className="px-6 py-6 space-y-3">
            <div className="flex items-center gap-3">
              <span
                className="text-xs font-bold uppercase tracking-widest w-20 flex-shrink-0"
                style={{ color: "oklch(0.52 0.08 145)" }}
              >
                Owner
              </span>
              <span
                className="font-semibold"
                style={{ color: "oklch(0.22 0.10 145)" }}
              >
                P.V.S. Elangovan
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span
                className="text-xs font-bold uppercase tracking-widest w-20 flex-shrink-0"
                style={{ color: "oklch(0.52 0.08 145)" }}
              >
                Mobile
              </span>
              <a
                href="tel:9443550669"
                className="font-semibold hover:underline"
                style={{ color: "oklch(0.30 0.11 145)" }}
              >
                9443550669
              </a>
            </div>
          </div>
        </motion.div>

        {/* 4 – Our Address */}
        <motion.div
          id="address"
          data-ocid="address.card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-card rounded-2xl shadow-card overflow-hidden"
        >
          <CardHeader
            icon={
              <MapPin size={20} style={{ color: "oklch(0.98 0.005 90)" }} />
            }
            title="Our Address"
          />
          <div className="px-6 py-6">
            <address
              className="not-italic leading-relaxed mb-5"
              style={{
                color: "oklch(0.32 0.07 145)",
                fontSize: "0.975rem",
                lineHeight: 1.85,
              }}
            >
              1/512 Salem Main Road
              <br />
              PVS Mill Campus
              <br />
              Kaveripattinam (Post) – 635112
              <br />
              Krishnagiri (District)
              <br />
              Tamil Nadu, India
            </address>
            <a
              data-ocid="map.button"
              href="https://g.co/kgs/k6EHdse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "oklch(0.30 0.11 145)",
                color: "oklch(0.98 0.005 90)",
                boxShadow: "0 2px 10px oklch(0.30 0.11 145 / 0.28)",
              }}
            >
              <MapPin size={16} />📍 View Location Map
            </a>
          </div>
        </motion.div>

        {/* 5 – Contact Us */}
        <motion.div
          id="contact"
          data-ocid="contact.card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-card rounded-2xl shadow-card overflow-hidden"
        >
          <CardHeader
            icon={<Phone size={20} style={{ color: "oklch(0.98 0.005 90)" }} />}
            title="Contact Us"
          />
          <div className="px-6 py-6">
            <p
              className="mb-5"
              style={{ color: "oklch(0.32 0.07 145)", lineHeight: 1.75 }}
            >
              For business enquiries and bulk orders contact us on WhatsApp.
            </p>
            <a
              data-ocid="whatsapp.button"
              href="https://wa.me/919443550669"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "oklch(0.62 0.19 150)",
                color: "oklch(0.98 0.005 90)",
                boxShadow: "0 2px 10px oklch(0.62 0.19 150 / 0.32)",
              }}
            >
              <MessageCircle size={16} />💬 Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </main>

      {/* ── Footer ── */}
      <footer
        className="text-center py-6 px-4 text-sm space-y-1"
        style={{
          background: "oklch(0.14 0.02 145)",
          color: "oklch(0.72 0.04 145)",
        }}
      >
        <p>© {new Date().getFullYear()} Venkateswara Rice Mill TNCSC Ltd</p>
        <p>PVS Rice Mill</p>
        <p className="text-xs pt-1">
          Built with ♥ using{" "}
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ color: "oklch(0.65 0.15 150)" }}
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
