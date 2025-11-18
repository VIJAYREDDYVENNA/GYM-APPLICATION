import React, { useState, useEffect } from 'react';
import { User, Lock, Mail, Phone, MapPin, Building2, Eye, EyeOff } from 'lucide-react';
import logo from '../images/logo.png'

export default function FitProAdminAuth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRequirements, setShowRequirements] = useState(true);
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    mobile: '',
    email: '',
    gymName: '',
    address: '',
    signupPassword: '',
    confirmPassword: ''
  });

  const [validationErrors, setValidationErrors] = useState({
    mobile: '',
    email: '',
    signupPassword: '',
    confirmPassword: ''
  });

  const validateMobile = (mobile) => {
    if (!mobile) {
      return '';
    }
    if (!/^\d+$/.test(mobile)) {
      return 'Mobile number should contain only digits';
    }
    if (mobile.length < 10) {
      return 'Mobile number must be 10 digits';
    }
    if (mobile.length > 10) {
      return 'Mobile number cannot exceed 10 digits';
    }
    return '';
  };

  const validateEmail = (email) => {
    if (!email) {
      return '';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const validatePassword = (password) => {
    if (!password) {
      return '';
    }
    
    const minLength = 6;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    
    if (password.length < minLength) {
      return 'Password must be at least 6 characters long';
    }
    
    if (!hasUpperCase) {
      return 'Password must contain at least 1 uppercase letter';
    }
    
    if (!hasSpecialChar) {
      return 'Password must contain at least 1 special character (!@#$%^&* etc.)';
    }
    
    return '';
  };

  const validateConfirmPassword = (confirmPassword, password) => {
    if (!confirmPassword) {
      return '';
    }
    if (confirmPassword !== password) {
      return 'Passwords do not match';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });

    // Real-time validation
    if (name === 'mobile') {
      const error = validateMobile(value);
      setValidationErrors(prev => ({
        ...prev,
        mobile: error
      }));
    }

    if (name === 'email') {
      const error = validateEmail(value);
      setValidationErrors(prev => ({
        ...prev,
        email: error
      }));
    }

    if (name === 'signupPassword') {
      setShowRequirements(true); // Show requirements when user starts typing
      const error = validatePassword(value);
      setValidationErrors(prev => ({
        ...prev,
        signupPassword: error
      }));
      
      // Also validate confirm password if it has a value
      if (formData.confirmPassword) {
        const confirmError = validateConfirmPassword(formData.confirmPassword, value);
        setValidationErrors(prev => ({
          ...prev,
          confirmPassword: confirmError
        }));
      }
    }

    if (name === 'confirmPassword') {
      const error = validateConfirmPassword(value, formData.signupPassword);
      setValidationErrors(prev => ({
        ...prev,
        confirmPassword: error
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isSignUp) {
      // Validate before submission
      const mobileError = validateMobile(formData.mobile);
      const emailError = validateEmail(formData.email);
      const passwordError = validatePassword(formData.signupPassword);
      const confirmPasswordError = validateConfirmPassword(formData.confirmPassword, formData.signupPassword);

      if (mobileError || emailError || passwordError || confirmPasswordError) {
        setValidationErrors({
          mobile: mobileError,
          email: emailError,
          signupPassword: passwordError,
          confirmPassword: confirmPasswordError
        });
        alert('Please fix the validation errors before submitting');
        return;
      }

      console.log('Sign Up Data:', {
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email,
        gymName: formData.gymName,
        address: formData.address,
        password: formData.signupPassword
      });
      alert('Sign up successful! Please sign in.');
      toggleForm();
    } else {
      console.log('Sign In Data:', {
        username: formData.username,
        password: formData.password
      });
      alert('Sign in successful!');
    }
  };

  const toggleForm = () => {
    setIsFlipping(true);

    setTimeout(() => {
      setIsSignUp(!isSignUp);
      setFormData({
        username: '',
        password: '',
        name: '',
        mobile: '',
        email: '',
        gymName: '',
        address: '',
        signupPassword: '',
        confirmPassword: ''
      });
      setValidationErrors({
        mobile: '',
        email: '',
        signupPassword: '',
        confirmPassword: ''
      });
      setShowPassword(false);
      setShowConfirmPassword(false);
      setShowLoginPassword(false);
      setShowRequirements(true);
    }, 300);

    setTimeout(() => {
      setIsFlipping(false);
    }, 600);
  };

  // Helper function to get password strength indicator
  const getPasswordStrength = (password) => {
    if (!password) return null;
    
    const minLength = password.length >= 6;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    
    return {
      minLength,
      hasUpperCase,
      hasSpecialChar
    };
  };

  const passwordStrength = getPasswordStrength(formData.signupPassword);

  // Check if all password requirements are met
  const allRequirementsMet = passwordStrength && 
    passwordStrength.minLength && 
    passwordStrength.hasUpperCase && 
    passwordStrength.hasSpecialChar;

  // Auto-hide requirements after 2 seconds when all conditions are met
  useEffect(() => {
    let timer;
    if (allRequirementsMet && showRequirements) {
      timer = setTimeout(() => {
        setShowRequirements(false);
      }, 2000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [allRequirementsMet, showRequirements]);

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .gymauth-main-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          position: relative;
          overflow: hidden;
        }

        .gymauth-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80');
          background-size: cover;
          background-position: center;
        }

        .gymauth-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(3px);
        }

        .gymauth-content-wrapper {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1200px;
        }

        .gymauth-left-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px;
          height: 100%;
        }

        .gymauth-logo {
          width: 200px;
          height: 200px;
          margin-bottom: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 50%;
          padding: 5px;
          box-shadow: 0 10px 30px rgba(249, 115, 22, 0.4);
        }

        .gymauth-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 50%;
        }

        .gymauth-title {
          font-size: 48px;
          font-weight: 700;
          color: white;
          margin: 0 0 10px 0;
          text-align: center;
        }

        .gymauth-tagline {
          color: #fbbf24;
          font-size: 22px;
          font-weight: 500;
          text-align: center;
          margin-bottom: 15px;
          font-style: italic;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .gymauth-subtitle {
          color: #d1d5db;
          font-size: 20px;
          text-align: center;
          line-height: 1.5;
        }

        .gymauth-card-wrapper {
          perspective: 2000px;
        }

        .gymauth-card {
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          transform-style: preserve-3d;
          transition: transform 0.6s ease-in-out;
        }

        .gymauth-card.gymauth-flipping {
          animation: gymauth-pageflip 0.6s ease-in-out;
        }

        @keyframes gymauth-pageflip {
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(90deg);
          }
          100% {
            transform: rotateY(0deg);
          }
        }

        .gymauth-form {
          width: 100%;
        }

        .gymauth-fields {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .gymauth-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .gymauth-label {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
        }

        .gymauth-input-box {
          position: relative;
          display: flex;
          align-items: center;
        }

        .gymauth-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          z-index: 1;
        }

        .gymauth-icon svg {
          width: 20px;
          height: 20px;
          color: #9ca3af;
        }

        .gymauth-eye-icon {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          cursor: pointer;
          z-index: 1;
          padding: 4px;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .gymauth-eye-icon:hover {
          background: #f3f4f6;
        }

        .gymauth-eye-icon:active {
          transform: translateY(-50%) scale(0.95);
        }

        .gymauth-eye-icon svg {
          width: 20px;
          height: 20px;
          color: #6b7280;
        }

        .gymauth-icon-textarea {
          top: 16px;
          transform: none;
        }

        .gymauth-input {
          width: 100%;
          padding: 14px 14px 14px 42px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 15px;
          color: #1f2937;
          background: white;
          outline: none;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .gymauth-input-with-eye {
          padding-right: 42px;
        }

        .gymauth-input:focus {
          border-color: #f97316;
          box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.1);
        }

        .gymauth-input.gymauth-input-error {
          border-color: #dc2626;
        }

        .gymauth-input.gymauth-input-error:focus {
          border-color: #dc2626;
          box-shadow: 0 0 0 4px rgba(220, 38, 38, 0.1);
        }

        .gymauth-input.gymauth-input-success {
          border-color: #10b981;
        }

        .gymauth-input.gymauth-input-success:focus {
          border-color: #10b981;
          box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1);
        }

        .gymauth-input::placeholder {
          color: #9ca3af;
        }

        .gymauth-textarea {
          resize: none;
          padding-top: 14px;
        }

        .gymauth-error-message {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #dc2626;
          font-weight: 500;
          margin-top: 4px;
          animation: gymauth-slideDown 0.3s ease;
        }

        .gymauth-success-message {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #10b981;
          font-weight: 500;
          margin-top: 4px;
          animation: gymauth-slideDown 0.3s ease;
        }

        .gymauth-password-requirements {
          margin-top: 8px;
          padding: 12px;
          background: #f9fafb;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          animation: gymauth-slideDown 0.3s ease;
          overflow: hidden;
          max-height: 200px;
          transition: all 0.3s ease;
        }

        .gymauth-password-requirements.gymauth-requirements-hiding {
          animation: gymauth-slideUp 0.3s ease forwards;
        }

        @keyframes gymauth-slideUp {
          from {
            opacity: 1;
            max-height: 200px;
            margin-top: 8px;
          }
          to {
            opacity: 0;
            max-height: 0;
            margin-top: 0;
            padding-top: 0;
            padding-bottom: 0;
          }
        }

        .gymauth-requirement-title {
          font-size: 12px;
          font-weight: 600;
          color: #6b7280;
          margin-bottom: 8px;
        }

        .gymauth-requirement-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #6b7280;
          margin-bottom: 4px;
          transition: all 0.3s ease;
        }

        .gymauth-requirement-item:last-child {
          margin-bottom: 0;
        }

        .gymauth-requirement-item.gymauth-requirement-met {
          color: #10b981;
        }

        .gymauth-requirement-icon {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: bold;
          flex-shrink: 0;
          border: 2px solid #d1d5db;
          color: #d1d5db;
          transition: all 0.3s ease;
        }

        .gymauth-requirement-met .gymauth-requirement-icon {
          background: #10b981;
          border-color: #10b981;
          color: white;
        }

        @keyframes gymauth-slideDown {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .gymauth-error-icon {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #dc2626;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: bold;
          flex-shrink: 0;
        }

        .gymauth-success-icon {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #10b981;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: bold;
          flex-shrink: 0;
        }

        .gymauth-remember-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;
        }

        .gymauth-checkbox-wrapper {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .gymauth-checkbox {
          width: 16px;
          height: 16px;
          margin-right: 8px;
          cursor: pointer;
          accent-color: #f97316;
        }

        .gymauth-checkbox-label {
          color: #4b5563;
          font-weight: 500;
        }

        .gymauth-forgot {
          color: #f97316;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .gymauth-forgot:hover {
          color: #dc2626;
          text-decoration: underline;
        }

        .gymauth-submit {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #f97316, #dc2626);
          color: white;
          font-size: 17px;
          font-weight: 700;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(249, 115, 22, 0.3);
          margin-top: 10px;
        }

        .gymauth-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(249, 115, 22, 0.4);
        }

        .gymauth-submit:active {
          transform: translateY(0);
        }

        .gymauth-toggle-section {
          margin-top: 30px;
          text-align: center;
          padding-top: 25px;
          border-top: 1px solid #e5e7eb;
        }

        .gymauth-toggle-text {
          color: #4b5563;
          font-size: 15px;
          font-weight: 500;
        }

        .gymauth-toggle-btn {
          margin-left: 8px;
          color: #f97316;
          font-weight: 700;
          font-size: 15px;
          background: none;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 0;
        }

        .gymauth-toggle-btn:hover {
          color: #dc2626;
          text-decoration: underline;
        }

        .gymauth-footer {
          text-align: center;
          margin-top: 30px;
          color: white;
          font-size: 13px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        @media (max-width: 991px) {
          .gymauth-left-section {
            padding: 30px 20px;
          }

          .gymauth-logo {
            width: 120px;
            height: 120px;
          }

          .gymauth-title {
            font-size: 36px;
          }

          .gymauth-tagline {
            font-size: 20px;
          }

          .gymauth-subtitle {
            font-size: 18px;
          }
        }

        @media (max-width: 768px) {
          .gymauth-title {
            font-size: 32px;
          }
          
          .gymauth-tagline {
            font-size: 18px;
          }
          
          .gymauth-subtitle {
            font-size: 16px;
          }
          
          .gymauth-card {
            padding: 30px 25px;
          }
          
          .gymauth-logo {
            width: 100px;
            height: 100px;
          }

          .gymauth-left-section {
            padding: 20px;
          }
        }

        @media (max-width: 576px) {
          .gymauth-main-container {
            padding: 15px;
          }
          
          .gymauth-card {
            padding: 25px 20px;
          }
          
          .gymauth-title {
            font-size: 28px;
          }

          .gymauth-tagline {
            font-size: 16px;
          }

          .gymauth-logo {
            width: 90px;
            height: 90px;
          }
        }
      `}</style>

      <div className="gymauth-main-container">
        <div className="gymauth-background">
          <div className="gymauth-overlay"></div>
        </div>

        <div className="gymauth-content-wrapper">
          <div className="container-fluid">
            <div className="row align-items-center g-4">
              {/* Left Section - Branding */}
              <div className="col-12 col-lg-6">
                <div className="gymauth-left-section">
                  <div className="gymauth-logo">
                    <img
                      src={logo}
                      alt="FitZone Logo"
                    />
                  </div>
                  <h1 className="gymauth-title">FitZone</h1>
                  <p className="gymauth-tagline">Fitness Starts Here..</p>
                  <p className="gymauth-subtitle">
                    Admin Dashboard Access
                  </p>
                </div>
              </div>

              {/* Right Section - Form */}
              <div className="col-12 col-lg-6">
                <div className="gymauth-card-wrapper">
                  <div className={`gymauth-card ${isFlipping ? 'gymauth-flipping' : ''}`}>
                    <form onSubmit={handleSubmit} className="gymauth-form">
                      {!isSignUp ? (
                        // Login Form
                        <div className="gymauth-fields">
                          <div className="gymauth-field">
                            <label className="gymauth-label">Username</label>
                            <div className="gymauth-input-box">
                              <div className="gymauth-icon">
                                <User />
                              </div>
                              <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="gymauth-input"
                                placeholder="Enter your username"
                                required
                              />
                            </div>
                          </div>

                          <div className="gymauth-field">
                            <label className="gymauth-label">Password</label>
                            <div className="gymauth-input-box">
                              <div className="gymauth-icon">
                                <Lock />
                              </div>
                              <input
                                type={showLoginPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="gymauth-input gymauth-input-with-eye"
                                placeholder="Enter your password"
                                required
                              />
                              <div 
                                className="gymauth-eye-icon"
                                onClick={() => setShowLoginPassword(!showLoginPassword)}
                              >
                                {showLoginPassword ? <EyeOff /> : <Eye />}
                              </div>
                            </div>
                          </div>

                          <div className="gymauth-remember-row">
                            <label className="gymauth-checkbox-wrapper">
                              <input type="checkbox" className="gymauth-checkbox" />
                              <span className="gymauth-checkbox-label">Remember me</span>
                            </label>
                            <a href="#" className="gymauth-forgot">Forgot password?</a>
                          </div>

                          <button type="submit" className="gymauth-submit">
                            Sign In
                          </button>
                        </div>
                      ) : (
                        // Sign Up Form
                        <div className="gymauth-fields">
                          <div className="gymauth-field">
                            <label className="gymauth-label">Full Name</label>
                            <div className="gymauth-input-box">
                              <div className="gymauth-icon">
                                <User />
                              </div>
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="gymauth-input"
                                placeholder="Enter your full name"
                                required
                              />
                            </div>
                          </div>

                          <div className="gymauth-field">
                            <label className="gymauth-label">Mobile Number</label>
                            <div className="gymauth-input-box">
                              <div className="gymauth-icon">
                                <Phone />
                              </div>
                              <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                className={`gymauth-input ${validationErrors.mobile ? 'gymauth-input-error' : ''}`}
                                placeholder="Enter mobile number"
                                maxLength={10}
                                onInput={(e) => {
                                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                                }}
                                required
                              />
                            </div>
                            {validationErrors.mobile && (
                              <div className="gymauth-error-message">
                                <span className="gymauth-error-icon">!</span>
                                <span>{validationErrors.mobile}</span>
                              </div>
                            )}
                          </div>

                          <div className="gymauth-field">
                            <label className="gymauth-label">Email Address</label>
                            <div className="gymauth-input-box">
                              <div className="gymauth-icon">
                                <Mail />
                              </div>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`gymauth-input ${validationErrors.email ? 'gymauth-input-error' : ''}`}
                                placeholder="Enter email address"
                                required
                              />
                            </div>
                            {validationErrors.email && (
                              <div className="gymauth-error-message">
                                <span className="gymauth-error-icon">!</span>
                                <span>{validationErrors.email}</span>
                              </div>
                            )}
                          </div>

                          <div className="gymauth-field">
                            <label className="gymauth-label">Password</label>
                            <div className="gymauth-input-box">
                              <div className="gymauth-icon">
                                <Lock />
                              </div>
                              <input
                                type={showPassword ? "text" : "password"}
                                name="signupPassword"
                                value={formData.signupPassword}
                                onChange={handleChange}
                                className={`gymauth-input gymauth-input-with-eye ${validationErrors.signupPassword ? 'gymauth-input-error' : ''}`}
                                placeholder="Create a password"
                                required
                              />
                              <div 
                                className="gymauth-eye-icon"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? <EyeOff /> : <Eye />}
                              </div>
                            </div>
                            {validationErrors.signupPassword && (
                              <div className="gymauth-error-message">
                                <span className="gymauth-error-icon">!</span>
                                <span>{validationErrors.signupPassword}</span>
                              </div>
                            )}
                            {formData.signupPassword && passwordStrength && showRequirements && (
                              <div className={`gymauth-password-requirements ${allRequirementsMet ? 'gymauth-requirements-hiding' : ''}`}>
                                <div className="gymauth-requirement-title">Password Requirements:</div>
                                <div className={`gymauth-requirement-item ${passwordStrength.minLength ? 'gymauth-requirement-met' : ''}`}>
                                  <span className="gymauth-requirement-icon">
                                    {passwordStrength.minLength ? '✓' : ''}
                                  </span>
                                  <span>At least 6 characters</span>
                                </div>
                                <div className={`gymauth-requirement-item ${passwordStrength.hasUpperCase ? 'gymauth-requirement-met' : ''}`}>
                                  <span className="gymauth-requirement-icon">
                                    {passwordStrength.hasUpperCase ? '✓' : ''}
                                  </span>
                                  <span>One uppercase letter (A-Z)</span>
                                </div>
                                <div className={`gymauth-requirement-item ${passwordStrength.hasSpecialChar ? 'gymauth-requirement-met' : ''}`}>
                                  <span className="gymauth-requirement-icon">
                                    {passwordStrength.hasSpecialChar ? '✓' : ''}
                                  </span>
                                  <span>One special character (!@#$%^&*)</span>
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="gymauth-field">
                            <label className="gymauth-label">Confirm Password</label>
                            <div className="gymauth-input-box">
                              <div className="gymauth-icon">
                                <Lock />
                              </div>
                              <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={`gymauth-input gymauth-input-with-eye ${
                                  validationErrors.confirmPassword 
                                    ? 'gymauth-input-error' 
                                    : formData.confirmPassword && formData.signupPassword && !validationErrors.confirmPassword && !validationErrors.signupPassword
                                      ? 'gymauth-input-success' 
                                      : ''
                                }`}
                                placeholder="Confirm your password"
                                required
                              />
                              <div 
                                className="gymauth-eye-icon"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              >
                                {showConfirmPassword ? <EyeOff /> : <Eye />}
                              </div>
                            </div>
                            {validationErrors.confirmPassword && (
                              <div className="gymauth-error-message">
                                <span className="gymauth-error-icon">!</span>
                                <span>{validationErrors.confirmPassword}</span>
                              </div>
                            )}
                            {!validationErrors.confirmPassword && 
                             !validationErrors.signupPassword &&
                             formData.confirmPassword && 
                             formData.signupPassword && 
                             formData.confirmPassword === formData.signupPassword && (
                              <div className="gymauth-success-message">
                                <span className="gymauth-success-icon">✓</span>
                                <span>Passwords match!</span>
                              </div>
                            )}
                          </div>

                          <div className="gymauth-field">
                            <label className="gymauth-label">Gym Name</label>
                            <div className="gymauth-input-box">
                              <div className="gymauth-icon">
                                <Building2 />
                              </div>
                              <input
                                type="text"
                                name="gymName"
                                value={formData.gymName}
                                onChange={handleChange}
                                className="gymauth-input"
                                placeholder="Enter gym name"
                                required
                              />
                            </div>
                          </div>

                          <div className="gymauth-field">
                            <label className="gymauth-label">Address</label>
                            <div className="gymauth-input-box">
                              <div className="gymauth-icon gymauth-icon-textarea">
                                <MapPin />
                              </div>
                              <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                rows="3"
                                className="gymauth-input gymauth-textarea"
                                placeholder="Enter gym address"
                                required
                              />
                            </div>
                          </div>

                          <button type="submit" className="gymauth-submit">
                            Create Account
                          </button>
                        </div>
                      )}
                    </form>

                    <div className="gymauth-toggle-section">
                      <span className="gymauth-toggle-text">
                        {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                        <button
                          type="button"
                          onClick={toggleForm}
                          className="gymauth-toggle-btn"
                        >
                          {isSignUp ? 'Sign In' : 'Sign Up'}
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="gymauth-footer">
            <p>© 2025 FitZone. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}