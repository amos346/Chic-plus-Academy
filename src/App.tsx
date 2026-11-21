/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Scissors, 
  BookOpen, 
  Users, 
  Award, 
  ChevronRight, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  X, 
  Menu, 
  ArrowRight,
  Clock,
  Check,
  MessageCircle
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'female' | 'male' | 'children' | 'special'>('all');
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  // Form states
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: 'Complete Professional Fashion Masterclass',
    experience: 'Beginner',
    statement: ''
  });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplicationSubmitted(true);
    setTimeout(() => {
      setApplicationSubmitted(false);
      setApplyModalOpen(false);
      alert('Thank you for applying to Chic-Plus Unisex Fashion School! Our Admissions Team will contact you shortly via phone and email.');
    }, 1500);
  };

  const programs = [
    {
      id: 'female',
      title: 'Female Wear Masterclass',
      category: 'female',
      duration: '3 Months',
      fee: '₦150,000',
      level: 'Practical Certificate',
      description: 'Master the art of cutting and sewing stunning native and English female wear, including Ankara styles, blouses, skirts, boubou, corsets, and custom gowns.',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-20_at_5.06.27_PM_c010a03c.jpeg',
      highlights: ['Ankara Styles & Native Wears', 'Corset & Gown Construction', 'Perfect Body Measurement & Fitting']
    },
    {
      id: 'male',
      title: 'Male Wear Masterclass',
      category: 'male',
      duration: '3 Months',
      fee: '₦150,000',
      level: 'Practical Certificate',
      description: 'Learn professional tailoring for men, covering Senator wear, Agbada design and embroidery arrangement, Kaftan, native trousers, and well-fitted corporate shirts.',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-20_at_5.06.28_PM__1__921e30ed.jpeg',
      highlights: ['Senator Wear & Kaftan', 'Agbada Construction & Agbada Styling', 'Corporate Shirts & Trousers']
    },
    {
      id: 'children',
      title: 'Children Wear & Accessories',
      category: 'children',
      duration: '2 Months',
      fee: '₦100,000',
      level: 'Certificate Course',
      description: 'Specialize in adorable and durable children clothing. Learn pattern cutting and sewing for boys and girls party wear, school uniforms, and casual outfits.',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-20_at_5.06.27_PM__1__ca5f5901.jpeg',
      highlights: ['Boys & Girls Party Dresses', 'School Uniforms & Playwear', 'Quick Production Techniques']
    },
    {
      id: 'special',
      title: 'Special Craft & Accessories',
      category: 'special',
      duration: '1 Month',
      fee: '₦80,000',
      level: 'Skill Enhancement',
      description: 'Add extra profit streams to your fashion business with professional Gele tying, fascinator and hat making, handbag crafting, and basic beadwork.',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-20_at_5.06.28_PM_a25497a6.jpeg',
      highlights: ['Professional Gele Tying', 'Hat & Fascinator Making', 'Handbag & Bead Crafting']
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A] font-sans antialiased selection:bg-[#1A1A1A] selection:text-white relative">
      {/* TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E5E5E0]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-[#1A1A1A]">CHIC-PLUS</span>
            <span className="text-[10px] tracking-widest text-[#666660] font-semibold uppercase">Unisex Fashion School</span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#4A4A45]">
            <a href="#about" className="hover:text-[#1A1A1A] transition-colors whitespace-nowrap shrink-0">Academy</a>
            <a href="#programs" className="hover:text-[#1A1A1A] transition-colors whitespace-nowrap shrink-0">Training Programs</a>
            <a href="#practical" className="hover:text-[#1A1A1A] transition-colors whitespace-nowrap shrink-0">Practical Training</a>
            <a href="#admissions" className="hover:text-[#1A1A1A] transition-colors whitespace-nowrap shrink-0">Admissions</a>
            <a href="#contact" className="hover:text-[#1A1A1A] transition-colors whitespace-nowrap shrink-0">Contact</a>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/2348031234567?text=Hello%20Chic-Plus%20Fashion%20School,%20I%20want%20to%20inquire%20about%20admission%20and%20training%20courses."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#20ba5a] transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" /> WhatsApp Chat
            </a>
            <button 
              onClick={() => setApplyModalOpen(true)}
              className="px-5 py-2.5 bg-[#1A1A1A] text-white text-xs font-semibold uppercase tracking-wider rounded-none hover:bg-[#333330] transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              Apply Now
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1A1A1A]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-[#E5E5E0] shadow-lg py-6 px-6 flex flex-col gap-4">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2 border-b border-[#F0F0EE]">Academy</a>
            <a href="#programs" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2 border-b border-[#F0F0EE]">Training Programs</a>
            <a href="#practical" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2 border-b border-[#F0F0EE]">Practical Training</a>
            <a href="#admissions" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2 border-b border-[#F0F0EE]">Admissions</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2">Contact</a>
            <a 
              href="https://wa.me/2348031234567?text=Hello%20Chic-Plus%20Fashion%20School,%20I%20want%20to%20inquire%20about%20admission%20and%20training%20courses."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white text-sm font-semibold rounded mt-2"
            >
              <MessageCircle className="w-5 h-5 fill-white" /> Chat on WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION WITH INCREASED EXPOSURE / BRIGHTER BACKGROUND */}
      <section className="relative bg-[#1A1A1A] text-white overflow-hidden py-28 lg:py-40">
        <div className="absolute inset-0 opacity-70 brightness-125 contrast-105">
          <img 
            src="/assets/aistudio/WhatsApp_Image_2026-11-20_at_5.06.29_PM__3__a9a8ca8e.jpeg" 
            alt="Chic-Plus Fashion Academy Studio" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-xs font-medium tracking-wider uppercase text-amber-300 w-fit">
              <GraduationCap className="w-4 h-4" /> Nigeria's Premier Fashion Training Academy
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Begin Your Fashion Journey With Us.
            </h1>
            <p className="text-lg sm:text-xl text-[#E5E5E0] max-w-2xl font-light leading-relaxed">
              At Chic-Plus, we believe that mastering fashion requires hands-on practical sewing, perfect measurement techniques, and expert mentorship. Learn female wear, male wear, children wear, and more in our fully equipped fashion studios.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button 
                onClick={() => setApplyModalOpen(true)}
                className="px-8 py-4 bg-white text-[#1A1A1A] font-bold text-xs uppercase tracking-widest hover:bg-[#E5E5E0] transition-all flex items-center gap-2 shadow-lg"
              >
                Apply For Admission <ArrowRight className="w-4 h-4" />
              </button>
              <a 
                href="https://wa.me/2348031234567?text=Hello%20Chic-Plus%20Fashion%20School,%20I%20want%20to%20inquire%20about%20admission%20and%20training%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#25D366] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#20ba5a] transition-all flex items-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-white" /> WhatsApp Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* KEY STATS STRIP */}
      <section className="bg-white border-b border-[#E5E5E0] py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col gap-1 border-r border-[#E5E5E0] last:border-none">
            <span className="text-3xl lg:text-4xl font-extrabold text-[#1A1A1A] tabular-nums">100%</span>
            <span className="text-xs uppercase tracking-wider text-[#666660]">Practical Hands-On Training</span>
          </div>
          <div className="flex flex-col gap-1 border-r border-[#E5E5E0] last:border-none">
            <span className="text-3xl lg:text-4xl font-extrabold text-[#1A1A1A] tabular-nums">1,500+</span>
            <span className="text-xs uppercase tracking-wider text-[#666660]">Successful Nigerian Graduates</span>
          </div>
          <div className="flex flex-col gap-1 border-r border-[#E5E5E0] last:border-none">
            <span className="text-3xl lg:text-4xl font-extrabold text-[#1A1A1A] tabular-nums">Flexible</span>
            <span className="text-xs uppercase tracking-wider text-[#666660]">Weekday & Weekend Classes</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl lg:text-4xl font-extrabold text-[#1A1A1A] tabular-nums">Affordable</span>
            <span className="text-xs uppercase tracking-wider text-[#666660]">Naira Tuition Plans</span>
          </div>
        </div>
      </section>

      {/* ABOUT / PHILOSOPHY SECTION */}
      <section id="about" className="py-24 lg:py-32 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-amber-700">Our Academy Philosophy</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Learn, Create and Grow With Chic-Plus.
            </h2>
            <p className="text-[#555550] leading-relaxed">
              At Chic-Plus, our Fashion Academy is dedicated to empowering Nigerians with professional tailoring skills that command respect and financial independence. From mastering native Ankara styles and senator wears to perfect corporate fittings, our training is 90% practical.
            </p>
            <p className="text-[#555550] leading-relaxed">
              We provide professional industrial sewing machines, drafting tables, and dedicated instructors who guide you stitch by stitch until you become a confident professional fashion designer.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 bg-white border border-[#E5E5E0]">
                <Scissors className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm">Step-by-Step Cutting</h4>
                  <p className="text-xs text-[#666660] mt-1">Learn accurate measurement and direct fabric cutting without fear.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white border border-[#E5E5E0]">
                <Award className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm">Business Setup Guidance</h4>
                  <p className="text-xs text-[#666660] mt-1">Guidance on pricing your sewing, managing clients, and starting your fashion brand.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] bg-[#E5E5E0] overflow-hidden shadow-2xl">
              <img 
                src="/assets/aistudio/WhatsApp_Image_2026-11-20_at_5.06.29_PM__2__6b77db47.jpeg" 
                alt="Chic-Plus Sewing Studio in Nigeria" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-[#1A1A1A] text-white p-8 max-w-xs hidden sm:block shadow-2xl">
              <p className="text-sm italic font-light leading-relaxed">
                "Our Training Programs are designed to take you from a complete beginner to a sought-after professional tailor in Nigeria."
              </p>
              <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-amber-400">
                — Chic-Plus Academy Board
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING PROGRAMS & COURSE PRICING (NAIRA) */}
      <section id="programs" className="py-24 bg-white border-t border-b border-[#E5E5E0]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-700">Course Fees & Curriculums</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Our Training Programs & Prices</h2>
              <p className="text-[#666660] max-w-xl">
                Choose your desired course track. All fees are in Nigerian Naira (₦) with flexible installment payment options available.
              </p>
            </div>
            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#FAFAF8] border border-[#E5E5E0]">
              <button 
                onClick={() => setActiveTab('all')} 
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${activeTab === 'all' ? 'bg-[#1A1A1A] text-white' : 'text-[#666660] hover:text-[#1A1A1A]'}`}
              >
                All Courses
              </button>
              <button 
                onClick={() => setActiveTab('female')} 
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${activeTab === 'female' ? 'bg-[#1A1A1A] text-white' : 'text-[#666660] hover:text-[#1A1A1A]'}`}
              >
                Female Wear
              </button>
              <button 
                onClick={() => setActiveTab('male')} 
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${activeTab === 'male' ? 'bg-[#1A1A1A] text-white' : 'text-[#666660] hover:text-[#1A1A1A]'}`}
              >
                Male Wear
              </button>
              <button 
                onClick={() => setActiveTab('children')} 
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${activeTab === 'children' ? 'bg-[#1A1A1A] text-white' : 'text-[#666660] hover:text-[#1A1A1A]'}`}
              >
                Children Wear
              </button>
              <button 
                onClick={() => setActiveTab('special')} 
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${activeTab === 'special' ? 'bg-[#1A1A1A] text-white' : 'text-[#666660] hover:text-[#1A1A1A]'}`}
              >
                Other Skills
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {programs
              .filter(p => activeTab === 'all' || p.category === activeTab)
              .map((prog) => (
                <div key={prog.id} className="bg-[#FAFAF8] border border-[#E5E5E0] flex flex-col justify-between overflow-hidden group hover:border-[#1A1A1A] transition-all">
                  <div className="aspect-[16/9] overflow-hidden bg-[#E5E5E0] relative">
                    <img 
                      src={prog.image} 
                      alt={prog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A]">
                      {prog.level}
                    </div>
                    <div className="absolute top-4 right-4 bg-[#1A1A1A] text-amber-300 px-4 py-1.5 text-sm font-extrabold shadow-lg tabular-nums">
                      {prog.fee}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col gap-6 flex-1 justify-between">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between text-xs text-[#666660]">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Duration: {prog.duration}</span>
                        <span className="uppercase tracking-wider font-semibold text-amber-700">100% Practical</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#1A1A1A]">{prog.title}</h3>
                      <p className="text-sm text-[#555550] leading-relaxed">{prog.description}</p>
                      <div className="flex flex-col gap-2 pt-2 border-t border-[#E5E5E0]">
                        {prog.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#4A4A45]">
                            <Check className="w-3.5 h-3.5 text-amber-700" /> {h}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3 pt-4 border-t border-[#E5E5E0]">
                      <button 
                        onClick={() => {
                          setSelectedProgram(prog.title);
                          setApplyModalOpen(true);
                        }}
                        className="flex-1 py-3 bg-[#1A1A1A] text-white text-xs font-semibold uppercase tracking-widest hover:bg-[#333330] transition-colors flex items-center justify-center gap-2"
                      >
                        Enroll Now <ChevronRight className="w-4 h-4" />
                      </button>
                      <a 
                        href={`https://wa.me/2348031234567?text=Hello%20Chic-Plus,%20I%20want%20to%20inquire%20about%20the%20${encodeURIComponent(prog.title)}%20costing%20${prog.fee}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#20ba5a] transition-colors flex items-center justify-center gap-1.5"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" /> Inquire
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* PRACTICAL TRAINING & WORKSHOP GALLERY (USING ALL UPLOADED USER PHOTOS) */}
      <section id="practical" className="py-24 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-700">Hands-On Learning</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Practical Training & Studio Gallery</h2>
              <p className="text-[#666660] max-w-xl">
                Take a look inside our vibrant training sessions in Nigeria where students cut fabrics, sketch designs, and operate industrial sewing machines under expert mentorship.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-[#E5E5E0] overflow-hidden group">
              <div className="aspect-[4/3] bg-[#E5E5E0] overflow-hidden">
                <img 
                  src="/assets/aistudio/WhatsApp_Image_2026-11-20_at_5.06.29_PM__1__eb974780.jpeg" 
                  alt="Pattern Drafting Session" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex flex-col gap-2">
                <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Pattern Drafting</div>
                <h4 className="font-bold text-base text-[#1A1A1A]">Detailed Sketching & Layout Class</h4>
                <p className="text-xs text-[#555550]">Students learning professional design illustration and body measurements.</p>
              </div>
            </div>

            <div className="bg-white border border-[#E5E5E0] overflow-hidden group">
              <div className="aspect-[4/3] bg-[#E5E5E0] overflow-hidden">
                <img 
                  src="/assets/aistudio/WhatsApp_Image_2026-11-20_at_5.06.29_PM_2bed925e.jpeg" 
                  alt="Sewing Practice" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex flex-col gap-2">
                <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Machine Operations</div>
                <h4 className="font-bold text-base text-[#1A1A1A]">Industrial Sewing Lab</h4>
                <p className="text-xs text-[#555550]">Hands-on stitching practice on professional motorized sewing machines.</p>
              </div>
            </div>

            <div className="bg-white border border-[#E5E5E0] overflow-hidden group">
              <div className="aspect-[4/3] bg-[#E5E5E0] overflow-hidden">
                <img 
                  src="/assets/aistudio/WhatsApp_Image_2026-11-20_at_5.06.28_PM__2__8ede4310.jpeg" 
                  alt="Design Class" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex flex-col gap-2">
                <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Design Principles</div>
                <h4 className="font-bold text-base text-[#1A1A1A]">Fashion Illustration Mastery</h4>
                <p className="text-xs text-[#555550]">Step-by-step sketching of silhouettes and dress structures.</p>
              </div>
            </div>

            <div className="bg-white border border-[#E5E5E0] overflow-hidden group">
              <div className="aspect-[4/3] bg-[#E5E5E0] overflow-hidden">
                <img 
                  src="/assets/aistudio/WhatsApp_Image_2026-11-20_at_5.06.27_PM__2__930fee8e.jpeg" 
                  alt="Tailoring Mentorship" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex flex-col gap-2">
                <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Expert Guidance</div>
                <h4 className="font-bold text-base text-[#1A1A1A]">Master Instructor Demonstration</h4>
                <p className="text-xs text-[#555550]">Instructors guiding students through complex garment construction.</p>
              </div>
            </div>

            <div className="bg-white border border-[#E5E5E0] overflow-hidden group">
              <div className="aspect-[4/3] bg-[#E5E5E0] overflow-hidden">
                <img 
                  src="/assets/aistudio/WhatsApp_Image_2026-11-20_at_5.06.27_PM__1__ca5f5901.jpeg" 
                  alt="Student Workshop" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex flex-col gap-2">
                <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Drafting Class</div>
                <h4 className="font-bold text-base text-[#1A1A1A]">Pattern Making & Fabric Layout</h4>
                <p className="text-xs text-[#555550]">Students collaborating and drafting precise patterns on large tables.</p>
              </div>
            </div>

            <div className="bg-white border border-[#E5E5E0] overflow-hidden group">
              <div className="aspect-[4/3] bg-[#E5E5E0] overflow-hidden">
                <img 
                  src="/assets/aistudio/WhatsApp_Image_2026-11-20_at_5.06.28_PM_a25497a6.jpeg" 
                  alt="Studio Workspace" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex flex-col gap-2">
                <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Creative Studio</div>
                <h4 className="font-bold text-base text-[#1A1A1A]">Mannequin & Draping Setup</h4>
                <p className="text-xs text-[#555550]">Professional studio setup designed for optimum learning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSIONS & NIGERIAN STUDENT TESTIMONIALS */}
      <section id="admissions" className="py-24 bg-white border-t border-b border-[#E5E5E0]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-700">Join Our Community</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Enroll For The Upcoming Cohort in Nigeria
            </h2>
            <p className="text-[#555550] leading-relaxed">
              At Chic-Plus, we welcome beginners and aspiring fashion entrepreneurs across Nigeria. Whether you are in Lagos, Abuja, Port Harcourt, Ibadan, or any state, our physical training academy provides the exact skill set you need to succeed.
            </p>
            <div className="flex flex-col gap-4 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0" />
                <span className="text-sm font-medium">Weekday & Weekend morning/evening lecture slots available</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0" />
                <span className="text-sm font-medium">Flexible installment payment in Naira (₦)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0" />
                <span className="text-sm font-medium">Certificate awarded upon successful completion and practical project</span>
              </div>
            </div>
            <div className="pt-4 flex flex-wrap gap-4">
              <button 
                onClick={() => setApplyModalOpen(true)}
                className="px-8 py-4 bg-[#1A1A1A] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#333330] transition-colors inline-flex items-center gap-2"
              >
                Apply For Admission <ArrowRight className="w-4 h-4" />
              </button>
              <a 
                href="https://wa.me/2348031234567?text=Hello%20Chic-Plus,%20I%20want%20to%20chat%20with%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#25D366] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#20ba5a] transition-colors inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" /> Chat via WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#FAFAF8] border border-[#E5E5E0] p-8 lg:p-12 flex flex-col gap-6">
            <h3 className="text-xl font-bold border-b border-[#E5E5E0] pb-4">What Our Nigerian Graduates Say</h3>
            <div className="flex flex-col gap-6">
              <div className="p-4 bg-white border border-[#E5E5E0] flex flex-col gap-2">
                <p className="text-xs text-[#555550] italic">"Before coming to Chic-Plus, I struggled with cutting female blouses and Senator wears. Within 3 months of practical training, I now sew for clients all over my street and make good money!"</p>
                <span className="text-[11px] font-bold text-[#1A1A1A]">— Amina B., Lagos Graduate</span>
              </div>
              <div className="p-4 bg-white border border-[#E5E5E0] flex flex-col gap-2">
                <p className="text-xs text-[#555550] italic">"The instructors are very patient and practical. The tuition fee is very affordable compared to the massive sewing skills I gained. Highly recommended!"</p>
                <span className="text-[11px] font-bold text-[#1A1A1A]">— Chinedu O., Abuja Graduate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & LOCATION SECTION */}
      <section id="contact" className="py-24 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-700">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Visit Our Academy in Nigeria</h2>
            <p className="text-[#555550] leading-relaxed">
              Have questions about course fees, registration, or class timetables? Reach out to our admissions desk or chat instantly via WhatsApp.
            </p>
            <div className="flex flex-col gap-4 pt-4">
              <div className="flex items-center gap-4 text-sm text-[#4A4A45]">
                <MapPin className="w-5 h-5 text-amber-700 shrink-0" />
                <span>Chic-Plus Fashion Training Academy, Ikeja & Lekki Centers, Nigeria</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-[#4A4A45]">
                <Mail className="w-5 h-5 text-amber-700 shrink-0" />
                <span>admissions@chicplusfashionschool.ng</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-[#4A4A45]">
                <Phone className="w-5 h-5 text-amber-700 shrink-0" />
                <span>+234 803 123 4567, +234 809 987 6543</span>
              </div>
            </div>
            <div className="pt-2">
              <a 
                href="https://wa.me/2348031234567?text=Hello%20Chic-Plus%20Admissions,%20I%20have%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-[#20ba5a] transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" /> Open WhatsApp Direct Chat
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white border border-[#E5E5E0] p-8 lg:p-12">
            <form onSubmit={(e) => { e.preventDefault(); alert('Inquiry sent successfully! Our Admissions Office will call you shortly.'); }} className="flex flex-col gap-4">
              <h3 className="text-lg font-bold mb-2">Send an Inquiry or Call Request</h3>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#666660] mb-1">Your Full Name</label>
                <input type="text" required className="w-full bg-[#FAFAF8] border border-[#E5E5E0] px-4 py-3 text-sm focus:outline-none focus:border-[#1A1A1A]" placeholder="Folashade Adeleke" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#666660] mb-1">Phone Number / WhatsApp</label>
                <input type="tel" required className="w-full bg-[#FAFAF8] border border-[#E5E5E0] px-4 py-3 text-sm focus:outline-none focus:border-[#1A1A1A]" placeholder="08031234567" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#666660] mb-1">Your Message or Course Interest</label>
                <textarea required rows={4} className="w-full bg-[#FAFAF8] border border-[#E5E5E0] px-4 py-3 text-sm focus:outline-none focus:border-[#1A1A1A]" placeholder="I want to know more about the Female Wear Masterclass fee and weekend timetable..."></textarea>
              </div>
              <button type="submit" className="w-full py-3.5 bg-[#1A1A1A] text-white text-xs font-semibold uppercase tracking-widest hover:bg-[#333330] transition-colors mt-2">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1A1A1A] text-white py-16 border-t border-[#2E2E2A]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-lg font-extrabold tracking-tight">CHIC-PLUS</span>
            <p className="text-xs text-[#A0A09B] leading-relaxed">
              An independent fashion training academy and professional educational brand in Nigeria dedicated to practical female wear, male wear, and children clothing mastery.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">Courses & Fees</h4>
            <a href="#programs" className="text-xs text-[#A0A09B] hover:text-white transition-colors">Female Wear (₦150,000)</a>
            <a href="#programs" className="text-xs text-[#A0A09B] hover:text-white transition-colors">Male Wear (₦150,000)</a>
            <a href="#programs" className="text-xs text-[#A0A09B] hover:text-white transition-colors">Children Wear (₦100,000)</a>
            <a href="#programs" className="text-xs text-[#A0A09B] hover:text-white transition-colors">Special Skills (₦80,000)</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">Academy</h4>
            <a href="#about" className="text-xs text-[#A0A09B] hover:text-white transition-colors">Our Philosophy</a>
            <a href="#practical" className="text-xs text-[#A0A09B] hover:text-white transition-colors">Practical Training</a>
            <a href="#admissions" className="text-xs text-[#A0A09B] hover:text-white transition-colors">Admissions</a>
            <a href="#contact" className="text-xs text-[#A0A09B] hover:text-white transition-colors">Contact Centers</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">Stay Connected</h4>
            <p className="text-xs text-[#A0A09B]">Subscribe for new cohort dates and fashion training updates in Nigeria.</p>
            <div className="flex gap-2 pt-2">
              <input type="email" placeholder="Your email address" className="bg-[#262622] border border-[#3E3E39] px-3 py-2 text-xs text-white focus:outline-none w-full" />
              <button onClick={() => alert('Thank you for subscribing to Chic-Plus!')} className="px-4 py-2 bg-amber-500 text-black text-xs font-bold uppercase">Join</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-[#2E2E2A] flex flex-col sm:flex-row items-center justify-between text-xs text-[#888880]">
          <p>© {new Date().getFullYear()} CHIC-PLUS UNISEX FASHION SCHOOL. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Admission</a>
            <a href="#" className="hover:text-white transition-colors">Accreditation</a>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP WIDGET */}
      <a 
        href="https://wa.me/2348031234567?text=Hello%20Chic-Plus%20Fashion%20School,%20I%20want%20to%20inquire%20about%20admission."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all transform hover:scale-110 flex items-center justify-center group"
      >
        <MessageCircle className="w-8 h-8 fill-white" />
        <span className="absolute right-full mr-3 bg-white text-[#1A1A1A] text-xs font-bold px-3 py-1.5 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with Admissions on WhatsApp
        </span>
      </a>

      {/* ADMISSION APPLICATION MODAL */}
      {applyModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full p-8 relative border border-[#E5E5E0] shadow-2xl max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setApplyModalOpen(false)}
              className="absolute top-6 right-6 p-2 text-[#1A1A1A] hover:bg-[#FAFAF8]"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-700">Admissions Portal</span>
                <h3 className="text-2xl font-extrabold mt-1">Apply to Chic-Plus</h3>
                <p className="text-xs text-[#666660] mt-1">Fill out the form below to secure your spot in our upcoming training cohort in Nigeria.</p>
              </div>

              {applicationSubmitted ? (
                <div className="p-8 bg-[#FAFAF8] border border-amber-700/30 text-center flex flex-col gap-3">
                  <CheckCircle2 className="w-10 h-10 text-amber-700 mx-auto" />
                  <h4 className="font-bold text-lg">Application Submitted!</h4>
                  <p className="text-xs text-[#666660]">Our Admissions Desk in Nigeria will call your phone number shortly to complete your registration.</p>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#666660] mb-1">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full bg-[#FAFAF8] border border-[#E5E5E0] px-4 py-3 text-sm focus:outline-none focus:border-[#1A1A1A]" 
                      placeholder="Folashade Adeleke" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#666660] mb-1">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[#FAFAF8] border border-[#E5E5E0] px-4 py-3 text-sm focus:outline-none focus:border-[#1A1A1A]" 
                      placeholder="folashade@example.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#666660] mb-1">Phone Number / WhatsApp</label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-[#FAFAF8] border border-[#E5E5E0] px-4 py-3 text-sm focus:outline-none focus:border-[#1A1A1A]" 
                      placeholder="08031234567" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#666660] mb-1">Select Course Track</label>
                    <select 
                      value={selectedProgram || formData.program}
                      onChange={(e) => {
                        setSelectedProgram(e.target.value);
                        setFormData({...formData, program: e.target.value});
                      }}
                      className="w-full bg-[#FAFAF8] border border-[#E5E5E0] px-4 py-3 text-sm focus:outline-none focus:border-[#1A1A1A]"
                    >
                      <option value="Female Wear Masterclass">Female Wear Masterclass (₦150,000)</option>
                      <option value="Male Wear Masterclass">Male Wear Masterclass (₦150,000)</option>
                      <option value="Children Wear & Accessories">Children Wear & Accessories (₦100,000)</option>
                      <option value="Special Craft & Accessories">Special Craft & Accessories (₦80,000)</option>
                      <option value="Complete Professional Fashion Masterclass">Complete Professional Masterclass (Female + Male + Children - ₦300,000)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#666660] mb-1">Experience Level</label>
                    <select 
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      className="w-full bg-[#FAFAF8] border border-[#E5E5E0] px-4 py-3 text-sm focus:outline-none focus:border-[#1A1A1A]"
                    >
                      <option value="Beginner">Beginner (Absolute beginner)</option>
                      <option value="Intermediate">Intermediate (Knows basic hand sewing)</option>
                      <option value="Advanced">Advanced (Tailor looking to upgrade skills)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#666660] mb-1">Why do you want to join Chic-Plus?</label>
                    <textarea 
                      rows={3}
                      value={formData.statement}
                      onChange={(e) => setFormData({...formData, statement: e.target.value})}
                      className="w-full bg-[#FAFAF8] border border-[#E5E5E0] px-4 py-3 text-sm focus:outline-none focus:border-[#1A1A1A]"
                      placeholder="Briefly tell us your fashion training goals..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full py-4 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#333330] transition-colors mt-2"
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
