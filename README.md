# Hero IO - Productivity App Marketplace

Hero IO is a sophisticated, high-performance web application designed to showcase a curated ecosystem of productivity tools. Built with a focus on seamless user experience and data visualization, it empowers users to discover, analyze, and manage digital tools that enhance their daily workflows.

**🌐 Live Demo:** [https://adorable-starlight-8c98c8.netlify.app](https://adorable-starlight-8c98c8.netlify.app)  
**📂 GitHub Repository:** [https://github.com/ranak8811/Hero-IO.git](https://github.com/ranak8811/Hero-IO.git)

## 🚀 Key Features

### 🏢 Discovery & Search
*   **Dynamic Showcase:** A responsive home page featuring high-impact hero sections, real-time platform statistics, and trending applications.
*   **Intelligent Filtering:** Live, case-insensitive search functionality across the entire application library with integrated loading states for optimized UX.
*   **Responsive Grid:** Fluid four-column layouts that adapt elegantly from mobile devices to ultra-wide monitors.

### 📊 Data Visualization & Insights
*   **Analytical Ratings:** Interactive bar charts powered by **Recharts**, providing a visual breakdown of user sentiment and review distributions.
*   **Performance Metrics:** Real-time display of download counts, average ratings, and technical specifications for every application.

### 💾 Installation & Management System
*   **Mock Deployment Engine:** A robust "Installation" simulation that persists user choices across sessions using Browser `LocalStorage`.
*   **Inventory Management:** A dedicated dashboard to view installed tools, sort them by popularity (downloads), and manage removals with instant feedback.
*   **Contextual Feedback:** Integrated toast notification system for lifecycle events (Installation, Uninstallation, Errors).

### 🛠 Technical Excellence
*   **Sophisticated Routing:** Implementation of React Router 7 for complex navigation patterns, including dynamic parameters and custom 404 handling.
*   **Component Architecture:** Atomic design principles utilizing functional components and hooks for state and effect management.
*   **Performance Optimization:** Simulated asynchronous operations to demonstrate loading states and ensure UI stability during transitions.

## 💻 Tech Stack

*   **Core:** [React 19](https://react.dev/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
*   **Navigation:** [React Router 7](https://reactrouter.com/)
*   **Visualization:** [Recharts](https://recharts.org/)
*   **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)
*   **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

## ⚙️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ranak8811/Hero-IO.git
    cd hero-io
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run in development mode:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 📐 Project Structure

```text
src/
├── assets/         # Optimized static assets & images
├── components/     # Reusable UI components (Navbar, Footer, AppCard, etc.)
├── data/           # Mock JSON data store
├── pages/          # Layout-level components (Home, AllApps, Details, etc.)
├── routes/         # Centralized routing configuration
└── App.jsx         # Application entry & provider setup
```

## 📝 License
This project was developed as part of **Assignment 03** for Hero IO. All rights reserved.
