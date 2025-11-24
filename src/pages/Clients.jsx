import React, { useEffect, useState } from "react";
import {
    HiOutlineMagnifyingGlass,
    HiPlus,
    HiOutlinePhone,
    HiOutlineEnvelope,
    HiOutlinePencilSquare,
    HiOutlineTrash,
    HiXMark,
    HiChevronLeft,
    HiChevronRight,
    HiChevronDoubleLeft,
    HiChevronDoubleRight,
    HiOutlineCamera,
    HiExclamationTriangle,
} from "react-icons/hi2";

export default function Clients() {
    useEffect(() => {
        document.title = "FitZone - Clients";
    }, []);

    // State for clients data
    const [clients, setClients] = useState([
        {
            id: 1,
            name: "Alex Johnson",
            initials: "AJ",
            city: "New York, NY",
            phone: "+1 (555) 123-4567",
            email: "alex.j@email.com",
            status: "Active",
            trainer: "Michael Johnson",
            time: "6:00 AM - 8:00 AM",
            payment: "Paid",
            paymentDate: "2024-01-15",
            joiningDate: "2023-01-10",
            subscription: "12 months",
            attendance: "85%",
            address: "123 Main St, New York, NY",
            idProof: null,
            photo: null,
        },
        {
            id: 2,
            name: "Emma Williams",
            initials: "EW",
            city: "Los Angeles, CA",
            phone: "+1 (555) 234-5678",
            email: "emma.w@email.com",
            status: "Active",
            trainer: "Sarah Williams",
            time: "8:00 AM - 10:00 AM",
            payment: "Paid",
            paymentDate: "2024-01-20",
            joiningDate: "2023-06-15",
            subscription: "6 months",
            attendance: "92%",
            address: "456 Oak Ave, Los Angeles, CA",
            idProof: null,
            photo: null,
        },
        {
            id: 3,
            name: "Michael Brown",
            initials: "MB",
            city: "Chicago, IL",
            phone: "+1 (555) 345-6789",
            email: "michael.b@email.com",
            status: "Active",
            trainer: "David Martinez",
            time: "5:00 PM - 7:00 PM",
            payment: "Pending",
            paymentDate: "",
            joiningDate: "2023-09-01",
            subscription: "3 months",
            attendance: "78%",
            address: "789 Pine St, Chicago, IL",
            idProof: null,
            photo: null,
        },
        {
            id: 4,
            name: "Sophia Davis",
            initials: "SD",
            city: "Houston, TX",
            phone: "+1 (555) 456-7890",
            email: "sophia.d@email.com",
            status: "Active",
            trainer: "Emily Davis",
            time: "10:00 AM - 12:00 PM",
            payment: "Paid",
            paymentDate: "2024-01-10",
            joiningDate: "2023-02-20",
            subscription: "12 months",
            attendance: "88%",
            address: "321 Elm St, Houston, TX",
            idProof: null,
            photo: null,
        },
        {
            id: 5,
            name: "James Miller",
            initials: "JM",
            city: "Phoenix, AZ",
            phone: "+1 (555) 567-8901",
            email: "james.m@email.com",
            status: "Inactive",
            trainer: "James Wilson",
            time: "7:00 AM - 9:00 AM",
            payment: "Overdue",
            paymentDate: "",
            joiningDate: "2023-11-01",
            subscription: "1 month",
            attendance: "45%",
            address: "654 Maple Dr, Phoenix, AZ",
            idProof: null,
            photo: null,
        },
        {
            id: 6,
            name: "Olivia Garcia",
            initials: "OG",
            city: "Philadelphia, PA",
            phone: "+1 (555) 678-9012",
            email: "olivia.g@email.com",
            status: "Active",
            trainer: "Lisa Anderson",
            time: "6:00 PM - 8:00 PM",
            payment: "Paid",
            paymentDate: "2024-01-18",
            joiningDate: "2023-07-10",
            subscription: "6 months",
            attendance: "91%",
            address: "987 Cedar Ln, Philadelphia, PA",
            idProof: null,
            photo: null,
        },
        {
            id: 7,
            name: "William Martinez",
            initials: "WM",
            city: "San Antonio, TX",
            phone: "+1 (555) 789-0123",
            email: "william.m@email.com",
            status: "Active",
            trainer: "Robert Taylor",
            time: "12:00 PM - 2:00 PM",
            payment: "Paid",
            paymentDate: "2024-01-22",
            joiningDate: "2023-10-05",
            subscription: "3 months",
            attendance: "82%",
            address: "147 Birch Rd, San Antonio, TX",
            idProof: null,
            photo: null,
        },
        {
            id: 8,
            name: "Ava Rodriguez",
            initials: "AR",
            city: "San Diego, CA",
            phone: "+1 (555) 890-1234",
            email: "ava.r@email.com",
            status: "Active",
            trainer: "Jennifer Moore",
            time: "9:00 AM - 11:00 AM",
            payment: "Paid",
            paymentDate: "2024-01-25",
            joiningDate: "2023-03-15",
            subscription: "12 months",
            attendance: "94%",
            address: "258 Walnut Ave, San Diego, CA",
            idProof: null,
            photo: null,
        },
        {
            id: 9,
            name: "Benjamin Lee",
            initials: "BL",
            city: "Dallas, TX",
            phone: "+1 (555) 901-2345",
            email: "ben.l@email.com",
            status: "Active",
            trainer: "Michael Johnson",
            time: "4:00 PM - 6:00 PM",
            payment: "Paid",
            paymentDate: "2024-01-12",
            joiningDate: "2023-05-20",
            subscription: "6 months",
            attendance: "87%",
            address: "369 Spruce St, Dallas, TX",
            idProof: null,
            photo: null,
        },
        {
            id: 10,
            name: "Charlotte Wilson",
            initials: "CW",
            city: "San Jose, CA",
            phone: "+1 (555) 012-3456",
            email: "charlotte.w@email.com",
            status: "Active",
            trainer: "Sarah Williams",
            time: "7:00 AM - 9:00 AM",
            payment: "Pending",
            paymentDate: "",
            joiningDate: "2023-12-01",
            subscription: "3 months",
            attendance: "76%",
            address: "741 Ash Blvd, San Jose, CA",
            idProof: null,
            photo: null,
        },
        {
            id: 11,
            name: "Daniel Thompson",
            initials: "DT",
            city: "Austin, TX",
            phone: "+1 (555) 123-7890",
            email: "daniel.t@email.com",
            status: "Active",
            trainer: "David Martinez",
            time: "11:00 AM - 1:00 PM",
            payment: "Paid",
            paymentDate: "2024-01-08",
            joiningDate: "2023-04-10",
            subscription: "12 months",
            attendance: "90%",
            address: "852 Redwood Ct, Austin, TX",
            idProof: null,
            photo: null,
        },
        {
            id: 12,
            name: "Mia Anderson",
            initials: "MA",
            city: "Jacksonville, FL",
            phone: "+1 (555) 234-8901",
            email: "mia.a@email.com",
            status: "Inactive",
            trainer: "Emily Davis",
            time: "3:00 PM - 5:00 PM",
            payment: "Overdue",
            paymentDate: "",
            joiningDate: "2023-08-25",
            subscription: "1 month",
            attendance: "52%",
            address: "963 Palm Way, Jacksonville, FL",
            idProof: null,
            photo: null,
        },
        {
            id: 13,
            name: "Ethan White",
            initials: "EW",
            city: "Fort Worth, TX",
            phone: "+1 (555) 345-9012",
            email: "ethan.w@email.com",
            status: "Active",
            trainer: "James Wilson",
            time: "6:00 AM - 8:00 AM",
            payment: "Paid",
            paymentDate: "2024-01-14",
            joiningDate: "2023-02-01",
            subscription: "12 months",
            attendance: "89%",
            address: "174 Cypress Dr, Fort Worth, TX",
            idProof: null,
            photo: null,
        },
        {
            id: 14,
            name: "Isabella Harris",
            initials: "IH",
            city: "Columbus, OH",
            phone: "+1 (555) 456-0123",
            email: "isabella.h@email.com",
            status: "Active",
            trainer: "Lisa Anderson",
            time: "8:00 AM - 10:00 AM",
            payment: "Paid",
            paymentDate: "2024-01-19",
            joiningDate: "2023-06-30",
            subscription: "6 months",
            attendance: "93%",
            address: "285 Hickory Ln, Columbus, OH",
            idProof: null,
            photo: null,
        },
        {
            id: 15,
            name: "Alexander Clark",
            initials: "AC",
            city: "Charlotte, NC",
            phone: "+1 (555) 567-1234",
            email: "alex.c@email.com",
            status: "Active",
            trainer: "Robert Taylor",
            time: "5:00 PM - 7:00 PM",
            payment: "Pending",
            paymentDate: "",
            joiningDate: "2023-11-15",
            subscription: "3 months",
            attendance: "74%",
            address: "396 Juniper St, Charlotte, NC",
            idProof: null,
            photo: null,
        },
        {
            id: 16,
            name: "Harper Lewis",
            initials: "HL",
            city: "Seattle, WA",
            phone: "+1 (555) 678-2345",
            email: "harper.l@email.com",
            status: "Active",
            trainer: "Jennifer Moore",
            time: "7:00 AM - 9:00 AM",
            payment: "Paid",
            paymentDate: "2024-01-21",
            joiningDate: "2023-08-10",
            subscription: "6 months",
            attendance: "88%",
            address: "412 Fir St, Seattle, WA",
            idProof: null,
            photo: null,
        },
        {
            id: 17,
            name: "Lucas Walker",
            initials: "LW",
            city: "Denver, CO",
            phone: "+1 (555) 789-3456",
            email: "lucas.w@email.com",
            status: "Active",
            trainer: "Michael Johnson",
            time: "6:00 PM - 8:00 PM",
            payment: "Paid",
            paymentDate: "2024-01-17",
            joiningDate: "2023-04-25",
            subscription: "12 months",
            attendance: "91%",
            address: "523 Aspen Rd, Denver, CO",
            idProof: null,
            photo: null,
        },
        {
            id: 18,
            name: "Amelia Hall",
            initials: "AH",
            city: "Boston, MA",
            phone: "+1 (555) 890-4567",
            email: "amelia.h@email.com",
            status: "Active",
            trainer: "Sarah Williams",
            time: "10:00 AM - 12:00 PM",
            payment: "Pending",
            paymentDate: "",
            joiningDate: "2023-12-15",
            subscription: "3 months",
            attendance: "79%",
            address: "634 Beacon St, Boston, MA",
            idProof: null,
            photo: null,
        },
        {
            id: 19,
            name: "Mason Young",
            initials: "MY",
            city: "Nashville, TN",
            phone: "+1 (555) 901-5678",
            email: "mason.y@email.com",
            status: "Active",
            trainer: "David Martinez",
            time: "5:00 AM - 7:00 AM",
            payment: "Paid",
            paymentDate: "2024-01-13",
            joiningDate: "2023-05-05",
            subscription: "12 months",
            attendance: "95%",
            address: "745 Music Row, Nashville, TN",
            idProof: null,
            photo: null,
        },
        {
            id: 20,
            name: "Evelyn King",
            initials: "EK",
            city: "Portland, OR",
            phone: "+1 (555) 012-6789",
            email: "evelyn.k@email.com",
            status: "Inactive",
            trainer: "Emily Davis",
            time: "4:00 PM - 6:00 PM",
            payment: "Overdue",
            paymentDate: "",
            joiningDate: "2023-10-20",
            subscription: "1 month",
            attendance: "38%",
            address: "856 Rose Blvd, Portland, OR",
            idProof: null,
            photo: null,
        },
        {
            id: 21,
            name: "Henry Scott",
            initials: "HS",
            city: "Miami, FL",
            phone: "+1 (555) 123-7891",
            email: "henry.s@email.com",
            status: "Active",
            trainer: "James Wilson",
            time: "8:00 AM - 10:00 AM",
            payment: "Paid",
            paymentDate: "2024-01-16",
            joiningDate: "2023-03-01",
            subscription: "12 months",
            attendance: "86%",
            address: "967 Ocean Dr, Miami, FL",
            idProof: null,
            photo: null,
        },
        {
            id: 22,
            name: "Ella Green",
            initials: "EG",
            city: "Atlanta, GA",
            phone: "+1 (555) 234-8912",
            email: "ella.g@email.com",
            status: "Active",
            trainer: "Lisa Anderson",
            time: "11:00 AM - 1:00 PM",
            payment: "Paid",
            paymentDate: "2024-01-24",
            joiningDate: "2023-07-22",
            subscription: "6 months",
            attendance: "90%",
            address: "178 Peachtree St, Atlanta, GA",
            idProof: null,
            photo: null,
        },
        {
            id: 23,
            name: "Sebastian Adams",
            initials: "SA",
            city: "Las Vegas, NV",
            phone: "+1 (555) 345-9123",
            email: "seb.a@email.com",
            status: "Active",
            trainer: "Robert Taylor",
            time: "9:00 PM - 11:00 PM",
            payment: "Paid",
            paymentDate: "2024-01-11",
            joiningDate: "2023-09-15",
            subscription: "6 months",
            attendance: "83%",
            address: "289 Strip Ave, Las Vegas, NV",
            idProof: null,
            photo: null,
        },
        {
            id: 24,
            name: "Scarlett Baker",
            initials: "SB",
            city: "Minneapolis, MN",
            phone: "+1 (555) 456-0234",
            email: "scarlett.b@email.com",
            status: "Active",
            trainer: "Jennifer Moore",
            time: "6:00 AM - 8:00 AM",
            payment: "Pending",
            paymentDate: "",
            joiningDate: "2024-01-02",
            subscription: "3 months",
            attendance: "72%",
            address: "390 Lake St, Minneapolis, MN",
            idProof: null,
            photo: null,
        },
        {
            id: 25,
            name: "Jack Nelson",
            initials: "JN",
            city: "Detroit, MI",
            phone: "+1 (555) 567-1345",
            email: "jack.n@email.com",
            status: "Active",
            trainer: "Michael Johnson",
            time: "7:00 PM - 9:00 PM",
            payment: "Paid",
            paymentDate: "2024-01-09",
            joiningDate: "2023-06-18",
            subscription: "12 months",
            attendance: "87%",
            address: "401 Motor Ave, Detroit, MI",
            idProof: null,
            photo: null,
        },
    ]);

    // Search and filter states
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All Status");
    const [paymentFilter, setPaymentFilter] = useState("All Payments");

    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    // Modal states
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [clientToDelete, setClientToDelete] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editClientId, setEditClientId] = useState(null);

    const [newClient, setNewClient] = useState({
        name: "",
        mobile: "",
        email: "",
        status: "Active",
        preferredTime: "",
        paymentStatus: "Pending",
        paymentDate: "",
        joiningDate: "",
        subscriptionPeriod: "1 month",
        idProof: null,
        photo: null,
        address: "",
        attendance: "0%",
    });
    const [photoPreview, setPhotoPreview] = useState(null);
    const [idProofName, setIdProofName] = useState("");

    // Filter clients based on search and filters
    const filteredClients = clients.filter((client) => {
        const matchesSearch =
            client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.phone.includes(searchTerm);

        const matchesStatus =
            statusFilter === "All Status" || client.status === statusFilter;

        const matchesPayment =
            paymentFilter === "All Payments" || client.payment === paymentFilter;

        return matchesSearch && matchesStatus && matchesPayment;
    });

    // Pagination calculations
    const totalPages = Math.ceil(filteredClients.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredClients.length);
    const paginatedClients = filteredClients.slice(startIndex, endIndex);

    // Get page numbers to display (show 5 pages like in reference)
    const getPageNumbers = () => {
        const pages = [];
        let startPage, endPage;
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 3) {
                startPage = 1;
                endPage = maxVisiblePages;
            } else if (currentPage >= totalPages - 2) {
                startPage = totalPages - maxVisiblePages + 1;
                endPage = totalPages;
            } else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return pages;
    };

    // Reset to page 1 when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, statusFilter, paymentFilter, itemsPerPage]);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewClient((prev) => ({ ...prev, [name]: value }));
    };

    // Handle photo upload
    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewClient((prev) => ({ ...prev, photo: file }));
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhotoPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle ID proof upload
    const handleIdProofChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewClient((prev) => ({ ...prev, idProof: file }));
            setIdProofName(file.name);
        }
    };

    // Generate initials from name
    const getInitials = (name) => {
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 2);
    };

    // Reset form
    const resetForm = () => {
        setNewClient({
            name: "",
            mobile: "",
            email: "",
            status: "Active",
            preferredTime: "",
            paymentStatus: "Pending",
            paymentDate: "",
            joiningDate: "",
            subscriptionPeriod: "1 month",
            idProof: null,
            photo: null,
            address: "",
            attendance: "0%",
        });
        setPhotoPreview(null);
        setIdProofName("");
        setIsEditMode(false);
        setEditClientId(null);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (isEditMode && editClientId) {
            // Update existing client
            setClients((prev) =>
                prev.map((client) =>
                    client.id === editClientId
                        ? {
                              ...client,
                              name: newClient.name,
                              initials: getInitials(newClient.name),
                              city:
                                  newClient.address
                                      .split(",")
                                      .slice(-2)
                                      .join(",")
                                      .trim() || "N/A",
                              phone: newClient.mobile,
                              email: newClient.email,
                              status: newClient.status,
                              time: newClient.preferredTime,
                              payment: newClient.paymentStatus,
                              paymentDate: newClient.paymentDate,
                              joiningDate: newClient.joiningDate,
                              subscription: newClient.subscriptionPeriod,
                              attendance: newClient.attendance,
                              address: newClient.address,
                              idProof: newClient.idProof,
                              photo: newClient.photo,
                          }
                        : client
                )
            );
        } else {
            // Add new client
            const newId = Math.max(...clients.map((c) => c.id)) + 1;
            const clientToAdd = {
                id: newId,
                name: newClient.name,
                initials: getInitials(newClient.name),
                city:
                    newClient.address.split(",").slice(-2).join(",").trim() ||
                    "N/A",
                phone: newClient.mobile,
                email: newClient.email,
                status: newClient.status,
                trainer: "Unassigned",
                time: newClient.preferredTime,
                payment: newClient.paymentStatus,
                paymentDate: newClient.paymentDate,
                joiningDate: newClient.joiningDate,
                subscription: newClient.subscriptionPeriod,
                attendance: newClient.attendance,
                address: newClient.address,
                idProof: newClient.idProof,
                photo: newClient.photo,
            };

            setClients((prev) => [...prev, clientToAdd]);
        }

        setIsModalOpen(false);
        resetForm();
    };

    // Handle edit client
    const handleEdit = (client) => {
        setIsEditMode(true);
        setEditClientId(client.id);
        setNewClient({
            name: client.name,
            mobile: client.phone,
            email: client.email,
            status: client.status,
            preferredTime: client.time,
            paymentStatus: client.payment,
            paymentDate: client.paymentDate,
            joiningDate: client.joiningDate,
            subscriptionPeriod: client.subscription,
            idProof: client.idProof,
            photo: client.photo,
            address: client.address,
            attendance: client.attendance,
        });
        setIsModalOpen(true);
    };

    // Handle delete click - open confirmation modal
    const handleDeleteClick = (client) => {
        setClientToDelete(client);
        setIsDeleteModalOpen(true);
    };

    // Confirm delete
    const confirmDelete = () => {
        if (clientToDelete) {
            setClients((prev) => prev.filter((c) => c.id !== clientToDelete.id));
            setIsDeleteModalOpen(false);
            setClientToDelete(null);
        }
    };

    // Cancel delete
    const cancelDelete = () => {
        setIsDeleteModalOpen(false);
        setClientToDelete(null);
    };

    // Handle modal close
    const handleModalClose = () => {
        setIsModalOpen(false);
        resetForm();
    };

    return (
        <>
            <style>{`
               
                
                .clients-page {
                    padding: 25px;
                    background: #f5f7fb;
                    min-height:100vh;
                    font-family: Inter, sans-serif;
                }

                .header-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 16px;
                    margin-bottom: 18px;
                    flex-wrap: wrap;
                }

                .title-block {
                    flex: 1;
                    min-width: 200px;
                }

                .page-title {
                    font-size: 22px;
                    font-weight: 700;
                    margin: 0;
                }

                .page-subtitle {
                    color: #6d7280;
                    margin-top: 6px;
                    margin-bottom: 0;
                    font-size: 14px;
                }

                .top-controls {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    flex-wrap: wrap;
                }

                .search-box {
                    background: #fff;
                    border-radius: 10px;
                    border: 1px solid #e3e6ea;
                    padding: 10px 12px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    width: 320px;
                    min-width: 200px;
                    max-width: 100%;
                }

                .search-input {
                    border: none;
                    outline: none;
                    width: 100%;
                    font-size: 14px;
                    background: transparent;
                }

                .filters-row {
                    display: flex;
                    gap: 10px;
                    align-items: center;
                    flex-wrap: wrap;
                }

                .filter-select {
                    padding: 9px 12px;
                    border-radius: 8px;
                    border: 1px solid #e3e6ea;
                    background: #fff;
                    font-size: 14px;
                    cursor: pointer;
                    min-width: 120px;
                }

                .add-btn {
                    background: #2563eb;
                    color: #fff;
                    padding: 10px 16px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    cursor: pointer;
                    border: none;
                    font-weight: 600;
                    font-size: 14px;
                    white-space: nowrap;
                    transition: background 0.2s;
                }

                .add-btn:hover {
                    background: #1d4ed8;
                }

                .card {
                    background: #fff;
                    border-radius: 12px;
                    border: 1px solid #e5e7eb;
                    padding: 18px;
                    margin-top: 18px;
                    overflow-x: auto;
                }

                .card-title {
                    margin: 0;
                    margin-bottom: 12px;
                    font-weight: 700;
                }

                .table-container {
                    overflow-x: auto;
                    width: 100%;
                }

                .clients-table {
                    width: 100%;
                    border-collapse: collapse;
                    min-width: 900px;
                }

                .clients-table th {
                    text-align: left;
                    padding: 12px 10px;
                    font-size: 13px;
                    color: #374151;
                    border-bottom: 1px solid #eaeef2;
                    font-weight: 600;
                    white-space: nowrap;
                }

                .clients-table td {
                    padding: 14px 10px;
                    font-size: 14px;
                    border-bottom: 1px solid #f4f6f8;
                    vertical-align: middle;
                    color: #333;
                }

                .name-cell {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .avatar {
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    background: #e6eefc;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    color: #1e3a8a;
                    font-size: 14px;
                    flex-shrink: 0;
                }

                .name-block {
                    display: flex;
                    flex-direction: column;
                }

                .client-name {
                    font-weight: 600;
                }

                .location-text {
                    font-size: 12px;
                    color: #9aa3ad;
                    margin-top: 4px;
                }

                .contact-col {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                    color: #556;
                    font-size: 13px;
                }

                .contact-item {
                    display: flex;
                    align-items: center;
                }

                .contact-icon {
                    margin-right: 8px;
                }

                .status-badge {
                    display: inline-block;
                    padding: 6px 10px;
                    border-radius: 12px;
                    font-size: 13px;
                    font-weight: 600;
                }

                .status-active {
                    background: #ecfdf5;
                    color: #065f46;
                }

                .status-inactive {
                    background: #f3f4f6;
                    color: #6b7280;
                }

                .payment-badge {
                    padding: 6px 10px;
                    border-radius: 10px;
                    font-weight: 600;
                    display: inline-block;
                    font-size: 13px;
                }

                .payment-paid {
                    background: #ecfdf5;
                    color: #065f46;
                }

                .payment-pending {
                    background: #fff7ed;
                    color: #92400e;
                }

                .payment-overdue {
                    background: #fff1f2;
                    color: #9f1239;
                }

                .subscription-text {
                    color: #374151;
                    font-size: 13px;
                }

                .attendance-pill {
                    display: inline-block;
                    padding: 6px 10px;
                    border-radius: 12px;
                    background: #f1f7fb;
                    color: #0f172a;
                    font-weight: 700;
                    font-size: 13px;
                }

                .actions-col {
                    display: flex;
                    gap: 12px;
                    align-items: center;
                    justify-content: flex-end;
                }

                .action-icon {
                    cursor: pointer;
                    padding: 4px;
                    border-radius: 4px;
                    transition: background 0.2s;
                }

                .action-icon:hover {
                    background: #f3f4f6;
                }

                .icon-edit {
                    color: #6b7280;
                }

                .icon-delete {
                    color: #dc2626;
                }

                /* Pagination Styles - Matching Reference */
                .pagination-wrapper {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 20px;
                    padding: 12px 0;
                    border-top: 1px solid #e5e7eb;
                    flex-wrap: wrap;
                    gap: 16px;
                }

                .pagination-left {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    color: #374151;
                    font-size: 14px;
                }

                .items-per-page-select {
                    padding: 6px 10px;
                    border-radius: 6px;
                    border: 1px solid #d1d5db;
                    background: #fff;
                    font-size: 14px;
                    cursor: pointer;
                    min-width: 65px;
                }

                .pagination-info {
                    color: #6b7280;
                    font-size: 14px;
                }

                .pagination-right {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }

                .pagination-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 36px;
                    height: 36px;
                    padding: 0 8px;
                    border-radius: 6px;
                    border: 1px solid #d1d5db;
                    background: #fff;
                    cursor: pointer;
                    transition: all 0.2s;
                    color: #374151;
                    font-size: 14px;
                    font-weight: 500;
                }

                .pagination-btn:hover:not(:disabled) {
                    background: #f3f4f6;
                    border-color: #2563eb;
                    color: #2563eb;
                }

                .pagination-btn:disabled {
                    opacity: 0.4;
                    cursor: not-allowed;
                    background: #f9fafb;
                }

                .pagination-btn.active {
                    background: #2563eb;
                    color: #fff;
                    border-color: #2563eb;
                }

                .pagination-btn.nav-btn {
                    min-width: 40px;
                }

                .pagination-btn.nav-btn svg {
                    width: 20px;
                    height: 20px;
                }

                /* Modal Styles */
                .modal-overlay {
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

                .modal-content {
                    background: #fff;
                    border-radius: 16px;
                    width: 100%;
                    max-width: 700px;
                    max-height: 90vh;
                    overflow-y: auto;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
                }

                .modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 20px 24px;
                    border-bottom: 1px solid #e5e7eb;
                    position: sticky;
                    top: 0;
                    background: #fff;
                    z-index: 10;
                }

                .modal-title {
                    font-size: 20px;
                    font-weight: 700;
                    margin: 0;
                }

                .modal-close {
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 8px;
                    border-radius: 8px;
                    color: #6b7280;
                    transition: background 0.2s;
                }

                .modal-close:hover {
                    background: #f3f4f6;
                }

                .modal-body {
                    padding: 24px;
                }

                .form-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 20px;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }

                .form-group.full-width {
                    grid-column: span 2;
                }

                .form-label {
                    font-size: 14px;
                    font-weight: 600;
                    color: #374151;
                }

                .form-label .required {
                    color: #dc2626;
                }

                .form-input,
                .form-select,
                .form-textarea {
                    padding: 10px 12px;
                    border-radius: 8px;
                    border: 1px solid #e3e6ea;
                    font-size: 14px;
                    transition: border-color 0.2s;
                    width: 100%;
                }

                .form-input:focus,
                .form-select:focus,
                .form-textarea:focus {
                    outline: none;
                    border-color: #2563eb;
                }

                .form-textarea {
                    resize: vertical;
                    min-height: 80px;
                }

                .photo-upload {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .photo-preview {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    background: #e6eefc;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    flex-shrink: 0;
                }

                .photo-preview img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .photo-placeholder {
                    color: #6b7280;
                }

                .upload-btn {
                    padding: 10px 16px;
                    border-radius: 8px;
                    border: 1px solid #e3e6ea;
                    background: #fff;
                    cursor: pointer;
                    font-size: 14px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: background 0.2s;
                }

                .upload-btn:hover {
                    background: #f3f4f6;
                }

                .file-input {
                    display: none;
                }

                .file-name {
                    font-size: 12px;
                    color: #6b7280;
                    margin-top: 4px;
                }

                .modal-footer {
                    display: flex;
                    justify-content: flex-end;
                    gap: 12px;
                    padding: 20px 24px;
                    border-top: 1px solid #e5e7eb;
                    position: sticky;
                    bottom: 0;
                    background: #fff;
                }

                .btn-cancel {
                    padding: 10px 20px;
                    border-radius: 8px;
                    border: 1px solid #e3e6ea;
                    background: #fff;
                    cursor: pointer;
                    font-size: 14px;
                    font-weight: 600;
                    transition: background 0.2s;
                }

                .btn-cancel:hover {
                    background: #f3f4f6;
                }

                .btn-submit {
                    padding: 10px 20px;
                    border-radius: 8px;
                    border: none;
                    background: #2563eb;
                    color: #fff;
                    cursor: pointer;
                    font-size: 14px;
                    font-weight: 600;
                    transition: background 0.2s;
                }

                .btn-submit:hover {
                    background: #1d4ed8;
                }

                .no-data {
                    text-align: center;
                    padding: 40px;
                    color: #6b7280;
                }

                /* Delete Confirmation Modal Styles */
                .delete-modal-content {
                    background: #fff;
                    border-radius: 16px;
                    width: 100%;
                    max-width: 400px;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    padding: 32px 24px 24px;
                }

                .delete-icon-wrapper {
                    width: 64px;
                    height: 64px;
                    background: #fee2e2;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 20px;
                }

                .delete-icon-wrapper svg {
                    color: #dc2626;
                    width: 32px;
                    height: 32px;
                }

                .delete-modal-title {
                    font-size: 20px;
                    font-weight: 700;
                    margin: 0 0 12px 0;
                    color: #111827;
                }

                .delete-modal-message {
                    color: #6b7280;
                    font-size: 14px;
                    line-height: 1.5;
                    margin: 0 0 24px 0;
                }

                .delete-modal-message strong {
                    color: #111827;
                    font-weight: 600;
                }

                .delete-modal-buttons {
                    display: flex;
                    gap: 12px;
                    justify-content: center;
                }

                .btn-delete-cancel {
                    flex: 1;
                    padding: 12px 24px;
                    border-radius: 8px;
                    border: 1px solid #e3e6ea;
                    background: #fff;
                    cursor: pointer;
                    font-size: 14px;
                    font-weight: 600;
                    transition: background 0.2s;
                    color: #374151;
                }

                .btn-delete-cancel:hover {
                    background: #f3f4f6;
                }

                .btn-delete-confirm {
                    flex: 1;
                    padding: 12px 24px;
                    border-radius: 8px;
                    border: none;
                    background: #dc2626;
                    color: #fff;
                    cursor: pointer;
                    font-size: 14px;
                    font-weight: 600;
                    transition: background 0.2s;
                }

                .btn-delete-confirm:hover {
                    background: #b91c1c;
                }

                /* Responsive Styles */
                @media (max-width: 1200px) {
                    .search-box {
                        width: 280px;
                    }
                }

                @media (max-width: 1024px) {
                    .header-row {
                        flex-direction: column;
                    }

                    .top-controls {
                        width: 100%;
                    }

                    .search-box {
                        flex: 1;
                        width: auto;
                    }
                }

                @media (max-width: 768px) {
                    .clients-page {
                        padding: 15px;
                    }

                    .page-title {
                        font-size: 18px;
                    }

                    .top-controls {
                        flex-direction: column;
                        align-items: stretch;
                    }

                    .search-box {
                        width: 100%;
                    }

                    .filters-row {
                        width: 100%;
                        justify-content: space-between;
                    }

                    .filter-select {
                        flex: 1;
                        min-width: 0;
                    }

                    .add-btn {
                        justify-content: center;
                    }

                    .card {
                        padding: 12px;
                    }

                    .form-grid {
                        grid-template-columns: 1fr;
                    }

                    .form-group.full-width {
                        grid-column: span 1;
                    }

                    .modal-content {
                        max-height: 95vh;
                    }

                    .modal-header,
                    .modal-body,
                    .modal-footer {
                        padding: 16px;
                    }

                    .pagination-wrapper {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .pagination-right {
                        width: 100%;
                        justify-content: center;
                        flex-wrap: wrap;
                    }

                    .pagination-btn {
                        min-width: 32px;
                        height: 32px;
                        font-size: 13px;
                    }

                    .pagination-btn.nav-btn svg {
                        width: 18px;
                        height: 18px;
                    }

                    .delete-modal-content {
                        margin: 20px;
                    }

                    .delete-modal-buttons {
                        flex-direction: column;
                    }
                }

                @media (max-width: 480px) {
                    .clients-page {
                        padding: 10px;
                    }

                    .filters-row {
                        flex-direction: column;
                    }

                    .filter-select {
                        width: 100%;
                    }

                    .photo-upload {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .modal-footer {
                        flex-direction: column;
                    }

                    .btn-cancel,
                    .btn-submit {
                        width: 100%;
                        justify-content: center;
                    }

                    .pagination-left {
                        flex-wrap: wrap;
                        font-size: 13px;
                    }

                    .pagination-btn {
                        min-width: 30px;
                        height: 30px;
                    }
                }

                .custom-center th {
                    text-align: center;
                    }

                    
            `}</style>

            <div className="clients-page">
                <div className="header-row">
                    <div className="title-block">
                        <h2 className="page-title">Clients Management</h2>
                        <p className="page-subtitle">
                            Manage gym members and their subscriptions
                        </p>
                    </div>

                    <div className="top-controls">
                        <div className="search-box">
                            <HiOutlineMagnifyingGlass size={18} color="#6b7280" />
                            <input
                                className="search-input"
                                placeholder="Search by name, email, or mobile..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className="filters-row">
                            <select
                                className="filter-select"
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                            >
                                <option>All Status</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>

                            <select
                                className="filter-select"
                                value={paymentFilter}
                                onChange={(e) => setPaymentFilter(e.target.value)}
                            >
                                <option>All Payments</option>
                                <option>Paid</option>
                                <option>Pending</option>
                                <option>Overdue</option>
                            </select>

                            <button
                                className="add-btn"
                                onClick={() => {
                                    resetForm();
                                    setIsModalOpen(true);
                                }}
                            >
                                <HiPlus size={18} /> Add Client
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h3 className="card-title">Clients List ({filteredClients.length})</h3>

                    <div className="table-container">
                        <table className="clients-table">
                            <thead >
                                <tr className="custom-center">
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Contact</th>
                                    <th>Status</th>
                                    <th>Trainer</th>
                                    <th>Preferred Time</th>
                                    <th>Payment</th>
                                    <th>Subscription</th>
                                    <th>Attendance</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {paginatedClients.length > 0 ? (
                                    paginatedClients.map((c, i) => (
                                        <tr key={c.id} className="text-center">
                                            <td>{startIndex + i + 1}</td>
                                            <td style={{ minWidth: "200px" }}>
                                                <div className="name-cell">
                                                    <div className="avatar">{c.initials}</div>
                                                    <div className="name-block">
                                                        <div className="client-name">{c.name}</div>
                                                        <div className="location-text">{c.city}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="contact-col">
                                                    <div className="contact-item">
                                                        <HiOutlinePhone className="contact-icon" />
                                                        {c.phone}
                                                    </div>
                                                    <div className="contact-item">
                                                        <HiOutlineEnvelope className="contact-icon" />
                                                        {c.email}
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span
                                                    className={`status-badge ${
                                                        c.status === "Active"
                                                            ? "status-active"
                                                            : "status-inactive"
                                                    }`}
                                                >
                                                    {c.status}
                                                </span>
                                            </td>
                                            <td>{c.trainer}</td>
                                            <td>{c.time}</td>
                                            <td>
                                                <span
                                                    className={`payment-badge ${
                                                        c.payment === "Paid"
                                                            ? "payment-paid"
                                                            : c.payment === "Pending"
                                                            ? "payment-pending"
                                                            : "payment-overdue"
                                                    }`}
                                                >
                                                    {c.payment}
                                                </span>
                                            </td>
                                            <td>
                                                <span className="subscription-text">
                                                    {c.subscription}
                                                </span>
                                            </td>
                                            <td>
                                                <span className="attendance-pill">{c.attendance}</span>
                                            </td>
                                            <td>
                                                <div className="actions-col">
                                                    <HiOutlinePencilSquare
                                                        size={25}
                                                        className="action-icon icon-edit"
                                                        title="Edit"
                                                        onClick={() => handleEdit(c)}
                                                    />
                                                    <HiOutlineTrash
                                                        size={25}
                                                        className="action-icon icon-delete"
                                                        title="Delete"
                                                        onClick={() => handleDeleteClick(c)}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="10" className="no-data">
                                            No clients found matching your criteria
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination - Matching Reference Design */}
                    {filteredClients.length > 0 && (
                        <div className="pagination-wrapper">
                            <div className="pagination-left">
                                <span>Items per page:</span>
                                <select
                                    className="items-per-page-select"
                                    value={itemsPerPage}
                                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                                >
                                    <option value={5}>5</option>
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={50}>50</option>
                                </select>
                                <span className="pagination-info">
                                    {startIndex + 1}-{endIndex} of {filteredClients.length}
                                </span>
                            </div>

                            <div className="pagination-right">
                                {/* First Page Button */}
                                <button
                                    className="pagination-btn nav-btn"
                                    onClick={() => setCurrentPage(1)}
                                    disabled={currentPage === 1}
                                    title="First Page"
                                >
                                    <HiChevronDoubleLeft />
                                </button>

                                {/* Previous Page Button */}
                                <button
                                    className="pagination-btn nav-btn"
                                    onClick={() => setCurrentPage((prev) => prev - 1)}
                                    disabled={currentPage === 1}
                                    title="Previous Page"
                                >
                                    <HiChevronLeft />
                                </button>

                                {/* Page Numbers */}
                                {getPageNumbers().map((page) => (
                                    <button
                                        key={page}
                                        className={`pagination-btn ${
                                            currentPage === page ? "active" : ""
                                        }`}
                                        onClick={() => setCurrentPage(page)}
                                    >
                                        {page}
                                    </button>
                                ))}

                                {/* Next Page Button */}
                                <button
                                    className="pagination-btn nav-btn"
                                    onClick={() => setCurrentPage((prev) => prev + 1)}
                                    disabled={currentPage === totalPages}
                                    title="Next Page"
                                >
                                    <HiChevronRight />
                                </button>

                                {/* Last Page Button */}
                                <button
                                    className="pagination-btn nav-btn"
                                    onClick={() => setCurrentPage(totalPages)}
                                    disabled={currentPage === totalPages}
                                    title="Last Page"
                                >
                                    <HiChevronDoubleRight />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Add/Edit Client Modal */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={handleModalClose}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-header">
                            <h2 className="modal-title">
                                {isEditMode ? "Edit Client" : "Add New Client"}
                            </h2>
                            <button
                                className="modal-close"
                                onClick={handleModalClose}
                            >
                                <HiXMark size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="form-grid">
                                    {/* Photo Upload */}
                                    <div className="form-group full-width">
                                        <label className="form-label">Photo</label>
                                        <div className="photo-upload">
                                            <div className="photo-preview">
                                                {photoPreview ? (
                                                    <img src={photoPreview} alt="Preview" />
                                                ) : (
                                                    <HiOutlineCamera
                                                        size={32}
                                                        className="photo-placeholder"
                                                    />
                                                )}
                                            </div>
                                            <label className="upload-btn">
                                                <HiOutlineCamera size={18} />
                                                Upload Photo
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    className="file-input"
                                                    onChange={handlePhotoChange}
                                                />
                                            </label>
                                        </div>
                                    </div>

                                    {/* Name */}
                                    <div className="form-group">
                                        <label className="form-label">
                                            Name <span className="required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-input"
                                            placeholder="Enter full name"
                                            value={newClient.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    {/* Mobile */}
                                    <div className="form-group">
                                        <label className="form-label">
                                            Mobile <span className="required">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="mobile"
                                            className="form-input"
                                            placeholder="+1 (555) 123-4567"
                                            value={newClient.mobile}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="form-group">
                                        <label className="form-label">
                                            Email <span className="required">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-input"
                                            placeholder="email@example.com"
                                            value={newClient.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    {/* Status */}
                                    <div className="form-group">
                                        <label className="form-label">Status</label>
                                        <select
                                            name="status"
                                            className="form-select"
                                            value={newClient.status}
                                            onChange={handleInputChange}
                                        >
                                            <option value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>
                                        </select>
                                    </div>

                                    {/* Preferred Time */}
                                    <div className="form-group">
                                        <label className="form-label">
                                            Preferred Time <span className="required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="preferredTime"
                                            className="form-input"
                                            placeholder="e.g., 6:00 AM - 8:00 AM"
                                            value={newClient.preferredTime}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    {/* Payment Status */}
                                    <div className="form-group">
                                        <label className="form-label">Payment Status</label>
                                        <select
                                            name="paymentStatus"
                                            className="form-select"
                                            value={newClient.paymentStatus}
                                            onChange={handleInputChange}
                                        >
                                            <option value="Paid">Paid</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Overdue">Overdue</option>
                                        </select>
                                    </div>

                                    {/* Payment Done Date */}
                                    <div className="form-group">
                                        <label className="form-label">Payment Done Date</label>
                                        <input
                                            type="date"
                                            name="paymentDate"
                                            className="form-input"
                                            value={newClient.paymentDate}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    {/* Joining Date & Time */}
                                    <div className="form-group">
                                        <label className="form-label">
                                            Joining Date <span className="required">*</span>
                                        </label>
                                        <input
                                            type="date"
                                            name="joiningDate"
                                            className="form-input"
                                            value={newClient.joiningDate}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    {/* Subscription Period */}
                                    <div className="form-group">
                                        <label className="form-label">Subscription Period</label>
                                        <select
                                            name="subscriptionPeriod"
                                            className="form-select"
                                            value={newClient.subscriptionPeriod}
                                            onChange={handleInputChange}
                                        >
                                            <option value="1 month">1 Month</option>
                                            <option value="3 months">3 Months</option>
                                            <option value="6 months">6 Months</option>
                                            <option value="12 months">12 Months</option>
                                        </select>
                                    </div>

                                    {/* Attendance */}
                                    <div className="form-group">
                                        <label className="form-label">Attendance</label>
                                        <input
                                            type="text"
                                            name="attendance"
                                            className="form-input"
                                            placeholder="e.g., 85%"
                                            value={newClient.attendance}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    {/* ID Proof */}
                                    <div className="form-group">
                                        <label className="form-label">ID Proof</label>
                                        <label className="upload-btn" style={{ width: "fit-content" }}>
                                            Upload ID Proof
                                            <input
                                                type="file"
                                                accept=".pdf,.jpg,.jpeg,.png"
                                                className="file-input"
                                                onChange={handleIdProofChange}
                                            />
                                        </label>
                                        {idProofName && (
                                            <span className="file-name">{idProofName}</span>
                                        )}
                                    </div>

                                    {/* Address */}
                                    <div className="form-group full-width">
                                        <label className="form-label">
                                            Address <span className="required">*</span>
                                        </label>
                                        <textarea
                                            name="address"
                                            className="form-textarea"
                                            placeholder="Enter full address"
                                            value={newClient.address}
                                            onChange={handleInputChange}
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn-cancel"
                                    onClick={handleModalClose}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="btn-submit">
                                    {isEditMode ? "Update Client" : "Add Client"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {isDeleteModalOpen && clientToDelete && (
                <div className="modal-overlay" onClick={cancelDelete}>
                    <div
                        className="delete-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="delete-icon-wrapper">
                            <HiExclamationTriangle />
                        </div>
                        <h2 className="delete-modal-title">Delete Client</h2>
                        <p className="delete-modal-message">
                            Are you sure you want to delete{" "}
                            <strong>{clientToDelete.name}</strong>?
                            <br />
                            This action cannot be undone.
                        </p>
                        <div className="delete-modal-buttons">
                            <button
                                className="btn-delete-cancel"
                                onClick={cancelDelete}
                            >
                                Cancel
                            </button>
                            <button
                                className="btn-delete-confirm"
                                onClick={confirmDelete}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}