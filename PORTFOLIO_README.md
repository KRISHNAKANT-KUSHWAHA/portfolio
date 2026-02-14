# Krishnakant Kushwaha - Personal Portfolio Website

A modern, fully responsive personal portfolio website built with React.

## 🎨 Features

- **Modern Minimalist Design**: Clean, professional, recruiter-friendly aesthetic
- **Dark/Light Mode Toggle**: Seamless theme switching with persistent preference
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Fade-in effects, hover states, and scroll-triggered animations
- **Interactive Navigation**: Sticky navbar with smooth scrolling to sections
- **Complete Sections**:
  - Hero section with social links
  - About Me with highlights
  - Skills organized by category
  - Featured Projects with live demos
  - Experience & Achievements
  - Education & Certifications
  - Contact form with validation
  - Footer with quick links

## 🚀 Tech Stack

- **Frontend**: React 19, React Router
- **Styling**: Tailwind CSS, Shadcn UI components
- **Icons**: Lucide React
- **State Management**: React Context (Theme)
- **Build Tool**: Create React App with CRACO

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── ui/               # Shadcn UI components
│   │   ├── Navbar.jsx        # Navigation bar with theme toggle
│   │   ├── Hero.jsx          # Hero section
│   │   ├── About.jsx         # About me section
│   │   ├── Skills.jsx        # Skills & expertise
│   │   ├── Projects.jsx      # Featured projects
│   │   ├── Experience.jsx    # Work experience/hackathons
│   │   ├── Education.jsx     # Education & certifications
│   │   ├── Contact.jsx       # Contact form
│   │   └── Footer.jsx        # Footer section
│   ├── context/
│   │   └── ThemeContext.js   # Theme management
│   ├── hooks/
│   │   └── use-toast.js      # Toast notifications
│   ├── App.js                # Main app component
│   ├── App.css               # Custom animations
│   └── index.css             # Tailwind & theme styles
```

## 🎯 Key Highlights

- **200+** LeetCode problems solved
- **3+** Major full-stack projects
- **Top 157** in HackRx 6.0 (out of 1000+ teams)
- **7.73 CGPA** at JSS Academy of Technical Education

## 🔗 Links

- **GitHub**: https://github.com/KRISHNAKANT-KUSHWAHA
- **LinkedIn**: https://www.linkedin.com/in/krishnakant-kushwaha/
- **LeetCode**: https://leetcode.com/u/nfiODiuY72/
- **Email**: kushwahakrishnakant979@gmail.com

## 📝 How to Update Content

### Update Resume
1. Replace `/public/resume.pdf` with your actual resume file
2. The "Download Resume" button will automatically link to it

### Update Projects
Edit the `projects` array in `/app/frontend/src/components/Projects.jsx`

### Update Skills
Edit the `skillCategories` array in `/app/frontend/src/components/Skills.jsx`

### Update Personal Info
- Hero section: `/app/frontend/src/components/Hero.jsx`
- About section: `/app/frontend/src/components/About.jsx`
- Contact info: `/app/frontend/src/components/Contact.jsx`

## 🎨 Color Scheme

- **Primary**: Royal Blue (#2563EB)
- **Background Light**: White (#FFFFFF)
- **Background Dark**: Dark Gray (#111827)
- **Accent Colors**: Blue, Purple, Green, Orange, Red, Yellow (for skill categories)

## 🔧 Development

The frontend runs on port 3000 and is managed by supervisor. It has hot reload enabled, so changes will reflect automatically.

To restart the frontend:
```bash
sudo supervisorctl restart frontend
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ✨ Design Philosophy

- **Minimalist & Professional**: Clean design suitable for recruiters
- **User-Centric**: Easy navigation and clear information hierarchy
- **Accessible**: Proper ARIA labels and keyboard navigation support
- **Modern**: Smooth animations and contemporary UI patterns

---

© 2026 Krishnakant Kushwaha. All rights reserved.
