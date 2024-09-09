import React from 'react';

const Skills = () => {
  return (
    <div className="skills">
      <h3>Skills Proficiency</h3>
      <label>Python</label>
      <div className="skill-bar">
        <div className="skill" style={{ width: '30%' }}></div>
      </div>
      <label>Java</label>
      <div className="skill-bar">
        <div className="skill" style={{ width: '40%' }}></div>
      </div>
      <label>C++</label>
      <div className="skill-bar">
        <div className="skill" style={{ width: '50%' }}></div>
      </div>
    </div>
  );
};

export default Skills;