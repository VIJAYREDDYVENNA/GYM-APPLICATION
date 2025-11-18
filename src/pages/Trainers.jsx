import React from "react";
import {
    HiOutlineEye,
    HiOutlinePencilSquare,
    HiOutlineTrash,
    HiOutlineMagnifyingGlass,
    HiPlus,
} from "react-icons/hi2";

export default function Trainers() {
    const styles = {
        page: {
            padding: "25px",
            background: "#f5f7fb",
            minHeight: "100vh",
            fontFamily: "Inter, sans-serif",
        },

        title: {
            fontSize: "22px",
            fontWeight: "700",
            marginBottom: "5px",
        },

        subtitle: {
            color: "#6d7280",
            marginBottom: "25px",
        },

        topBar: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
        },

        searchBox: {
            background: "#fff",
            borderRadius: "10px",
            border: "1px solid #e3e6ea",
            padding: "12px 16px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flex: 1,
        },

        searchInput: {
            border: "none",
            outline: "none",
            width: "100%",
            fontSize: "14px",
        },

        addButton: {
            background: "#2563eb",
            color: "#fff",
            padding: "10px 18px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
            border: "none",
            fontWeight: "500",
            marginLeft: "15px",
        },

        card: {
            background: "#fff",
            borderRadius: "14px",
            border: "1px solid #e5e7eb",
            padding: "20px",
            marginTop: "10px",
        },

        table: {
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "15px",
        },

        th: {
            textAlign: "left",
            padding: "12px",
            fontSize: "14px",
            color: "#374151",
            borderBottom: "1px solid #e5e7eb",
        },

        td: {
            padding: "12px",
            fontSize: "14px",
            borderBottom: "1px solid #f1f1f1",
            color: "#444",
        },

        trainerId: {
            color: "#2563eb",
            fontWeight: "600",
            cursor: "pointer",
        },

        tag: {
            background: "#f3f4f6",
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "13px",
        },

        actionIcons: {
            display: "flex",
            gap: "12px",
            fontSize: "18px",
            cursor: "pointer",
            alignItems: "center",
        },

        viewIcon: { color: "#2563eb", cursor: "pointer" },
        editIcon: { color: "#6b7280", cursor: "pointer" },
        deleteIcon: { color: "#dc2626", cursor: "pointer" },
    };

    // Trainer Data
    const trainers = [
        {
            id: "TRN001",
            name: "Michael Johnson",
            phone: "+1 (555) 111-2222",
            email: "mjohnson@email.com",
            spec: "Strength Training",
            clients: "25 assigned",
            date: "2023-01-10 09:00 AM",
        },
        {
            id: "TRN002",
            name: "Sarah Williams",
            phone: "+1 (555) 222-3333",
            email: "swilliams@email.com",
            spec: "Yoga & Flexibility",
            clients: "30 assigned",
            date: "2023-02-15 10:30 AM",
        },
        {
            id: "TRN003",
            name: "David Martinez",
            phone: "+1 (555) 333-4444",
            email: "dmartinez@email.com",
            spec: "CrossFit",
            clients: "22 assigned",
            date: "2023-03-20 08:45 AM",
        },
        {
            id: "TRN004",
            name: "Emily Davis",
            phone: "+1 (555) 444-5555",
            email: "edavis@email.com",
            spec: "Cardio & HIIT",
            clients: "28 assigned",
            date: "2023-04-12 11:00 AM",
        },
        // ... Add all remaining trainers as needed
    ];

    return (
        <div style={styles.page}>
            {/* PAGE TITLE */}
            <h2 style={styles.title}>Trainers Management</h2>
            <p style={styles.subtitle}>
                Manage trainers across all gym locations
            </p>

            <div style={styles.topBar}>
                {/* SEARCH BOX */}
                <div style={styles.searchBox}>
                    <HiOutlineMagnifyingGlass size={20} color="#6b7280" />
                    <input
                        type="text"
                        placeholder="Search by name, trainer ID, or specialization..."
                        style={styles.searchInput}
                    />
                </div>

                {/* ADD TRAINER */}
                <button style={styles.addButton}>
                    <HiPlus size={18} /> Add Trainer
                </button>
            </div>

            {/* TRAINERS TABLE */}
            <div style={styles.card}>
                <h3 style={{ marginBottom: "10px", fontWeight: "600" }}>
                    Trainers List ({trainers.length})
                </h3>

                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>S.No</th>
                            <th style={styles.th}>Trainer ID</th>
                            <th style={styles.th}>Name</th>
                            <th style={styles.th}>Mobile</th>
                            <th style={styles.th}>Email</th>
                            <th style={styles.th}>Specialization</th>
                            <th style={styles.th}>Clients</th>
                            <th style={styles.th}>Joining Date/Time</th>
                            <th style={styles.th}>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {trainers.map((t, index) => (
                            <tr key={index}>
                                <td style={styles.td}>{index + 1}</td>
                                <td style={styles.td}>
                                    <span style={styles.trainerId}>{t.id}</span>
                                </td>
                                <td style={styles.td}>{t.name}</td>
                                <td style={styles.td}>{t.phone}</td>
                                <td style={styles.td}>{t.email}</td>
                                <td style={styles.td}>
                                    <span style={styles.tag}>{t.spec}</span>
                                </td>
                                <td style={styles.td}>{t.clients}</td>
                                <td style={styles.td}>{t.date}</td>

                                <td style={styles.td}>
                                    <div style={styles.actionIcons}>
                                        <HiOutlineEye style={styles.viewIcon} />
                                        <HiOutlinePencilSquare style={styles.editIcon} />
                                        <HiOutlineTrash style={styles.deleteIcon} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
