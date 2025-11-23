import React from "react";
import { HiSearch } from "react-icons/hi";
import {
  HiOutlineEye,
  HiOutlineEnvelope,
  HiOutlineCheck,
} from "react-icons/hi2";

export default function Payments() {
  const stats = [
    { label: "Total Revenue", value: "₹310", sub: "This month" },
    { label: "Pending Amount", value: "₹185", sub: "Needs collection" },
    { label: "Overdue Payments", value: "2", sub: "Requires action" },
    { label: "Paid This Month", value: "3", sub: "Completed" },
  ];

  const payments = [
    { name: "Robert Lee", plan: "Premium", invoice: "INV-001", amount: "₹50", date: "11/20/2025", status: "Overdue" },
    { name: "Linda Martinez", plan: "Standard", invoice: "INV-002", amount: "₹75", date: "11/17/2025", status: "Overdue" },
    { name: "James Taylor", plan: "VIP", invoice: "INV-003", amount: "₹60", date: "11/22/2025", status: "Pending" },
    { name: "Sarah Johnson", plan: "Premium", invoice: "INV-004", amount: "₹100", date: "11/15/2025", status: "Paid" },
    { name: "Michael Chen", plan: "Standard", invoice: "INV-005", amount: "₹80", date: "11/25/2025", status: "Upcoming" },
    { name: "Emily Davis", plan: "VIP", invoice: "INV-006", amount: "₹120", date: "11/18/2025", status: "Paid" },
    { name: "David Brown", plan: "Standard", invoice: "INV-007", amount: "₹50", date: "11/26/2025", status: "Upcoming" },
    { name: "Jessica Wilson", plan: "Premium", invoice: "INV-008", amount: "₹90", date: "11/14/2025", status: "Paid" },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Overdue":
        return { background: "#ffe5e5", color: "#c00" };
      case "Pending":
        return { background: "#fff4c2", color: "#c79600" };
      case "Paid":
        return { background: "#d9ffd6", color: "#128d00" };
      case "Upcoming":
        return { background: "#dfe8ff", color: "#3d5cf5" };
      default:
        return {};
    }
  };

  const styles = {
    page: {
      padding: "25px",
      background: "#f5f7fb",
      minHeight: "100vh",
      fontFamily: "Inter, sans-serif",
    },

    headerTitle: { fontSize: "24px", fontWeight: 700, margin: 0 },
    headerSubtitle: { color: "#6d7280", marginTop: "6px", marginBottom: 0 },

    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "18px",
      marginTop: "20px",
    },

    statCard: {
      background: "#fff",
      borderRadius: "12px",
      border: "1px solid #e5e7eb",
      padding: "18px",
    },

    statValue: {
      fontSize: "22px",
      fontWeight: 700,
      marginTop: 6,
      marginBottom: 6,
    },

    searchRow: {
      marginTop: "20px",
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
    },

    searchBox: {
      display: "flex",
      alignItems: "center",
      background: "#fff",
      border: "1px solid #e5e7eb",
      padding: "10px 14px",
      borderRadius: "10px",
      flex: 1,
      minWidth: "260px",
      gap: "10px",
    },

    select: {
      padding: "10px 14px",
      borderRadius: "10px",
      border: "1px solid #e5e7eb",
      background: "#fff",
      minWidth: "180px",
    },

    card: {
      marginTop: "25px",
      background: "#fff",
      borderRadius: "12px",
      border: "1px solid #e5e7eb",
      padding: "18px",
    },

    tableWrapper: {
      overflowX: "auto",
    },

    table: {
      width: "100%",
      borderCollapse: "collapse",
      minWidth: "800px", // important for mobile scrolling
    },

    th: {
      padding: "12px 10px",
      textAlign: "left",
      fontSize: "13px",
      color: "#374151",
      borderBottom: "1px solid #eaeef2",
      fontWeight: 600,
    },

    td: {
      padding: "14px 10px",
      fontSize: "14px",
      borderBottom: "1px solid #f4f6f8",
      verticalAlign: "middle",
      color: "#333",
    },

    memberCol: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },

    avatar: {
      width: "38px",
      height: "38px",
      borderRadius: "50%",
      background: "#e6e9ff",
      color: "#4b55f0",
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    badge: {
      padding: "6px 12px",
      borderRadius: "16px",
      fontWeight: 600,
      fontSize: "12px",
      display: "inline-block",
    },

    actionsCol: {
      display: "flex",
      gap: "35px",
      alignItems: "center",
    },

    iconView: { cursor: "pointer", color: "#2563eb" },
    iconCheck: { cursor: "pointer", color: "#000" },
    iconMail: { cursor: "pointer", color: "#000" },
  };

  return (
    <>
      {/* RESPONSIVE CSS */}
      <style>
        {`
          /* Tablet */
          @media (max-width: 900px) {
            .payments-page {
              padding: 18px !important;
            }
            .actions-col {
              gap: 22px !important;
            }
          }

          /* Mobile */
          @media (max-width: 600px) {
            .payments-page {
              padding: 12px !important;
            }
            .search-row {
              flex-direction: column !important;
            }
            .actions-col {
              gap: 14px !important;
            }
            .stats-grid {
              grid-template-columns: 1fr 1fr !important;
            }
            .header-title {
              font-size: 20px !important;
            }
          }

          /* Small mobile */
          @media (max-width: 420px) {
            .stats-grid {
              grid-template-columns: 1fr !important;
            }
            .actions-col {
              gap: 10px !important;
            }
          }
        `}
      </style>

      <div className="payments-page" style={styles.page}>
        {/* PAGE HEADER */}
        <h2 className="header-title" style={styles.headerTitle}>Payment Management</h2>
        <p style={styles.headerSubtitle}>Track and manage all membership payments</p>

        {/* STATS */}
        <div className="stats-grid" style={styles.statsGrid}>
          {stats.map((s, i) => (
            <div style={styles.statCard} key={i}>
              <h4 style={{ margin: 0 }}>{s.label}</h4>
              <p style={styles.statValue}>{s.value}</p>
              <p style={{ color: "#6d7280", margin: 0 }}>{s.sub}</p>
            </div>
          ))}
        </div>

        {/* SEARCH */}
        <div className="search-row" style={styles.searchRow}>
          <div style={styles.searchBox}>
            <HiSearch size={18} color="#6b7280" />
            <input
              placeholder="Search by member name, invoice, or plan..."
              style={{
                border: "none",
                outline: "none",
                flex: 1,
                background: "transparent",
              }}
            />
          </div>

          <select style={styles.select}>
            <option>All Status</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Overdue</option>
            <option>Upcoming</option>
          </select>
        </div>

        {/* TABLE */}
        <div style={styles.card}>
          <h3 style={{ margin: 0, marginBottom: 10, fontWeight: 700 }}>
            Payments ({payments.length})
          </h3>

          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Member</th>
                  <th style={styles.th}>Invoice</th>
                  <th style={styles.th}>Amount</th>
                  <th style={styles.th}>Due Date</th>
                  <th style={styles.th}>Status</th>
                  <th style={styles.th}>Actions</th>
                </tr>
              </thead>

              <tbody>
                {payments.map((p, i) => (
                  <tr key={i}>
                    <td style={styles.td}>
                      <div style={styles.memberCol}>
                        <div style={styles.avatar}>
                          {p.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <div style={{ fontWeight: 600 }}>{p.name}</div>
                          <div style={{ color: "#6d7280", fontSize: 13 }}>{p.plan}</div>
                        </div>
                      </div>
                    </td>

                    <td style={styles.td}>{p.invoice}</td>
                    <td style={styles.td}>{p.amount}</td>
                    <td style={styles.td}>{p.date}</td>

                    <td style={styles.td}>
                      <span style={{ ...styles.badge, ...getStatusStyle(p.status) }}>
                        {p.status}
                      </span>
                    </td>

                    <td className="actions-col" style={styles.actionsCol}>
                      <HiOutlineEye size={18} style={styles.iconView} />
                      <HiOutlineCheck size={18} style={styles.iconCheck} />
                      <HiOutlineEnvelope size={18} style={styles.iconMail} />
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </>
  );
}
