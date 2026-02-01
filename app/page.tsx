import React from "react";

const App: React.FC = () => {
  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.logo}>Platform Bootstrap</h1>
        <span style={styles.badge}>DevOps / Platform Engineering</span>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h2 style={styles.title}>
          One Server. One Script. Everything Ready.
        </h2>
        <p style={styles.subtitle}>
          Kubernetes • Rancher • Jira • Confluence • PostgreSQL
        </p>

        <div style={styles.actions}>
          <button style={styles.primaryBtn}>Get Started</button>
          <button style={styles.secondaryBtn}>View Documentation</button>
        </div>
      </section>

      {/* Features */}
      <section style={styles.features}>
        {features.map((f) => (
          <div key={f.title} style={styles.card}>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Platform Engineering</p>
        <p>Built by Vijay</p>
      </footer>
    </div>
  );
};

export default App;

/* -------------------- DATA -------------------- */

const features = [
  {
    title: "Automated Infrastructure",
    desc: "Provision Kubernetes, Rancher, Jira, and PostgreSQL with a single command.",
  },
  {
    title: "Production Ready",
    desc: "Designed with reproducibility, scalability, and DevOps best practices.",
  },
  {
    title: "Self-Hosted Platform",
    desc: "Full control over your infrastructure on a single or multi-node setup.",
  },
];

/* -------------------- STYLES -------------------- */

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#0f172a",
    color: "#e5e7eb",
    fontFamily: "Inter, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: "1px solid #1e293b",
  },
  logo: {
    fontSize: "20px",
    fontWeight: 700,
  },
  badge: {
    fontSize: "12px",
    padding: "6px 10px",
    backgroundColor: "#1e293b",
    borderRadius: "999px",
  },
  hero: {
    textAlign: "center",
    padding: "80px 20px",
  },
  title: {
    fontSize: "42px",
    fontWeight: 800,
    marginBottom: "16px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#94a3b8",
    marginBottom: "32px",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
  },
  primaryBtn: {
    padding: "12px 24px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
  secondaryBtn: {
    padding: "12px 24px",
    backgroundColor: "transparent",
    color: "#e5e7eb",
    border: "1px solid #334155",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "40px",
  },
  card: {
    backgroundColor: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "12px",
    padding: "24px",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    borderTop: "1px solid #1e293b",
    fontSize: "14px",
    color: "#94a3b8",
  },
};
