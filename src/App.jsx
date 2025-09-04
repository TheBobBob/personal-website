import { Routes, Route, Link } from 'react-router-dom';
import Experience from './Experience';
import Home from './Home';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="bg-green-200 min-h-screen">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-pink-200 p-4 flex items-center z-50">
        {/* Logo as Home Link */}
        <Link to="/">
          <img src={logo} alt="Home" className="h-10 hover:opacity-80 transition" />
        </Link>

        {/* Navigation buttons */}
        <nav className="flex gap-6 ml-auto items-center">
          <Link
            to="/experience"
            className="bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-100"
          >
            Experience
          </Link>
        </nav>
      </header>

      {/* Main Content Routes */}
      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          {/* Placeholder route for Projects */}
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-pink-200 p-4 text-center mt-10">
        <p className="text-black text-sm">
          © 2025 Bhavyahshree Navaneetha Krishnan
        </p>
        <a
          href="mailto:bhavyak7@cs.washington.edu"
          className="text-sm underline"
        >
          Contact
        </a>{' '}
        |{' '}
        <a href="https://google.com" className="text-sm underline">
          Blog
        </a>{' '}
        | <a href="#" className="text-sm underline">Resume
        </a>{' '}
        |  <a href="https://github.com/TheBobBob" className="text-sm underline"> Github 
        </a>
        
      </footer>
    </div>
  );
}

export default App;
