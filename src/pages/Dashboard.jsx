import React from "react";

// Icons for top cards + payment alerts
import {
    HiOutlineBuildingOffice,
    HiOutlineUsers,
    HiOutlineUserGroup,
    HiOutlineChartBar,
    HiOutlineCalendarDays,
    HiOutlineCurrencyDollar,
    HiOutlineEnvelope,   // FIXED Mail Icon
    HiOutlinePhone,
    HiOutlineXMark,
} from "react-icons/hi2";

export default function Dashboard() {
    const styles = {
        page: {
            padding: "25px",
            background: "#f5f7fb",
            minHeight: "100vh",
            fontFamily: "Inter, sans-serif",
        },

        title: { fontSize: "22px", fontWeight: "700" },
        subtitle: { color: "#6d7280", marginBottom: "25px" },

        cardsRow: {
            display: "flex",
            gap: "20px",
            marginBottom: "20px",
        },

        card: {
            flex: 1,
            background: "#ffffff",
            borderRadius: "14px",
            border: "1px solid #e5e7eb",
            padding: "22px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
        },

        cardTitle: { fontSize: "15px", marginBottom: "8px", color: "#555" },
        cardValue: { fontSize: "30px", fontWeight: "600", marginBottom: "5px" },
        cardSub: { color: "#8a8f9c", fontSize: "13px" },

        // PAYMENT ALERT SECTION
        paymentWrapper: {
            width: "90%",
            margin: "30px auto",
        },

        tabs: {
            display: "flex",
            gap: "12px",
            marginBottom: "20px",
        },

        tab: (active) => ({
            padding: "8px 20px",
            borderRadius: "20px",
            border: "1px solid #ccc",
            cursor: "pointer",
            fontSize: "14px",
            background: active ? "#000" : "#fff",
            color: active ? "#fff" : "#000",
        }),

        cardAlert: (bg, border) => ({
            background: bg,
            border: `1px solid ${border}`,
            borderRadius: "14px",
            padding: "22px",
            marginBottom: "18px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }),

        alertLeft: {
            display: "flex",
            gap: "18px",
            alignItems: "center",
        },

        avatar: {
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            background: "#e5e7eb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "600",
            fontSize: "18px",
            color: "#555",
        },

        tag: {
            background: "#fff",
            fontSize: "12px",
            padding: "3px 8px",
            borderRadius: "6px",
            border: "1px solid #ddd",
            marginLeft: "8px",
        },

        contactRow: {
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "6px",
            color: "#555",
            fontSize: "14px",
        },

        alertRight: {
            textAlign: "right",
        },

        overdueBadge: {
            background: "#f8d7da",
            color: "#b60000",
            padding: "6px 12px",
            borderRadius: "8px",
            fontSize: "14px",
            marginBottom: "6px",
            display: "inline-block",
        },

        dueTodayBadge: {
            background: "#fff3cd",
            color: "#a77700",
            padding: "6px 12px",
            borderRadius: "8px",
            fontSize: "14px",
            marginBottom: "6px",
            display: "inline-block",
        },

        btnPaid: {
            padding: "8px 18px",
            background: "#000",
            color: "#fff",
            borderRadius: "8px",
            fontSize: "14px",
            marginTop: "8px",
            cursor: "pointer",
            border: "none",
        },

        btnRemind: {
            padding: "8px 18px",
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "8px",
            fontSize: "14px",
            marginTop: "8px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "5px",
        },

        deleteIcon: {
            fontSize: "20px",
            marginTop: "10px",
            cursor: "pointer",
            color: "#444",
        },
    };

    // Payment Alerts Data
    const alerts = [
        {
            name: "Robert Lee",
            tag: "Premium",
            gym: "PowerFit Gym",
            phone: "+1 555-0101",
            email: "robert.lee@email.com",
            amount: "$50",
            badge: "2 days overdue",
            overdue: true,
        },
        {
            name: "Linda Martinez",
            tag: "Standard",
            gym: "Elite Fitness",
            phone: "+1 555-0102",
            email: "linda.m@email.com",
            amount: "$75",
            badge: "5 days overdue",
            overdue: true,
        },
        {
            name: "James Taylor",
            tag: "VIP",
            gym: "Iron Paradise",
            phone: "+1 555-0103",
            email: "james.t@email.com",
            amount: "$60",
            badge: "Due today",
            overdue: false,
        },
    ];

    return (
        <div style={styles.page}>

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
                    <HiOutlineBuildingOffice size={30} color="#3b82f6" />
                </div>

                <div style={styles.card}>
                    <div>
                        <h4 style={styles.cardTitle}>Total Trainers</h4>
                        <h2 style={styles.cardValue}>15</h2>
                        <p style={styles.cardSub}>+3 this month</p>
                    </div>
                    <HiOutlineUsers size={30} color="#a855f7" />
                </div>

                <div style={styles.card}>
                    <div>
                        <h4 style={styles.cardTitle}>Total Customers</h4>
                        <h2 style={styles.cardValue}>342</h2>
                        <p style={styles.cardSub}>+28 this month</p>
                    </div>
                    <HiOutlineUserGroup size={30} color="#22c55e" />
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
                    <HiOutlineChartBar size={30} color="#fb923c" />
                </div>

                <div style={styles.card}>
                    <div>
                        <h4 style={styles.cardTitle}>Today's Attendance</h4>
                        <h2 style={styles.cardValue}>156</h2>
                        <p style={styles.cardSub}>52% check-in rate</p>
                    </div>
                    <HiOutlineCalendarDays size={30} color="#06b6d4" />
                </div>

                <div style={styles.card}>
                    <div>
                        <h4 style={styles.cardTitle}>Pending Payments</h4>
                        <h2 style={styles.cardValue}>23</h2>
                        <p style={styles.cardSub}>Requires attention</p>
                    </div>
                    <HiOutlineCurrencyDollar size={30} color="#ef4444" />
                </div>
            </div>

            {/* PAYMENT ALERTS */}
            <div style={styles.paymentWrapper}>
                <h3 style={{ fontSize: "20px", marginBottom: "15px" }}>
                    Members with pending or overdue payments
                </h3>

                {/* FILTER TABS */}
                <div style={styles.tabs}>
                    <div style={styles.tab(true)}>All Alerts 3</div>
                    <div style={styles.tab(false)}>Overdue 2</div>
                    <div style={styles.tab(false)}>Due Today 1</div>
                </div>

                {/* ALERT CARDS */}
                {alerts.map((item, index) => (
                    <div
                        key={index}
                        style={styles.cardAlert(
                            item.overdue ? "#fdf1f1" : "#fffbea",
                            item.overdue ? "#f4c4c4" : "#ffe69a"
                        )}
                    >
                        {/* LEFT SECTION */}
                        <div style={styles.alertLeft}>
                            <div style={styles.avatar}>
                                {item.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                            </div>

                            <div>
                                <div style={{ fontWeight: "600", fontSize: "16px" }}>
                                    {item.name}
                                    <span style={styles.tag}>{item.tag}</span>
                                </div>

                                <div style={{ color: "#555", fontSize: "14px" }}>
                                    {item.gym}
                                </div>

                                <div style={styles.contactRow}>
                                    <HiOutlinePhone /> {item.phone}
                                    <HiOutlineEnvelope /> {item.email}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SECTION */}
                        <div style={styles.alertRight}>
                            <div style={{ fontSize: "15px", marginBottom: "6px" }}>
                                Amount Due
                            </div>

                            <div
                                style={{
                                    fontSize: "20px",
                                    fontWeight: "600",
                                    marginBottom: "8px",
                                }}
                            >
                                {item.amount}
                            </div>

                            {item.overdue ? (
                                <div style={styles.overdueBadge}>{item.badge}</div>
                            ) : (
                                <div style={styles.dueTodayBadge}>{item.badge}</div>
                            )}

                            <button style={styles.btnPaid}>Mark Paid</button>

                            <button style={styles.btnRemind}>
                                <HiOutlineEnvelope />
                                Remind
                            </button>

                            <div style={styles.deleteIcon}>
                                <HiOutlineXMark />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
