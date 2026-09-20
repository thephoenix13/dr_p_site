// Contact placeholders — replace before deployment
export const CONTACT = {
  phone: '+91-XXXXX-XXXXX',
  phoneHref: 'tel:+91XXXXXXXXXX',
  email: 'contact@drphealth.com',
  emailHref: 'mailto:contact@drphealth.com',
  whatsapp: '91XXXXXXXXXX',
  whatsappHref: 'https://wa.me/91XXXXXXXXXX',
  calendar: 'https://cal.com/drphealth/demo',
  address: 'Dr P Health Solutions Pvt. Ltd., 4th Floor, Tower B, Cyber City, Gurugram, Haryana 122002, India',
  linkedin: 'https://linkedin.com/company/drphealth',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2!2d77.0!3d28.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzAwLjAiTiA3N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1',
};

export const BUSINESS_HOURS = [
  { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
  { day: 'Saturday', hours: '9:00 AM – 1:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

export const NAV_LINKS = [
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'Occupational Health Checkups', href: '/solutions/occupational-health-checkups' },
      { label: 'Pre-Employment Screening', href: '/solutions/pre-employment-screening' },
      { label: 'Annual Health Screenings', href: '/solutions/annual-health-screenings' },
      { label: 'Onsite OHC', href: '/solutions/onsite-ohc' },
      { label: 'Compliance & Audit', href: '/solutions/compliance-audit' },
      { label: 'Telemedicine / OPD', href: '/solutions/telemedicine-opd' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Manufacturing', href: '/industries/manufacturing' },
      { label: 'IT & Technology', href: '/industries/it-technology' },
      { label: 'Pharma', href: '/industries/pharma' },
      { label: 'Automotive', href: '/industries/automotive' },
      { label: 'Chemicals', href: '/industries/chemicals' },
      { label: 'Mining', href: '/industries/mining' },
      { label: 'Logistics', href: '/industries/logistics' },
    ],
  },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES = [
  {
    slug: 'occupational-health-checkups',
    title: 'Occupational Health Checkups',
    shortDesc: 'Comprehensive health assessments tailored to workplace hazards and job roles, ensuring your workforce stays fit and compliant.',
    icon: 'HeartPulse',
    color: 'accent',
  },
  {
    slug: 'pre-employment-screening',
    title: 'Pre-Employment Health Screening',
    shortDesc: 'Thorough medical evaluations before onboarding to verify fitness for duty and reduce workplace health liabilities.',
    icon: 'ClipboardCheck',
    color: 'primary',
  },
  {
    slug: 'annual-health-screenings',
    title: 'Annual / Periodic Health Screenings',
    shortDesc: 'Scheduled health surveillance programs to detect early signs of occupational illness and maintain workforce wellness.',
    icon: 'CalendarCheck',
    color: 'accent',
  },
  {
    slug: 'onsite-ohc',
    title: 'Onsite Occupational Health Centers',
    shortDesc: 'Fully equipped occupational health clinics at your premises, staffed with qualified medical professionals.',
    icon: 'Building2',
    color: 'primary',
  },
  {
    slug: 'compliance-audit',
    title: 'Compliance & Audit Support',
    shortDesc: 'End-to-end regulatory compliance management including Factory Act, state regulations, and international standards.',
    icon: 'ShieldCheck',
    color: 'accent',
  },
  {
    slug: 'telemedicine-opd',
    title: 'Telemedicine & OPD Services',
    shortDesc: 'Remote medical consultations and outpatient services for employees, reducing downtime and improving access to care.',
    icon: 'Video',
    color: 'primary',
  },
];

export const INDUSTRIES = [
  { slug: 'manufacturing', title: 'Manufacturing', icon: 'Factory', painPoints: ['Noise-induced hearing loss', 'Musculoskeletal disorders', 'Chemical exposure risks', 'Shift-work fatigue'], compliance: ['Factories Act 1948', 'OSHAS Rules', 'ISO 45001'] },
  { slug: 'it-technology', title: 'IT & Technology', icon: 'Monitor', painPoints: ['Ergonomic strain', 'Mental health & burnout', 'Sedentary lifestyle diseases', 'Eye strain & vision issues'], compliance: ['POSH Act', 'Mental Health Policy', 'Ergonomic Standards'] },
  { slug: 'pharma', title: 'Pharmaceuticals', icon: 'Pill', painPoints: ['API exposure risks', 'Cleanroom health monitoring', 'Biological hazard management', 'Shift-work disorders'], compliance: ['Drug & Cosmetics Act', 'GMP Guidelines', 'Biosafety Standards'] },
  { slug: 'automotive', title: 'Automotive', icon: 'Car', painPoints: ['Welding fume exposure', 'Heavy machinery injuries', 'Paint shop chemical risks', 'Assembly line ergonomics'], compliance: ['Factories Act', 'Motor Vehicle Standards', 'ISO 45001'] },
  { slug: 'chemicals', title: 'Chemicals', icon: 'FlaskConical', painPoints: ['Toxic substance exposure', 'Respiratory conditions', 'Skin disorders', 'Emergency response readiness'], compliance: ['Chemical Accidents Rules', 'MSDS Compliance', 'REACH Standards'] },
  { slug: 'mining', title: 'Mining', icon: 'Mountain', painPoints: ['Dust-related lung diseases', 'Vibration injuries', 'Heat stress', 'Confined space health risks'], compliance: ['Mines Act 1952', 'DGMS Regulations', 'MSHA Standards'] },
  { slug: 'logistics', title: 'Logistics', icon: 'Truck', painPoints: ['Driver fatigue & fitness', 'Loading injuries', 'Prolonged sitting disorders', 'Substance abuse screening'], compliance: ['Motor Vehicles Act', 'Dock Workers Act', 'Fitness-to-Drive Standards'] },
];

export const STATS = [
  { value: '500+', label: 'Enterprise Clients' },
  { value: '2M+', label: 'Health Assessments Delivered' },
  { value: '15+', label: 'Years of Experience' },
  { value: '98%', label: 'Client Retention Rate' },
];

export const TESTIMONIALS = [
  { quote: 'Dr P transformed our occupational health program. Their onsite OHC reduced employee downtime by 40% and brought us into full regulatory compliance within 3 months.', author: 'Rajesh Kumar', role: 'VP Operations, Tata Steel', rating: 5 },
  { quote: 'The pre-employment screening process is seamless. Dr P handles everything from scheduling to reporting, saving our HR team 20+ hours per week.', author: 'Priya Sharma', role: 'Head of HR, Infosys', rating: 5 },
  { quote: 'Their compliance audit support was instrumental in our ISO 45001 certification. The team understands both healthcare and industrial regulations deeply.', author: 'Amit Patel', role: 'EHS Director, Reliance Industries', rating: 5 },
];

export const LOGO_CLOUD = [
  'Tata Group', 'Reliance', 'Infosys', 'Mahindra', 'Adani', 'L&T', 'Wipro', 'HCL Tech',
];

export const BLOG_POSTS = [
  { slug: 'occupational-health-compliance-2025', title: 'Occupational Health Compliance Updates for 2025', excerpt: 'Key regulatory changes every EHS manager needs to know about the new occupational health and safety amendments.', category: 'Compliance', date: '2025-01-15', author: 'Dr. Meera Iyer', readTime: '5 min read' },
  { slug: 'reducing-workplace-absenteeism', title: 'How Preventive Health Screenings Reduce Workplace Absenteeism by 35%', excerpt: 'Data-driven insights on how annual health checkups directly impact productivity and reduce sick days across industries.', category: 'Wellness', date: '2025-01-08', author: 'Dr. Arjun Nair', readTime: '7 min read' },
  { slug: 'onsite-ohc-roi', title: 'The ROI of Onsite Occupational Health Centers', excerpt: 'A comprehensive analysis of cost savings, productivity gains, and compliance benefits of establishing an OHC at your facility.', category: 'Industry', date: '2024-12-20', author: 'Dr. Priya Deshmukh', readTime: '6 min read' },
  { slug: 'mental-health-manufacturing', title: 'Mental Health Programs in Manufacturing: A Practical Guide', excerpt: 'Why manufacturing companies must prioritize mental health and how to implement effective workplace wellness programs.', category: 'Wellness', date: '2024-12-10', author: 'Dr. Sanjay Gupta', readTime: '8 min read' },
  { slug: 'pre-employment-screening-best-practices', title: 'Pre-Employment Screening: Best Practices for 2025', excerpt: 'Ensure your pre-employment health checks are legally compliant, medically thorough, and candidate-friendly.', category: 'Compliance', date: '2024-11-28', author: 'Dr. Meera Iyer', readTime: '5 min read' },
  { slug: 'noise-induced-hearing-loss-prevention', title: 'Preventing Noise-Induced Hearing Loss in Industrial Settings', excerpt: 'Evidence-based strategies for protecting workers from occupational noise exposure and implementing effective hearing conservation programs.', category: 'Industry', date: '2024-11-15', author: 'Dr. Arjun Nair', readTime: '6 min read' },
];

export const FAQ_HOME = [
  { q: 'What is occupational health?', a: 'Occupational health focuses on the physical, mental, and social well-being of workers in their workplace. It involves preventing work-related illnesses, promoting healthy work environments, and ensuring compliance with health and safety regulations.' },
  { q: 'How does Dr P help enterprises with compliance?', a: 'Dr P provides end-to-end compliance management including statutory health examinations, regulatory documentation, audit preparation, and ongoing monitoring aligned with the Factories Act, state OSHAS rules, and international standards like ISO 45001.' },
  { q: 'Can Dr P set up an onsite health center at our facility?', a: 'Yes. Dr P designs, staffs, and manages fully equipped Occupational Health Centers (OHC) at your premises. Our centers include examination rooms, diagnostic equipment, pharmacy, and emergency care capabilities tailored to your workforce size and industry risks.' },
  { q: 'What industries does Dr P serve?', a: 'Dr P serves manufacturing, IT, pharmaceuticals, automotive, chemicals, mining, logistics, and other industries with significant workforce health and safety requirements.' },
];
