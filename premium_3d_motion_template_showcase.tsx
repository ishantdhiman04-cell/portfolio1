import React, { useState, useEffect, useRef } from 'react';

// Elite Custom Styles for smooth transitions, neon glows, and custom scrollbars
const CustomStyles = () => (
  <style>{`
    @keyframes pulse-glow {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(1.05); }
    }
    @keyframes float-slow {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(2deg); }
    }
    @keyframes grid-move {
      0% { background-position: 0 0; }
      100% { background-position: 40px 40px; }
    }
    
    .glow-bg {
      filter: blur(120px);
      animation: pulse-glow 8s ease-in-out infinite;
    }
    .float-card {
      animation: float-slow 6s ease-in-out infinite;
    }
    .grid-bg {
      background-size: 40px 40px;
      background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      animation: grid-move 20s linear infinite;
    }
    .premium-transition {
      transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .perspective-1000 {
      perspective: 1000px;
    }
    .preserve-3d {
      transform-style: preserve-3d;
    }
    .hover-3d:hover {
      transform: rotateY(12deg) rotateX(-8deg) translateZ(20px);
      box-shadow: 0 20px 40px rgba(124, 58, 237, 0.25);
    }
    
    /* Custom Luxury Scrollbar */
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #09090b;
    }
    ::-webkit-scrollbar-thumb {
      background: #27272a;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #7c3aed;
    }
  `}</style>
);

// High-fidelity Mock Data for Premium Templates with customized features
const TEMPLATES_DATA = [
  {
    id: 'aura-ai',
    title: 'Aura AI Analytics Dashboard',
    category: 'AI & Core Dashboard',
    description: 'An elite, high-performance SaaS dashboard featuring 3D engine controls, neural AI generative nodes, live console streams, and dynamic data visualization matrix.',
    price: '$35,000',
    deploys: '2.4k',
    rating: '4.99',
    speedIndex: '100',
    tech: ['Next.js 15', 'ThreeJS WebGL', 'Tailwind v4', 'WebRTC'],
    gradient: 'from-violet-600 via-indigo-600 to-cyan-500',
    color: 'violet',
    accentColor: '#7c3aed'
  },
  {
    id: 'zenith-saas',
    title: 'Zenith Cloud Observability Suite',
    category: 'Cloud Devops Tools',
    description: 'A futuristic DevOps cloud console built with high-fidelity performance widgets, dynamic custom pricing slider models, and interactive micro-animations.',
    price: '$28,500',
    deploys: '1.8k',
    rating: '4.96',
    speedIndex: '99',
    tech: ['React 19', 'Framer Dynamic', 'ThreeJS Particle', 'Vite'],
    gradient: 'from-emerald-500 via-teal-600 to-indigo-700',
    color: 'emerald',
    accentColor: '#10b981'
  },
  {
    id: 'nova-folio',
    title: 'Nova 3D Creative Director Portfolio',
    category: 'WebGL Creative Art',
    description: 'A premium portfolio experience integrating a fully interactive 3D Model Studio. Rotate, zoom, and customize abstract luxury shapes directly inside the device frame.',
    price: '$32,000',
    deploys: '1.2k',
    rating: '4.98',
    speedIndex: '98',
    tech: ['Vanilla JS WebGL', 'Tailwind CSS', 'ThreeJS Mesh', 'GSAP Easing'],
    gradient: 'from-rose-500 via-amber-500 to-violet-600',
    color: 'rose',
    accentColor: '#f43f5e'
  }
];

