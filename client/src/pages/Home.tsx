import { useState } from "react";

/**
 * Portfolio Home Page - Detailed Retro Macintosh with Animated Icons
 * Design: 1980s-90s Apple Macintosh aesthetic with animated retro icons
 * - Textured blue gradient background
 * - Detailed 3D window frames with multiple border layers
 * - Animated Mac-style icons on section hover
 * - Sophisticated typography and layout
 */

// SVG Icons - Classic Mac style
const MacIcon = ({ type, isAnimating }: { type: string; isAnimating: boolean }) => {
  const animationClass = isAnimating ? 'animate-mac-bounce' : '';
  
  switch(type) {
    case 'about':
      return (
        <svg className={`w-12 h-12 ${animationClass}`} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="28" height="28" fill="#E8E8E8" stroke="#000" strokeWidth="2"/>
          <rect x="4" y="4" width="24" height="24" fill="#FFFFFF" stroke="#000" strokeWidth="1"/>
          <circle cx="16" cy="10" r="3" fill="#0066CC"/>
          <line x1="8" y1="16" x2="24" y2="16" stroke="#000" strokeWidth="1"/>
          <line x1="8" y1="20" x2="24" y2="20" stroke="#000" strokeWidth="1"/>
          <line x1="8" y1="24" x2="20" y2="24" stroke="#000" strokeWidth="1"/>
        </svg>
      );
    case 'experience':
      return (
        <svg className={`w-12 h-12 ${animationClass}`} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="6" width="24" height="20" fill="#E8E8E8" stroke="#000" strokeWidth="2"/>
          <rect x="6" y="8" width="20" height="16" fill="#FFFFFF" stroke="#000" strokeWidth="1"/>
          <rect x="8" y="8" width="4" height="4" fill="#0066CC"/>
          <rect x="14" y="8" width="4" height="4" fill="#0066CC"/>
          <rect x="20" y="8" width="4" height="4" fill="#0066CC"/>
          <line x1="8" y1="14" x2="24" y2="14" stroke="#000" strokeWidth="1"/>
          <line x1="8" y1="18" x2="24" y2="18" stroke="#000" strokeWidth="1"/>
        </svg>
      );
    case 'projects':
      return (
        <svg className={`w-12 h-12 ${animationClass}`} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="4" width="28" height="24" fill="#E8E8E8" stroke="#000" strokeWidth="2"/>
          <rect x="4" y="6" width="24" height="20" fill="#FFFFFF" stroke="#000" strokeWidth="1"/>
          <rect x="6" y="8" width="8" height="6" fill="#0066CC" stroke="#000" strokeWidth="1"/>
          <rect x="16" y="8" width="8" height="6" fill="#0066CC" stroke="#000" strokeWidth="1"/>
          <rect x="6" y="16" width="8" height="6" fill="#0066CC" stroke="#000" strokeWidth="1"/>
          <rect x="16" y="16" width="8" height="6" fill="#0066CC" stroke="#000" strokeWidth="1"/>
        </svg>
      );
    case 'skills':
      return (
        <svg className={`w-12 h-12 ${animationClass}`} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="28" height="28" fill="#E8E8E8" stroke="#000" strokeWidth="2"/>
          <rect x="4" y="4" width="24" height="24" fill="#FFFFFF" stroke="#000" strokeWidth="1"/>
          <path d="M8 12 L12 8 L16 12 L12 16 Z" fill="#0066CC" stroke="#000" strokeWidth="1"/>
          <path d="M18 12 L22 8 L26 12 L22 16 Z" fill="#0066CC" stroke="#000" strokeWidth="1"/>
          <path d="M8 22 L12 18 L16 22 L12 26 Z" fill="#0066CC" stroke="#000" strokeWidth="1"/>
          <path d="M18 22 L22 18 L26 22 L22 26 Z" fill="#0066CC" stroke="#000" strokeWidth="1"/>
        </svg>
      );
    case 'education':
      return (
        <svg className={`w-12 h-12 ${animationClass}`} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12 L16 6 L28 12 L28 24 L4 24 Z" fill="#E8E8E8" stroke="#000" strokeWidth="2"/>
          <path d="M6 14 L16 9 L26 14 L26 22 L6 22 Z" fill="#FFFFFF" stroke="#000" strokeWidth="1"/>
          <circle cx="16" cy="18" r="4" fill="#0066CC" stroke="#000" strokeWidth="1"/>
          <line x1="16" y1="18" x2="16" y2="22" stroke="#000" strokeWidth="1"/>
        </svg>
      );
    case 'contact':
      return (
        <svg className={`w-12 h-12 ${animationClass}`} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="6" width="28" height="20" fill="#E8E8E8" stroke="#000" strokeWidth="2"/>
          <path d="M4 8 L16 16 L28 8" fill="none" stroke="#000" strokeWidth="2"/>
          <rect x="4" y="8" width="24" height="16" fill="none" stroke="#000" strokeWidth="1"/>
          <line x1="4" y1="10" x2="28" y2="18" stroke="#0066CC" strokeWidth="1" opacity="0.5"/>
          <line x1="28" y1="10" x2="4" y2="18" stroke="#0066CC" strokeWidth="1" opacity="0.5"/>
        </svg>
      );
    default:
      return null;
  }
};

