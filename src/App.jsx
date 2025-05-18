import { useState } from 'react'
import Hero from './components/Hero'
import './App.css'
import Navbar from './components/Navbar'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import ThemeToggle from './components/ThemeToggle'
import AIChatWidget from './components/AIChatWidget'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <AIChatWidget />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </div>
  )
}

export default App
