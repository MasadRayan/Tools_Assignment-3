# KhanaPina 🍽️

> **Live Demo:** [KhanaPina Live Site](https://astounding-crisp-19ae15.netlify.app/)

KhanaPina is a responsive web application for food lovers, featuring a curated menu, dynamic dish details, user authentication, and contact support. Explore exclusive recipes, save favorites, and enjoy a seamless culinary experience.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, Tailwind CSS 4, DaisyUI, Lucide React, React Icons, Framer Motion, Swiper
- **Backend / API:** Firebase Authentication, Axios for API requests
- **Animations & Effects:** AOS, Framer Motion, React Fast Marquee
- **Utilities:** React Router v7, React Hot Toast

---

## 📦 Project Pages

1. **Homepage**
   - Hero section with CTA buttons
   - Signature dishes carousel
   - Featured sections and animations

2. **AllDishesPage**
   - Displays all dishes fetched dynamically from API
   - Responsive grid layout with hover effects
   - Dish cards showing image, category, rating, and price

3. **DishDetailsPage**
   - Dynamic route for individual dishes
   - Full dish description, price, and images
   - API-driven data rendering

4. **Login / Register Pages**
   - User authentication with email/password and Google login
   - Responsive forms with validation
   - Smooth animations using Framer Motion

5. **Contact Page**
   - Contact form for inquiries
   - Styled inputs with responsive design

---

## ⚡ Features

- Fully responsive design for mobile, tablet, and desktop
- Firebase Authentication integration
- Dynamic dish data rendering
- Hero section with background overlay and animated text
- Dish cards with rating, price, and category
- Smooth animations with Framer Motion and AOS
- Google & Email authentication
- Seamless routing using React Router v7

---

## 📁 Folder Structure

```text
src/
├─ Components/
│  ├─ Navbar.jsx
│  ├─ Hero.jsx
│  ├─ SignatureDishes.jsx
│  └─ ...other reusable components
├─ Pages/
│  ├─ HomePage.jsx
│  ├─ AllDishesPage.jsx
│  ├─ DishDetailsPage.jsx
│  ├─ Login.jsx
│  ├─ Register.jsx
│  └─ Contact.jsx
├─ Hooks/
│  └─ useAuth.js
├─ Context/
│  └─ AuthProvider.jsx
├─ firebase.init.js
└─ App.jsx