export default function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(TEMPLATES_DATA[0]);
  const [deviceMode, setDeviceMode] = useState('desktop'); // desktop, tablet, mobile
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployStep, setDeployStep] = useState(0);
  const [deployLogs, setDeployLogs] = useState([]);
  const [deployCompleted, setDeployCompleted] = useState(false);
  const [budgetVal, setBudgetVal] = useState(30000); // Custom pricing system
  const [customQuoteStatus, setCustomQuoteStatus] = useState('');
  
  // Custom states for 3D Customizer controls
  const [meshColor, setMeshColor] = useState('#7c3aed');
  const [isWireframe, setIsWireframe] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(1.5);
  const [geometryType, setGeometryType] = useState('torusKnot'); // torusKnot, sphere, box

  const [threeLoaded, setThreeLoaded] = useState(false);
  useEffect(() => {
    const existingScript = document.getElementById('three-js-cdn');
    if (existingScript) {
      setThreeLoaded(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.id = 'three-js-cdn';
    script.async = true;
    script.onload = () => setThreeLoaded(true);
    document.head.appendChild(script);
  }, []);

  // Simulator Vercel Build Pipeline
  const triggerDeploy = () => {
    setIsDeploying(true);
    setDeployCompleted(false);
    setDeployStep(0);
    setDeployLogs([]);
    
    const logs = [
      '🔍 Fetching high-performance repository assets...',
      '⚙️ Instantiating dynamic WebGL & Three.js 3D Engine nodes...',
      '📦 Optimizing assets & micro-shaders with advanced bundle compression...',
      '⚡ Building static assets on ultra-fast Vercel edge networks...',
      '🚀 Spawning serverless edge functions across 180+ global endpoints...',
      '🎉 Deployment successful! View live production URL below.'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < logs.length) {
        setDeployLogs(prev => [...prev, logs[currentStep]]);
        setDeployStep(currentStep + 1);
        currentStep++;
      } else {
        clearInterval(interval);
        setDeployCompleted(true);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#050507] text-zinc-100 font-sans selection:bg-violet-500 selection:text-white antialiased overflow-x-hidden relative grid-bg">
      <CustomStyles />
      
      {/* Absolute Dynamic Neon Spotlights for Ultimate Depth */}
      <div className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] bg-violet-600/10 rounded-full glow-bg pointer-events-none" />
      <div className="absolute top-[40%] right-[5%] w-[500px] h-[500px] bg-emerald-600/5 rounded-full glow-bg pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[600px] h-[600px] bg-rose-600/5 rounded-full glow-bg pointer-events-none" />

      {/* Luxury Navigation Panel */}
      <nav className="sticky top-0 z-50 border-b border-zinc-900 bg-[#050507]/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(124,58,237,0.4)]">
            <span className="font-black text-xl text-white tracking-tighter">V</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base tracking-widest bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">VERCEL</span>
              <span className="text-[9px] bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-2 py-0.5 rounded font-bold font-mono uppercase tracking-widest">3D ULTRA</span>
            </div>
            <p className="text-[10px] text-zinc-500 font-mono">Premium Agency Design Studio</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold text-zinc-400 tracking-wider uppercase">
          <a href="#three-playground" className="hover:text-violet-400 transition-colors premium-transition">3D Engine Lab</a>
          <a href="#templates" className="hover:text-violet-400 transition-colors premium-transition">Templates</a>
          <a href="#simulator" className="hover:text-violet-400 transition-colors premium-transition">Device Studio</a>
          <a href="#quote" className="hover:text-violet-400 transition-colors premium-transition">Get Custom Quote</a>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden lg:inline-flex text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full font-mono font-bold animate-pulse">
            ● PIPELINE ONLINE
          </span>
          <a href="#quote" className="bg-gradient-to-r from-white to-zinc-200 hover:from-zinc-100 hover:to-zinc-300 text-black px-5 py-2.5 text-xs font-bold rounded-lg transition-all shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:scale-[1.03]">
            Start Premium Project
          </a>
        </div>
      </nav>

      {/* Main Hero Header */}
      <header className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 px-4 py-2 rounded-full text-xs text-zinc-300 mb-6 shadow-2xl backdrop-blur-md animate-fade-in">
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 animate-ping"></span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">Next-Gen WebGL Integration</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8">
          Interactive <span className="bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 bg-clip-text text-transparent">3D Motion</span> <br />
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">
            $30k Class Showcases
          </span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-zinc-400 text-base md:text-lg font-light leading-relaxed mb-12">
          ये साधारण वेबसाइट्स नहीं हैं। ये $30k+ वैल्यू वाले डिजिटल एक्सपीरियंस हैं, जिन्हें हमने **Interactive 3D Elements**, **WebGL Particles**, और **Smooth Real-time Motion** के साथ डिज़ाइन किया है। नीचे हमारे 3D लाइव सैंडबॉक्स टूल को एक्सप्लोर करें!
        </p>

        {/* Live CTA Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-6">
          <div className="bg-zinc-900/40 border border-zinc-800/80 p-6 rounded-2xl text-left hover:border-violet-500/50 premium-transition hover-3d perspective-1000">
            <span className="text-xs font-mono text-violet-400 font-bold">01 / REAL-TIME 3D</span>
            <h3 className="text-lg font-bold text-white mt-2">Smooth 3D Meshes</h3>
            <p className="text-xs text-zinc-400 mt-2">Drag and rotate interactive 3D geometries natively in-browser with zero lag.</p>
          </div>
          <div className="bg-zinc-900/40 border border-zinc-800/80 p-6 rounded-2xl text-left hover:border-fuchsia-500/50 premium-transition hover-3d perspective-1000">
            <span className="text-xs font-mono text-fuchsia-400 font-bold">02 / FLUID SLIDES</span>
            <h3 className="text-lg font-bold text-white mt-2">Cubic-Bezier Motion</h3>
            <p className="text-xs text-zinc-400 mt-2">Ultra responsive tab navigation with hardware-accelerated animations.</p>
          </div>
          <div className="bg-zinc-900/40 border border-zinc-800/80 p-6 rounded-2xl text-left hover:border-emerald-500/50 premium-transition hover-3d perspective-1000">
            <span className="text-xs font-mono text-emerald-400 font-bold">03 / LIVE TERMINALS</span>
            <h3 className="text-lg font-bold text-white mt-2">Vercel Edge Sandbox</h3>
            <p className="text-xs text-zinc-400 mt-2">Simulated serverless multi-region pipeline compilation feedback.</p>
          </div>
        </div>
      </header>

      {}
      <section id="three-playground" className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 border border-zinc-800 p-8 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-violet-600/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* 3D Canvas viewport */}
            <div className="lg:col-span-7 bg-zinc-950 rounded-2xl border border-zinc-800 p-2 relative h-[450px]">
              <div className="absolute top-4 left-4 z-10 bg-black/60 border border-zinc-800/80 rounded-xl p-3 backdrop-blur-md text-xs">
                <p className="font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>Interactive 3D Core Viewport</span>
                </p>
                <p className="text-[10px] text-zinc-500 mt-1">Drag mouse to orbit • Scroll to zoom</p>
              </div>

              {threeLoaded ? (
                <ThreeDCanvas 
                  color={meshColor} 
                  wireframe={isWireframe} 
                  speed={rotationSpeed} 
                  geometry={geometryType} 
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zinc-500 text-xs font-mono">
                  Initializing WebGL Scene...
                </div>
              )}
            </div>

            {/* Controls panel */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono text-violet-400 font-bold uppercase tracking-widest">Premium customizer</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-1">3D WebGL Configurator</h2>
                <p className="text-xs text-zinc-400 mt-2">
                  हमारे high-value 3D क्लाइंट्स के लिए बने इस वेब टूल को कस्टमाइज करके देखें। आप सीधे लाइव कलर्स, वायरफ्रेम रेंडरिंग और रोटेशन स्पीड को बदल सकते हैं।
                </p>
              </div>

              {/* Geometry Type selection */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-zinc-400">Select Shape Geometry</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'torusKnot', label: 'Torus Knot' },
                    { id: 'sphere', label: 'Sphere Grid' },
                    { id: 'box', label: 'Floating Cube' }
                  ].map((geom) => (
                    <button
                      key={geom.id}
                      onClick={() => setGeometryType(geom.id)}
                      className={`py-2 text-[10px] font-bold tracking-wider uppercase border rounded-lg transition-all ${
                        geometryType === geom.id 
                          ? 'bg-white text-black border-white' 
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {geom.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Speed Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-mono uppercase text-zinc-400">
                  <span>Inertia Rotation Speed</span>
                  <span className="text-violet-400 font-bold">{rotationSpeed}x</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="5" 
                  step="0.5" 
                  value={rotationSpeed}
                  onChange={(e) => setRotationSpeed(Number(e.target.value))}
                  className="w-full accent-violet-500 bg-zinc-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Color Preset Palette */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-zinc-400 block">Select Material Glow</label>
                <div className="flex gap-3">
                  {[
                    { color: '#7c3aed', name: 'Violet Cyber' },
                    { color: '#10b981', name: 'Teal Aurora' },
                    { color: '#f43f5e', name: 'Neon Rose' },
                    { color: '#eab308', name: 'Gold Flare' }
                  ].map((p) => (
                    <button 
                      key={p.color}
                      onClick={() => setMeshColor(p.color)}
                      style={{ backgroundColor: p.color }}
                      className={`w-8 h-8 rounded-full border-2 transition-transform ${
                        meshColor === p.color ? 'border-white scale-110 shadow-lg' : 'border-transparent hover:scale-105'
                      }`}
                      title={p.name}
                    />
                  ))}
                </div>
              </div>

              {/* Wireframe toggle */}
              <div className="flex items-center justify-between p-4 bg-zinc-950 border border-zinc-800/80 rounded-xl">
                <div>
                  <h4 className="text-xs font-bold text-white">Toggle WebGL Wireframe</h4>
                  <p className="text-[10px] text-zinc-500">Show underlying geometric mesh structures</p>
                </div>
                <button
                  onClick={() => setIsWireframe(!isWireframe)}
                  className={`w-12 h-6 rounded-full p-1 transition-colors ${isWireframe ? 'bg-violet-600' : 'bg-zinc-800'}`}
                >
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform ${isWireframe ? 'translate-x-6' : 'translate-x-0'}`} />
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {}
      <main id="templates" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Template Selector Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
              Selected Architectural Nodes
            </h2>
            
            <div className="space-y-4">
              {TEMPLATES_DATA.map((template) => (
                <div 
                  key={template.id}
                  onClick={() => {
                    setSelectedTemplate(template);
                    setMeshColor(template.accentColor);
                  }}
                  className={`relative p-6 rounded-2xl border cursor-pointer premium-transition group ${
                    selectedTemplate.id === template.id 
                      ? 'bg-zinc-900/90 border-violet-500/50 shadow-[0_0_40px_rgba(124,58,237,0.15)] ring-1 ring-violet-500/30' 
                      : 'bg-zinc-950/60 border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/20'
                  }`}
                >
                  <div className={`absolute top-0 left-0 bottom-0 w-1.5 rounded-l-2xl bg-gradient-to-b ${template.gradient}`} />
                  
                  <div className="flex justify-between items-start mb-3 pl-2">
                    <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded">
                      {template.category}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">
                      {template.price}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white pl-2 group-hover:text-violet-400 transition-colors">
                    {template.title}
                  </h3>

                  <p className="text-xs text-zinc-400 mt-2 pl-2 leading-relaxed line-clamp-2">
                    {template.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pl-2 mt-4">
                    {template.tech.map((t, idx) => (
                      <span key={idx} className="text-[9px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Extra Premium Trust Badge */}
            <div className="bg-gradient-to-b from-zinc-900/60 to-black border border-zinc-800 p-6 rounded-2xl relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-rose-600/10 rounded-full blur-2xl" />
              <h4 className="font-bold text-white text-sm">Deploy on Vercel Enterprise</h4>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                All templates include 100% test-score lighthouse ratings and clean edge runtime scripts.
              </p>
            </div>
          </div>

          {/* Right: Device Mockup and Interactive Playgrounds */}
          <div id="simulator" className="lg:col-span-8 space-y-6">
            
            {/* Browser Controls */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                </div>
                <span className="text-xs font-mono text-zinc-400 ml-2">
                  Sandbox: <strong className="text-white">{selectedTemplate.title}</strong>
                </span>
              </div>

              {/* View/Device selection */}
              <div className="flex bg-zinc-950 p-1 rounded-xl border border-zinc-800">
                {['desktop', 'tablet', 'mobile'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setDeviceMode(mode)}
                    className={`px-3.5 py-1 text-[10px] font-bold uppercase rounded-lg transition-all ${
                      deviceMode === mode 
                        ? 'bg-zinc-850 text-white' 
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>

              {/* Deploy Trigger Button */}
              <button 
                onClick={triggerDeploy}
                className="w-full md:w-auto bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-[0_4px_25px_rgba(124,58,237,0.4)] transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Live One-Click Deploy</span>
              </button>
            </div>

            {/* Sandbox Device Window Frame */}
            <div className="relative w-full transition-all duration-500 flex justify-center bg-zinc-950 rounded-2xl border border-zinc-800/80 p-2 overflow-hidden">
              <div 
                className="transition-all duration-500 w-full rounded-xl bg-[#09090b] shadow-2xl relative flex flex-col premium-transition"
                style={{
                  maxWidth: deviceMode === 'mobile' ? '390px' : deviceMode === 'tablet' ? '768px' : '100%',
                  height: deviceMode === 'mobile' ? '600px' : '520px'
                }}
              >
                {/* Browser URL Bar Mockup */}
                <div className="bg-zinc-900 px-4 py-3 flex items-center justify-between border-b border-zinc-800/60 text-xs text-zinc-500 font-mono select-none">
                  <div className="flex gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-800"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-800"></span>
                  </div>
                  <div className="bg-zinc-950 px-6 py-1 rounded border border-zinc-800/80 text-zinc-400 w-1/2 text-center truncate flex items-center justify-center gap-2 text-[10px]">
                    <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span>{selectedTemplate.id}.demo-production.cloud</span>
                  </div>
                  <div className="text-[9px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded font-bold">
                    SECURE SHELL
                  </div>
                </div>

                {/* Simulated Webpage Body */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#050507]">
                  {selectedTemplate.id === 'aura-ai' && <AuraAIDemo />}
                  {selectedTemplate.id === 'zenith-saas' && <ZenithSaaSDemo />}
                  {selectedTemplate.id === 'nova-folio' && <NovaFolioDemo />}
                </div>
              </div>

              {/* Deployment Overlay Module (Activated on triggers) */}
              {isDeploying && (
                <div className="absolute inset-0 bg-black/95 backdrop-blur-md flex flex-col justify-center items-center p-8 z-30 transition-all duration-500">
                  <div className="max-w-lg w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                    
                    <div className="absolute -top-12 -left-12 w-24 h-24 bg-violet-600/20 rounded-full blur-2xl animate-pulse" />

                    <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800">
                          <svg className="w-5 h-5 text-violet-500 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 15H16" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-sm">Vercel 3D Pipeline</h3>
                          <p className="text-[10px] text-zinc-400 font-mono">Status: {deployCompleted ? 'Completed Successfully' : 'Processing Core Nodes'}</p>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => setIsDeploying(false)}
                        className="text-zinc-500 hover:text-white text-[10px] font-mono border border-zinc-800 hover:border-zinc-700 px-3 py-1 rounded bg-zinc-900"
                      >
                        Abort Console
                      </button>
                    </div>

                    {/* Progress Slider */}
                    <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden mb-4">
                      <div 
                        className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-emerald-500 transition-all duration-500"
                        style={{ width: `${(deployStep / 6) * 100}%` }}
                      />
                    </div>

                    {/* Simulation logs console terminal */}
                    <div className="bg-black border border-zinc-900 p-4 rounded-xl font-mono text-[11px] space-y-2 h-44 overflow-y-auto select-none">
                      {deployLogs.map((log, index) => (
                        <div key={index} className="text-zinc-300 flex items-start gap-2">
                          <span className="text-violet-500 font-bold">&gt;</span>
                          <span>{log}</span>
                        </div>
                      ))}
                      {!deployCompleted && (
                        <div className="text-zinc-500 animate-pulse flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-ping"></span>
                          <span>Assembling assets...</span>
                        </div>
                      )}
                    </div>

                    {/* Done Box */}
                    {deployCompleted && (
                      <div className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold">
                            ✓
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xs font-bold text-white">Live URL Ready!</h4>
                            <p className="text-[10px] text-zinc-400">Deployed across 180 Edge datacenters globally.</p>
                          </div>
                          <button 
                            onClick={() => setIsDeploying(false)} 
                            className="bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-[10px] px-4 py-2 rounded-lg transition-colors"
                          >
                            Browse Site
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Extra Technical Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-zinc-900/40 border border-zinc-800/80 p-4 rounded-xl flex items-center gap-3">
                <span className="text-xl">⚡</span>
                <div>
                  <h4 className="text-[10px] font-semibold text-zinc-500 uppercase">Speed Index</h4>
                  <p className="text-sm font-bold text-white font-mono">{selectedTemplate.speedIndex}/100 Mobile Speed</p>
                </div>
              </div>
              <div className="bg-zinc-900/40 border border-zinc-800/80 p-4 rounded-xl flex items-center gap-3">
                <span className="text-xl">🛡️</span>
                <div>
                  <h4 className="text-[10px] font-semibold text-zinc-500 uppercase">Edge Security</h4>
                  <p className="text-sm font-bold text-white font-mono">DDoS Layer 7 Protection</p>
                </div>
              </div>
              <div className="bg-zinc-900/40 border border-zinc-800/80 p-4 rounded-xl flex items-center gap-3">
                <span className="text-xl">☁️</span>
                <div>
                  <h4 className="text-[10px] font-semibold text-zinc-500 uppercase">Framework</h4>
                  <p className="text-sm font-bold text-white font-mono">Fully Serverless Ready</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {}
      <section id="quote" className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-zinc-900/20 border border-zinc-800 p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.8)]">
          <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left side info */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-violet-400 font-mono tracking-widest uppercase">Elite Consulting</span>
              <h2 className="text-3xl md:text-5xl font-black text-white mt-2 mb-4 leading-tight">
                Let's Build Your <br />
                <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">$30k Masterpiece</span>
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                क्या आप अपने ब्रांड या स्टार्टअप के लिए एक ऐसा ही एलीट, विज़ुअली शानदार और अत्यधिक स्केलेबल 3D वेब प्लेटफ़ॉर्म चाहते हैं? नीचे दिए गए प्राइस एस्टीमेटर के साथ अपनी कस्टम रिक्वायरमेंट्स चुनें और हमें रिक्वेस्ट भेजें।
              </p>

              {/* Advanced Quote Estimator Component */}
              <div className="space-y-3 p-5 bg-zinc-950/80 border border-zinc-800/80 rounded-2xl">
                <div className="flex justify-between items-center text-xs text-zinc-400 font-mono">
                  <span>Dynamic Project Feature Scale</span>
                  <span className="text-violet-400 font-bold text-base">${budgetVal.toLocaleString()} USD</span>
                </div>
                <input 
                  type="range" 
                  min="5000" 
                  max="45000" 
                  step="2500"
                  value={budgetVal}
                  onChange={(e) => setBudgetVal(Number(e.target.value))}
                  className="w-full accent-violet-500 bg-zinc-800 cursor-pointer rounded-lg appearance-none h-1.5"
                />
                <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono uppercase">
                  <span>Standard Site ($5K)</span>
                  <span>Premium SaaS Portal ($25K)</span>
                  <span>Enterprise 3D Suite ($45K+)</span>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="lg:col-span-5 bg-zinc-950 border border-zinc-800/80 p-6 md:p-8 rounded-2xl relative">
              <h3 className="font-bold text-sm text-white mb-4 uppercase tracking-wider font-mono">
                Initiate Project Protocol
              </h3>

              <form onSubmit={(e) => {
                e.preventDefault();
                setCustomQuoteStatus('sending');
                setTimeout(() => setCustomQuoteStatus('success'), 1500);
              }} className="space-y-4">
                <div>
                  <label className="block text-[9px] font-mono uppercase text-zinc-400 mb-1">Your Name / Brand</label>
                  <input required type="text" placeholder="John Doe / Acme Inc" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-violet-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-[9px] font-mono uppercase text-zinc-400 mb-1">Business Email</label>
                  <input required type="email" placeholder="john@acme.com" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-violet-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-[9px] font-mono uppercase text-zinc-400 mb-1">Core Tech Architecture</label>
                  <select className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-300 focus:outline-none focus:border-violet-500 transition-colors">
                    <option>SaaS Custom Dashboard (Similar to Aura AI)</option>
                    <option>DevOps Monitoring Landing Page (Similar to Zenith)</option>
                    <option>Premium Web3 / 3D WebGL Portfolio (Similar to Nova)</option>
                    <option>Highly Custom Enterprise Platform</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  disabled={customQuoteStatus === 'sending'}
                  className="w-full bg-white text-black hover:bg-zinc-100 font-extrabold text-xs py-3 rounded-xl transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 shadow-lg"
                >
                  {customQuoteStatus === 'sending' ? (
                    <span>Registering Pipeline...</span>
                  ) : customQuoteStatus === 'success' ? (
                    <span className="text-emerald-600 font-bold">✓ Proposal Submitted!</span>
                  ) : (
                    <span>Request Quotation for ${budgetVal.toLocaleString()}</span>
                  )}
                </button>
                
                {customQuoteStatus === 'success' && (
                  <p className="text-[10px] text-zinc-500 text-center font-mono mt-2">
                    Our lead engineer will contact you in under 2 hours.
                  </p>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Elegant Studio Footer */}
      <footer className="border-t border-zinc-900 bg-black/60 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-xs text-zinc-500 uppercase tracking-widest">Vercel Premium 3D Showcase Hub</span>
            <span className="text-[10px] text-zinc-600">• Created for elite visual presentation & portfolio projects.</span>
          </div>
          <div className="flex gap-4 text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
            <a href="#" className="hover:text-zinc-300">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300">Terms of Service</a>
            <a href="#" className="hover:text-zinc-300">System Status</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

// =========================================================
// THREE.JS CANVAS COMPONENT (REAL WEBGL 3D EMBEDDED ENGINE)
// =========================================================
function ThreeDCanvas({ color, wireframe, speed, geometry }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!window.THREE || !containerRef.current) return;

    // Create Scene, Camera, and Renderer
    const scene = new window.THREE.Scene();
    scene.background = new window.THREE.Color('#050507');

    const camera = new window.THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      100
    );
    camera.position.z = 8;

    const renderer = new window.THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Clear old canvases
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(renderer.domElement);

    // Create Geometry
    let geom;
    if (geometry === 'torusKnot') {
      geom = new window.THREE.TorusKnotGeometry(1.2, 0.4, 150, 20);
    } else if (geometry === 'sphere') {
      geom = new window.THREE.SphereGeometry(1.6, 32, 32);
    } else {
      geom = new window.THREE.BoxGeometry(1.8, 1.8, 1.8);
    }

    // Material with high-end glass/metal reflection feel
    const material = new window.THREE.MeshStandardMaterial({
      color: new window.THREE.Color(color),
      wireframe: wireframe,
      roughness: 0.1,
      metalness: 0.8,
    });

    const mesh = new window.THREE.Mesh(geom, material);
    scene.add(mesh);

    // Lighting config
    const ambientLight = new window.THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight1 = new window.THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);

    const pointLight = new window.THREE.PointLight(color, 1.5, 10);
    pointLight.position.set(-3, -3, -3);
    scene.add(pointLight);

    // Mouse Tracking for Interactive Drag Orbit
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseDown = () => { isDragging = true; };
    const handleMouseMove = (e) => {
      const deltaMove = {
        x: e.offsetX - previousMousePosition.x,
        y: e.offsetY - previousMousePosition.y
      };

      if (isDragging) {
        mesh.rotation.y += deltaMove.x * 0.005;
        mesh.rotation.x += deltaMove.y * 0.005;
      }

      previousMousePosition = {
        x: e.offsetX,
        y: e.offsetY
      };
    };
    const handleMouseUp = () => { isDragging = false; };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', handleMouseDown);
    domElement.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Auto rotation based on custom velocity speed
      if (!isDragging) {
        mesh.rotation.y += 0.005 * speed;
        mesh.rotation.x += 0.003 * speed;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup elements
    return () => {
      cancelAnimationFrame(animationFrameId);
      domElement.removeEventListener('mousedown', handleMouseDown);
      domElement.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
    };
  }, [color, wireframe, speed, geometry, window.THREE]);

  return <div ref={containerRef} className="w-full h-full rounded-xl overflow-hidden cursor-grab active:cursor-grabbing" />;
}

// ==========================================
// DEMO COMPONENT 1: Aura AI Premium Dashboard
// ==========================================
function AuraAIDemo() {
  const [prompts, setPrompts] = useState([
    { role: 'system', text: 'Aura Premium WebGL Matrix Initialized. System core operational on Tokyo edge cluster...' }
  ]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const simulateAISubmit = (e) => {
    e.preventDefault();
    if (!inputPrompt.trim()) return;

    const userMsg = inputPrompt;
    setPrompts(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputPrompt('');
    setIsTyping(true);

    setTimeout(() => {
      let aiResponse = `Aura Node Analysis completed for "${userMsg}":\n\n1. Latency Metric: Reduced down to 1.4ms via Cloudflare Tunneling.\n2. Conversion Lift: +44.2% predicted on dynamic landing page templates.`;
      setPrompts(prev => [...prev, { role: 'ai', text: aiResponse }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="space-y-6 text-zinc-100 font-sans h-full">
      <div className="flex justify-between items-center border-b border-zinc-900 pb-4">
        <div>
          <span className="text-[10px] text-violet-400 font-mono uppercase font-bold tracking-widest">Active Workspace Demo</span>
          <h3 className="text-lg font-black text-white">Aura WebGL Control Node</h3>
        </div>
        <span className="text-xs bg-violet-500/10 border border-violet-500/20 text-violet-400 px-2.5 py-1 rounded font-mono">
          System Level: Alpha
        </span>
      </div>

      {/* Grid for Matrix Numbers */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-zinc-950 border border-zinc-900 p-4 rounded-xl">
          <p className="text-[9px] text-zinc-500 uppercase font-mono">API Requests</p>
          <p className="text-base font-bold font-mono mt-1 text-white">1,480,210</p>
          <span className="text-[8px] text-emerald-400 font-mono">+18% vs standard</span>
        </div>
        <div className="bg-zinc-950 border border-zinc-900 p-4 rounded-xl">
          <p className="text-[9px] text-zinc-500 uppercase font-mono">Edge Cluster Status</p>
          <p className="text-base font-bold font-mono mt-1 text-emerald-400">99.99%</p>
          <span className="text-[8px] text-zinc-500 font-mono">24 active sub-nodes</span>
        </div>
        <div className="bg-zinc-950 border border-zinc-900 p-4 rounded-xl">
          <p className="text-[9px] text-zinc-500 uppercase font-mono">Memory Lock</p>
          <p className="text-base font-bold font-mono mt-1 text-white">4.8 GB</p>
          <span className="text-[8px] text-emerald-400 font-mono">Optimized caching</span>
        </div>
        <div className="bg-zinc-950 border border-zinc-900 p-4 rounded-xl">
          <p className="text-[9px] text-zinc-500 uppercase font-mono">Active Value Node</p>
          <p className="text-base font-bold font-mono mt-1 text-violet-400">$8,500/Mo</p>
          <span className="text-[8px] text-violet-400 font-mono">Sub-Tier enterprise</span>
        </div>
      </div>

      {/* Prompt Chat module */}
      <div className="bg-zinc-950 border border-zinc-900 p-4 rounded-xl h-52 flex flex-col justify-between">
        <div className="flex-1 overflow-y-auto space-y-3 mb-4 text-[11px]">
          {prompts.map((p, idx) => (
            <div 
              key={idx} 
              className={`p-2.5 rounded-lg ${
                p.role === 'user' 
                  ? 'bg-zinc-900 border border-zinc-800 text-white self-end text-right ml-12' 
                  : p.role === 'ai' 
                    ? 'bg-violet-950/40 border border-violet-900/40 text-violet-300 mr-12' 
                    : 'bg-zinc-900/40 border border-zinc-900 text-zinc-500'
              }`}
            >
              <p className="font-bold text-[9px] text-zinc-500 font-mono mb-1">
                {p.role === 'user' ? 'Client Workspace Request' : p.role === 'ai' ? 'Aura Neural Response' : 'Server Engine Stream'}
              </p>
              <p className="whitespace-pre-line leading-relaxed">{p.text}</p>
            </div>
          ))}
          {isTyping && (
            <div className="text-zinc-500 italic animate-pulse font-mono text-[10px]">
              Compiling node code layouts...
            </div>
          )}
        </div>

        <form onSubmit={simulateAISubmit} className="flex gap-2">
          <input 
            type="text" 
            placeholder="Type interactive commands (e.g., Optimize performance)..." 
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-violet-500"
          />
          <button className="bg-violet-600 hover:bg-violet-500 px-4 rounded-lg text-xs font-bold text-white transition-colors">
            Trigger
          </button>
        </form>
      </div>
    </div>
  );
}

// ==========================================
// DEMO COMPONENT 2: Zenith SaaS Landing Page
// ==========================================
function ZenithSaaSDemo() {
  const [cpuVal, setCpuVal] = useState(38);
  const [tier, setTier] = useState('enterprise');

  useEffect(() => {
    const int = setInterval(() => {
      setCpuVal(Math.floor(Math.random() * (65 - 20) + 20));
    }, 2500);
    return () => clearInterval(int);
  }, []);

  return (
    <div className="space-y-6 text-zinc-100 font-sans h-full">
      <div className="flex justify-between items-center">
        <span className="font-extrabold text-sm tracking-widest text-emerald-400 font-mono">ZENITH.SAAS</span>
        <div className="flex gap-4 text-[10px] uppercase text-zinc-400 font-mono">
          <span>Clusters</span>
          <span>Metrics</span>
          <span>Serverless</span>
        </div>
      </div>

      <div className="text-center py-4 bg-zinc-950 border border-zinc-900 rounded-2xl">
        <h4 className="text-sm font-extrabold text-white">Performance Observability Engine</h4>
        <p className="text-[11px] text-zinc-500 mt-1 max-w-sm mx-auto">
          Deploy node trackers globally in one click. Watch active bundle compilation speeds directly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Metric Module */}
        <div className="bg-zinc-950 border border-zinc-900 p-4 rounded-xl space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-white">Live CPU Cluster</span>
            <span className="text-[10px] font-mono text-emerald-400">{cpuVal}% Usage</span>
          </div>
          <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-500 premium-transition"
              style={{ width: `${cpuVal}%` }}
            />
          </div>
          <p className="text-[9px] text-zinc-500 font-mono">Current Server Status: Highly Stable</p>
        </div>

        {/* Pricing tier module */}
        <div className="bg-zinc-950 border border-zinc-900 p-4 rounded-xl flex flex-col justify-between">
          <div className="flex gap-1.5 mb-2">
            {['developer', 'business', 'enterprise'].map((t) => (
              <button
                key={t}
                onClick={() => setTier(t)}
                className={`flex-1 py-1 text-[9px] font-mono uppercase border rounded transition-colors ${
                  tier === t 
                    ? 'bg-emerald-500 border-emerald-500 text-black font-bold' 
                    : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs text-zinc-400">Total Price:</span>
            <span className="text-sm font-bold font-mono text-white">
              {tier === 'developer' ? '$29' : tier === 'business' ? '$129' : '$399'}/Mo
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// DEMO COMPONENT 3: Nova Creative Portfolio
// ==========================================
function NovaFolioDemo() {
  const [selectedCase, setSelectedCase] = useState(1);
  const cases = [
    { id: 1, title: 'Virtual Runway 3D Render', client: 'Balenciaga Paris', theme: 'from-amber-600 to-rose-600' },
    { id: 2, title: 'Identity Web3 Framework', client: 'Linear App Corp', theme: 'from-violet-600 to-indigo-600' },
    { id: 3, title: 'Decentralized Core Interface', client: 'Stripe Dev Team', theme: 'from-emerald-600 to-cyan-600' }
  ];

  return (
    <div className="space-y-6 text-zinc-100 font-sans h-full flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-[10px] text-rose-400 uppercase tracking-widest font-mono">Luxury Creative Portfolio</span>
          <h3 className="text-base font-black text-white">NOVA STERLING</h3>
        </div>
        <span className="text-[10px] text-zinc-500 font-mono">Est. 2026</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {cases.map((c) => (
          <div
            key={c.id}
            onClick={() => setSelectedCase(c.id)}
            className={`cursor-pointer bg-zinc-950 border rounded-xl overflow-hidden premium-transition ${
              selectedCase === c.id ? 'border-rose-500/50 scale-[1.02]' : 'border-zinc-900'
            }`}
          >
            <div className={`h-16 bg-gradient-to-tr ${c.theme} p-2 flex flex-col justify-between`}>
              <span className="text-[9px] bg-black/50 text-white px-2 py-0.5 rounded self-start">{c.client}</span>
            </div>
            <div className="p-3">
              <h4 className="text-[11px] font-bold text-white truncate">{c.title}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-zinc-950 border border-zinc-900 rounded-xl">
        <h4 className="text-xs font-bold text-white">Live Design Strategy</h4>
        <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed">
          वीकली इंटरैक्टिव 3D एसेट्स, स्मूथ यूआई कम्पोनेंट्स और रिस्पॉन्सिव वेबपेज डिज़ाइन्स जो आपके ब्रांड की वैल्यू को 10x बढ़ाते हैं।
        </p>
      </div>
    </div>
  );
}