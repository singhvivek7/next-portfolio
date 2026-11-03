'use client';

export function EducationSection() {
  return (
    <section className="education wrap" id="education">
      <div className="head reveal">
        <div className="kicker">
          <b>07</b> Education
        </div>
        <div className="count">Learning is ongoing</div>
      </div>

      <div className="education-list reveal">
        <div>
          <h3>Indira Gandhi National Open University</h3>
          <p>Master of Computer Applications (MCA) · New Delhi</p>
          <span>JAN 2025 — PRESENT</span>
        </div>
        <div>
          <h3>Newton School</h3>
          <p>Full Stack Web Development · Bengaluru</p>
          <span>AUG 2022 — AUG 2023</span>
        </div>
        <div>
          <h3>Nalanda Open University</h3>
          <p>Bachelor&apos;s Degree · Bihar</p>
          <span>JUL 2018 — JUN 2021</span>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;

