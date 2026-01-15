import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';

function App() {
  // Pre-filled sample projects
  const [projects, setProjects] = useState([
    {
      title: 'Creative Agency Website',
      description: 'A modern responsive site built for a creative agency.',
      image: 'https://via.placeholder.com/400x250?text=Creative+Agency',
    },
    {
      title: 'Portfolio Redesign',
      description: 'Redesigned a personal portfolio with React and CSS Grid.',
      image: 'https://via.placeholder.com/400x250?text=Portfolio+Redesign',
    },
    {
      title: 'E-commerce App',
      description: 'A full-stack e-commerce app using React and Node.js.',
      image: 'https://via.placeholder.com/400x250?text=E-commerce+App',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const addProject = (project) => {
    // Add a placeholder image if none is provided

