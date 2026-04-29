import React from 'react';

function Experience() {
  const experiences = [
    {
      year: 'June 2025 - Current',
      title: 'Undergraduate Researcher',
      org: 'UW Department of Genome Sciences',
      projects: [
        'Training Casanovo (de novo peptide sequencer with timsTOF data)',
        'Integrating DIA functionality into Casanovo',
      ],
      skills: [
        'Research documentation + Deep learning',
        'Mass spectrometry',
      ],
    },
    {
      year: 'May 2024 - January 2026',
      title: 'Assistant Researcher',
      org: 'UW Department of Bioengineering',
      projects: [
        'Created RAG chatbot using Biomodels to aid biological researchers',
        'Created a comprehensive pipeline to analyze research papers, made large repositories of information used to fine-tune LLMs in the lab',
        'Implemented AI models using scikit-learn, PyTorch, Keras to predict future concentrations of species',
        'Created AI models to recover biological networks from time series data',
      ],
      skills: [
        'PyTorch + TensorFlow + Keras + Scikit-Learn',
        'JavaScript',
        'Streamlit',
      ],
      publications: [
        'https://arxiv.org/abs/2601.22684',
      ],
    },
    {
      year: 'September 2024 - August 2025',
      title: 'Kinetic Modeling Subteam Member',
      org: 'UW iGEM',
      projects: [
        'Developed Model Predictive Control (MPC) algorithms to model large scale bioreactors',
        'Cleaned and collected data using Microsoft Power Automate',
      ],
      skills: [
        'Microsoft Suite',
        'do-mpc (Python)',
        'Differential Equations',
        'Data Visualization/Analysis/Management',
      ],
    },
    {
      year: 'May 2024 - October 2024',
      title: 'Research Assistant',
      org: 'Harvard Medical School',
      projects: [
        'Created automated data analysis (RNAseq and proteomics) software using R',
        'Conducted literature reviews for papers on neuroscience',
        'Developed visualizations for scRNAseq data + performed preprocessing and quality control',
      ],
      skills: [
        'R + RStudio + RShiny',
        'Flask',
        'HTML',
        'Software Development Cycles (CI/CD)',
      ],
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-10 text-center">Experience</h1>

      <div className="relative border-l-4 border-pink-300 ml-4">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 ml-8 relative">
            {/* Dot on the timeline */}
            <div className="absolute -left-4 top-1 w-6 h-6 bg-pink-400 rounded-full border-4 border-white z-10" />

            <p className="text-sm text-gray-500">{exp.year}</p>
            <h2 className="text-xl font-semibold">{exp.title}</h2>
            <h3 className="text-md italic text-gray-700">{exp.org}</h3>

            {/* Projects */}
            <div className="mt-2">
              <h4 className="font-semibold text-gray-800">Projects:</h4>
              <ul className="list-disc list-inside text-base text-gray-800">
                {exp.projects.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="mt-2">
              <h4 className="font-semibold text-gray-800">Skills:</h4>
              <ul className="list-disc list-inside text-base text-gray-800">
                {exp.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>

            {/* Publications (only render if exists) */}
            {exp.publications && (
              <div className="mt-2">
                <h4 className="font-semibold text-gray-800">Publications:</h4>
                <ul className="list-disc list-inside text-base text-blue-600">
                  {exp.publications.map((pub, idx) => (
                    <li key={idx}>
                      <a href={pub} target="_blank" rel="noopener noreferrer">
                        {pub}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