export default function Home() {
  const [expandedSections, setExpandedSections] = useState({
    about: true,
    experience: true,
    projects: true,
    skills: true,
    education: true,
    contact: true,
  });

  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const SectionHeader = ({ 
    title, 
    id, 
    isExpanded,
    iconType
  }: { 
    title: string; 
    id: keyof typeof expandedSections; 
    isExpanded: boolean;
    iconType: string;
  }) => (
    <div 
      onClick={() => toggleSection(id)}
      className="cursor-pointer select-none flex items-center gap-3 mb-3 group"
      onMouseEnter={() => setHoveredSection(id)}
      onMouseLeave={() => setHoveredSection(null)}
    >
      <div className="flex-shrink-0">
        <MacIcon type={iconType} isAnimating={hoveredSection === id} />
      </div>
      <div className="flex items-center gap-2 flex-1">
        <span className="text-blue-600 font-bold text-lg group-hover:text-blue-700 transition-colors">
          {isExpanded ? '▼' : '▶'}
        </span>
        <span className="text-sm font-bold text-blue-600 tracking-wide group-hover:text-blue-700 transition-colors">{title}</span>
        <div className="flex-1 border-b border-dotted border-gray-400"></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-cover bg-fixed" style={{ backgroundImage: "url('/images/mac-desktop-texture.png')" }}>
      {/* Retro Mac Menu Bar */}
      <div className="fixed top-0 left-0 right-0 bg-gray-300 border-b-2 border-black px-4 py-1 font-bold text-sm z-50" style={{
        boxShadow: 'inset 0 1px 0 #FFFFFF, inset 0 -1px 0 #808080'
      }}>
        <div className="flex justify-between items-center h-6">
          <div className="flex items-center gap-4">
            <span>🍎</span>
            <span className="text-xs">File</span>
            <span className="text-xs">Edit</span>
            <span className="text-xs">View</span>
            <span className="text-xs">Special</span>
          </div>
          <div className="text-xs">Faycel Habchi Portfolio</div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          
          {/* Welcome Window - Hero Section */}
          <div className="mac-window-detailed">
            <div className="mac-window-title-detailed">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-sm">Welcome.txt</span>
              </div>
              <div className="flex gap-2">
                <button className="w-5 h-5 bg-red-500 border-2 border-black flex items-center justify-center text-white text-xs font-bold hover:bg-red-600">×</button>
                <button className="w-5 h-5 bg-yellow-400 border-2 border-black flex items-center justify-center text-black text-xs font-bold hover:bg-yellow-500">_</button>
                <button className="w-5 h-5 bg-green-500 border-2 border-black flex items-center justify-center text-white text-xs font-bold hover:bg-green-600">□</button>
              </div>
            </div>
            
            <div className="mac-window-content-detailed">
              <div className="mb-6 pb-6 border-b-2 border-gray-300">
                <div className="text-2xl font-bold text-blue-600 mb-2 tracking-wide">FAYCEL HABCHI</div>
                <div className="text-sm text-gray-700 mb-1 font-semibold">Full-Stack Web Developer & Cloud Technologies Specialist</div>
                <div className="text-xs text-gray-600">MSc Computing with Cloud Technologies | Sheffield Hallam University</div>
              </div>

              <div className="text-xs text-gray-700 leading-relaxed mb-4">
                <p className="mb-3">Results-driven developer with <span className="font-bold">2+ years</span> of professional experience in full-stack web development and cloud architecture. Specialized in transforming complex requirements into scalable, performant solutions.</p>
              </div>

              <div className="grid grid-cols-3 gap-4 text-xs">
                <div className="bg-gray-100 p-3 border border-gray-400" style={{
                  boxShadow: 'inset 1px 1px 0 #FFFFFF, inset -1px -1px 0 #808080'
                }}>
                  <div className="font-bold text-blue-600 mb-1">📧 Email</div>
                  <div className="text-gray-700 break-words">habchifaycal@yahoo.com</div>
                </div>
                <div className="bg-gray-100 p-3 border border-gray-400" style={{
                  boxShadow: 'inset 1px 1px 0 #FFFFFF, inset -1px -1px 0 #808080'
                }}>
                  <div className="font-bold text-blue-600 mb-1">📍 Location</div>
                  <div className="text-gray-700">Sheffield, UK</div>
                </div>
                <div className="bg-gray-100 p-3 border border-gray-400" style={{
                  boxShadow: 'inset 1px 1px 0 #FFFFFF, inset -1px -1px 0 #808080'
                }}>
                  <div className="font-bold text-blue-600 mb-1">📱 Phone</div>
                  <div className="text-gray-700">+44 7353 806484</div>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="mac-window-detailed">
            <div className="mac-window-title-detailed">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-sm">About Me</span>
              </div>
              <div className="flex gap-2">
                <button className="w-5 h-5 bg-red-500 border-2 border-black flex items-center justify-center text-white text-xs font-bold hover:bg-red-600">×</button>
                <button className="w-5 h-5 bg-yellow-400 border-2 border-black flex items-center justify-center text-black text-xs font-bold hover:bg-yellow-500">_</button>
                <button className="w-5 h-5 bg-green-500 border-2 border-black flex items-center justify-center text-white text-xs font-bold hover:bg-green-600">□</button>
              </div>
            </div>
            
            <div className="mac-window-content-detailed">
              <SectionHeader title="PROFESSIONAL PROFILE" id="about" isExpanded={expandedSections.about} iconType="about" />
              
              {expandedSections.about && (
                <div className="space-y-3 text-xs text-gray-700 leading-relaxed">
                  <p>Passionate about designing dynamic, scalable solutions and optimizing cloud-based architectures. Skilled in transforming client requirements into performant applications using modern technologies such as React, Django, and AWS.</p>
                  
                  <div className="bg-blue-50 p-3 border-l-4 border-blue-600 my-3">
                    <div className="font-bold text-blue-600 mb-2">Key Strengths:</div>
                    <div className="space-y-1">
                      <div>▸ Full-stack web development (Frontend & Backend)</div>
                      <div>▸ Cloud architecture design and optimization</div>
                      <div>▸ Performance enhancement and UX optimization</div>
                      <div>▸ Cross-functional team collaboration</div>
                      <div>▸ Agile development methodologies</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Experience Section */}
          <div className="mac-window-detailed">
            <div className="mac-window-title-detailed">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-sm">Experience.doc</span>
              </div>
              <div className="flex gap-2">
                <button className="w-5 h-5 bg-red-500 border-2 border-black flex items-center justify-center text-white text-xs font-bold hover:bg-red-600">×</button>
                <button className="w-5 h-5 bg-yellow-400 border-2 border-black flex items-center justify-center text-black text-xs font-bold hover:bg-yellow-500">_</button>
                <button className="w-5 h-5 bg-green-500 border-2 border-black flex items-center justify-center text-white text-xs font-bold hover:bg-green-600">□</button>
              </div>
            </div>
            
            <div className="mac-window-content-detailed">
              <SectionHeader title="IF PUB ADVERTISING AGENCY" id="experience" isExpanded={expandedSections.experience} iconType="experience" />
              
              {expandedSections.experience && (
                <div className="space-y-3 text-xs text-gray-700">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-bold">Web Developer</span>
                    <span className="text-gray-600">July 2023 – August 2025</span>
                  </div>
                  
                  <div className="bg-gray-50 p-3 border-l-2 border-blue-600 space-y-2">
                    <div className="flex gap-2">
                      <span className="text-blue-600 font-bold">▸</span>
                      <span>Designed, built, and maintained <span className="font-bold">10+ dynamic client websites</span> for businesses across various sectors</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-blue-600 font-bold">▸</span>
                      <span>Collaborated with cross-functional teams to enhance UX and ensure consistent brand identity</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-blue-600 font-bold">▸</span>
                      <span>Implemented performance optimizations achieving <span className="font-bold">25% average improvement</span> in page load times</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-blue-600 font-bold">▸</span>
                      <span>Developed interactive website features to increase client engagement and visibility</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-blue-600 font-bold">▸</span>
                      <span>Managed multiple projects simultaneously, delivering high-quality work within tight deadlines</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Projects Section */}
          <div className="mac-window-detailed">
            <div className="mac-window-title-detailed">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-sm">Projects</span>
              </div>
              <div className="flex gap-2">
                <button className="w-5 h-5 bg-red-500 border-2 border-black flex items-center justify-center text-white text-xs font-bold hover:bg-red-600">×</button>
                <button className="w-5 h-5 bg-yellow-400 border-2 border-black flex items-center justify-center text-black text-xs font-bold hover:bg-yellow-500">_</button>
                <button className="w-5 h-5 bg-green-500 border-2 border-black flex items-center justify-center text-white text-xs font-bold hover:bg-green-600">□</button>
              </div>
            </div>
            
            <div className="mac-window-content-detailed">
              <SectionHeader title="ADMINISTRATIVE WEBSITE" id="projects" isExpanded={expandedSections.projects} iconType="projects" />
              
              {expandedSections.projects && (
                <div className="space-y-3 text-xs text-gray-700">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold">Full-Stack Web Application</span>
                    <span className="text-gray-600">January 2023</span>
                  </div>
                  
                  <p className="leading-relaxed">Developed a comprehensive full-stack web application to digitize and simplify the postgraduate registration process, automating complex workflows and reducing manual data entry.</p>
                  
                  <div className="bg-gray-50 p-3 border border-gray-300 rounded">
                    <div className="font-bold text-blue-600 mb-2">Technologies Used:</div>
                    <div className="flex flex-wrap gap-2">
                      {['HTML5', 'CSS', 'JavaScript', 'PHP', 'MySQL'].map(tech => (
                        <span key={tech} className="bg-blue-100 text-blue-700 px-2 py-1 border border-blue-300 text-xs font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-3 border-l-4 border-green-600">
                    <div className="font-bold text-green-700 mb-1">Impact:</div>
                    <p>Significantly improved administrative efficiency by automating registration workflows and eliminating manual data entry processes.</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mac-window-detailed">
            <div className="mac-window-title-detailed">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-sm">Skills.txt</span>
              </div>
              <div className="flex gap-2">
                <button className="w-5 h-5 bg-red-500 border-2 border-black flex items-center justify-center text-white text-xs font-bold hover:bg-red-600">×</button>
                <button className="w-5 h-5 bg-yellow-400 border-2 border-black flex items-center justify-center text-black text-xs font-bold hover:bg-yellow-500">_</button>
                <button className="w-5 h-5 bg-green-500 border-2 border-black flex items-center justify-center text-white text-xs font-bold hover:bg-green-600">□</button>
              </div>
            </div>
            
            <div className="mac-window-content-detailed">
              <SectionHeader title="TECHNICAL SKILLS" id="skills" isExpanded={expandedSections.skills} iconType="skills" />
              
              {expandedSections.skills && (
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="bg-gray-50 p-3 border border-gray-300">
                    <div className="font-bold text-blue-600 mb-2">Programming</div>
                    <div className="space-y-1 text-gray-700">
                      <div>▸ HTML5</div>
                      <div>▸ CSS</div>
                      <div>▸ JavaScript</div>
                      <div>▸ PHP</div>
                      <div>▸ Python</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 border border-gray-300">
                    <div className="font-bold text-blue-600 mb-2">Frameworks</div>
                    <div className="space-y-1 text-gray-700">
                      <div>▸ React</div>
                      <div>▸ Django</div>
                      <div>▸ Flask</div>
                      <div>▸ Bootstrap</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 border border-gray-300">
                    <div className="font-bold text-blue-600 mb-2">Database</div>
                    <div className="space-y-1 text-gray-700">
                      <div>▸ MySQL</div>
                      <div>▸ SQLite</div>
                      <div>▸ MongoDB</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 border border-gray-300">
                    <div className="font-bold text-blue-600 mb-2">Cloud & Tools</div>
                    <div className="space-y-1 text-gray-700">
                      <div>▸ AWS</div>
                      <div>▸ Azure</div>
                      <div>▸ GitHub</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Education Section */}
          <div className="mac-window-detailed">
            <div className="mac-window-title-detailed">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-sm">Education</span>
              </div>
              <div className="flex gap-2">
                <button className="w-5 h-5 bg-red-500 border-2 border-black flex items-center justify-center text-white text-xs font-bold hover:bg-red-600">×</button>
                <button className="w-5 h-5 bg-yellow-400 border-2 border-black flex items-center justify-center text-black text-xs font-bold hover:bg-yellow-500">_</button>
                <button className="w-5 h-5 bg-green-500 border-2 border-black flex items-center justify-center text-white text-xs font-bold hover:bg-green-600">□</button>
              </div>
            </div>
            
            <div className="mac-window-content-detailed">
              <SectionHeader title="ACADEMIC QUALIFICATIONS" id="education" isExpanded={expandedSections.education} iconType="education" />
              
              {expandedSections.education && (
                <div className="space-y-4 text-xs text-gray-700">
                  <div className="bg-blue-50 p-3 border-l-4 border-blue-600">
                    <div className="font-bold text-blue-600 mb-1">Master's Degree in Computing with Cloud Technologies</div>
                    <div className="text-gray-600 mb-2">Sheffield Hallam University | Sept 2025 – 2027</div>
                    <p>Key modules: Essentials of Full-Stack Software Development, Cloud-Based Project, Professional Practices in Software Projects</p>
                  </div>

                  <div className="bg-gray-50 p-3 border-l-4 border-gray-600">
                    <div className="font-bold text-gray-700 mb-1">Bachelor's Degree in Computer Science</div>
                    <div className="text-gray-600 mb-2">University of Oran 1 | 2020 – 2023</div>
                    <p>Focus: Web Development, Programming, Database Systems</p>
                  </div>

                  <div className="bg-green-50 p-3 border border-green-300">
                    <div className="font-bold text-green-700 mb-2">Certifications & Languages:</div>
                    <div className="space-y-1">
                      <div>✓ AWS Cloud Practitioner – Foundations (LinkedIn Learning, Sep 2025)</div>
                      <div>✓ DALF C1 – Advanced French Language Certification (Feb 2023)</div>
                      <div className="mt-2 pt-2 border-t border-green-300">
                        <span className="font-bold">Languages:</span> Arabic (Native) • English (Fluent) • French (Advanced)
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Section */}
          <div className="mac-window-detailed">
            <div className="mac-window-title-detailed">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-sm">Contact</span>
              </div>
              <div className="flex gap-2">
                <button className="w-5 h-5 bg-red-500 border-2 border-black flex items-center justify-center text-white text-xs font-bold hover:bg-red-600">×</button>
                <button className="w-5 h-5 bg-yellow-400 border-2 border-black flex items-center justify-center text-black text-xs font-bold hover:bg-yellow-500">_</button>
                <button className="w-5 h-5 bg-green-500 border-2 border-black flex items-center justify-center text-white text-xs font-bold hover:bg-green-600">□</button>
              </div>
            </div>
            
            <div className="mac-window-content-detailed">
              <SectionHeader title="GET IN TOUCH" id="contact" isExpanded={expandedSections.contact} iconType="contact" />
              
              {expandedSections.contact && (
                <div className="space-y-4 text-xs text-gray-700">
                  <p className="leading-relaxed">I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out!</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <a href="mailto:habchifaycal@yahoo.com">
                      <button className="w-full mac-btn-primary-detailed">
                        📧 Send Email
                      </button>
                    </a>
                    <a href="https://www.linkedin.com/in/faycel-habchi123" target="_blank" rel="noopener noreferrer">
                      <button className="w-full mac-btn-primary-detailed">
                        🔗 LinkedIn
                      </button>
                    </a>
                  </div>

                  <div className="bg-gray-100 p-3 border border-gray-400 space-y-1" style={{
                    boxShadow: 'inset 1px 1px 0 #FFFFFF, inset -1px -1px 0 #808080'
                  }}>
                    <div>📧 habchifaycal@yahoo.com</div>
                    <div>📱 +44 7353 806484</div>
                    <div>📍 Sheffield, UK</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-gray-600 mt-8 pb-4">
            <p className="font-bold">© 1995-2025 Faycel Habchi. All rights reserved.</p>
            <p className="mt-1">Made with ❤️ in Sheffield, UK</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes macBounce {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          25% {
            transform: translateY(-8px) scale(1.1);
          }
          50% {
            transform: translateY(-12px) scale(1.15);
          }
          75% {
            transform: translateY(-6px) scale(1.08);
          }
        }

        @keyframes macPulse {
          0%, 100% {
            filter: drop-shadow(0 0 0px rgba(0, 102, 204, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 8px rgba(0, 102, 204, 0.6));
          }
        }

        .animate-mac-bounce {
          animation: macBounce 0.6s ease-in-out infinite;
        }

        .animate-mac-pulse {
          animation: macPulse 1.5s ease-in-out infinite;
        }

        .mac-window-detailed {
          background: #E8E8E8;
          border: 2px solid;
          border-color: #DFDFDF #000000 #000000 #DFDFDF;
          box-shadow: 
            inset 1px 1px 0 #FFFFFF,
            inset 2px 2px 0 #DFDFDF,
            inset -1px -1px 0 #808080,
            inset -2px -2px 0 #000000,
            3px 3px 8px rgba(0,0,0,0.3);
          margin-bottom: 1.5rem;
          border-radius: 4px;
          overflow: hidden;
          transition: all 200ms ease;
        }

        .mac-window-detailed:hover {
          box-shadow: 
            inset 1px 1px 0 #FFFFFF,
            inset 2px 2px 0 #DFDFDF,
            inset -1px -1px 0 #808080,
            inset -2px -2px 0 #000000,
            3px 3px 12px rgba(0,0,0,0.4);
        }

        .mac-window-title-detailed {
          background: linear-gradient(to right, #0066CC, #0052A3);
          color: white;
          padding: 2px 4px;
          font-size: 11px;
          font-weight: bold;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #000000;
          min-height: 22px;
        }

        .mac-window-content-detailed {
          padding: 12px;
          background: #E8E8E8;
          font-family: 'Courier Prime', monospace;
          font-size: 11px;
        }

        .mac-btn-primary-detailed {
          background: linear-gradient(to bottom, #0066CC, #0052A3);
          color: white;
          border: 2px solid;
          border-color: #6BA3FF #000000 #000000 #6BA3FF;
          padding: 4px 8px;
          font-weight: bold;
          font-size: 11px;
          font-family: 'Courier Prime', monospace;
          cursor: pointer;
          transition: all 100ms ease;
        }

        .mac-btn-primary-detailed:hover {
          box-shadow: inset 1px 1px 0 #6BA3FF, inset -1px -1px 0 #003399;
        }

        .mac-btn-primary-detailed:active {
          box-shadow: inset 1px 1px 0 #003399, inset -1px -1px 0 #6BA3FF;
        }
      `}</style>
    </div>
  );
}
