import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home'
import Story from './pages/Story'
import Work from './pages/Work'
import Store from './pages/Store'
import Contact from './pages/Contact'
import LoadingScreen from './components/LoadingScreen'
import './App.css'

function AppRoutes() {
  const location = useLocation();
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(true);
  }, [location]);

  const pageVariants = {
    initial: {
      opacity: 0,
      x: -20
    },
    animate: {
      opacity: 1,
      x: 0
    },
    exit: {
      opacity: 0,
      x: 20
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <>
      {showLoading && <LoadingScreen onLoadingComplete={() => setShowLoading(false)} />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          } />
          <Route path="/story" element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Story />
            </motion.div>
          } />
          <Route path="/work" element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Work />
            </motion.div>
          } />
          <Route path="/store" element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Store />
            </motion.div>
          } />
          <Route path="/contact" element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Contact />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <Router basename={process.env.NODE_ENV === 'production' ? '/ThanStudioNew' : ''} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppRoutes />
    </Router>
  );
}

export default App
