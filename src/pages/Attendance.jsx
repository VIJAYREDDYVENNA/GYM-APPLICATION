import React, { useEffect, useState, useMemo } from "react";
import { HiSearch, HiChevronLeft, HiChevronRight, HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { HiOutlinePencilSquare, HiOutlineTrash, HiXMark } from "react-icons/hi2";


const initialAttendanceData = [
    {
        id: 1,
        name: "Alex Johnson",
        customerId: "CUST001",
        mobileNumber: "+1 555-0101",
        gym: "PowerFit Gym",
        date: "2025-11-22",
        checkIn: "06:15 AM",
        checkOut: "07:45 AM",
        status: "Present",
    },
    {
        id: 2,
        name: "Emma Williams",
        customerId: "CUST002",
        mobileNumber: "+1 555-0102",
        gym: "Elite Fitness",
        date: "2025-11-22",
        checkIn: "08:05 AM",
        checkOut: "09:30 AM",
        status: "Present",
    },
    {
        id: 3,
        name: "James Miller",
        customerId: "CUST005",
        mobileNumber: "+1 555-0105",
        gym: "Muscle Factory",
        date: "2025-11-22",
        checkIn: "-",
        checkOut: "-",
        status: "Absent",
    },
    {
        id: 4,
        name: "Sarah Connor",
        customerId: "CUST003",
        mobileNumber: "+1 555-0103",
        gym: "FitZone Central",
        date: "2025-11-21",
        checkIn: "07:00 AM",
        checkOut: "08:30 AM",
        status: "Present",
    },
    {
        id: 5,
        name: "Michael Brown",
        customerId: "CUST004",
        mobileNumber: "+1 555-0104",
        gym: "PowerFit Gym",
        date: "2025-11-21",
        checkIn: "-",
        checkOut: "-",
        status: "Absent",
    },
    {
        id: 6,
        name: "Emily Davis",
        customerId: "CUST006",
        mobileNumber: "+1 555-0106",
        gym: "Elite Fitness",
        date: "2025-11-20",
        checkIn: "09:00 AM",
        checkOut: "10:30 AM",
        status: "Present",
    },
    {
        id: 7,
        name: "Robert Wilson",
        customerId: "CUST007",
        mobileNumber: "+1 555-0107",
        gym: "Muscle Factory",
        date: "2025-11-20",
        checkIn: "06:30 AM",
        checkOut: "08:00 AM",
        status: "Present",
    },
    {
        id: 8,
        name: "Jennifer Taylor",
        customerId: "CUST008",
        mobileNumber: "+1 555-0108",
        gym: "FitZone Central",
        date: "2025-11-19",
        checkIn: "-",
        checkOut: "-",
        status: "Absent",
    },
    {
        id: 9,
        name: "David Martinez",
        customerId: "CUST009",
        mobileNumber: "+1 555-0109",
        gym: "PowerFit Gym",
        date: "2025-11-19",
        checkIn: "07:15 AM",
        checkOut: "08:45 AM",
        status: "Present",
    },
    {
        id: 10,
        name: "Lisa Anderson",
        customerId: "CUST010",
        mobileNumber: "+1 555-0110",
        gym: "Elite Fitness",
        date: "2025-11-18",
        checkIn: "08:00 AM",
        checkOut: "09:30 AM",
        status: "Present",
    },
    {
        id: 11,
        name: "Chris Thompson",
        customerId: "CUST011",
        mobileNumber: "+1 555-0111",
        gym: "Muscle Factory",
        date: "2025-11-18",
        checkIn: "06:45 AM",
        checkOut: "08:15 AM",
        status: "Present",
    },
    {
        id: 12,
        name: "Amanda White",
        customerId: "CUST012",
        mobileNumber: "+1 555-0112",
        gym: "FitZone Central",
        date: "2025-11-17",
        checkIn: "-",
        checkOut: "-",
        status: "Absent",
    },
    {
        id: 13,
        name: "Daniel Harris",
        customerId: "CUST013",
        mobileNumber: "+1 555-0113",
        gym: "PowerFit Gym",
        date: "2025-11-17",
        checkIn: "07:30 AM",
        checkOut: "09:00 AM",
        status: "Present",
    },
    {
        id: 14,
        name: "Michelle Clark",
        customerId: "CUST014",
        mobileNumber: "+1 555-0114",
        gym: "Elite Fitness",
        date: "2025-11-16",
        checkIn: "08:15 AM",
        checkOut: "09:45 AM",
        status: "Present",
    },
    {
        id: 15,
        name: "Kevin Lewis",
        customerId: "CUST015",
        mobileNumber: "+1 555-0115",
        gym: "Muscle Factory",
        date: "2025-11-16",
        checkIn: "06:00 AM",
        checkOut: "07:30 AM",
        status: "Present",
    },
    {
        id: 16,
        name: "Rachel Green",
        customerId: "CUST016",
        mobileNumber: "+1 555-0116",
        gym: "FitZone Central",
        date: "2025-11-15",
        checkIn: "-",
        checkOut: "-",
        status: "Absent",
    },
    {
        id: 17,
        name: "Steven Walker",
        customerId: "CUST017",
        mobileNumber: "+1 555-0117",
        gym: "PowerFit Gym",
        date: "2025-11-15",
        checkIn: "07:45 AM",
        checkOut: "09:15 AM",
        status: "Present",
    },
    {
        id: 18,
        name: "Nicole Hall",
        customerId: "CUST018",
        mobileNumber: "+1 555-0118",
        gym: "Elite Fitness",
        date: "2025-11-14",
        checkIn: "08:30 AM",
        checkOut: "10:00 AM",
        status: "Present",
    },
    {
        id: 19,
        name: "Brian Allen",
        customerId: "CUST019",
        mobileNumber: "+1 555-0119",
        gym: "Muscle Factory",
        date: "2025-11-14",
        checkIn: "06:15 AM",
        checkOut: "07:45 AM",
        status: "Present",
    },
    {
        id: 20,
        name: "Stephanie Young",
        customerId: "CUST020",
        mobileNumber: "+1 555-0120",
        gym: "FitZone Central",
        date: "2025-11-13",
        checkIn: "-",
        checkOut: "-",
        status: "Absent",
    },
    {
        id: 21,
        name: "Andrew King",
        customerId: "CUST021",
        mobileNumber: "+1 555-0121",
        gym: "PowerFit Gym",
        date: "2025-11-13",
        checkIn: "07:00 AM",
        checkOut: "08:30 AM",
        status: "Present",
    },
    {
        id: 22,
        name: "Megan Scott",
        customerId: "CUST022",
        mobileNumber: "+1 555-0122",
        gym: "Elite Fitness",
        date: "2025-11-12",
        checkIn: "08:45 AM",
        checkOut: "10:15 AM",
        status: "Present",
    },
    {
        id: 23,
        name: "Jason Wright",
        customerId: "CUST023",
        mobileNumber: "+1 555-0123",
        gym: "Muscle Factory",
        date: "2025-11-12",
        checkIn: "06:30 AM",
        checkOut: "08:00 AM",
        status: "Present",
    },
    {
        id: 24,
        name: "Laura Adams",
        customerId: "CUST024",
        mobileNumber: "+1 555-0124",
        gym: "FitZone Central",
        date: "2025-11-11",
        checkIn: "-",
        checkOut: "-",
        status: "Absent",
    },
    {
        id: 25,
        name: "Mark Nelson",
        customerId: "CUST025",
        mobileNumber: "+1 555-0125",
        gym: "PowerFit Gym",
        date: "2025-11-11",
        checkIn: "07:15 AM",
        checkOut: "08:45 AM",
        status: "Present",
    },
];

// Helper function to combine class names
const classNames = (...classes) => classes.filter(Boolean).join(" ");

export default function Attendance() {
    const [attendanceData, setAttendanceData] = useState(initialAttendanceData);
    const [searchTerm, setSearchTerm] = useState("");
    const [dateFilter, setDateFilter] = useState("all");
    const [selectedDate, setSelectedDate] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [editModal, setEditModal] = useState({ show: false, item: null });
    const [deleteModal, setDeleteModal] = useState({ show: false, item: null });
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        document.title = "FitZone - Attendance";

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Helper function to get today's date in YYYY-MM-DD format
    const getToday = () => {
        const today = new Date();
        return today.toISOString().split("T")[0];
    };

    // Helper function to get yesterday's date
    const getYesterday = () => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        return yesterday.toISOString().split("T")[0];
    };

    // Helper function to get dates for this week
    const getThisWeekDates = () => {
        const today = new Date();
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay());
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        return {
            start: startOfWeek.toISOString().split("T")[0],
            end: endOfWeek.toISOString().split("T")[0],
        };
    };

    // Filter data based on search, date, and status
    const filteredData = useMemo(() => {
        return attendanceData.filter((item) => {
            // Search filter
            const searchMatch =
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.mobileNumber.toLowerCase().includes(searchTerm.toLowerCase());

            // Date filter
            let dateMatch = true;
            if (dateFilter === "today") {
                dateMatch = item.date === getToday();
            } else if (dateFilter === "yesterday") {
                dateMatch = item.date === getYesterday();
            } else if (dateFilter === "thisWeek") {
                const { start, end } = getThisWeekDates();
                dateMatch = item.date >= start && item.date <= end;
            } else if (dateFilter === "selectedDate" && selectedDate) {
                dateMatch = item.date === selectedDate;
            }

            // Status filter
            const statusMatch =
                statusFilter === "all" ||
                item.status.toLowerCase() === statusFilter.toLowerCase();

            return searchMatch && dateMatch && statusMatch;
        });
    }, [attendanceData, searchTerm, dateFilter, selectedDate, statusFilter]);

    // Pagination calculations
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = filteredData.slice(startIndex, endIndex);

    // Reset to first page when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, dateFilter, selectedDate, statusFilter, itemsPerPage]);

    // Handle date filter change
    const handleDateFilterChange = (e) => {
        const value = e.target.value;
        if (value === "selectedDate") {
            setShowDatePicker(true);
        } else {
            setDateFilter(value);
            setSelectedDate("");
            setShowDatePicker(false);
        }
    };

    // Handle specific date selection
    const handleDateSelect = (e) => {
        const date = e.target.value;
        setSelectedDate(date);
        setDateFilter("selectedDate");
        setShowDatePicker(false);
    };

    // Handle edit
    const handleEdit = (item) => {
        setEditModal({ show: true, item: { ...item } });
    };

    // Handle save edit
    const handleSaveEdit = () => {
        setAttendanceData((prev) =>
            prev.map((item) =>
                item.id === editModal.item.id ? editModal.item : item
            )
        );
        setEditModal({ show: false, item: null });
    };

    // Handle delete
    const handleDelete = (item) => {
        setDeleteModal({ show: true, item });
    };

    // Confirm delete
    const confirmDelete = () => {
        setAttendanceData((prev) =>
            prev.filter((item) => item.id !== deleteModal.item.id)
        );
        setDeleteModal({ show: false, item: null });
    };

    // Generate page numbers to display
    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = isMobile ? 3 : 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
            let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

            if (endPage - startPage < maxVisiblePages - 1) {
                startPage = Math.max(1, endPage - maxVisiblePages + 1);
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }
        }

        return pages;
    };

    // Format date for display
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    // Get status badge class
    const getStatusBadgeClass = (status) => {
        return classNames(
            "attendance-status-badge",
            isMobile && "attendance-status-badge--mobile",
            status === "Present" ? "attendance-status-badge--present" : "attendance-status-badge--absent"
        );
    };

    // Get page button class
    const getPageButtonClass = (isActive, isDisabled) => {
        return classNames(
            "attendance-page-button",
            isMobile && "attendance-page-button--mobile",
            isActive && "attendance-page-button--active",
            isDisabled && "attendance-page-button--disabled"
        );
    };

    return (
        <><style>{`/* Attendance Component Styles */

/* Page Container */
.attendance-page {
    padding: 25px;
    background: #f5f7fb;
    min-height: 100vh;
    font-family: Inter, sans-serif;
}

.attendance-page--mobile {
    padding: 15px;
}

/* Header Styles */
.attendance-header-title {
    font-size: 24px;
    font-weight: 700;
    margin: 0;
}

.attendance-header-title--mobile {
    font-size: 20px;
}

.attendance-header-subtitle {
    color: #6d7280;
    margin-top: 6px;
    margin-bottom: 0;
    font-size: 14px;
}

.attendance-header-subtitle--mobile {
    font-size: 13px;
}

/* Search Bar Row */
.attendance-search-bar-row {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 18px;
}

/* Search Box */
.attendance-search-box {
    display: flex;
    align-items: center;
    background: #fff;
    border: 1px solid #e5e7eb;
    padding: 10px 14px;
    border-radius: 10px;
    flex: 1;
    min-width: 260px;
    gap: 10px;
}

.attendance-search-box--mobile {
    padding: 8px 12px;
    min-width: 100%;
}

.attendance-search-input {
    border: none;
    outline: none;
    flex: 1;
    background: transparent;
    font-size: 14px;
}

.attendance-search-input--mobile {
    font-size: 13px;
}

.attendance-search-clear-icon {
    cursor: pointer;
}

/* Select Dropdown */
.attendance-select {
    padding: 10px 14px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
    background: #fff;
    min-width: 160px;
    font-size: 14px;
    cursor: pointer;
}

.attendance-select--mobile {
    padding: 8px 10px;
    min-width: calc(50% - 6px);
    font-size: 13px;
}

/* Date Picker Container */
.attendance-date-picker-container {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
}

.attendance-date-picker-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
}

.attendance-date-input {
    padding: 10px 14px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
    background: #fff;
    font-size: 14px;
    cursor: pointer;
}

.attendance-date-input--mobile {
    padding: 8px 10px;
    font-size: 13px;
}

/* Card Container */
.attendance-card {
    background: #fff;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    padding: 18px;
    margin-top: 20px;
    overflow-x: auto;
}

.attendance-card--mobile {
    padding: 12px;
}

.attendance-card-title {
    margin: 0;
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 18px;
}

.attendance-card-title--mobile {
    font-size: 16px;
}

/* Table Container */
.attendance-table-container {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}

/* Table */
.attendance-table {
    width: 100%;
    border-collapse: collapse;
    min-width: auto;
}

.attendance-table--mobile {
    min-width: 600px;
}

/* Table Header */
.attendance-table-header-cell {
    padding: 12px 10px;
    text-align: left;
    font-size: 13px;
    color: #374151;
    border-bottom: 1px solid #eaeef2;
    font-weight: 600;
    white-space: nowrap;
}

.attendance-table-header-cell--mobile {
    padding: 10px 8px;
    font-size: 12px;
}

/* Table Data Cell */
.attendance-table-data-cell {
    padding: 14px 10px;
    font-size: 14px;
    border-bottom: 1px solid #f4f6f8;
    vertical-align: middle;
    color: #333;
    white-space: nowrap;
}

.attendance-table-data-cell--mobile {
    padding: 12px 8px;
    font-size: 13px;
}

/* Status Badge */
.attendance-status-badge {
    display: inline-block;
    padding: 6px 10px;
    border-radius: 12px;
    font-weight: 600;
    font-size: 13px;
}

.attendance-status-badge--mobile {
    padding: 4px 8px;
    font-size: 12px;
}

.attendance-status-badge--present {
    background: #ecfdf5;
    color: #065f46;
}

.attendance-status-badge--absent {
    background: #fff1f2;
    color: #b91c1c;
}

/* Actions Column */
.attendance-actions-cell {
    display: flex;
    gap: 12px;
    align-items: center;
    color: #64748b;
}

/* Action Icons */
.attendance-icon-edit {
    color: #6b7280;
    cursor: pointer;
    font-size: 20px;
    transition: color 0.2s;
}

.attendance-icon-edit:hover {
    color: #4b5563;
}

.attendance-icon-edit--mobile {
    font-size: 18px;
}

.attendance-icon-delete {
    color: #dc2626;
    cursor: pointer;
    font-size: 20px;
    transition: color 0.2s;
}

.attendance-icon-delete:hover {
    color: #b91c1c;
}

.attendance-icon-delete--mobile {
    font-size: 18px;
}

/* Pagination Container */
.attendance-pagination-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    flex-wrap: wrap;
    gap: 15px;
    padding: 10px 0;
}

.attendance-pagination-left {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: #374151;
}

.attendance-pagination-left--mobile {
    font-size: 13px;
}

.attendance-pagination-right {
    display: flex;
    align-items: center;
    gap: 4px;
}

/* Page Button */
.attendance-page-button {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    background: #fff;
    color: #374151;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    transition: all 0.2s;
}

.attendance-page-button--mobile {
    width: 32px;
    height: 32px;
    font-size: 13px;
}

.attendance-page-button:hover:not(.attendance-page-button--disabled) {
    background: #f3f4f6;
}

.attendance-page-button--active {
    background: #2563eb;
    color: #fff;
    font-weight: 600;
    border-color: #2563eb;
}

.attendance-page-button--disabled {
    color: #d1d5db;
    cursor: not-allowed;
}

/* Items Per Page Select */
.attendance-items-per-page-select {
    padding: 6px 10px;
    border-radius: 6px;
    border: 1px solid #e5e7eb;
    background: #fff;
    font-size: 14px;
    cursor: pointer;
}

.attendance-items-per-page-select--mobile {
    font-size: 13px;
}

/* Modal Overlay */
.attendance-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
}

/* Modal */
.attendance-modal {
    background: #fff;
    border-radius: 16px;
    padding: 30px;
    width: 100%;
    max-width: 500px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
}

.attendance-modal--mobile {
    padding: 20px;
}

/* Modal Header */
.attendance-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.attendance-modal-title {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
}

.attendance-modal-title--mobile {
    font-size: 18px;
}

.attendance-close-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Form Group */
.attendance-form-group {
    margin-bottom: 16px;
}

.attendance-form-label {
    display: block;
    margin-bottom: 6px;
    font-weight: 500;
    font-size: 14px;
    color: #374151;
}

.attendance-form-input {
    width: 100%;
    padding: 10px 14px;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    font-size: 14px;
    outline: none;
    box-sizing: border-box;
}

.attendance-form-input:focus {
    border-color: #2563eb;
}

.attendance-form-select {
    width: 100%;
    padding: 10px 14px;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    font-size: 14px;
    outline: none;
    background: #fff;
    cursor: pointer;
}

.attendance-form-select:focus {
    border-color: #2563eb;
}

/* Button Group */
.attendance-button-group {
    display: flex;
    gap: 12px;
    margin-top: 24px;
}

.attendance-cancel-button {
    flex: 1;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    background: #fff;
    color: #374151;
    font-weight: 600;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
}

.attendance-cancel-button:hover {
    background: #f9fafb;
}

.attendance-save-button {
    flex: 1;
    padding: 12px;
    border-radius: 8px;
    border: none;
    background: #2563eb;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
}

.attendance-save-button:hover {
    background: #1d4ed8;
}

.attendance-delete-button {
    flex: 1;
    padding: 12px;
    border-radius: 8px;
    border: none;
    background: #dc2626;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
}

.attendance-delete-button:hover {
    background: #b91c1c;
}

/* Delete Modal Text */
.attendance-delete-modal-text {
    font-size: 15px;
    color: #4b5563;
    line-height: 1.6;
}

/* No Data */
.attendance-no-data {
    text-align: center;
    padding: 40px 20px;
    color: #6b7280;
    font-size: 15px;
}`}</style>
        <div className={classNames("attendance-page", isMobile && "attendance-page--mobile")}>
            {/* PAGE HEADER */}
            <h2 className={classNames("attendance-header-title", isMobile && "attendance-header-title--mobile")}>
                Attendance Management
            </h2>
            <p className={classNames("attendance-header-subtitle", isMobile && "attendance-header-subtitle--mobile")}>
                Track and monitor customer attendance
            </p>

            {/* SEARCH + FILTERS */}
            <div className="attendance-search-bar-row">
                <div className={classNames("attendance-search-box", isMobile && "attendance-search-box--mobile")}>
                    <HiSearch size={18} color="#6b7280" />
                    <input
                        placeholder="Search by name or mobile..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={classNames("attendance-search-input", isMobile && "attendance-search-input--mobile")}
                    />
                    {searchTerm && (
                        <HiXMark
                            size={18}
                            color="#6b7280"
                            className="attendance-search-clear-icon"
                            onClick={() => setSearchTerm("")}
                        />
                    )}
                </div>

                <div className="attendance-date-picker-container">
                    <select
                        className={classNames("attendance-select", isMobile && "attendance-select--mobile")}
                        value={dateFilter}
                        onChange={handleDateFilterChange}
                    >
                        <option value="all">All Dates</option>
                        <option value="today">Today</option>
                        <option value="yesterday">Yesterday</option>
                        <option value="thisWeek">This Week</option>
                        <option value="selectedDate">Select Date</option>
                    </select>

                    {(showDatePicker || dateFilter === "selectedDate") && (
                        <div className="attendance-date-picker-wrapper">
                            <input
                                type="date"
                                className={classNames("attendance-date-input", isMobile && "attendance-date-input--mobile")}
                                value={selectedDate}
                                onChange={handleDateSelect}
                                max={getToday()}
                            />
                            {selectedDate && (
                                <HiXMark
                                    size={18}
                                    color="#6b7280"
                                    className="attendance-search-clear-icon"
                                    onClick={() => {
                                        setSelectedDate("");
                                        setDateFilter("all");
                                        setShowDatePicker(false);
                                    }}
                                />
                            )}
                        </div>
                    )}
                </div>

                <select
                    className={classNames("attendance-select", isMobile && "attendance-select--mobile")}
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option value="all">All Status</option>
                    <option value="present">Present</option>
                    <option value="absent">Absent</option>
                </select>
            </div>

            {/* DATA TABLE */}
            <div className={classNames("attendance-card", isMobile && "attendance-card--mobile")}>
                <h3 className={classNames("attendance-card-title", isMobile && "attendance-card-title--mobile")}>
                    Attendance Records ({filteredData.length})
                </h3>

                <div className="attendance-table-container">
                    <table className={classNames("attendance-table", isMobile && "attendance-table--mobile")}>
                        <thead>
                            <tr>
                                <th className={classNames("attendance-table-header-cell", isMobile && "attendance-table-header-cell--mobile")}>
                                    S.No
                                </th>
                                <th className={classNames("attendance-table-header-cell", isMobile && "attendance-table-header-cell--mobile")}>
                                    Customer Name
                                </th>
                                <th className={classNames("attendance-table-header-cell", isMobile && "attendance-table-header-cell--mobile")}>
                                    Mobile Number
                                </th>
                                <th className={classNames("attendance-table-header-cell", isMobile && "attendance-table-header-cell--mobile")}>
                                    Date
                                </th>
                                <th className={classNames("attendance-table-header-cell", isMobile && "attendance-table-header-cell--mobile")}>
                                    Check-In
                                </th>
                                <th className={classNames("attendance-table-header-cell", isMobile && "attendance-table-header-cell--mobile")}>
                                    Check-Out
                                </th>
                                <th className={classNames("attendance-table-header-cell", isMobile && "attendance-table-header-cell--mobile")}>
                                    Status
                                </th>
                                <th className={classNames("attendance-table-header-cell", isMobile && "attendance-table-header-cell--mobile")}>
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {currentData.length > 0 ? (
                                currentData.map((item, i) => (
                                    <tr key={item.id}>
                                        <td className={classNames("attendance-table-data-cell", isMobile && "attendance-table-data-cell--mobile")}>
                                            {startIndex + i + 1}
                                        </td>
                                        <td className={classNames("attendance-table-data-cell", isMobile && "attendance-table-data-cell--mobile")}>
                                            {item.name}
                                        </td>
                                        <td className={classNames("attendance-table-data-cell", isMobile && "attendance-table-data-cell--mobile")}>
                                            {item.mobileNumber}
                                        </td>
                                        <td className={classNames("attendance-table-data-cell", isMobile && "attendance-table-data-cell--mobile")}>
                                            {formatDate(item.date)}
                                        </td>
                                        <td className={classNames("attendance-table-data-cell", isMobile && "attendance-table-data-cell--mobile")}>
                                            {item.checkIn}
                                        </td>
                                        <td className={classNames("attendance-table-data-cell", isMobile && "attendance-table-data-cell--mobile")}>
                                            {item.checkOut}
                                        </td>
                                        <td className={classNames("attendance-table-data-cell", isMobile && "attendance-table-data-cell--mobile")}>
                                            <span className={getStatusBadgeClass(item.status)}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className={classNames(
                                            "attendance-table-data-cell",
                                            "attendance-actions-cell",
                                            isMobile && "attendance-table-data-cell--mobile"
                                        )}>
                                            <HiOutlinePencilSquare
                                                className={classNames("attendance-icon-edit", isMobile && "attendance-icon-edit--mobile")}
                                                onClick={() => handleEdit(item)}
                                                title="Edit"
                                            />
                                            <HiOutlineTrash
                                                className={classNames("attendance-icon-delete", isMobile && "attendance-icon-delete--mobile")}
                                                onClick={() => handleDelete(item)}
                                                title="Delete"
                                            />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="attendance-no-data">
                                        No attendance records found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* PAGINATION */}
                {filteredData.length > 0 && (
                    <div className="attendance-pagination-container">
                        <div className={classNames("attendance-pagination-left", isMobile && "attendance-pagination-left--mobile")}>
                            <span>Items per page:</span>
                            <select
                                className={classNames("attendance-items-per-page-select", isMobile && "attendance-items-per-page-select--mobile")}
                                value={itemsPerPage}
                                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                            >
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                                <option value={25}>25</option>
                            </select>
                            <span>
                                {startIndex + 1}-{Math.min(endIndex, filteredData.length)} of{" "}
                                {filteredData.length}
                            </span>
                        </div>

                        <div className="attendance-pagination-right">
                            {/* First Page */}
                            <button
                                className={getPageButtonClass(false, currentPage === 1)}
                                onClick={() => setCurrentPage(1)}
                                disabled={currentPage === 1}
                                title="First Page"
                            >
                                <HiChevronDoubleLeft size={16} />
                            </button>

                            {/* Previous Page */}
                            <button
                                className={getPageButtonClass(false, currentPage === 1)}
                                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                                disabled={currentPage === 1}
                                title="Previous Page"
                            >
                                <HiChevronLeft size={16} />
                            </button>

                            {/* Page Numbers */}
                            {getPageNumbers().map((page) => (
                                <button
                                    key={page}
                                    className={getPageButtonClass(currentPage === page, false)}
                                    onClick={() => setCurrentPage(page)}
                                >
                                    {page}
                                </button>
                            ))}

                            {/* Next Page */}
                            <button
                                className={getPageButtonClass(false, currentPage === totalPages)}
                                onClick={() =>
                                    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                                }
                                disabled={currentPage === totalPages}
                                title="Next Page"
                            >
                                <HiChevronRight size={16} />
                            </button>

                            {/* Last Page */}
                            <button
                                className={getPageButtonClass(false, currentPage === totalPages)}
                                onClick={() => setCurrentPage(totalPages)}
                                disabled={currentPage === totalPages}
                                title="Last Page"
                            >
                                <HiChevronDoubleRight size={16} />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* EDIT MODAL */}
            {editModal.show && (
                <div className="attendance-modal-overlay" onClick={() => setEditModal({ show: false, item: null })}>
                    <div className={classNames("attendance-modal", isMobile && "attendance-modal--mobile")} onClick={(e) => e.stopPropagation()}>
                        <div className="attendance-modal-header">
                            <h3 className={classNames("attendance-modal-title", isMobile && "attendance-modal-title--mobile")}>
                                Edit Attendance
                            </h3>
                            <button
                                className="attendance-close-button"
                                onClick={() => setEditModal({ show: false, item: null })}
                            >
                                <HiXMark size={24} color="#6b7280" />
                            </button>
                        </div>

                        <div className="attendance-form-group">
                            <label className="attendance-form-label">Customer Name</label>
                            <input
                                className="attendance-form-input"
                                value={editModal.item.name}
                                onChange={(e) =>
                                    setEditModal({
                                        ...editModal,
                                        item: { ...editModal.item, name: e.target.value },
                                    })
                                }
                            />
                        </div>

                        <div className="attendance-form-group">
                            <label className="attendance-form-label">Mobile Number</label>
                            <input
                                className="attendance-form-input"
                                value={editModal.item.mobileNumber}
                                onChange={(e) =>
                                    setEditModal({
                                        ...editModal,
                                        item: { ...editModal.item, mobileNumber: e.target.value },
                                    })
                                }
                                placeholder="e.g., +1 555-0101"
                            />
                        </div>

                        <div className="attendance-form-group">
                            <label className="attendance-form-label">Date</label>
                            <input
                                type="date"
                                className="attendance-form-input"
                                value={editModal.item.date}
                                onChange={(e) =>
                                    setEditModal({
                                        ...editModal,
                                        item: { ...editModal.item, date: e.target.value },
                                    })
                                }
                            />
                        </div>

                        <div className="attendance-form-group">
                            <label className="attendance-form-label">Check-In</label>
                            <input
                                className="attendance-form-input"
                                value={editModal.item.checkIn}
                                onChange={(e) =>
                                    setEditModal({
                                        ...editModal,
                                        item: { ...editModal.item, checkIn: e.target.value },
                                    })
                                }
                                placeholder="e.g., 06:15 AM"
                            />
                        </div>

                        <div className="attendance-form-group">
                            <label className="attendance-form-label">Check-Out</label>
                            <input
                                className="attendance-form-input"
                                value={editModal.item.checkOut}
                                onChange={(e) =>
                                    setEditModal({
                                        ...editModal,
                                        item: { ...editModal.item, checkOut: e.target.value },
                                    })
                                }
                                placeholder="e.g., 07:45 AM"
                            />
                        </div>

                        <div className="attendance-form-group">
                            <label className="attendance-form-label">Status</label>
                            <select
                                className="attendance-form-select"
                                value={editModal.item.status}
                                onChange={(e) =>
                                    setEditModal({
                                        ...editModal,
                                        item: { ...editModal.item, status: e.target.value },
                                    })
                                }
                            >
                                <option value="Present">Present</option>
                                <option value="Absent">Absent</option>
                            </select>
                        </div>

                        <div className="attendance-button-group">
                            <button
                                className="attendance-cancel-button"
                                onClick={() => setEditModal({ show: false, item: null })}
                            >
                                Cancel
                            </button>
                            <button className="attendance-save-button" onClick={handleSaveEdit}>
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* DELETE CONFIRMATION MODAL */}
            {deleteModal.show && (
                <div className="attendance-modal-overlay" onClick={() => setDeleteModal({ show: false, item: null })}>
                    <div className={classNames("attendance-modal", isMobile && "attendance-modal--mobile")} onClick={(e) => e.stopPropagation()}>
                        <div className="attendance-modal-header">
                            <h3 className={classNames("attendance-modal-title", isMobile && "attendance-modal-title--mobile")}>
                                Delete Attendance Record
                            </h3>
                            <button
                                className="attendance-close-button"
                                onClick={() => setDeleteModal({ show: false, item: null })}
                            >
                                <HiXMark size={24} color="#6b7280" />
                            </button>
                        </div>

                        <p className="attendance-delete-modal-text">
                            Are you sure you want to delete the attendance record for{" "}
                            <strong>{deleteModal.item.name}</strong> on{" "}
                            <strong>{formatDate(deleteModal.item.date)}</strong>? This action cannot
                            be undone.
                        </p>

                        <div className="attendance-button-group">
                            <button
                                className="attendance-cancel-button"
                                onClick={() => setDeleteModal({ show: false, item: null })}
                            >
                                Cancel
                            </button>
                            <button className="attendance-delete-button" onClick={confirmDelete}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div></>
    );
}