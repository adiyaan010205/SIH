import React from 'react';
import './styles.css';
import ResumeAnalysis from './ResumeAnalysis';
import Skills from './Skills';
import Strengths from './Strengths';
import Weaknesses from './Weaknesses';
import RecommendedCourses from './RecommendedCourses';
import GeneratedPlan from './GeneratedPlan';

function score() {
  return (
    <div className="container">
      <ResumeAnalysis />
      <Skills />
      <Strengths />
      <Weaknesses />
      <RecommendedCourses />
      <GeneratedPlan />
    </div>
  );
}

export default score;