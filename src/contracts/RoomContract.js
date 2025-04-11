export const CONTRACT_ADDRESS = "0xE2b2Be7F5b217e33402763eFE72ec062661984f5"; // địa chỉ contract bạn đã deploy

export const CONTRACT_ABI = [
    [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_location",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_roomLength",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_pricePerHour",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_roomType",
                    "type": "string"
                }
            ],
            "name": "addRoom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "roomId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "startTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "endTime",
                    "type": "uint256"
                }
            ],
            "name": "addRoomBooking",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "roomId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "seatId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "startTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "endTime",
                    "type": "uint256"
                }
            ],
            "name": "addSeatBooking",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_roomId",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "seatId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "row",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "col",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "isReserved",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct Room.Seat[]",
                    "name": "_seats",
                    "type": "tuple[]"
                }
            ],
            "name": "addSeatsToWorkRoom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "roomId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "location",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "roomType",
                    "type": "string"
                }
            ],
            "name": "RoomAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "roomId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "totalSeats",
                    "type": "uint256"
                }
            ],
            "name": "SeatsAdded",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_roomId",
                    "type": "uint256"
                }
            ],
            "name": "checkTypeRoom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "roomId",
                    "type": "uint256"
                }
            ],
            "name": "getRoomBookings",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "startTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "endTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "isCancel",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct Room.BookingTime[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_roomId",
                    "type": "uint256"
                }
            ],
            "name": "getRoomById",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "roomId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "location",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "roomLength",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "pricePerHour",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "roomType",
                            "type": "string"
                        },
                        {
                            "internalType": "bool",
                            "name": "isAvailable",
                            "type": "bool"
                        },
                        {
                            "internalType": "bool",
                            "name": "seatsInitialized",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct Room.RoomInfo",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getRooms",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "roomId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "location",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "roomLength",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "pricePerHour",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "roomType",
                            "type": "string"
                        },
                        {
                            "internalType": "bool",
                            "name": "isAvailable",
                            "type": "bool"
                        },
                        {
                            "internalType": "bool",
                            "name": "seatsInitialized",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct Room.RoomInfo[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "roomId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "seatId",
                    "type": "uint256"
                }
            ],
            "name": "getSeatBookings",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "startTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "endTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "isCancel",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct Room.BookingTime[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_roomId",
                    "type": "uint256"
                }
            ],
            "name": "getSeatsByRoom",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "seatId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "row",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "col",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "isReserved",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct Room.Seat[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "roomBookingTimes",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "startTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "endTime",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "isCancel",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "rooms",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "roomId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "location",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "roomLength",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "pricePerHour",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "roomType",
                    "type": "string"
                },
                {
                    "internalType": "bool",
                    "name": "isAvailable",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "seatsInitialized",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "roomSeats",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "seatId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "row",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "col",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "isReserved",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "seatBookingTimes",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "startTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "endTime",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "isCancel",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
];