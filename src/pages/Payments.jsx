import React, { useState, useMemo } from "react";
import { HiSearch, HiX } from "react-icons/hi";
import { HiOutlineEye } from "react-icons/hi2";

export default function Payments() {

  // Initial payment data
  const initialPayments = [
    { id: 1, name: "Robert Lee", plan: "Premium", invoice: "INV-001", amount: "₹50", date: "11/20/2025", status: "Overdue", paidDate: null, invoiceImage: "https://images.unsplash.com/photo-1554224311-beee460c201f?w=800&h=1200" },
    { id: 2, name: "Linda Martinez", plan: "Standard", invoice: "INV-002", amount: "₹75", date: "11/17/2025", status: "Overdue", paidDate: null, invoiceImage: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=1200" },
    { id: 3, name: "James Taylor", plan: "VIP", invoice: "INV-003", amount: "₹60", date: "11/22/2025", status: "Pending", paidDate: null, invoiceImage: "https://images.unsplash.com/photo-1586795722860-034e7dbdc33a?w=800&h=1200" },
    { id: 4, name: "Sarah Johnson", plan: "Premium", invoice: "INV-004", amount: "₹100", date: "11/15/2025", status: "Paid", paidDate: "11/15/2025", invoiceImage: "https://images.unsplash.com/photo-1554224311-beee460c201f?w=800&h=1200" },
    { id: 5, name: "Michael Chen", plan: "Standard", invoice: "INV-005", amount: "₹80", date: "11/25/2025", status: "Upcoming", paidDate: null, invoiceImage: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=1200" },
    { id: 6, name: "Emily Davis", plan: "VIP", invoice: "INV-006", amount: "₹120", date: "11/18/2025", status: "Paid", paidDate: "11/18/2025", invoiceImage: "https://images.unsplash.com/photo-1586795722860-034e7dbdc33a?w=800&h=1200" },
    { id: 7, name: "David Brown", plan: "Standard", invoice: "INV-007", amount: "₹50", date: "11/26/2025", status: "Upcoming", paidDate: null, invoiceImage: "https://images.unsplash.com/photo-1554224311-beee460c201f?w=800&h=1200" },
    { id: 8, name: "Jessica Wilson", plan: "Premium", invoice: "INV-008", amount: "₹90", date: "11/14/2025", status: "Paid", paidDate: "11/14/2025", invoiceImage: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=1200" },
    { id: 9, name: "John Anderson", plan: "VIP", invoice: "INV-009", amount: "₹150", date: "11/21/2025", status: "Pending", paidDate: null, invoiceImage: "https://images.unsplash.com/photo-1586795722860-034e7dbdc33a?w=800&h=1200" },
    { id: 10, name: "Maria Garcia", plan: "Standard", invoice: "INV-010", amount: "₹70", date: "11/23/2025", status: "Upcoming", paidDate: null, invoiceImage: "https://images.unsplash.com/photo-1554224311-beee460c201f?w=800&h=1200" },
    { id: 11, name: "William Smith", plan: "Premium", invoice: "INV-011", amount: "₹95", date: "11/19/2025", status: "Overdue", paidDate: null, invoiceImage: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=1200" },
    { id: 12, name: "Patricia Brown", plan: "VIP", invoice: "INV-012", amount: "₹130", date: "11/16/2025", status: "Paid", paidDate: "11/16/2025", invoiceImage: "https://images.unsplash.com/photo-1586795722860-034e7dbdc33a?w=800&h=1200" },
    { id: 13, name: "Robert Wilson", plan: "Standard", invoice: "INV-013", amount: "₹65", date: "11/24/2025", status: "Upcoming", paidDate: null, invoiceImage: "https://images.unsplash.com/photo-1554224311-beee460c201f?w=800&h=1200" },
    { id: 14, name: "Jennifer Lee", plan: "Premium", invoice: "INV-014", amount: "₹85", date: "11/13/2025", status: "Paid", paidDate: "11/13/2025", invoiceImage: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=1200" },
    { id: 15, name: "Thomas Martinez", plan: "VIP", invoice: "INV-015", amount: "₹140", date: "11/22/2025", status: "Pending", paidDate: null, invoiceImage: "https://images.unsplash.com/photo-1586795722860-034e7dbdc33a?w=800&h=1200" },
  ];

  // State management
  const [payments, setPayments] = useState(initialPayments);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [isInvoiceViewOpen, setIsInvoiceViewOpen] = useState(false);
  const [confirmModal, setConfirmModal] = useState({
    isOpen: false,
    paymentId: null,
    payment: null,
  });

  // Calculate dynamic stats from payments data
  const stats = useMemo(() => {
    // Helper function to parse rupee amounts
    const parseAmount = (amountStr) => {
      return parseFloat(amountStr.replace("₹", "").trim());
    };

    // Calculate Total Revenue (sum of all paid payments)
    const totalRevenue = payments
      .filter((p) => p.status === "Paid")
      .reduce((sum, p) => sum + parseAmount(p.amount), 0);

    // Calculate Pending Amount (sum of Pending, Overdue, and Upcoming payments)
    const pendingAmount = payments
      .filter((p) => p.status === "Pending" || p.status === "Overdue" || p.status === "Upcoming")
      .reduce((sum, p) => sum + parseAmount(p.amount), 0);

    // Count Overdue Payments
    const overdueCount = payments.filter((p) => p.status === "Overdue").length;

    // Count Paid This Month
    const paidCount = payments.filter((p) => p.status === "Paid").length;

    return [
      { label: "Total Revenue", value: `₹${totalRevenue}`, sub: "This month" },
      { label: "Pending Amount", value: `₹${pendingAmount}`, sub: "Needs collection" },
      { label: "Overdue Payments", value: `${overdueCount}`, sub: "Requires action" },
      { label: "Paid This Month", value: `${paidCount}`, sub: "Completed" },
    ];
  }, [payments]);

  // Filter and search logic
  const filteredPayments = useMemo(() => {
    let filtered = [...payments];

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.invoice.toLowerCase().includes(query) ||
          p.plan.toLowerCase().includes(query)
      );
    }

    // Apply status filter
    if (statusFilter !== "All Status") {
      filtered = filtered.filter((p) => p.status === statusFilter);
    }

    return filtered;
  }, [payments, searchQuery, statusFilter]);

  // Pagination logic
  const totalItems = filteredPayments.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentPayments = filteredPayments.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, statusFilter, itemsPerPage]);

  // Handle status update
  const handleStatusUpdate = (paymentId, newStatus) => {
    const payment = payments.find(p => p.id === paymentId);
    
    // If changing TO "Paid", ask for confirmation
    if (newStatus === "Paid") {
      setConfirmModal({
        isOpen: true,
        paymentId: paymentId,
        payment: payment,
      });
    } else {
      // For other statuses, update directly
      updatePaymentStatus(paymentId, newStatus);
    }
  };

  // Confirm marking as paid
  const confirmMarkAsPaid = () => {
    if (confirmModal.paymentId) {
      updatePaymentStatus(confirmModal.paymentId, "Paid");
    }
    setConfirmModal({ isOpen: false, paymentId: null, payment: null });
  };

  // Cancel confirmation
  const cancelConfirmation = () => {
    setConfirmModal({ isOpen: false, paymentId: null, payment: null });
  };

  // Actually update the payment status
  const updatePaymentStatus = (paymentId, newStatus) => {
    setPayments((prevPayments) =>
      prevPayments.map((p) => {
        if (p.id === paymentId) {
          // If status is being changed to "Paid", set paidDate to due date
          // If status is being changed FROM "Paid" to something else, clear paidDate
          const paidDate = newStatus === "Paid" ? p.date : null;
          return { ...p, status: newStatus, paidDate };
        }
        return p;
      })
    );
  };

  // Handle invoice view
  const handleViewInvoice = (payment) => {
    setSelectedInvoice(payment);
    setIsInvoiceViewOpen(true);
  };

  const handleCloseInvoiceView = () => {
    setIsInvoiceViewOpen(false);
    setTimeout(() => setSelectedInvoice(null), 300); // Wait for animation to complete
  };

  // Pagination handlers
  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const goToFirstPage = () => setCurrentPage(1);
  const goToLastPage = () => setCurrentPage(totalPages);
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(1, prev - 1));
  const goToNextPage = () => setCurrentPage((prev) => Math.min(totalPages, prev + 1));

  // Get page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, currentPage + 2);

      if (currentPage <= 3) {
        endPage = maxPagesToShow;
      } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - maxPagesToShow + 1;
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
    }
    return pages;
  };

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
      cursor: "pointer",
      fontSize: "14px",
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
      minWidth: "1000px",
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
      fontSize: "14px",
    },

    badge: {
      padding: "6px 12px",
      borderRadius: "16px",
      fontWeight: 600,
      fontSize: "12px",
      display: "inline-block",
    },

    statusSelect: {
      padding: "6px 10px",
      borderRadius: "8px",
      border: "1px solid #e5e7eb",
      fontSize: "13px",
      fontWeight: 600,
      cursor: "pointer",
      background: "#fff",
    },

    // Pagination styles
    paginationWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: "20px",
      flexWrap: "wrap",
      gap: "15px",
    },

    paginationLeft: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },

    paginationText: {
      fontSize: "14px",
      color: "#6d7280",
    },

    itemsPerPageSelect: {
      padding: "6px 10px",
      borderRadius: "6px",
      border: "1px solid #e5e7eb",
      fontSize: "14px",
      cursor: "pointer",
    },

    paginationRight: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },

    pageButton: {
      padding: "8px 12px",
      border: "1px solid #e5e7eb",
      borderRadius: "6px",
      background: "#fff",
      cursor: "pointer",
      fontSize: "14px",
      minWidth: "38px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.2s",
    },

    pageButtonActive: {
      background: "#2563eb",
      color: "#fff",
      border: "1px solid #2563eb",
    },

    pageButtonDisabled: {
      opacity: 0.4,
      cursor: "not-allowed",
    },

    // Invoice drawer styles
    drawerOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0, 0, 0, 0.5)",
      zIndex: 999,
      transition: "opacity 0.3s ease",
    },

    drawer: {
      position: "fixed",
      top: 0,
      right: 0,
      width: "30%",
      height: "100vh",
      background: "#fff",
      boxShadow: "-4px 0 15px rgba(0, 0, 0, 0.1)",
      zIndex: 1000,
      transition: "transform 0.3s ease",
      display: "flex",
      flexDirection: "column",
    },

    drawerHeader: {
      padding: "20px 25px",
      borderBottom: "1px solid #e5e7eb",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#f9fafb",
    },

    drawerTitle: {
      fontSize: "18px",
      fontWeight: 700,
      margin: 0,
      color: "#1f2937",
    },

    closeButton: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "8px",
      borderRadius: "6px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background 0.2s",
    },

    drawerContent: {
      flex: 1,
      padding: "25px",
      overflowY: "auto",
    },

    invoiceInfo: {
      marginBottom: "20px",
      padding: "15px",
      background: "#f9fafb",
      borderRadius: "10px",
      border: "1px solid #e5e7eb",
    },

    infoRow: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "10px",
      fontSize: "14px",
    },

    infoLabel: {
      color: "#6b7280",
      fontWeight: 500,
    },

    infoValue: {
      color: "#1f2937",
      fontWeight: 600,
    },

    invoiceImageContainer: {
      marginTop: "20px",
    },

    invoiceImage: {
      width: "100%",
      height: "auto",
      borderRadius: "10px",
      border: "1px solid #e5e7eb",
    },

    eyeIcon: {
      cursor: "pointer",
      color: "#2563eb",
      transition: "color 0.2s",
    },

    // Confirmation Modal styles
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
    },

    modal: {
      background: "#fff",
      borderRadius: "16px",
      padding: "30px",
      maxWidth: "450px",
      width: "90%",
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
    },

    modalHeader: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "20px",
    },

    modalIcon: {
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      background: "#d9ffd6",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "24px",
    },

    modalTitle: {
      fontSize: "20px",
      fontWeight: 700,
      margin: 0,
      color: "#1f2937",
    },

    modalContent: {
      marginBottom: "25px",
    },

    modalText: {
      fontSize: "15px",
      color: "#6b7280",
      marginBottom: "15px",
      lineHeight: "1.6",
    },

    modalDetails: {
      background: "#f9fafb",
      padding: "15px",
      borderRadius: "10px",
      border: "1px solid #e5e7eb",
    },

    modalDetailRow: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "8px",
      fontSize: "14px",
    },

    modalLabel: {
      color: "#6b7280",
      fontWeight: 500,
    },

    modalValue: {
      color: "#1f2937",
      fontWeight: 600,
    },

    modalButtons: {
      display: "flex",
      gap: "12px",
    },

    modalButton: {
      flex: 1,
      padding: "12px 24px",
      borderRadius: "10px",
      border: "none",
      fontSize: "15px",
      fontWeight: 600,
      cursor: "pointer",
      transition: "all 0.2s",
    },

    confirmButton: {
      background: "#128d00",
      color: "#fff",
    },

    cancelButton: {
      background: "#f3f4f6",
      color: "#6b7280",
    },
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
          }

          /* Mobile */
          @media (max-width: 600px) {
            .payments-page {
              padding: 12px !important;
            }
            .search-row {
              flex-direction: column !important;
            }
            .stats-grid {
              grid-template-columns: 1fr 1fr !important;
            }
            .header-title {
              font-size: 20px !important;
            }
            .pagination-wrapper {
              flex-direction: column;
              align-items: stretch !important;
            }
            .pagination-right {
              justify-content: center;
            }
          }

          /* Small mobile */
          @media (max-width: 420px) {
            .stats-grid {
              grid-template-columns: 1fr !important;
            }
            .page-button {
              padding: 6px 10px !important;
              min-width: 32px !important;
              font-size: 13px !important;
            }
          }

          /* Hover effects */
          .page-button:hover:not(:disabled) {
            background: #f3f4f6 !important;
          }
          
          .page-button.active:hover {
            background: #1d4ed8 !important;
          }

          .status-select:hover {
            border-color: #2563eb !important;
          }

          .eye-icon:hover {
            color: #1d4ed8 !important;
          }

          .close-button:hover {
            background: #f3f4f6 !important;
          }

          .confirm-button:hover {
            background: #0f7600 !important;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(18, 141, 0, 0.3);
          }

          .cancel-button:hover {
            background: #e5e7eb !important;
          }

          /* No data message */
          .no-data {
            text-align: center;
            padding: 40px 20px;
            color: #6d7280;
          }

          /* Drawer animations */
          .drawer-enter {
            transform: translateX(100%);
          }

          .drawer-enter-active {
            transform: translateX(0);
          }

          .drawer-exit {
            transform: translateX(0);
          }

          .drawer-exit-active {
            transform: translateX(100%);
          }

          /* Drawer responsive styles */
          @media (max-width: 1200px) {
            .invoice-drawer {
              width: 40% !important;
            }
          }

          @media (max-width: 900px) {
            .invoice-drawer {
              width: 50% !important;
            }
          }

          @media (max-width: 600px) {
            .invoice-drawer {
              width: 85% !important;
            }
            .drawer-content {
              padding: 15px !important;
            }
          }
        `}
      </style>

      <div className="payments-page" style={styles.page}>
        {/* PAGE HEADER */}
        <h2 className="header-title" style={styles.headerTitle}>
          Payment Management
        </h2>
        <p style={styles.headerSubtitle}>
          Track and manage all membership payments
        </p>

        {/* STATS */}
        <div className="stats-grid" style={styles.statsGrid}>
          {stats.map((s, i) => (
            <div style={styles.statCard} key={i}>
              <h4 style={{ margin: 0, fontSize: "14px", color: "#6d7280" }}>
                {s.label}
              </h4>
              <p style={styles.statValue}>{s.value}</p>
              <p style={{ color: "#6d7280", margin: 0, fontSize: "13px" }}>
                {s.sub}
              </p>
            </div>
          ))}
        </div>

        {/* SEARCH AND FILTER */}
        <div className="search-row" style={styles.searchRow}>
          <div style={styles.searchBox}>
            <HiSearch size={18} color="#6b7280" />
            <input
              placeholder="Search by member name, invoice, or plan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: "none",
                outline: "none",
                flex: 1,
                background: "transparent",
                fontSize: "14px",
              }}
            />
          </div>

          <select
            style={styles.select}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
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
            Payments ({filteredPayments.length})
          </h3>

          <div style={styles.tableWrapper}>
            {currentPayments.length > 0 ? (
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Member</th>
                    <th style={styles.th}>Invoice</th>
                    <th style={styles.th}>Amount</th>
                    <th style={styles.th}>Due Date</th>
                    <th style={styles.th}>Payment Done Date</th>
                    <th style={styles.th}>Status</th>
                    <th style={styles.th}>Update Status</th>
                    <th style={styles.th}>View Invoice</th>
                  </tr>
                </thead>

                <tbody>
                  {currentPayments.map((p) => (
                    <tr key={p.id}>
                      <td style={styles.td}>
                        <div style={styles.memberCol}>
                          <div style={styles.avatar}>
                            {p.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <div style={{ fontWeight: 600 }}>{p.name}</div>
                            <div style={{ color: "#6d7280", fontSize: 13 }}>
                              {p.plan}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td style={styles.td}>{p.invoice}</td>
                      <td style={styles.td}>{p.amount}</td>
                      <td style={styles.td}>{p.date}</td>
                      <td style={styles.td}>
                        {p.paidDate ? (
                          <span style={{ color: "#128d00", fontWeight: 600 }}>
                            {p.paidDate}
                          </span>
                        ) : (
                          <span style={{ color: "#9ca3af" }}>-</span>
                        )}
                      </td>

                      <td style={styles.td}>
                        <span
                          style={{
                            ...styles.badge,
                            ...getStatusStyle(p.status),
                          }}
                        >
                          {p.status}
                        </span>
                      </td>

                      <td style={styles.td}>
                        <select
                          className="status-select"
                          style={styles.statusSelect}
                          value={p.status}
                          onChange={(e) =>
                            handleStatusUpdate(p.id, e.target.value)
                          }
                        >
                          <option value="Upcoming">Upcoming</option>
                          <option value="Pending">Pending</option>
                          <option value="Paid">Paid</option>
                          <option value="Overdue">Overdue</option>
                        </select>
                      </td>

                      <td style={styles.td}>
                        <HiOutlineEye
                          size={20}
                          className="eye-icon"
                          style={styles.eyeIcon}
                          onClick={() => handleViewInvoice(p)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="no-data">
                <p style={{ fontSize: "16px", margin: 0 }}>
                  No payments found matching your criteria
                </p>
              </div>
            )}
          </div>

          {/* PAGINATION */}
          {filteredPayments.length > 0 && (
            <div className="pagination-wrapper" style={styles.paginationWrapper}>
              {/* Left side - Items per page */}
              <div style={styles.paginationLeft}>
                <span style={styles.paginationText}>Items per page:</span>
                <select
                  style={styles.itemsPerPageSelect}
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                  <option value={25}>25</option>
                </select>
                <span style={styles.paginationText}>
                  {startIndex + 1}-{endIndex} of {totalItems}
                </span>
              </div>

              {/* Right side - Page navigation */}
              <div className="pagination-right" style={styles.paginationRight}>
                {/* First page button */}
                <button
                  className="page-button"
                  style={{
                    ...styles.pageButton,
                    ...(currentPage === 1 ? styles.pageButtonDisabled : {}),
                  }}
                  onClick={goToFirstPage}
                  disabled={currentPage === 1}
                >
                  ≪
                </button>

                {/* Previous page button */}
                <button
                  className="page-button"
                  style={{
                    ...styles.pageButton,
                    ...(currentPage === 1 ? styles.pageButtonDisabled : {}),
                  }}
                  onClick={goToPrevPage}
                  disabled={currentPage === 1}
                >
                  ‹
                </button>

                {/* Page number buttons */}
                {getPageNumbers().map((pageNum) => (
                  <button
                    key={pageNum}
                    className={`page-button ${
                      currentPage === pageNum ? "active" : ""
                    }`}
                    style={{
                      ...styles.pageButton,
                      ...(currentPage === pageNum
                        ? styles.pageButtonActive
                        : {}),
                    }}
                    onClick={() => goToPage(pageNum)}
                  >
                    {pageNum}
                  </button>
                ))}

                {/* Next page button */}
                <button
                  className="page-button"
                  style={{
                    ...styles.pageButton,
                    ...(currentPage === totalPages
                      ? styles.pageButtonDisabled
                      : {}),
                  }}
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                >
                  ›
                </button>

                {/* Last page button */}
                <button
                  className="page-button"
                  style={{
                    ...styles.pageButton,
                    ...(currentPage === totalPages
                      ? styles.pageButtonDisabled
                      : {}),
                  }}
                  onClick={goToLastPage}
                  disabled={currentPage === totalPages}
                >
                  ≫
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* INVOICE VIEWER DRAWER */}
      {isInvoiceViewOpen && (
        <>
          {/* Overlay */}
          <div
            style={styles.drawerOverlay}
            onClick={handleCloseInvoiceView}
          />

          {/* Drawer */}
          <div
            className="invoice-drawer"
            style={{
              ...styles.drawer,
              transform: isInvoiceViewOpen ? "translateX(0)" : "translateX(100%)",
            }}
          >
            {/* Header */}
            <div style={styles.drawerHeader}>
              <h3 style={styles.drawerTitle}>Invoice Details</h3>
              <button
                className="close-button"
                style={styles.closeButton}
                onClick={handleCloseInvoiceView}
              >
                <HiX size={24} color="#6b7280" />
              </button>
            </div>

            {/* Content */}
            {selectedInvoice && (
              <div className="drawer-content" style={styles.drawerContent}>
                {/* Invoice Information */}
                <div style={styles.invoiceInfo}>
                  <div style={styles.infoRow}>
                    <span style={styles.infoLabel}>Invoice Number:</span>
                    <span style={styles.infoValue}>{selectedInvoice.invoice}</span>
                  </div>
                  <div style={styles.infoRow}>
                    <span style={styles.infoLabel}>Member Name:</span>
                    <span style={styles.infoValue}>{selectedInvoice.name}</span>
                  </div>
                  <div style={styles.infoRow}>
                    <span style={styles.infoLabel}>Plan:</span>
                    <span style={styles.infoValue}>{selectedInvoice.plan}</span>
                  </div>
                  <div style={styles.infoRow}>
                    <span style={styles.infoLabel}>Amount:</span>
                    <span style={styles.infoValue}>{selectedInvoice.amount}</span>
                  </div>
                  <div style={styles.infoRow}>
                    <span style={styles.infoLabel}>Due Date:</span>
                    <span style={styles.infoValue}>{selectedInvoice.date}</span>
                  </div>
                  <div style={styles.infoRow}>
                    <span style={styles.infoLabel}>Status:</span>
                    <span
                      style={{
                        ...styles.badge,
                        ...getStatusStyle(selectedInvoice.status),
                      }}
                    >
                      {selectedInvoice.status}
                    </span>
                  </div>
                  {selectedInvoice.paidDate && (
                    <div style={styles.infoRow}>
                      <span style={styles.infoLabel}>Payment Done Date:</span>
                      <span style={{ ...styles.infoValue, color: "#128d00" }}>
                        {selectedInvoice.paidDate}
                      </span>
                    </div>
                  )}
                </div>

                {/* Invoice Image */}
                <div style={styles.invoiceImageContainer}>
                  <h4 style={{ marginTop: 0, marginBottom: 15, fontSize: "16px", fontWeight: 600 }}>
                    Invoice Document
                  </h4>
                  <img
                    src={selectedInvoice.invoiceImage}
                    alt={`Invoice ${selectedInvoice.invoice}`}
                    style={styles.invoiceImage}
                  />
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* CONFIRMATION MODAL */}
      {confirmModal.isOpen && confirmModal.payment && (
        <div style={styles.modalOverlay} onClick={cancelConfirmation}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div style={styles.modalHeader}>
              <div style={styles.modalIcon}>✓</div>
              <h3 style={styles.modalTitle}>Confirm Payment</h3>
            </div>

            {/* Modal Content */}
            <div style={styles.modalContent}>
              <p style={styles.modalText}>
                Are you sure you want to mark this payment as <strong>Paid</strong>? This will update the payment status and record the payment date.
              </p>

              <div style={styles.modalDetails}>
                <div style={styles.modalDetailRow}>
                  <span style={styles.modalLabel}>Invoice:</span>
                  <span style={styles.modalValue}>{confirmModal.payment.invoice}</span>
                </div>
                <div style={styles.modalDetailRow}>
                  <span style={styles.modalLabel}>Member:</span>
                  <span style={styles.modalValue}>{confirmModal.payment.name}</span>
                </div>
                <div style={styles.modalDetailRow}>
                  <span style={styles.modalLabel}>Plan:</span>
                  <span style={styles.modalValue}>{confirmModal.payment.plan}</span>
                </div>
                <div style={styles.modalDetailRow}>
                  <span style={styles.modalLabel}>Amount:</span>
                  <span style={{ ...styles.modalValue, color: "#128d00", fontSize: "16px" }}>
                    {confirmModal.payment.amount}
                  </span>
                </div>
                <div style={styles.modalDetailRow}>
                  <span style={styles.modalLabel}>Due Date:</span>
                  <span style={styles.modalValue}>{confirmModal.payment.date}</span>
                </div>
              </div>
            </div>

            {/* Modal Buttons */}
            <div style={styles.modalButtons}>
              <button
                className="cancel-button"
                style={{ ...styles.modalButton, ...styles.cancelButton }}
                onClick={cancelConfirmation}
              >
                Cancel
              </button>
              <button
                className="confirm-button"
                style={{ ...styles.modalButton, ...styles.confirmButton }}
                onClick={confirmMarkAsPaid}
              >
                Yes, Mark as Paid
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}