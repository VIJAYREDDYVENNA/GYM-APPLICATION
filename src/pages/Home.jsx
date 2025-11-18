import React from "react";
import { useNavigate } from "react-router-dom";
import {
    HiOutlineUserGroup,
    HiOutlineUser,
    HiOutlineCog,
    HiOutlineClipboardCheck,
    HiOutlineCreditCard,
    HiOutlineHome
} from "react-icons/hi";

export default function Home() {
    const navigate = useNavigate();
    
    const bgImageUrl =
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80";

    const styles = {
        page: {
            minHeight: "100vh",
            width: "100%",
            position: "relative",
            overflow: "hidden",
            fontFamily: "Inter, sans-serif",
        },

        backgroundImage: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${bgImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.45) contrast(1.1)",
            zIndex: 1,
        },

        overlay: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.45)",
            zIndex: 2,
        },

        content: {
            position: "relative",
            zIndex: 3,
            padding: "50px 40px",
        },

        heading: {
            color: "#ffffff",
            fontSize: "32px",
            fontWeight: 700,
            marginBottom: "40px",
        },

        cardGrid: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "35px",
        },

        card: {
            background: "rgba(255, 255, 255, 0.92)",
            borderRadius: "14px",
            padding: "30px 28px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            cursor: "pointer",
            transition: "transform 0.2s, box-shadow 0.3s",
            height: "140px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
            textAlign: "center",
        },

        cardIcon: {
            fontSize: "45px",
            color: "#ff9800",
        },

        cardLabel: {
            fontSize: "20px",
            fontWeight: 700,
            color: "#1f2937",
        },

        responsiveCSS: `
      @media (max-width: 1024px){ .card-grid { grid-template-columns: repeat(2,1fr); } }
      @media (max-width: 600px){ .card-grid { grid-template-columns: repeat(1,1fr); } }
    `,
    };

    // ✅ Updated cards array with navigation paths
    const cards = [
        { 
            icon: <HiOutlineHome style={styles.cardIcon} />, 
            label: "Dashboard",
            path: "/dashboard"
        },
        { 
            icon: <HiOutlineUserGroup style={styles.cardIcon} />, 
            label: "Members",
            path: "/members"
        },
        { 
            icon: <HiOutlineUser style={styles.cardIcon} />, 
            label: "Trainers",
            path: "/trainers"
        },
        { 
            icon: <HiOutlineClipboardCheck style={styles.cardIcon} />, 
            label: "Attendance",
            path: "/attendence"
        },
        { 
            icon: <HiOutlineCreditCard style={styles.cardIcon} />, 
            label: "Payments",
            path: "/payments"
        },
        { 
            icon: <HiOutlineCog style={styles.cardIcon} />, 
            label: "Profile",
            path: "/profile"
        },
    ];

    // ✅ Navigation handler
    const handleCardClick = (path) => {
        navigate(path);
    };

    return (
        <div style={styles.page}>
            <style>{styles.responsiveCSS}</style>

            <div style={styles.backgroundImage}></div>
            <div style={styles.overlay}></div>

            <div style={styles.content}>
                <h2 style={styles.heading}>Dashboard</h2>

                <div className="card-grid" style={styles.cardGrid}>
                    {cards.map((c, index) => (
                        <div
                            key={index}
                            style={styles.card}
                            onClick={() => handleCardClick(c.path)}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                        >
                            {c.icon}
                            <span style={styles.cardLabel}>{c.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}