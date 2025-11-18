import React, { useState } from "react";

export default function Profile() {

    const [editMode, setEditMode] = useState(false);

    const dummyImage =
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&q=80";

    const styles = {
        page: {
            padding: "25px",
            background: "#f5f5f5",
            minHeight: "100vh",
            fontFamily: "Inter, sans-serif",
            overflowX: "hidden",
        },

        headerRow: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "25px",
        },

        heading: {
            fontSize: "26px",
            fontWeight: 700,
            color: "#222",
        },

        editTopBtn: {
            background: "#ff9800",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: 600,
        },

        container: {
            display: "grid",
            gridTemplateColumns: "35% 65%",
            gap: "30px",
            maxWidth: "100%",
            alignItems: "flex-start",
        },

        leftSection: {
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
        },

        profileImage: {
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            objectFit: "cover",
        },

        profileName: {
            marginTop: "14px",
            fontSize: "20px",
            fontWeight: 700,
            color: "#222",
        },

        rightCard: {
            background: "#ffffff",
            borderRadius: "12px",
            padding: "25px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        },

        sectionTitle: {
            fontSize: "18px",
            fontWeight: 700,
            color: "#333",
            marginBottom: "18px",
        },

        label: {
            fontSize: "14px",
            color: "#555",
            marginBottom: "6px",
            display: "block",
        },

        input: {
            width: "100%",
            maxWidth: "100%",
            boxSizing: "border-box",
            padding: "10px 14px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px",
            background: editMode ? "#fff" : "#e9e9e9",
            outline: "none",
        },

        row: {
            marginBottom: "18px",
        },

        responsiveCSS: `
            @media (max-width: 900px) {
                .profile-grid {
                    grid-template-columns: 1fr;
                }
            }
        `,
    };

    const handleEditClick = () => {
        if (editMode) {
            console.log("Saving changes...");
        }
        setEditMode(!editMode);
    };

    return (
        <div style={styles.page}>
            <style>{styles.responsiveCSS}</style>

            {/* HEADER */}
            <div style={styles.headerRow}>
                <h2 style={styles.heading}>Profile Settings</h2>

                <button
                    style={styles.editTopBtn}
                    onClick={handleEditClick}
                >
                    {editMode ? "Save Changes" : "Edit Profile"}
                </button>
            </div>

            {/* MAIN */}
            <div className="profile-grid" style={styles.container}>

                {/* LEFT — Profile */}
                <div style={styles.leftSection}>
                    <img
                        src={dummyImage}
                        alt="Profile"
                        style={styles.profileImage}
                    />

                    <div style={styles.profileName}>John Doe</div>
                </div>

                {/* RIGHT — Form */}
                <div style={styles.rightCard}>
                    <div style={styles.sectionTitle}>Account Information</div>

                    {/* Full Name */}
                    <div style={styles.row}>
                        <label style={styles.label}>Full Name</label>
                        <input
                            style={styles.input}
                            placeholder="Enter full name"
                            disabled={!editMode}
                        />
                    </div>

                    {/* Username */}
                    <div style={styles.row}>
                        <label style={styles.label}>Username</label>
                        <input
                            style={styles.input}
                            placeholder="Enter username"
                            disabled={!editMode}
                        />
                    </div>

                    {/* Password (VIEW ONLY — No change button) */}
                    <div style={styles.row}>
                        <label style={styles.label}>Password</label>
                        <input
                            type="password"
                            style={styles.input}
                            value="************"
                            disabled
                        />
                    </div>

                    {/* Email */}
                    <div style={styles.row}>
                        <label style={styles.label}>Email ID</label>
                        <input
                            style={styles.input}
                            placeholder="example@email.com"
                            disabled={!editMode}
                        />
                    </div>

                    {/* Mobile */}
                    <div style={styles.row}>
                        <label style={styles.label}>Mobile Number</label>
                        <input
                            style={styles.input}
                            placeholder="Enter mobile number"
                            disabled={!editMode}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}
