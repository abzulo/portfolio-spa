import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  // Load projects from localStorage on first render
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem("projects");
    return savedProjects ? JSON.parse(savedProjects) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");

  // Save projects to localStorage whenever projects change
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  // Add new project
  const addProject = (project) => {
    const newProject = {
      id: Date.now(),
      ...project,
    };

    setProjects([newProject, ...projects]);
  };

  // Search filter
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <ProjectForm addProject={addProject} />

      <ProjectList projects={filteredProjects} />

      <Footer />
    </div>
  );
}

export default App;
