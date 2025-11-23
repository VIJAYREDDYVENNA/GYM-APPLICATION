import React, { useEffect, useState } from "react";
import {
    HiOutlinePencilSquare,
    HiOutlineTrash,
    HiOutlineMagnifyingGlass,
    HiPlus,
    HiXMark,
    HiExclamationTriangle,
    HiChevronLeft,
    HiChevronRight,
    HiChevronDoubleLeft,
    HiChevronDoubleRight,
} from "react-icons/hi2";


export default function Trainers() {
    // Initial trainer data
    const initialTrainers = [
        {
            id: "TRN001",
            name: "Michael Johnson",
            phone: "+1 (555) 111-2222",
            email: "mjohnson@email.com",
            clients: "25 assigned",
            date: "2023-01-10 09:00 AM",
        },
        {
            id: "TRN002",
            name: "Sarah Williams",
            phone: "+1 (555) 222-3333",
            email: "swilliams@email.com",
            clients: "30 assigned",
            date: "2023-02-15 10:30 AM",
        },
        {
            id: "TRN003",
            name: "David Martinez",
            phone: "+1 (555) 333-4444",
            email: "dmartinez@email.com",
            clients: "22 assigned",
            date: "2023-03-20 08:45 AM",
        },
        {
            id: "TRN004",
            name: "Emily Davis",
            phone: "+1 (555) 444-5555",
            email: "edavis@email.com",
            clients: "28 assigned",
            date: "2023-04-12 11:00 AM",
        },
        {
            id: "TRN005",
            name: "James Wilson",
            phone: "+1 (555) 555-6666",
            email: "jwilson@email.com",
            clients: "18 assigned",
            date: "2023-05-08 02:30 PM",
        },
        {
            id: "TRN006",
            name: "Amanda Brown",
            phone: "+1 (555) 666-7777",
            email: "abrown@email.com",
            clients: "32 assigned",
            date: "2023-05-15 09:15 AM",
        },
        {
            id: "TRN007",
            name: "Robert Taylor",
            phone: "+1 (555) 777-8888",
            email: "rtaylor@email.com",
            clients: "20 assigned",
            date: "2023-06-01 10:00 AM",
        },
        {
            id: "TRN008",
            name: "Jessica Anderson",
            phone: "+1 (555) 888-9999",
            email: "janderson@email.com",
            clients: "15 assigned",
            date: "2023-06-20 11:30 AM",
        },
        {
            id: "TRN009",
            name: "William Thomas",
            phone: "+1 (555) 999-0000",
            email: "wthomas@email.com",
            clients: "27 assigned",
            date: "2023-07-05 08:00 AM",
        },
        {
            id: "TRN010",
            name: "Jennifer Garcia",
            phone: "+1 (555) 000-1111",
            email: "jgarcia@email.com",
            clients: "24 assigned",
            date: "2023-07-18 02:00 PM",
        },
        {
            id: "TRN011",
            name: "Christopher Lee",
            phone: "+1 (555) 111-3333",
            email: "clee@email.com",
            clients: "19 assigned",
            date: "2023-08-02 09:30 AM",
        },
        {
            id: "TRN012",
            name: "Ashley Moore",
            phone: "+1 (555) 222-4444",
            email: "amoore@email.com",
            clients: "31 assigned",
            date: "2023-08-15 10:45 AM",
        },
    ];

    // State management
    const [trainers, setTrainers] = useState(initialTrainers);
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [editingTrainer, setEditingTrainer] = useState(null);
    const [trainerToDelete, setTrainerToDelete] = useState(null);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    // Form state
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        clients: "",
    });

    // Track window size for responsive design
    useEffect(() => {
        document.title = "FitZone - Trainers";

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowWidth < 768;
    const isTablet = windowWidth >= 768 && windowWidth < 1024;

    // Filter trainers based on search
    const filteredTrainers = trainers.filter(
        (trainer) =>
            trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            trainer.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            trainer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            trainer.phone.includes(searchTerm)
    );

    // Pagination calculations
    const totalItems = filteredTrainers.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const currentTrainers = filteredTrainers.slice(startIndex, endIndex);

    // Reset to page 1 when search changes or items per page changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, itemsPerPage]);

    // Generate page numbers to display
    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = isMobile ? 3 : 5;
        
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
        
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    };

    // Generate new trainer ID
    const generateTrainerId = () => {
        const maxId = trainers.reduce((max, t) => {
            const num = parseInt(t.id.replace("TRN", ""));
            return num > max ? num : max;
        }, 0);
        return `TRN${String(maxId + 1).padStart(3, "0")}`;
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Open modal for adding new trainer
    const handleAddTrainer = () => {
        setEditingTrainer(null);
        setFormData({ name: "", phone: "", email: "", clients: "" });
        setIsModalOpen(true);
    };

    // Open modal for editing trainer
    const handleEditTrainer = (trainer) => {
        setEditingTrainer(trainer);
        setFormData({
            name: trainer.name,
            phone: trainer.phone,
            email: trainer.email,
            clients: trainer.clients.replace(" assigned", ""),
        });
        setIsModalOpen(true);
    };

    // Submit form (add or edit)
    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingTrainer) {
            // Update existing trainer
            setTrainers((prev) =>
                prev.map((t) =>
                    t.id === editingTrainer.id
                        ? {
                              ...t,
                              name: formData.name,
                              phone: formData.phone,
                              email: formData.email,
                              clients: `${formData.clients} assigned`,
                          }
                        : t
                )
            );
        } else {
            // Add new trainer
            const now = new Date();
            const formattedDate = now.toLocaleString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            });

            const newTrainer = {
                id: generateTrainerId(),
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                clients: `${formData.clients || "0"} assigned`,
                date: formattedDate,
            };
            setTrainers((prev) => [...prev, newTrainer]);
        }

        setIsModalOpen(false);
        setFormData({ name: "", phone: "", email: "", clients: "" });
    };

    // Open delete confirmation modal
    const handleDeleteClick = (trainer) => {
        setTrainerToDelete(trainer);
        setIsDeleteModalOpen(true);
    };

    // Confirm delete
    const handleConfirmDelete = () => {
        setTrainers((prev) => prev.filter((t) => t.id !== trainerToDelete.id));
        setIsDeleteModalOpen(false);
        setTrainerToDelete(null);
    };

    // Pagination handlers
    const goToPage = (page) => {
        setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    };

    const goToFirstPage = () => goToPage(1);
    const goToLastPage = () => goToPage(totalPages);
    const goToPrevPage = () => goToPage(currentPage - 1);
    const goToNextPage = () => goToPage(currentPage + 1);

    // Mobile card view component
    const MobileTrainerCard = ({ trainer, index }) => (
        <div className="trainers-mobile-card">
            <div className="trainers-mobile-card-header">
                <div>
                    <div className="trainers-mobile-card-id">{trainer.id}</div>
                    <div className="trainers-mobile-card-name">{trainer.name}</div>
                </div>
                <span className="trainers-mobile-card-badge">
                    #{startIndex + index + 1}
                </span>
            </div>

            <div className="trainers-mobile-card-row">
                <span className="trainers-mobile-card-label">Mobile</span>
                <span className="trainers-mobile-card-value">{trainer.phone}</span>
            </div>
            <div className="trainers-mobile-card-row">
                <span className="trainers-mobile-card-label">Email</span>
                <span className="trainers-mobile-card-value">{trainer.email}</span>
            </div>
            <div className="trainers-mobile-card-row">
                <span className="trainers-mobile-card-label">Clients</span>
                <span className="trainers-mobile-card-value">{trainer.clients}</span>
            </div>
            <div className="trainers-mobile-card-row no-border">
                <span className="trainers-mobile-card-label">Joined</span>
                <span className="trainers-mobile-card-value">{trainer.date}</span>
            </div>

            <div className="trainers-mobile-card-actions">
                <button
                    className="trainers-mobile-action-button edit"
                    onClick={() => handleEditTrainer(trainer)}
                >
                    <HiOutlinePencilSquare size={18} />
                    Edit
                </button>
                <button
                    className="trainers-mobile-action-button delete"
                    onClick={() => handleDeleteClick(trainer)}
                >
                    <HiOutlineTrash size={18} />
                    Delete
                </button>
            </div>
        </div>
    );

    // Pagination component
    const Pagination = () => (
        <div className={`trainers-pagination-wrapper ${isMobile ? 'mobile' : ''}`}>
            <div className="trainers-pagination-left">
                <span>Items per page:</span>
                <select
                    className="trainers-items-per-page-select"
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                    <option value={25}>25</option>
                </select>
                <span className="trainers-pagination-info">
                    {startIndex + 1}-{endIndex} of {totalItems}
                </span>
            </div>

            <div className="trainers-pagination-right">
                {/* First Page */}
                <button
                    className={`trainers-page-button ${currentPage === 1 ? 'disabled' : ''}`}
                    onClick={goToFirstPage}
                    disabled={currentPage === 1}
                    title="First Page"
                >
                    <HiChevronDoubleLeft size={16} />
                </button>

                {/* Previous Page */}
                <button
                    className={`trainers-page-button ${currentPage === 1 ? 'disabled' : ''}`}
                    onClick={goToPrevPage}
                    disabled={currentPage === 1}
                    title="Previous Page"
                >
                    <HiChevronLeft size={16} />
                </button>

                {/* Page Numbers */}
                {getPageNumbers().map((page) => (
                    <button
                        key={page}
                        className={`trainers-page-button ${page === currentPage ? 'active' : ''}`}
                        onClick={() => goToPage(page)}
                    >
                        {page}
                    </button>
                ))}

                {/* Next Page */}
                <button
                    className={`trainers-page-button ${currentPage === totalPages ? 'disabled' : ''}`}
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    title="Next Page"
                >
                    <HiChevronRight size={16} />
                </button>

                {/* Last Page */}
                <button
                    className={`trainers-page-button ${currentPage === totalPages ? 'disabled' : ''}`}
                    onClick={goToLastPage}
                    disabled={currentPage === totalPages}
                    title="Last Page"
                >
                    <HiChevronDoubleRight size={16} />
                </button>
            </div>
        </div>
    );

    return (
        <><style>{`/* Trainers.css - Custom CSS for Trainers Component */

/* Page Layout */
.trainers-page {
    padding: 25px;
    background: #f5f7fb;
    min-height: 100vh;
    font-family: Inter, sans-serif;
}

.trainers-page.mobile {
    padding: 15px;
}

/* Title Section */
.trainers-title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 5px;
}

.trainers-title.mobile {
    font-size: 18px;
}

.trainers-subtitle {
    color: #6d7280;
    margin-bottom: 25px;
    font-size: 14px;
}

.trainers-subtitle.mobile {
    font-size: 13px;
}

/* Top Bar */
.trainers-top-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    gap: 0;
}

.trainers-top-bar.mobile {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
}

/* Search Box */
.trainers-search-box {
    background: #fff;
    border-radius: 10px;
    border: 1px solid #e3e6ea;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1;
    max-width: 400px;
}

.trainers-search-box.mobile {
    flex: none;
    max-width: 100%;
}

.trainers-search-input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 14px;
    background: transparent;
}

.trainers-clear-search {
    cursor: pointer;
}

/* Add Button */
.trainers-add-button {
    background: #2563eb;
    color: #fff;
    padding: 10px 18px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    border: none;
    font-weight: 500;
    margin-left: 15px;
    font-size: 14px;
    width: auto;
}

.trainers-add-button.mobile {
    padding: 12px 16px;
    margin-left: 0;
    width: 100%;
}

/* Card Container */
.trainers-card {
    background: #fff;
    border-radius: 14px;
    border: 1px solid #e5e7eb;
    padding: 20px;
    margin-top: 10px;
    overflow-x: auto;
}

.trainers-card.mobile {
    padding: 15px;
}

.trainers-card-header {
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 16px;
}

.trainers-card-header.mobile {
    font-size: 15px;
}

/* Table Wrapper */
.trainers-table-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}

/* Table */
.trainers-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
    min-width: auto;
}

.trainers-table.mobile {
    min-width: 600px;
}

/* Table Header */
.trainers-table thead tr th {
    text-align: left;
    padding: 12px;
    font-size: 14px;
    color: #374151;
    border-bottom: 1px solid #e5e7eb;
    white-space: nowrap;
    font-weight: 600;
}

.trainers-table thead tr.custom-center th {
    text-align: center;
}

.trainers-table.mobile thead tr th {
    padding: 10px 8px;
    font-size: 12px;
}

/* Table Body */
.trainers-table tbody tr td {
    padding: 12px;
    font-size: 14px;
    border-bottom: 1px solid #f1f1f1;
    color: #444;
}

.trainers-table.mobile tbody tr td {
    padding: 10px 8px;
    font-size: 12px;
}

/* Hide on Tablet */
.trainers-table .hide-on-tablet {
    display: table-cell;
}

.trainers-table.tablet .hide-on-tablet {
    display: none;
}

/* Trainer ID */
.trainers-id {
    color: #2563eb;
    font-weight: 600;
}

/* Action Icons */
.trainers-action-icons {
    display: flex;
    gap: 15px;
    align-items: center;
}

.trainers-edit-icon {
    color: #2563eb;
    cursor: pointer;
    padding: 6px;
    border-radius: 6px;
    transition: background 0.2s;
}

.trainers-edit-icon:hover {
    background: #eff6ff;
}

.trainers-delete-icon {
    color: #dc2626;
    cursor: pointer;
    padding: 6px;
    border-radius: 6px;
    transition: background 0.2s;
}

.trainers-delete-icon:hover {
    background: #fef2f2;
}

/* Pagination */
.trainers-pagination-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #e5e7eb;
    gap: 0;
}

.trainers-pagination-wrapper.mobile {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
}

.trainers-pagination-left {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: #374151;
}

.trainers-items-per-page-select {
    padding: 6px 10px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 14px;
    outline: none;
    cursor: pointer;
    background: #fff;
}

.trainers-pagination-info {
    color: #6b7280;
}

.trainers-pagination-right {
    display: flex;
    align-items: center;
    gap: 5px;
}

.trainers-page-button {
    min-width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    background: #fff;
    cursor: pointer;
    font-size: 14px;
    color: #374151;
    transition: all 0.2s;
}

.trainers-page-button:hover:not(.disabled):not(.active) {
    background: #f3f4f6;
    border-color: #9ca3af;
}

.trainers-page-button.active {
    border: 1px solid #2563eb;
    background: #2563eb;
    color: #fff;
    font-weight: 500;
}

.trainers-page-button.disabled {
    border: 1px solid #e5e7eb;
    background: #f9fafb;
    cursor: not-allowed;
    color: #d1d5db;
}

/* Modal Overlay */
.trainers-modal-overlay {
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
.trainers-modal {
    background: #fff;
    border-radius: 16px;
    padding: 30px;
    width: 100%;
    max-width: 500px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
}

.trainers-modal.mobile {
    padding: 20px;
}

.trainers-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
}

.trainers-modal-title {
    font-size: 20px;
    font-weight: 700;
    color: #111827;
}

.trainers-modal-title.mobile {
    font-size: 18px;
}

.trainers-close-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6b7280;
}

.trainers-close-button:hover {
    color: #374151;
}

/* Form */
.trainers-form-group {
    margin-bottom: 20px;
}

.trainers-label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 500;
    color: #374151;
}

.trainers-input {
    width: 100%;
    padding: 12px 14px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
    box-sizing: border-box;
}

.trainers-input:focus {
    border-color: #2563eb;
}

.trainers-button-group {
    display: flex;
    gap: 12px;
    margin-top: 30px;
    flex-direction: row;
}

.trainers-button-group.mobile {
    flex-direction: column-reverse;
}

.trainers-cancel-button {
    flex: 1;
    padding: 12px 20px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    background: #fff;
    color: #374151;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
}

.trainers-cancel-button:hover {
    background: #f9fafb;
}

.trainers-submit-button {
    flex: 1;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    background: #2563eb;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
}

.trainers-submit-button:hover {
    background: #1d4ed8;
}

/* Delete Modal */
.trainers-delete-modal {
    background: #fff;
    border-radius: 16px;
    padding: 30px;
    width: 100%;
    max-width: 400px;
    text-align: center;
}

.trainers-delete-modal.mobile {
    padding: 20px;
}

.trainers-delete-icon-wrapper {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #fef2f2;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
}

.trainers-delete-title {
    font-size: 18px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 10px;
}

.trainers-delete-text {
    color: #6b7280;
    font-size: 14px;
    margin-bottom: 25px;
    line-height: 1.5;
}

.trainers-delete-button-group {
    display: flex;
    gap: 12px;
    flex-direction: row;
}

.trainers-delete-button-group.mobile {
    flex-direction: column-reverse;
}

.trainers-confirm-delete-button {
    flex: 1;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    background: #dc2626;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
}

.trainers-confirm-delete-button:hover {
    background: #b91c1c;
}

/* Mobile Card View */
.trainers-mobile-cards {
    margin-top: 15px;
}

.trainers-mobile-card {
    background: #fff;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    padding: 16px;
    margin-bottom: 12px;
}

.trainers-mobile-card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;
}

.trainers-mobile-card-id {
    color: #2563eb;
    font-weight: 600;
    font-size: 13px;
}

.trainers-mobile-card-name {
    font-weight: 600;
    font-size: 16px;
    color: #111827;
    margin-bottom: 4px;
}

.trainers-mobile-card-badge {
    background: #f3f4f6;
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 12px;
    color: #374151;
}

.trainers-mobile-card-row {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #f3f4f6;
    font-size: 13px;
}

.trainers-mobile-card-row.no-border {
    border-bottom: none;
}

.trainers-mobile-card-label {
    color: #6b7280;
}

.trainers-mobile-card-value {
    color: #111827;
    font-weight: 500;
    text-align: right;
    max-width: 60%;
    word-break: break-word;
}

.trainers-mobile-card-actions {
    display: flex;
    gap: 10px;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #e5e7eb;
}

.trainers-mobile-action-button {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 10px;
    border-radius: 8px;
    border: none;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: opacity 0.2s;
}

.trainers-mobile-action-button:hover {
    opacity: 0.85;
}

.trainers-mobile-action-button.edit {
    background: #eff6ff;
    color: #2563eb;
}

.trainers-mobile-action-button.delete {
    background: #fef2f2;
    color: #dc2626;
}

/* No Results */
.trainers-no-results {
    text-align: center;
    padding: 40px 20px;
    color: #6b7280;
}

.trainers-no-results-icon {
    margin-bottom: 10px;
}`}</style>
        <div className={`trainers-page ${isMobile ? 'mobile' : ''}`}>
            {/* PAGE TITLE */}
            <h2 className={`trainers-title ${isMobile ? 'mobile' : ''}`}>Trainers Management</h2>
            <p className={`trainers-subtitle ${isMobile ? 'mobile' : ''}`}>Manage trainers across all gym locations</p>

            <div className={`trainers-top-bar ${isMobile ? 'mobile' : ''}`}>
                {/* SEARCH BOX */}
                <div className={`trainers-search-box ${isMobile ? 'mobile' : ''}`}>
                    <HiOutlineMagnifyingGlass size={20} color="#6b7280" />
                    <input
                        type="text"
                        placeholder="Search by name, ID, email..."
                        className="trainers-search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && (
                        <HiXMark
                            size={18}
                            color="#6b7280"
                            className="trainers-clear-search"
                            onClick={() => setSearchTerm("")}
                        />
                    )}
                </div>

                {/* ADD TRAINER */}
                <button className={`trainers-add-button ${isMobile ? 'mobile' : ''}`} onClick={handleAddTrainer}>
                    <HiPlus size={18} /> Add Trainer
                </button>
            </div>

            {/* TRAINERS TABLE / CARDS */}
            <div className={`trainers-card ${isMobile ? 'mobile' : ''}`}>
                <h3 className={`trainers-card-header ${isMobile ? 'mobile' : ''}`}>
                    Trainers List ({filteredTrainers.length})
                </h3>

                {filteredTrainers.length === 0 ? (
                    <div className="trainers-no-results">
                        <HiOutlineMagnifyingGlass
                            size={40}
                            color="#d1d5db"
                            className="trainers-no-results-icon"
                        />
                        <p>No trainers found matching your search.</p>
                    </div>
                ) : isMobile ? (
                    // Mobile Card View
                    <>
                        <div className="trainers-mobile-cards">
                            {currentTrainers.map((trainer, index) => (
                                <MobileTrainerCard
                                    key={trainer.id}
                                    trainer={trainer}
                                    index={index}
                                />
                            ))}
                        </div>
                        {totalPages > 1 && <Pagination />}
                    </>
                ) : (
                    // Desktop Table View
                    <>
                        <div className="trainers-table-wrapper">
                            <table className={`trainers-table ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''}`}>
                                <thead>
                                    <tr className="">
                                        <th>S.No</th>
                                        <th>Trainer ID</th>
                                        <th>Name</th>
                                        <th>Mobile</th>
                                        <th className="hide-on-tablet">Email</th>
                                        <th>Clients</th>
                                        <th className="hide-on-tablet">Joining Date/Time</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {currentTrainers.map((t, index) => (
                                        <tr key={t.id}>
                                            <td>{startIndex + index + 1}</td>
                                            <td>
                                                <span className="trainers-id">{t.id}</span>
                                            </td>
                                            <td>{t.name}</td>
                                            <td>{t.phone}</td>
                                            <td className="hide-on-tablet">{t.email}</td>
                                            <td>{t.clients}</td>
                                            <td className="hide-on-tablet">{t.date}</td>
                                            <td>
                                                <div className="trainers-action-icons">
                                                    <HiOutlinePencilSquare
                                                        className="trainers-edit-icon"
                                                        size={30}
                                                        onClick={() => handleEditTrainer(t)}
                                                        title="Edit"
                                                    />
                                                    <HiOutlineTrash
                                                        className="trainers-delete-icon"
                                                        size={30}
                                                        onClick={() => handleDeleteClick(t)}
                                                        title="Delete"
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {totalPages > 1 && <Pagination />}
                    </>
                )}
            </div>

            {/* ADD/EDIT MODAL */}
            {isModalOpen && (
                <div className="trainers-modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className={`trainers-modal ${isMobile ? 'mobile' : ''}`} onClick={(e) => e.stopPropagation()}>
                        <div className="trainers-modal-header">
                            <h3 className={`trainers-modal-title ${isMobile ? 'mobile' : ''}`}>
                                {editingTrainer ? "Edit Trainer" : "Add New Trainer"}
                            </h3>
                            <button
                                className="trainers-close-button"
                                onClick={() => setIsModalOpen(false)}
                            >
                                <HiXMark size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="trainers-form-group">
                                <label className="trainers-label">Full Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="trainers-input"
                                    placeholder="Enter trainer's full name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="trainers-form-group">
                                <label className="trainers-label">Mobile Number *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="trainers-input"
                                    placeholder="Enter mobile number"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="trainers-form-group">
                                <label className="trainers-label">Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="trainers-input"
                                    placeholder="Enter email address"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="trainers-form-group">
                                <label className="trainers-label">Number of Clients</label>
                                <input
                                    type="number"
                                    name="clients"
                                    className="trainers-input"
                                    placeholder="Enter number of assigned clients"
                                    value={formData.clients}
                                    onChange={handleInputChange}
                                    min="0"
                                />
                            </div>

                            <div className={`trainers-button-group ${isMobile ? 'mobile' : ''}`}>
                                <button
                                    type="button"
                                    className="trainers-cancel-button"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="trainers-submit-button">
                                    {editingTrainer ? "Update Trainer" : "Add Trainer"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* DELETE CONFIRMATION MODAL */}
            {isDeleteModalOpen && (
                <div
                    className="trainers-modal-overlay"
                    onClick={() => setIsDeleteModalOpen(false)}
                >
                    <div
                        className={`trainers-delete-modal ${isMobile ? 'mobile' : ''}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="trainers-delete-icon-wrapper">
                            <HiExclamationTriangle size={30} color="#dc2626" />
                        </div>
                        <h3 className="trainers-delete-title">Delete Trainer</h3>
                        <p className="trainers-delete-text">
                            Are you sure you want to delete{" "}
                            <strong>{trainerToDelete?.name}</strong>? This action cannot
                            be undone.
                        </p>
                        <div className={`trainers-delete-button-group ${isMobile ? 'mobile' : ''}`}>
                            <button
                                className="trainers-cancel-button"
                                onClick={() => setIsDeleteModalOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="trainers-confirm-delete-button"
                                onClick={handleConfirmDelete}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div></>
    );
}