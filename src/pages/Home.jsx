import React, { useEffect } from "react";
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
    
    useEffect(() => {
        document.title = "FitZone - Home";
    }, []);

    const bgImageUrl =
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80";

    const responsiveCSS = `
        .home-page {
            min-height: 100vh;
            width: 100%;
            position: relative;
            overflow: hidden;
            font-family: Inter, sans-serif;
        }

        .home-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url(${bgImageUrl});
            background-size: cover;
            background-position: center;
            filter: brightness(0.45) contrast(1.1);
            z-index: 1;
        }

        .home-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.45);
            z-index: 2;
        }

        .home-content {
            position: relative;
            z-index: 3;
            padding: 50px 60px;
            min-height: 100vh;
            box-sizing: border-box;
        }

        .home-heading {
            color: #ffffff;
            font-size: 36px;
            font-weight: 700;
            margin-bottom: 40px;
            text-align: left;
        }

        .card-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 35px;
            max-width: 1400px;
            margin: 0 auto;
        }

        .home-card {
            background: rgba(255, 255, 255, 0.92);
            border-radius: 14px;
            padding: 30px 28px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 12px;
            cursor: pointer;
            transition: transform 0.2s ease, box-shadow 0.3s ease;
            min-height: 140px;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
            text-align: center;
        }

        .home-card:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
        }

        .home-card:active {
            transform: scale(0.98);
        }

        .card-icon {
            font-size: 48px;
            color: #ff9800;
        }

        .card-label {
            font-size: 20px;
            font-weight: 700;
            color: #1f2937;
        }

        /* Large Desktop (1400px+) */
        @media (min-width: 1400px) {
            .card-grid {
                grid-template-columns: repeat(3, 1fr);
                gap: 40px;
            }
            .home-card {
                min-height: 160px;
                padding: 35px 30px;
            }
            .card-icon {
                font-size: 52px;
            }
            .card-label {
                font-size: 22px;
            }
        }

        /* Desktop (1024px - 1399px) */
        @media (max-width: 1399px) and (min-width: 1025px) {
            .home-content {
                padding: 45px 50px;
            }
            .card-grid {
                grid-template-columns: repeat(3, 1fr);
                gap: 30px;
            }
        }

        /* Tablet Landscape (769px - 1024px) */
        @media (max-width: 1024px) and (min-width: 769px) {
            .home-content {
                padding: 40px 40px;
            }
            .home-heading {
                font-size: 32px;
                margin-bottom: 35px;
            }
            .card-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 28px;
            }
            .home-card {
                min-height: 130px;
                padding: 28px 24px;
            }
            .card-icon {
                font-size: 44px;
            }
            .card-label {
                font-size: 18px;
            }
        }

        /* Tablet Portrait (481px - 768px) */
        @media (max-width: 768px) and (min-width: 481px) {
            .home-content {
                padding: 35px 30px;
            }
            .home-heading {
                font-size: 28px;
                margin-bottom: 30px;
                text-align: center;
            }
            .card-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
            }
            .home-card {
                min-height: 120px;
                padding: 24px 20px;
                border-radius: 12px;
            }
            .card-icon {
                font-size: 40px;
            }
            .card-label {
                font-size: 17px;
            }
        }

        /* Large Mobile (376px - 480px) */
        @media (max-width: 480px) and (min-width: 376px) {
            .home-content {
                padding: 30px 20px;
            }
            .home-heading {
                font-size: 26px;
                margin-bottom: 25px;
                text-align: center;
            }
            .card-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
            }
            .home-card {
                min-height: 110px;
                padding: 20px 16px;
                border-radius: 10px;
                gap: 8px;
            }
            .card-icon {
                font-size: 36px;
            }
            .card-label {
                font-size: 15px;
            }
        }

        /* Small Mobile (320px - 375px) */
        @media (max-width: 375px) {
            .home-content {
                padding: 25px 15px;
            }
            .home-heading {
                font-size: 24px;
                margin-bottom: 20px;
                text-align: center;
            }
            .card-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 12px;
            }
            .home-card {
                min-height: 100px;
                padding: 18px 12px;
                border-radius: 10px;
                gap: 6px;
            }
            .card-icon {
                font-size: 32px;
            }
            .card-label {
                font-size: 13px;
            }
        }

        /* Extra Small Mobile (below 320px) */
        @media (max-width: 319px) {
            .home-content {
                padding: 20px 10px;
            }
            .home-heading {
                font-size: 22px;
                margin-bottom: 18px;
            }
            .card-grid {
                grid-template-columns: 1fr;
                gap: 12px;
            }
            .home-card {
                min-height: 90px;
                padding: 16px 14px;
                flex-direction: row;
                justify-content: flex-start;
                gap: 15px;
            }
            .card-icon {
                font-size: 30px;
            }
            .card-label {
                font-size: 15px;
            }
        }
    `;

    const cards = [
        { 
            icon: <HiOutlineHome className="card-icon" />, 
            label: "Dashboard",
            path: "/dashboard"
        },
        { 
            icon: <HiOutlineUserGroup className="card-icon" />, 
            label: "Clients",
            path: "/clients"
        },
        { 
            icon: <HiOutlineUser className="card-icon" />, 
            label: "Trainers",
            path: "/trainers"
        },
        { 
            icon: <HiOutlineClipboardCheck className="card-icon" />, 
            label: "Attendance",
            path: "/attendence"
        },
        { 
            icon: <HiOutlineCreditCard className="card-icon" />, 
            label: "Payments",
            path: "/payments"
        },
        { 
            icon: <HiOutlineCog className="card-icon" />, 
            label: "Profile",
            path: "/profile"
        },
    ];

    const handleCardClick = (path) => {
        navigate(path);
    };

    return (
        <div className="home-page">
            <style>{responsiveCSS}</style>

            <div className="home-background"></div>
            <div className="home-overlay"></div>

            <div className="home-content">
                <h2 className="home-heading">Home</h2>

                <div className="card-grid">
                    {cards.map((c, index) => (
                        <div
                            key={index}
                            className="home-card"
                            onClick={() => handleCardClick(c.path)}
                        >
                            {c.icon}
                            <span className="card-label">{c.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}