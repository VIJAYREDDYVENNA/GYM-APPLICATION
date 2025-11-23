import React, { useState, useEffect } from "react";

export default function Profile() {
    const [editMode, setEditMode] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "John Doe",
        email: "john.doe@email.com",
        password: "mypassword123",
        mobile: "+1 234 567 8900",
    });

    useEffect(() => {
        document.title = "FitZone - Profile";
    }, []);

    const dummyImage =
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&q=80";

    const handleEditClick = () => {
        if (editMode) {
            console.log("Saving changes...", formData);
        }
        setEditMode(!editMode);
        setShowPassword(false);
    };

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <>
            <style>{`
             
                .profile-page {
                    padding: 25px 30px;
                    background: #f5f5f5;
                    min-height: 93vh;
                    font-family: 'Inter', 'Segoe UI', sans-serif;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .profile-wrapper {
                    width: 100%;
                    max-width: 1000px;
                }

                .profile-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 30px;
                    flex-wrap: wrap;
                    gap: 15px;
                }

                .profile-heading {
                    font-size: 26px;
                    font-weight: 700;
                    color: #222;
                }

                .edit-btn {
                    background: rgb(255, 140, 66);
                    color: #fff;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: 600;
                    font-size: 14px;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .edit-btn:hover {
                    background: rgb(235, 120, 46);
                    transform: translateY(-2px);
                    box-shadow: 0 4px 15px rgba(255, 140, 66, 0.4);
                }

                .edit-btn:active {
                    transform: translateY(0);
                }

                .edit-btn.save-mode {
                    background: #28a745;
                }

                .edit-btn.save-mode:hover {
                    background: #218838;
                    box-shadow: 0 4px 15px rgba(40, 167, 69, 0.4);
                }

                .profile-container {
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    gap: 30px;
                    align-items: stretch;
                }

                .profile-card {
                    background: #fff;
                    border-radius: 12px;
                    padding: 50px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
                    display: flex;
                    flex-direction: column;
                }

                .profile-left {
                    text-align: center;
                    justify-content: center;
                    align-items: center;
                }

                .profile-image-wrapper {
                    position: relative;
                    width: 150px;
                    height: 150px;
                    margin: 0 auto 20px;
                }

                .profile-image {
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 4px solid rgb(255, 140, 66);
                    transition: transform 0.3s ease;
                }

                .profile-image:hover {
                    transform: scale(1.03);
                }

                .camera-badge {
                    position: absolute;
                    bottom: 5px;
                    right: 5px;
                    width: 34px;
                    height: 34px;
                    background: rgb(255, 140, 66);
                    border-radius: 50%;
                    border: 3px solid #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .camera-badge.disabled {
                    opacity: 0.5;
                    pointer-events: none;
                }

                .camera-badge:hover {
                    background: rgb(235, 120, 46);
                    transform: scale(1.1);
                }

                .camera-badge svg {
                    color: #fff;
                }

                .profile-name {
                    font-size: 22px;
                    font-weight: 700;
                    color: #222;
                    margin-bottom: 8px;
                }

                .profile-email {
                    font-size: 14px;
                    color: #888;
                }

                .section-title {
                    font-size: 18px;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 25px;
                    padding-bottom: 12px;
                    border-bottom: 2px solid rgb(255, 140, 66);
                    display: inline-block;
                }

                .form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px 25px;
                    flex: 1;
                }

                .form-group {
                    position: relative;
                }

                .form-group.full-width {
                    grid-column: 1 / -1;
                }

                .form-label {
                    font-size: 14px;
                    font-weight: 500;
                    color: #555;
                    margin-bottom: 8px;
                    display: block;
                }

                .input-wrapper {
                    position: relative;
                }

                .form-input {
                    width: 100%;
                    padding: 14px 16px;
                    border-radius: 8px;
                    border: 1px solid #ddd;
                    font-size: 14px;
                    background: #f5f5f5;
                    color: #333;
                    transition: all 0.3s ease;
                    outline: none;
                }

                .form-input.has-icon {
                    padding-right: 45px;
                }

                .form-input.editable {
                    background: #fff;
                    border-color: rgb(255, 140, 66);
                }

                .form-input:focus {
                    border-color: rgb(255, 140, 66);
                    box-shadow: 0 0 0 3px rgba(255, 140, 66, 0.15);
                }

                .form-input:disabled {
                    cursor: not-allowed;
                    color: #555;
                }

                .form-input::placeholder {
                    color: #aaa;
                }

                .password-toggle {
                    position: absolute;
                    right: 14px;
                    top: 50%;
                    transform: translateY(-50%);
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #888;
                    padding: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: color 0.3s ease;
                }

                .password-toggle:hover {
                    color: rgb(255, 140, 66);
                }

                .password-toggle.disabled {
                    opacity: 0.5;
                    pointer-events: none;
                }

                /* Responsive Styles */
                
                @media (max-width: 900px) {
                    .profile-container {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                    
                    .profile-left {
                        flex-direction: row;
                        text-align: left;
                        justify-content: flex-start;
                        align-items: center;
                        gap: 25px;
                    }
                    
                    .profile-image-wrapper {
                        margin: 0;
                        flex-shrink: 0;
                    }
                    
                    .profile-info {
                        flex: 1;
                        min-width: 0;
                    }
                    
                    .profile-email {
                        word-break: break-word;
                    }
                }

                @media (max-width: 650px) {
                    .profile-page {
                        padding: 20px 15px;
                    }
                    
                    .profile-heading {
                        font-size: 22px;
                    }
                    
                    .edit-btn {
                        padding: 10px 18px;
                        font-size: 13px;
                    }
                    
                    .profile-card {
                        padding: 20px;
                    }
                    
                    .profile-left {
                        flex-direction: column;
                        text-align: center;
                        align-items: center;
                    }
                    
                    .profile-info {
                        text-align: center;
                    }
                    
                    .form-grid {
                        grid-template-columns: 1fr;
                        gap: 16px;
                    }
                    
                    .form-group.full-width {
                        grid-column: 1;
                    }
                    
                    .section-title {
                        font-size: 16px;
                        margin-bottom: 20px;
                    }
                }

                @media (max-width: 480px) {
                    .profile-page {
                        padding: 15px 12px;
                    }
                    
                    .profile-header {
                        flex-direction: column;
                        align-items: stretch;
                        gap: 12px;
                        margin-bottom: 20px;
                    }
                    
                    .profile-heading {
                        font-size: 20px;
                        text-align: center;
                    }
                    
                    .edit-btn {
                        justify-content: center;
                        padding: 12px 20px;
                    }
                    
                    .profile-card {
                        padding: 18px 15px;
                    }
                    
                    .profile-image-wrapper,
                    .profile-image {
                        width: 100px;
                        height: 100px;
                    }
                    
                    .camera-badge {
                        width: 28px;
                        height: 28px;
                    }
                    
                    .camera-badge svg {
                        width: 12px;
                        height: 12px;
                    }
                    
                    .profile-name {
                        font-size: 18px;
                    }
                    
                    .profile-email {
                        font-size: 13px;
                    }
                    
                    .form-input {
                        padding: 12px 14px;
                        font-size: 14px;
                    }
                    
                    .form-input.has-icon {
                        padding-right: 40px;
                    }
                    
                    .form-label {
                        font-size: 13px;
                    }
                }

                @media (max-width: 360px) {
                    .profile-page {
                        padding: 12px 10px;
                    }
                    
                    .profile-card {
                        padding: 15px 12px;
                    }
                    
                    .profile-image-wrapper,
                    .profile-image {
                        width: 85px;
                        height: 85px;
                    }
                    
                    .profile-name {
                        font-size: 16px;
                    }
                    
                    .section-title {
                        font-size: 15px;
                    }
                    
                    .form-input {
                        padding: 11px 12px;
                        font-size: 13px;
                    }
                }
            `}</style>

            <div className="profile-page">
                <div className="profile-wrapper">
                    {/* Header */}
                    <div className="profile-header">
                        <h2 className="profile-heading">Profile Settings</h2>
                        <button 
                            className={`edit-btn ${editMode ? 'save-mode' : ''}`} 
                            onClick={handleEditClick}
                        >
                            {editMode ? (
                                <>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    Save Changes
                                </>
                            ) : (
                                <>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                    </svg>
                                    Edit Profile
                                </>
                            )}
                        </button>
                    </div>

                    {/* Main Content */}
                    <div className="profile-container">
                        {/* Left - Profile Card */}
                        <div className="profile-card profile-left">
                            <div className="profile-image-wrapper">
                                <img src={dummyImage} alt="Profile" className="profile-image" />
                                <div className={`camera-badge ${!editMode ? 'disabled' : ''}`}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                        <circle cx="12" cy="13" r="4"></circle>
                                    </svg>
                                </div>
                            </div>
                            
                            <div className="profile-info">
                                <div className="profile-name">{formData.fullName}</div>
                                <div className="profile-email">{formData.email}</div>
                            </div>
                        </div>

                        {/* Right - Form Card */}
                        <div className="profile-card">
                            <div className="section-title">Account Information</div>

                            <div className="form-grid">
                                {/* Full Name */}
                                <div className="form-group">
                                    <label className="form-label">Full Name</label>
                                    <input
                                        className={`form-input ${editMode ? 'editable' : ''}`}
                                        placeholder="Enter full name"
                                        value={formData.fullName}
                                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                                        disabled={!editMode}
                                    />
                                </div>

                                {/* Email / Username */}
                                <div className="form-group">
                                    <label className="form-label">Email ID</label>
                                    <input
                                        className={`form-input ${editMode ? 'editable' : ''}`}
                                        type="email"
                                        placeholder="example@email.com"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                        disabled={!editMode}
                                    />
                                </div>

                                {/* Password */}
                                <div className="form-group">
                                    <label className="form-label">Password</label>
                                    <div className="input-wrapper">
                                        <input
                                            className={`form-input has-icon ${editMode ? 'editable' : ''}`}
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter password"
                                            value={formData.password}
                                            onChange={(e) => handleInputChange("password", e.target.value)}
                                            disabled={!editMode}
                                        />
                                        <button 
                                            type="button"
                                            className={`password-toggle ${!editMode ? 'disabled' : ''}`}
                                            onClick={() => setShowPassword(!showPassword)}
                                            disabled={!editMode}
                                        >
                                            {showPassword ? (
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                                    <line x1="1" y1="1" x2="23" y2="23"></line>
                                                </svg>
                                            ) : (
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Mobile */}
                                <div className="form-group">
                                    <label className="form-label">Mobile Number</label>
                                    <input
                                        className={`form-input ${editMode ? 'editable' : ''}`}
                                        placeholder="Enter mobile number"
                                        value={formData.mobile}
                                        onChange={(e) => handleInputChange("mobile", e.target.value)}
                                        disabled={!editMode}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}