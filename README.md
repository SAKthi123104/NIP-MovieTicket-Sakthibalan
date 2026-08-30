# NIP-MovieTicket-Sakthibalan

# 🎬 Movie Ticket Booking System

A modern and user-friendly **Movie Ticket Booking Web Application** that allows users to browse movies, select shows, choose the number of tickets, check seat availability, calculate the total cost, and confirm their booking.

## 🚀 Project Overview

The **Movie Ticket Booking System** is designed to provide a smooth and interactive online movie booking experience.

Users can follow a simple booking workflow:

**Home → Movie Details → Show Selection → Ticket Count → Availability → Total Cost → Confirm Booking → Ticket Details**

The application focuses on a clean, modern, and high-tech user interface while keeping the booking process simple and easy to understand.

---

## ✨ Features

- 🎥 Browse available movies
- 📋 View detailed movie information
- 🕐 Select available show timings
- 🎟️ Select number of tickets
- 💺 Check ticket/seat availability
- 💰 Automatically calculate total ticket cost
- ✅ Confirm booking
- 🧾 Generate booking/ticket details
- 📱 Responsive and modern UI
- ⚡ Smooth navigation between booking steps
- 🎨 High-tech movie-themed design

---

## 🔄 Booking Flow

```text
                 ┌──────────────┐
                 │     Home     │
                 └──────┬───────┘
                        ↓
              ┌──────────────────┐
              │  Movie Details   │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │  Show Selection  │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │   Ticket Count   │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │    Availability  │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │   Total Cost     │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │ Confirm Booking  │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │  Ticket Details  │
              └──────────────────┘
```

---

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript
- Responsive Web Design

### Backend
- Python
- Flask

### Development Tools
- Visual Studio Code
- Git
- GitHub

---

## 📂 Project Structure

```text
movie-ticket-booking/
│
├── static/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── script.js
│   │
│   └── images/
│       └── movie-images/
│
├── templates/
│   ├── index.html
│   ├── movie-details.html
│   ├── booking.html
│   └── ticket.html
│
├── app.py
├── requirements.txt
└── README.md


```

---

## ⚙️ How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/movie-ticket-booking.git
```

### 2. Open the Project

```bash
cd movie-ticket-booking
```

### 3. Install Required Packages

```bash
pip install -r requirements.txt
```

### 4. Run the Flask Application

```bash
python app.py
```

### 5. Open in Browser

```text
http://127.0.0.1:5000
```

---

## 💳 Ticket Price Calculation

The total ticket cost is calculated automatically based on the selected number of tickets.

```text
Total Cost = Number of Tickets × Ticket Price
```

### Example

```text
Ticket Price : ₹200
Tickets      : 3

Total Cost   : ₹600
```

---

## 🎟️ Booking Details

After successful booking, the system displays the ticket information such as:

- Movie Name
- Show Date
- Show Time
- Number of Tickets
- Ticket Price
- Total Amount
- Booking ID
- Booking Status

---

## 🎨 UI Design

The application uses a modern movie-themed interface with:

- Dark cinematic theme
- Movie posters
- Modern cards
- Smooth transitions
- Interactive buttons
- Responsive layout
- Clean typography
- High-tech visual elements

---

## 🔐 Future Enhancements

The project can be further enhanced with:

- 👤 User Login & Registration
- 💳 Online Payment Integration
- 💺 Real-time Seat Selection
- 🗄️ Database Integration
- 📧 Email Ticket Confirmation
- 📱 Mobile Application
- 🔔 Booking Notifications
- 🎫 QR Code Ticket Generation
- 📊 Admin Dashboard
- 🎬 Movie Search and Filtering

---

## 🎯 Project Objective

The main objective of this project is to develop a simple, efficient, and visually appealing **online movie ticket booking system** that reduces the complexity of traditional ticket booking and provides users with a smooth digital booking experience.

---

## 👨‍💻 Project Type

**Academic / College Project**

### Domain

**Web Development + Entertainment**

---

## 📌 Conclusion

The **Movie Ticket Booking System** provides a convenient way for users to browse movies, select shows, choose tickets, check availability, calculate the total price, and receive their booking details.

The project demonstrates the practical implementation of **frontend development, backend integration, user interaction, and booking workflow management** in a modern web application.

---

## ⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub!
