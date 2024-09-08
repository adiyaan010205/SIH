import React, { useState } from "react";
import "./App.css";
import courses from "./data/courses"; // Import the courses data
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Overview from './components/overview';
import Score from './components/score';
import CourseCareer from './components/carrer';

// Tab component
function Tabs({ activeTab, setActiveTab }) {
  const tabs = ["Recommended", "Trending", "New", "Skill Gap"];

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={activeTab === tab ? "active" : ""}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

// CourseCard component
function CourseCard({ course }) {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} />
      <h3>{course.title}</h3>
      <p>{course.description}</p>
    </div>
  );
}

// CoursePage component
function CoursePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("Recommended");

  const filteredCourses = courses
    .filter((course) => course.category === activeTab)
    .filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="course-page">
      <h1>Find Courses</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Tabs */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Course Cards */}
      <div className="course-list">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p>No courses found for your search.</p>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/score" element={<Score />} />
            <Route path="/course-career" element={<CourseCareer />} />
            <Route path="/courses" element={<CoursePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
