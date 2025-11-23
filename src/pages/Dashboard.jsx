import React, { useEffect, useState, useCallback } from "react";

import {
    HiOutlineBuildingOffice,
    HiOutlineUsers,
    HiOutlineUserGroup,
    HiOutlineChartBar,
    HiOutlineCalendarDays,
    HiOutlineCurrencyDollar,
    HiOutlineEnvelope,
    HiOutlinePhone,
    HiOutlineXMark,
    HiOutlineClock,
    HiOutlineCheck,
    HiOutlineBellSlash,
    HiOutlineCheckCircle,
    HiOutlineSparkles,
} from "react-icons/hi2";

// Custom hook for responsive design
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== "undefined" ? window.innerWidth : 1200,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth });
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
};

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState("all");
    const { width } = useWindowSize();
    const [notification, setNotification] = useState(null);

    // Initial alerts data
    const initialAlerts = [
        {
            id: 1,
            name: "Robert Lee",
            tag: "Premium",
            gym: "PowerFit Gym",
            phone: "+1 555-0101",
            email: "robert.lee@email.com",
            amount: "₹4,150",
            badge: "2 days overdue",
            overdue: true,
            status: "pending",
        },
         {
            id: 2,
            name: "James Taylor",
            tag: "VIP",
            gym: "Iron Paradise",
            phone: "+1 555-0103",
            email: "james.t@email.com",
            amount: "₹4,980",
            badge: "Due today",
            overdue: false,
            status: "pending",
        },
        {
            id: 3,
            name: "Linda Martinez",
            tag: "Standard",
            gym: "Elite Fitness",
            phone: "+1 555-0102",
            email: "linda.m@email.com",
            amount: "₹6,225",
            badge: "5 days overdue",
            overdue: true,
            status: "pending",
        },
       
        {
            id: 4,
            name: "Sarah Wilson",
            tag: "Premium",
            gym: "FitZone Central",
            phone: "+1 555-0104",
            email: "sarah.w@email.com",
            amount: "₹3,500",
            badge: "3 days overdue",
            overdue: true,
            status: "pending",
        },
        {
            id: 5,
            name: "Mike Johnson",
            tag: "Standard",
            gym: "PowerFit Gym",
            phone: "+1 555-0105",
            email: "mike.j@email.com",
            amount: "₹2,800",
            badge: "Due today",
            overdue: false,
            status: "pending",
        },
    ];

    const [alerts, setAlerts] = useState(initialAlerts);

    // Breakpoints
    const isMobile = width < 640;
    const isTablet = width >= 640 && width < 1024;

    useEffect(() => {
        document.title = "FitZone - Dashboard";
    }, []);

    // Show notification helper
    const showNotification = useCallback((message, type = "success") => {
        setNotification({ message, type });
        setTimeout(() => {
            setNotification(null);
        }, 3000);
    }, []);

    // Handle Mark Paid
    const handleMarkPaid = (e, id, name) => {
        e.preventDefault();
        e.stopPropagation();
        setAlerts((prevAlerts) =>
            prevAlerts.filter((alert) => alert.id !== id)
        );
        showNotification(`Payment marked as paid for ${name}`, "success");
    };

    // Handle Remind
    const handleRemind = (e, id, name, email) => {
        e.preventDefault();
        e.stopPropagation();
        showNotification(`Reminder sent to ${name} at ${email}`, "info");
    };

    // Handle Remove/Close
    const handleRemove = (e, id, name) => {
        e.preventDefault();
        e.stopPropagation();
        setAlerts((prevAlerts) =>
            prevAlerts.filter((alert) => alert.id !== id)
        );
        showNotification(`Alert dismissed for ${name}`, "warning");
    };

    // Handle tab change
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    // Filter alerts based on active tab
    const filteredAlerts = alerts.filter((alert) => {
        if (activeTab === "all") return true;
        if (activeTab === "overdue") return alert.overdue;
        if (activeTab === "dueToday") return !alert.overdue;
        return true;
    });

    // Count for tabs
    const overdueCount = alerts.filter((a) => a.overdue).length;
    const dueTodayCount = alerts.filter((a) => !a.overdue).length;
    const allCount = alerts.length;

    const iconSize = isMobile ? 18 : 22;

    // Calculate alert card height for scroll container
    const alertCardHeight = isMobile ? 180 : 90;
    const maxVisibleAlerts = 3;
    const scrollContainerHeight = alertCardHeight * maxVisibleAlerts + 28; // 28px for gaps

    const styles = {
        page: {
            padding: isMobile ? "16px" : isTablet ? "20px 24px" : "30px 40px",
            background: "#f8f9fc",
        
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            position: "relative",
        },

        // Notification styles
        notification: {
            position: "fixed",
            top: "20px",
            right: "20px",
            padding: "12px 20px",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "14px",
            fontWeight: "500",
            zIndex: 1000,
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
        },

        notificationSuccess: {
            background: "#22c55e",
        },

        notificationInfo: {
            background: "#3b82f6",
        },

        notificationWarning: {
            background: "#f97316",
        },

        title: {
            fontSize: isMobile ? "18px" : "22px",
            fontWeight: "700",
            color: "#1a1a2e",
            marginBottom: "4px",
        },
        subtitle: {
            color: "#6b7280",
            fontSize: isMobile ? "13px" : "14px",
            marginBottom: isMobile ? "20px" : "28px",
        },

        cardsRow: {
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            flexWrap: isTablet ? "wrap" : "nowrap",
            gap: isMobile ? "12px" : "20px",
            marginBottom: "20px",
        },

        card: {
            flex: isMobile ? "1 1 100%" : isTablet ? "1 1 calc(50% - 10px)" : 1,
            background: "#ffffff",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
            padding: isMobile ? "16px" : "20px 22px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            minWidth: isTablet ? "calc(50% - 10px)" : "auto",
            boxSizing: "border-box",
        },

        cardTitle: {
            fontSize: isMobile ? "13px" : "14px",
            marginBottom: isMobile ? "8px" : "10px",
            color: "#6b7280",
            fontWeight: "500",
        },
        cardValue: {
            fontSize: isMobile ? "24px" : "28px",
            fontWeight: "700",
            marginBottom: "6px",
            color: "#1a1a2e",
        },
        cardSub: {
            color: "#9ca3af",
            fontSize: isMobile ? "12px" : "13px",
        },

        iconWrapper: {
            width: isMobile ? "36px" : "42px",
            height: isMobile ? "36px" : "42px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
        },

        // PAYMENT ALERTS SECTION
        paymentSection: {
            marginTop: isMobile ? "24px" : "35px",
        },

        sectionHeader: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "4px",
        },

        sectionTitle: {
            fontSize: isMobile ? "16px" : "18px",
            fontWeight: "700",
            color: "#1a1a2e",
            marginBottom: "4px",
        },

        sectionSubtitle: {
            fontSize: isMobile ? "13px" : "14px",
            color: "#6b7280",
            marginBottom: isMobile ? "16px" : "20px",
        },

        tabs: {
            display: "flex",
            gap: isMobile ? "8px" : "10px",
            marginBottom: isMobile ? "16px" : "20px",
            flexWrap: "wrap",
        },

        tab: (active) => ({
            display: "flex",
            alignItems: "center",
            gap: isMobile ? "6px" : "8px",
            padding: isMobile ? "6px 12px" : "8px 16px",
            borderRadius: "20px",
            border: active ? "none" : "1px solid #e5e7eb",
            cursor: "pointer",
            fontSize: isMobile ? "13px" : "14px",
            fontWeight: "500",
            background: active ? "#1a1a2e" : "#fff",
            color: active ? "#fff" : "#374151",
            transition: "all 0.2s ease",
            whiteSpace: "nowrap",
            userSelect: "none",
        }),

        tabBadge: (color) => ({
            background: color,
            color: "#fff",
            fontSize: isMobile ? "11px" : "12px",
            fontWeight: "600",
            padding: "2px 8px",
            borderRadius: "10px",
            minWidth: "20px",
            textAlign: "center",
        }),

        // Scroll Container
        scrollContainer: {
            maxHeight: `${scrollContainerHeight}px`,
            overflowY: "auto",
            overflowX: "hidden",
            paddingRight: "8px",
            scrollBehavior: "smooth",
        },

        // Custom scrollbar styles applied via CSS
        scrollContainerClass: "alerts-scroll-container",

        // ALERT CARDS
        alertCard: (borderColor) => ({
            background: "#ffffff",
            borderRadius: "12px",
            padding: isMobile ? "16px" : "20px 24px",
            marginBottom: "14px",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "space-between",
            borderLeft: `4px solid ${borderColor}`,
            boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)",
            border: "1px solid #f0f0f0",
            borderLeftColor: borderColor,
            borderLeftWidth: "4px",
            gap: isMobile ? "16px" : "0",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }),

        alertLeft: {
            display: "flex",
            alignItems: "center",
            gap: isMobile ? "12px" : "16px",
            flex: 1,
            width: isMobile ? "100%" : "auto",
        },

        avatar: {
            width: isMobile ? "44px" : "50px",
            height: isMobile ? "44px" : "50px",
            borderRadius: "50%",
            background: "#f3f4f6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "600",
            fontSize: isMobile ? "14px" : "15px",
            color: "#6b7280",
            flexShrink: 0,
        },

        memberInfo: {
            flex: 1,
            minWidth: 0,
        },

        memberName: {
            fontWeight: "600",
            fontSize: isMobile ? "14px" : "15px",
            color: "#1a1a2e",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "2px",
            flexWrap: "wrap",
        },

        memberTag: {
            background: "#f3f4f6",
            fontSize: "11px",
            fontWeight: "500",
            padding: "3px 8px",
            borderRadius: "4px",
            border: "1px solid #e5e7eb",
            color: "#374151",
        },

        gymName: {
            fontSize: isMobile ? "13px" : "14px",
            color: "#6b7280",
            marginBottom: "6px",
        },

        contactRow: {
            display: "flex",
            alignItems: isMobile ? "flex-start" : "center",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "4px" : "16px",
            color: "#6b7280",
            fontSize: isMobile ? "12px" : "13px",
        },

        contactItem: {
            display: "flex",
            alignItems: "center",
            gap: "6px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
        },

        // Amount Section
        amountSection: {
            textAlign: isMobile ? "left" : "center",
            marginRight: isMobile ? "0" : isTablet ? "20px" : "30px",
            minWidth: isMobile ? "auto" : "90px",
            width: isMobile ? "100%" : "auto",
            display: isMobile ? "flex" : "block",
            justifyContent: isMobile ? "space-between" : "flex-start",
            alignItems: "center",
            paddingTop: isMobile ? "8px" : "0",
            borderTop: isMobile ? "1px solid #f0f0f0" : "none",
        },

        amountLabel: {
            fontSize: "13px",
            color: "#6b7280",
            marginBottom: isMobile ? "0" : "2px",
        },

        amountValue: {
            fontSize: isMobile ? "16px" : "17px",
            fontWeight: "700",
            color: "#1f2937",
        },

        // Actions Section
        actionsSection: {
            display: "flex",
            alignItems: "center",
            gap: isMobile ? "8px" : "12px",
            flexWrap: "wrap",
            width: isMobile ? "100%" : "auto",
            justifyContent: isMobile ? "flex-start" : "flex-end",
            paddingTop: isMobile ? "8px" : "0",
        },

        overdueBadge: {
            background: "#ef4444",
            color: "#ffffff",
            padding: isMobile ? "6px 10px" : "8px 14px",
            borderRadius: "6px",
            fontSize: isMobile ? "12px" : "13px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            whiteSpace: "nowrap",
        },

        dueTodayBadge: {
            background: "#fffbeb",
            color: "#d97706",
            padding: isMobile ? "6px 10px" : "8px 14px",
            borderRadius: "6px",
            fontSize: isMobile ? "12px" : "13px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            border: "1px solid #fcd34d",
            whiteSpace: "nowrap",
        },

        btnPaid: {
            padding: isMobile ? "6px 12px" : "8px 16px",
            background: "#1f2937",
            color: "#fff",
            borderRadius: "6px",
            fontSize: isMobile ? "12px" : "13px",
            fontWeight: "500",
            cursor: "pointer",
            border: "none",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            whiteSpace: "nowrap",
            transition: "background 0.2s ease",
        },

        btnRemind: {
            padding: isMobile ? "6px 12px" : "8px 16px",
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: "6px",
            fontSize: isMobile ? "12px" : "13px",
            fontWeight: "500",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: "#374151",
            whiteSpace: "nowrap",
            transition: "background 0.2s ease, border-color 0.2s ease",
        },

        btnClose: {
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9ca3af",
            marginLeft: isMobile ? "auto" : "4px",
            transition: "color 0.2s ease",
            borderRadius: "4px",
        },

        // Empty State Styles
        emptyStateContainer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: isMobile ? "40px 20px" : "60px 40px",
            background: "linear-gradient(135deg, #f0fdf4 0%, #ecfeff 50%, #eff6ff 100%)",
            borderRadius: "16px",
            border: "2px dashed #d1d5db",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
        },

        emptyStateIconContainer: {
            position: "relative",
            marginBottom: "24px",
        },

        emptyStateMainIcon: {
            width: isMobile ? "80px" : "100px",
            height: isMobile ? "80px" : "100px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 40px rgba(34, 197, 94, 0.3)",
            animation: "pulse 2s ease-in-out infinite",
        },

        emptyStateSparkle1: {
            position: "absolute",
            top: "-10px",
            right: "-10px",
            color: "#fbbf24",
            animation: "sparkle 1.5s ease-in-out infinite",
        },

        emptyStateSparkle2: {
            position: "absolute",
            bottom: "0",
            left: "-15px",
            color: "#3b82f6",
            animation: "sparkle 1.5s ease-in-out infinite 0.5s",
        },

        emptyStateTitle: {
            fontSize: isMobile ? "20px" : "24px",
            fontWeight: "700",
            color: "#1a1a2e",
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
        },

        emptyStateSubtitle: {
            fontSize: isMobile ? "14px" : "16px",
            color: "#6b7280",
            marginBottom: "24px",
            maxWidth: "400px",
            lineHeight: "1.6",
        },

        emptyStateStats: {
            display: "flex",
            gap: isMobile ? "16px" : "32px",
            flexWrap: "wrap",
            justifyContent: "center",
        },

        emptyStateStat: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "16px 24px",
            background: "rgba(255,255,255,0.8)",
            borderRadius: "12px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
        },

        emptyStateStatValue: {
            fontSize: isMobile ? "24px" : "28px",
            fontWeight: "700",
            color: "#22c55e",
            marginBottom: "4px",
        },

        emptyStateStatLabel: {
            fontSize: "13px",
            color: "#6b7280",
            fontWeight: "500",
        },

        // Confetti-like decorations
        decoration1: {
            position: "absolute",
            top: "20px",
            left: "20px",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#fbbf24",
            opacity: 0.6,
        },

        decoration2: {
            position: "absolute",
            top: "40px",
            right: "40px",
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "#3b82f6",
            opacity: 0.5,
        },

        decoration3: {
            position: "absolute",
            bottom: "30px",
            left: "15%",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#ec4899",
            opacity: 0.6,
        },

        decoration4: {
            position: "absolute",
            bottom: "50px",
            right: "20%",
            width: "10px",
            height: "10px",
            borderRadius: "2px",
            background: "#8b5cf6",
            opacity: 0.5,
            transform: "rotate(45deg)",
        },

        // Scroll indicator
        scrollIndicator: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "8px 16px",
            background: "#f3f4f6",
            borderRadius: "20px",
            fontSize: "13px",
            color: "#6b7280",
            marginTop: "12px",
        },
    };

    // Inject CSS for animations and custom scrollbar
    useEffect(() => {
        const styleId = "dashboard-custom-styles";
        if (!document.getElementById(styleId)) {
            const style = document.createElement("style");
            style.id = styleId;
            style.textContent = `
                @keyframes pulse {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.05);
                    }
                }

                @keyframes sparkle {
                    0%, 100% {
                        opacity: 1;
                        transform: scale(1) rotate(0deg);
                    }
                    50% {
                        opacity: 0.5;
                        transform: scale(1.2) rotate(10deg);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                .alerts-scroll-container {
                    scrollbar-width: thin;
                    scrollbar-color: #d1d5db #f3f4f6;
                }

                .alerts-scroll-container::-webkit-scrollbar {
                    width: 8px;
                }

                .alerts-scroll-container::-webkit-scrollbar-track {
                    background: #f3f4f6;
                    border-radius: 10px;
                }

                .alerts-scroll-container::-webkit-scrollbar-thumb {
                    background: linear-gradient(180deg, #9ca3af 0%, #6b7280 100%);
                    border-radius: 10px;
                    border: 2px solid #f3f4f6;
                }

                .alerts-scroll-container::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(180deg, #6b7280 0%, #4b5563 100%);
                }

                .alert-card-hover:hover {
                    transform: translateX(4px);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
                }
            `;
            document.head.appendChild(style);
        }
    }, []);

    return (
        <div style={styles.page}>
            {/* NOTIFICATION */}
            {notification && (
                <div
                    style={{
                        ...styles.notification,
                        ...(notification.type === "success"
                            ? styles.notificationSuccess
                            : notification.type === "info"
                            ? styles.notificationInfo
                            : styles.notificationWarning),
                    }}
                >
                    {notification.type === "success" && <HiOutlineCheck size={18} />}
                    {notification.type === "info" && <HiOutlineEnvelope size={18} />}
                    {notification.type === "warning" && <HiOutlineXMark size={18} />}
                    {notification.message}
                </div>
            )}

            {/* HEADER */}
            <h2 style={styles.title}>Dashboard Overview</h2>
            <p style={styles.subtitle}>Monitor your gym network at a glance</p>

            {/* ROW 1 */}
            <div style={styles.cardsRow}>
                <div style={styles.card}>
                    <div>
                        <h4 style={styles.cardTitle}>Total Clients</h4>
                        <h2 style={styles.cardValue}>8</h2>
                        <p style={styles.cardSub}>+2 this month</p>
                    </div>
                    <div style={{ ...styles.iconWrapper, background: "#eff6ff" }}>
                        <HiOutlineBuildingOffice size={iconSize} color="#3b82f6" />
                    </div>
                </div>

                <div style={styles.card}>
                    <div>
                        <h4 style={styles.cardTitle}>Total Trainers</h4>
                        <h2 style={styles.cardValue}>15</h2>
                        <p style={styles.cardSub}>+3 this month</p>
                    </div>
                    <div style={{ ...styles.iconWrapper, background: "#f0fdf4" }}>
                        <HiOutlineUsers size={iconSize} color="#22c55e" />
                    </div>
                </div>

                <div style={styles.card}>
                    <div>
                        <h4 style={styles.cardTitle}>Total Customers</h4>
                        <h2 style={styles.cardValue}>342</h2>
                        <p style={styles.cardSub}>+28 this month</p>
                    </div>
                    <div style={{ ...styles.iconWrapper, background: "#f0fdf4" }}>
                        <HiOutlineUserGroup size={iconSize} color="#22c55e" />
                    </div>
                </div>
            </div>

            {/* ROW 2 */}
            <div style={styles.cardsRow}>
                <div style={styles.card}>
                    <div>
                        <h4 style={styles.cardTitle}>Active Members</h4>
                        <h2 style={styles.cardValue}>298</h2>
                        <p style={styles.cardSub}>87% active rate</p>
                    </div>
                    <div style={{ ...styles.iconWrapper, background: "#fef3c7" }}>
                        <HiOutlineChartBar size={iconSize} color="#f59e0b" />
                    </div>
                </div>

                <div style={styles.card}>
                    <div>
                        <h4 style={styles.cardTitle}>Today's Attendance</h4>
                        <h2 style={styles.cardValue}>156</h2>
                        <p style={styles.cardSub}>52% check-in rate</p>
                    </div>
                    <div style={{ ...styles.iconWrapper, background: "#ecfeff" }}>
                        <HiOutlineCalendarDays size={iconSize} color="#06b6d4" />
                    </div>
                </div>

                <div style={styles.card}>
                    <div>
                        <h4 style={styles.cardTitle}>Pending Payments</h4>
                        <h2 style={styles.cardValue}>{allCount}</h2>
                        <p style={styles.cardSub}>Requires attention</p>
                    </div>
                    <div style={{ ...styles.iconWrapper, background: "#fef2f2" }}>
                        <HiOutlineCurrencyDollar size={iconSize} color="#ef4444" />
                    </div>
                </div>
            </div>

            {/* PAYMENT ALERTS SECTION */}
            <div style={styles.paymentSection}>
                <h3 style={styles.sectionTitle}>Payment Alerts</h3>
                <p style={styles.sectionSubtitle}>
                    Members with pending or overdue payments
                </p>

                {/* FILTER TABS */}
                <div style={styles.tabs}>
                    <div
                        style={styles.tab(activeTab === "all")}
                        onClick={() => handleTabChange("all")}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && handleTabChange("all")}
                    >
                        All Alerts
                        <span
                            style={styles.tabBadge(
                                activeTab === "all" ? "#6b7280" : "#9ca3af"
                            )}
                        >
                            {allCount}
                        </span>
                    </div>
                    <div
                        style={styles.tab(activeTab === "overdue")}
                        onClick={() => handleTabChange("overdue")}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && handleTabChange("overdue")}
                    >
                        Overdue
                        <span style={styles.tabBadge("#f97316")}>{overdueCount}</span>
                    </div>
                    <div
                        style={styles.tab(activeTab === "dueToday")}
                        onClick={() => handleTabChange("dueToday")}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && handleTabChange("dueToday")}
                    >
                        Due Today
                        <span style={styles.tabBadge("#1a1a2e")}>{dueTodayCount}</span>
                    </div>
                </div>

                {/* ALERT CARDS with Scroll Container */}
                {filteredAlerts.length > 0 ? (
                    <>
                        <div
                            className="alerts-scroll-container"
                            style={styles.scrollContainer}
                        >
                            {filteredAlerts.map((item) => (
                                <div
                                    key={item.id}
                                    className="alert-card-hover"
                                    style={styles.alertCard(
                                        item.overdue ? "#fca5a5" : "#fde047"
                                    )}
                                >
                                    {/* LEFT SECTION - Avatar & Info */}
                                    <div style={styles.alertLeft}>
                                        <div style={styles.avatar}>
                                            {item.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </div>

                                        <div style={styles.memberInfo}>
                                            <div style={styles.memberName}>
                                                {item.name}
                                                {/* <span style={styles.memberTag}>{item.tag}</span> */}
                                            </div>
                                            <div style={styles.gymName}>{item.gym}</div>
                                            <div style={styles.contactRow}>
                                                <span style={styles.contactItem}>
                                                    <HiOutlinePhone size={14} />
                                                    {item.phone}
                                                </span>
                                                <span style={styles.contactItem}>
                                                    <HiOutlineEnvelope size={14} />
                                                    {item.email}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* AMOUNT SECTION */}
                                    <div style={styles.amountSection}>
                                        <div style={styles.amountLabel}>Amount Due</div>
                                        <div style={styles.amountValue}>{item.amount}</div>
                                    </div>

                                    {/* ACTIONS SECTION */}
                                    <div style={styles.actionsSection}>
                                        {item.overdue ? (
                                            <div style={styles.overdueBadge}>
                                                <HiOutlineClock size={14} />
                                                {item.badge}
                                            </div>
                                        ) : (
                                            <div style={styles.dueTodayBadge}>
                                                <HiOutlineClock size={14} />
                                                {item.badge}
                                            </div>
                                        )}

                                        <button
                                            style={styles.btnPaid}
                                            onClick={(e) => handleMarkPaid(e, item.id, item.name)}
                                            type="button"
                                            onMouseOver={(e) => {
                                                e.currentTarget.style.background = "#374151";
                                            }}
                                            onMouseOut={(e) => {
                                                e.currentTarget.style.background = "#1f2937";
                                            }}
                                        >
                                            <HiOutlineCheck size={14} />
                                            Mark Paid
                                        </button>

                                        <button
                                            style={styles.btnRemind}
                                            onClick={(e) => handleRemind(e, item.id, item.name, item.email)}
                                            type="button"
                                            onMouseOver={(e) => {
                                                e.currentTarget.style.background = "#f9fafb";
                                                e.currentTarget.style.borderColor = "#d1d5db";
                                            }}
                                            onMouseOut={(e) => {
                                                e.currentTarget.style.background = "#fff";
                                                e.currentTarget.style.borderColor = "#e5e7eb";
                                            }}
                                        >
                                            <HiOutlineEnvelope size={14} />
                                            Remind
                                        </button>

                                        <button
                                            style={styles.btnClose}
                                            onClick={(e) => handleRemove(e, item.id, item.name)}
                                            type="button"
                                            aria-label="Dismiss alert"
                                            onMouseOver={(e) => {
                                                e.currentTarget.style.color = "#ef4444";
                                                e.currentTarget.style.background = "#fef2f2";
                                            }}
                                            onMouseOut={(e) => {
                                                e.currentTarget.style.color = "#9ca3af";
                                                e.currentTarget.style.background = "transparent";
                                            }}
                                        >
                                            <HiOutlineXMark size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {filteredAlerts.length > 3 && (
                            <div style={styles.scrollIndicator}>
                                <span>↓</span>
                                <span>Scroll for more ({filteredAlerts.length - 3} more alerts)</span>
                            </div>
                        )}
                    </>
                ) : (
                    /* ATTRACTIVE EMPTY STATE */
                    <div style={styles.emptyStateContainer}>
                        {/* Decorative elements */}
                        <div style={styles.decoration1}></div>
                        <div style={styles.decoration2}></div>
                        <div style={styles.decoration3}></div>
                        <div style={styles.decoration4}></div>

                        {/* Main icon with sparkles */}
                        <div style={styles.emptyStateIconContainer}>
                            <div style={styles.emptyStateMainIcon}>
                                <HiOutlineCheckCircle size={isMobile ? 40 : 50} color="#fff" />
                            </div>
                            <div style={styles.emptyStateSparkle1}>
                                <HiOutlineSparkles size={24} />
                            </div>
                            <div style={styles.emptyStateSparkle2}>
                                <HiOutlineSparkles size={20} />
                            </div>
                        </div>

                        {/* Title */}
                        <h3 style={styles.emptyStateTitle}>
                            All Caught Up! 🎉
                        </h3>

                        {/* Subtitle */}
                        <p style={styles.emptyStateSubtitle}>
                            Great news! There are no pending payment alerts at the moment. 
                            All your members are up to date with their payments.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}