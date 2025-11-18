import React from "react";
import { HiSearch } from "react-icons/hi";
import { HiOutlineEye, HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";

const attendanceData = [
    {
        id: 1,
        name: "Alex Johnson",
        customerId: "CUST001",
        trainer: "Michael Johnson",
        trainerId: "TRN001",
        gym: "PowerFit Gym",
        date: "2025-11-17 06:15 AM",
        checkIn: "06:15 AM",
        checkOut: "07:45 AM",
        status: "Present",
    },
    {
        id: 2,
        name: "Emma Williams",
        customerId: "CUST002",
        trainer: "Sarah Williams",
        trainerId: "TRN002",
        gym: "Elite Fitness",
        date: "2025-11-17 08:05 AM",
        checkIn: "08:05 AM",
        checkOut: "09:30 AM",
        status: "Present",
    },
    {
        id: 5,
        name: "James Miller",
        customerId: "CUST005",
        trainer: "James Wilson",
        trainerId: "TRN005",
        gym: "Muscle Factory",
        date: "2025-11-17 07:00 AM",
        checkIn: "-",
        checkOut: "-",
        status: "Absent",
    },
];

export default function Attendance() {
    const styles = {
        page: {
            padding: "25px",
            background: "#f5f7fb",
            minHeight: "100vh",
            fontFamily: "Inter, sans-serif",
        },

        headerTitle: { fontSize: "24px", fontWeight: 700, margin: 0 },
        headerSubtitle: { color: "#6d7280", marginTop: "6px", marginBottom: 0 },

        searchBarRow: {
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            marginTop: "18px",
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
            background: "#fff",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
            padding: "18px",
            marginTop: "20px",
        },

        table: {
            width: "100%",
            borderCollapse: "collapse",
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

        statusBadge: (type) => ({
            display: "inline-block",
            padding: "6px 10px",
            borderRadius: "12px",
            background: type === "Present" ? "#ecfdf5" : "#fff1f2",
            color: type === "Present" ? "#065f46" : "#b91c1c",
            fontWeight: 600,
            fontSize: "13px",
        }),

        actionsCol: {
            display: "flex",
            gap: "12px",
            alignItems: "center",
            color: "#64748b",
        },

        iconView: { color: "#374151", cursor: "pointer" },
        iconEdit: { color: "#6b7280", cursor: "pointer" },
        iconDelete: { color: "#dc2626", cursor: "pointer" },
    };

    return (
        <div style={styles.page}>
            {/* PAGE HEADER */}
            <h2 style={styles.headerTitle}>Attendance Management</h2>
            <p style={styles.headerSubtitle}>Track and monitor customer attendance</p>

            {/* SEARCH + FILTERS */}
            <div style={styles.searchBarRow}>
                <div style={styles.searchBox}>
                    <HiSearch size={18} color="#6b7280" />
                    <input
                        placeholder="Search by name, customer ID, or trainer..."
                        style={{
                            border: "none",
                            outline: "none",
                            flex: 1,
                            background: "transparent",
                        }}
                    />
                </div>

                <select style={styles.select}>
                    <option>Today</option>
                    <option>Yesterday</option>
                    <option>This Week</option>
                </select>

                <select style={styles.select}>
                    <option>All Status</option>
                    <option>Present</option>
                    <option>Absent</option>
                </select>
            </div>

            {/* DATA TABLE */}
            <div style={styles.card}>
                <h3 style={{ margin: 0, marginBottom: 10, fontWeight: 700 }}>
                    Attendance Records ({attendanceData.length})
                </h3>

                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>S.No</th>
                            <th style={styles.th}>Customer Name</th>
                            <th style={styles.th}>Customer ID</th>
                            <th style={styles.th}>Trainer</th>
                            <th style={styles.th}>Trainer ID</th>
                            <th style={styles.th}>Gym</th>
                            <th style={styles.th}>Date/Time</th>
                            <th style={styles.th}>Check-In</th>
                            <th style={styles.th}>Check-Out</th>
                            <th style={styles.th}>Status</th>
                            <th style={styles.th}>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {attendanceData.map((item, i) => (
                            <tr key={i}>
                                <td style={styles.td}>{i + 1}</td>
                                <td style={styles.td}>{item.name}</td>

                                <td style={{ ...styles.td, color: "#2563eb", cursor: "pointer" }}>
                                    {item.customerId}
                                </td>

                                <td style={styles.td}>{item.trainer}</td>

                                <td style={{ ...styles.td, color: "#2563eb", cursor: "pointer" }}>
                                    {item.trainerId}
                                </td>

                                <td style={styles.td}>{item.gym}</td>
                                <td style={styles.td}>{item.date}</td>
                                <td style={styles.td}>{item.checkIn}</td>
                                <td style={styles.td}>{item.checkOut}</td>

                                <td style={styles.td}>
                                    <span style={styles.statusBadge(item.status)}>
                                        {item.status}
                                    </span>
                                </td>

                                <td style={{ ...styles.td, ...styles.actionsCol }}>
                                    <HiOutlineEye style={styles.iconView} />
                                    <HiOutlinePencilSquare style={styles.iconEdit} />
                                    <HiOutlineTrash style={styles.iconDelete} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
