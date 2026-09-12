# Dev Stack

## 📌 Project Overview

**Dev Stack** is a responsive React application that helps developers explore frontend, backend, database, and tooling technologies and build their ideal development stack.

Users can browse technologies, view their category, difficulty, rating, and description, then add selected technologies to a personal stack.

## 🛠️ Technologies Used

* React
* TypeScript
* Vite
* CSS
* React-Toastify
* JSON
* Git & GitHub

## ✨ Key Features

### 1. Explore Technologies

Browse technology cards containing the technology icon, category, difficulty level, rating, badge, and description.

### 2. Build Your Stack

Add technologies to **Your Stack**, remove individual technologies, or remove all selected technologies at once.

### 3. Smart Stack Management

A technology cannot be added more than once. Added technologies show a disabled **✓ Added to Stack** button, while React-Toastify provides notifications for adding, duplicate attempts, removing, and clearing the stack.

## 📱 Responsive Design

The website is responsive and adapts to mobile screen sizes with:

* Mobile hamburger navigation
* Responsive Hero section
* Single-column technology cards
* Responsive Your Stack section
* Mobile-friendly footer

## ⚛️ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript or TypeScript. React uses JSX to describe what the user interface should look like.

### 2. What is the difference between State and Props?

**State** is data managed inside a component that can change over time. **Props** are values passed from one component to another, usually from a parent component to a child component.

### 3. What is the useState hook, and how does it work?

`useState` is a React Hook used to create and manage state inside a functional component. It returns the current state value and a function that can update that value.

### 4. How can you share State between components in React?

State can be shared by moving the state to their closest common parent component and passing the required data and functions to child components through props.

### 5. What is conditional rendering in React?

Conditional rendering means displaying different UI elements depending on a condition. React can use techniques such as `if`, the ternary operator, and logical operators to conditionally render components.

### 6. What is the purpose of useEffect in React?

`useEffect` is used to perform side effects in a React component, such as fetching data, setting timers, or interacting with external systems. It runs after the component renders according to its dependency array.

### 7. Why should we not mutate state directly in React?

React relies on state updates to detect changes and re-render the UI. Mutating state directly can prevent React from properly detecting the change and can lead to unexpected behavior. Instead, we should create a new value and update state using the setter function.

## 🚀 Getting Started

### Clone the repository

git clone YOUR_REPOSITORY_URL

### Install dependencies

npm install

### Run the development server

npm run dev

## 📂 Project Structure

* `src/assets` — images and visual assets
* `src/data` — technology data in JSON format
* `src/types` — TypeScript type definitions
* `src/App.tsx` — main application
* `src/App.css` — application styling

## 👩‍💻 Author

**Sayda Sheikh**
