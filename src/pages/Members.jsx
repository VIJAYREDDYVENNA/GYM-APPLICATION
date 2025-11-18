import React from "react";
import {
    HiOutlineMagnifyingGlass,
    HiPlus,
    HiOutlinePhone,
    HiOutlineEnvelope,
    HiOutlineEye,
    HiOutlinePencilSquare,
    HiOutlineTrash,
} from "react-icons/hi2";

export default function Members() {
    const styles = {
        page: {
            padding: "25px",
            background: "#f5f7fb",
            minHeight: "100vh",
            fontFamily: "Inter, sans-serif",
        },

        headerRow: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "16px",
            marginBottom: "18px",
        },

        titleBlock: {
            flex: 1,
        },

        title: {
            fontSize: "22px",
            fontWeight: 700,
            margin: 0,
        },

        subtitle: {
            color: "#6d7280",
            marginTop: "6px",
            marginBottom: 0,
            fontSize: "14px",
        },

        topControls: {
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginLeft: "12px",
        },

        searchBox: {
            background: "#fff",
            borderRadius: "10px",
            border: "1px solid #e3e6ea",
            padding: "10px 12px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            width: "720px",
            minWidth: "280px",
        },

        searchInput: {
            border: "none",
            outline: "none",
            width: "100%",
            fontSize: "14px",
        },

        filtersRow: {
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginLeft: "8px",
        },

        filterSelect: {
            padding: "9px 12px",
            borderRadius: "8px",
            border: "1px solid #e3e6ea",
            background: "#fff",
            fontSize: "14px",
        },

        addBtn: {
            background: "#2563eb",
            color: "#fff",
            padding: "10px 16px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
            border: "none",
            fontWeight: 600,
        },

        card: {
            background: "#fff",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
            padding: "18px",
            marginTop: "18px",
        },

        table: {
            width: "100%",
            borderCollapse: "collapse",
        },

        th: {
            textAlign: "left",
            padding: "12px 10px",
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

        nameCell: {
            display: "flex",
            alignItems: "center",
            gap: "12px",
        },

        avatar: {
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            background: "#e6eefc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            color: "#1e3a8a",
            fontSize: "14px",
        },

        nameBlock: {
            display: "flex",
            flexDirection: "column",
        },

        locationText: {
            fontSize: "12px",
            color: "#9aa3ad",
            marginTop: "4px",
        },

        contactCol: {
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            color: "#556",
            fontSize: "13px",
        },

        statusBadge: (active) => ({
            display: "inline-block",
            padding: "6px 10px",
            borderRadius: "12px",
            background: active ? "#ecfdf5" : "#f3f4f6",
            color: active ? "#065f46" : "#6b7280",
            fontSize: "13px",
            fontWeight: 600,
        }),

        paymentBadge: (type) => {
            if (type === "Paid")
                return {
                    background: "#ecfdf5",
                    color: "#065f46",
                    padding: "6px 10px",
                    borderRadius: "10px",
                    fontWeight: 600,
                    display: "inline-block",
                    fontSize: "13px",
                };
            if (type === "Pending")
                return {
                    background: "#fff7ed",
                    color: "#92400e",
                    padding: "6px 10px",
                    borderRadius: "10px",
                    fontWeight: 600,
                    display: "inline-block",
                    fontSize: "13px",
                };
            // Overdue
            return {
                background: "#fff1f2",
                color: "#9f1239",
                padding: "6px 10px",
                borderRadius: "10px",
                fontWeight: 600,
                display: "inline-block",
                fontSize: "13px",
            };
        },

        subscriptionText: { color: "#374151", fontSize: "13px" },

        attendancePill: {
            display: "inline-block",
            padding: "6px 10px",
            borderRadius: "12px",
            background: "#f1f7fb",
            color: "#0f172a",
            fontWeight: 700,
            fontSize: "13px",
        },

        actionsCol: {
            display: "flex",
            gap: "12px",
            alignItems: "center",
            justifyContent: "flex-end",
            color: "#64748b",
        },

        iconView: { color: "#374151", cursor: "pointer" },
        iconEdit: { color: "#6b7280", cursor: "pointer" },
        iconDelete: { color: "#dc2626", cursor: "pointer" },

        smallMuted: { fontSize: "12px", color: "#9aa3ad" },
    };

    const customers = [
        {
            name: "Alex Johnson",
            initials: "AJ",
            city: "New York, NY",
            phone: "+1 (555) 123-4567",
            email: "alex.j@email.com",
            status: "Active",
            trainer: "Michael Johnson",
            time: "6:00 AM - 8:00 AM",
            payment: "Paid",
            subscription: "12 months",
            attendance: "85%",
        },
        {
            name: "Emma Williams",
            initials: "EW",
            city: "Los Angeles, CA",
            phone: "+1 (555) 234-5678",
            email: "emma.w@email.com",
            status: "Active",
            trainer: "Sarah Williams",
            time: "8:00 AM - 10:00 AM",
            payment: "Paid",
            subscription: "6 months",
            attendance: "92%",
        },
        {
            name: "Michael Brown",
            initials: "MB",
            city: "Chicago, IL",
            phone: "+1 (555) 345-6789",
            email: "michael.b@email.com",
            status: "Active",
            trainer: "David Martinez",
            time: "5:00 PM - 7:00 PM",
            payment: "Pending",
            subscription: "3 months",
            attendance: "78%",
        },
        {
            name: "Sophia Davis",
            initials: "SD",
            city: "Houston, TX",
            phone: "+1 (555) 456-7890",
            email: "sophia.d@email.com",
            status: "Active",
            trainer: "Emily Davis",
            time: "10:00 AM - 12:00 PM",
            payment: "Paid",
            subscription: "12 months",
            attendance: "88%",
        },
        {
            name: "James Miller",
            initials: "JM",
            city: "Phoenix, AZ",
            phone: "+1 (555) 567-8901",
            email: "james.m@email.com",
            status: "Inactive",
            trainer: "James Wilson",
            time: "7:00 AM - 9:00 AM",
            payment: "Overdue",
            subscription: "1 month",
            attendance: "45%",
        },
        {
            name: "Olivia Garcia",
            initials: "OG",
            city: "Philadelphia, PA",
            phone: "+1 (555) 678-9012",
            email: "olivia.g@email.com",
            status: "Active",
            trainer: "Lisa Anderson",
            time: "6:00 PM - 8:00 PM",
            payment: "Paid",
            subscription: "6 months",
            attendance: "91%",
        },
        {
            name: "William Martinez",
            initials: "WM",
            city: "San Antonio, TX",
            phone: "+1 (555) 789-0123",
            email: "william.m@email.com",
            status: "Active",
            trainer: "Robert Taylor",
            time: "12:00 PM - 2:00 PM",
            payment: "Paid",
            subscription: "3 months",
            attendance: "82%",
        },
        {
            name: "Ava Rodriguez",
            initials: "AR",
            city: "San Diego, CA",
            phone: "+1 (555) 890-1234",
            email: "ava.r@email.com",
            status: "Active",
            trainer: "Jennifer Moore",
            time: "9:00 AM - 11:00 AM",
            payment: "Paid",
            subscription: "12 months",
            attendance: "94%",
        },
    ];

    return (
        <div style={styles.page}>
            <div style={styles.headerRow}>
                <div style={styles.titleBlock}>
                    <h2 style={styles.title}>Customers Management</h2>
                    <p style={styles.subtitle}>Manage gym members and their subscriptions</p>
                </div>

                <div style={styles.topControls}>
                    <div style={styles.searchBox}>
                        <HiOutlineMagnifyingGlass size={18} color="#6b7280" />
                        <input
                            style={styles.searchInput}
                            placeholder="Search by name, email, or mobile..."
                        />
                    </div>

                    <div style={styles.filtersRow}>
                        <select style={styles.filterSelect}>
                            <option>All Status</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>

                        <select style={styles.filterSelect}>
                            <option>All Payments</option>
                            <option>Paid</option>
                            <option>Pending</option>
                            <option>Overdue</option>
                        </select>

                        <button style={styles.addBtn}>
                            <HiPlus /> Add Customer
                        </button>
                    </div>
                </div>
            </div>

            <div style={styles.card}>
                <h3 style={{ margin: 0, marginBottom: "12px", fontWeight: 700 }}>
                    Customers List ({customers.length})
                </h3>

                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>S.No</th>
                            <th style={styles.th}>Name</th>
                            <th style={styles.th}>Contact</th>
                            <th style={styles.th}>Status</th>
                            <th style={styles.th}>Trainer</th>
                            <th style={styles.th}>Preferred Time</th>
                            <th style={styles.th}>Payment</th>
                            <th style={styles.th}>Subscription</th>
                            <th style={styles.th}>Attendance</th>
                            <th style={styles.th}>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {customers.map((c, i) => (
                            <tr key={i}>
                                <td style={styles.td}>{i + 1}</td>

                                <td style={{ ...styles.td, width: "240px" }}>
                                    <div style={styles.nameCell}>
                                        <div style={styles.avatar}>{c.initials}</div>
                                        <div style={styles.nameBlock}>
                                            <div style={{ fontWeight: 600 }}>{c.name}</div>
                                            <div style={styles.locationText}>{c.city}</div>
                                        </div>
                                    </div>
                                </td>

                                <td style={styles.td}>
                                    <div style={styles.contactCol}>
                                        <div>
                                            <HiOutlinePhone style={{ marginRight: 8 }} />
                                            {c.phone}
                                        </div>
                                        <div>
                                            <HiOutlineEnvelope style={{ marginRight: 8 }} />
                                            {c.email}
                                        </div>
                                    </div>
                                </td>

                                <td style={styles.td}>
                                    <span style={styles.statusBadge(c.status === "Active")}>
                                        {c.status}
                                    </span>
                                </td>

                                <td style={styles.td}>{c.trainer}</td>

                                <td style={styles.td}>{c.time}</td>

                                <td style={styles.td}>
                                    <span style={styles.paymentBadge(c.payment)}>{c.payment}</span>
                                </td>

                                <td style={styles.td}>
                                    <span style={styles.subscriptionText}>{c.subscription}</span>
                                </td>

                                <td style={styles.td}>
                                    <span style={styles.attendancePill}>{c.attendance}</span>
                                </td>

                                <td style={{ ...styles.td, ...styles.actionsCol }}>
                                    <HiOutlineEye style={styles.iconView} title="View" />
                                    <HiOutlinePencilSquare style={styles.iconEdit} title="Edit" />
                                    <HiOutlineTrash style={styles.iconDelete} title="Delete" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
