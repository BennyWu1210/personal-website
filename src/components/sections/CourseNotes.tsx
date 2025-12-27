import SectionTitle from "../../shared/SectionTitle";
import "./CourseNotes.css";

interface CourseResource {
  name: string;
  url: string;
  type: "notion" | "pdf";
}

interface Course {
  courseName: string;
  resources: CourseResource[];
}

const courses: Course[] = [
  {
    courseName: "CS 136",
    resources: [
      { name: "Course Notes", url: "https://grave-space-21c.notion.site/CS-136-5d2c3a59c9104336ad9ab7de54f7b9ff", type: "notion" },
      { name: "Mock Final Practice", url: "/cs136-mock-final-practice.pdf", type: "pdf" },
      { name: "Mock Final Solutions", url: "/cs136-mock-final-practice-solutions.pdf", type: "pdf" },
    ]
  },
  {
    courseName: "CS 246",
    resources: [
      { name: "Course Notes", url: "https://grave-space-21c.notion.site/CS-246-7a97ec0fce9245798ca922f3404240fa?pvs=4", type: "notion" },
    ]
  },
  {
    courseName: "CS 341",
    resources: [
      { name: "Course Notes", url: "https://grave-space-21c.notion.site/CS-341-26424849764c8026a539c22ebd351286?source=copy_link", type: "notion" },
    ]
  },
  {
    courseName: "CS 350",
    resources: [
      { name: "Course Notes", url: "https://grave-space-21c.notion.site/CS-350-26424849764c8032a2e5cf92ce846f14?source=copy_link", type: "notion" },
    ]
  },
];

const CourseNotes = () => {
  return (
    <div className="course-notes-container" id="course-notes">
      <SectionTitle name="Course Notes" color="white"/>
      <span className="dot" id="course-notes-dot"></span>
      <p className="course-notes-description">If you'd like notes for other CS courses, it is likely I have them as well. Shoot me a DM! </p>
      
      <div className="course-notes-gallery">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <h3 className="course-name">{course.courseName}</h3>
            <div className="course-resources">
              {course.resources.map((resource, resourceIndex) => (
                <a
                  key={resourceIndex}
                  href={resource.url}
                  target="_blank"
                  rel="noreferrer"
                  className="course-resource-link"
                >
                  {resource.name}
                  {resource.type === "notion" && " ↗"}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseNotes;
