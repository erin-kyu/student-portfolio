# My Personal Website - Integrated Project

## 🎯 Project Overview
This is a fully integrated personal portfolio website combining:
- Lab 3: Menu-Driven Personal Portfolio (with external CSS)
- Lab 4 Part I: Professional Resume/CV (with external CSS)
- HTML5 Boilerplate structure
- Ready for GitHub Pages deployment

## 📁 Folder Structure
```
my-website/
├── index.html              # Main portfolio page (homepage)
├── home.html              # Home/Welcome content
├── about.html             # About me page
├── education.html         # Education background
├── experience.html        # Work/leadership experience
├── works.html             # Projects and works
├── references.html        # References
├── resume.html            # Professional Resume/CV ⭐ NEW
├── header.html            # Header frame
├── menu.html              # Navigation menu (includes Resume link)
│
├── css/
│   ├── main.css           # Portfolio styles (from Lab 3)
│   └── resume.css         # Resume styles (from Lab 4)
│
├── img/
│   ├── picofme.jpg        # Profile picture
│   ├── snoopy.jpg         # Header logo
│   ├── resumepic.jpg      # Resume photo (ADD THIS FILE)
│   └── [other images]
│
├── js/
│   ├── app.js             # Application JavaScript
│   └── vendor/            # Third-party libraries
│
├── 404.html               # Error page
├── robots.txt             # Search engine instructions
├── favicon.ico            # Website icon
└── site.webmanifest       # Web app manifest
```

## ✅ What's Completed

### ✓ Lab 3 Portfolio Integration
- All pages converted to external CSS
- Images moved to `img/` folder
- CSS moved to `css/main.css`
- Frame-based navigation maintained

### ✓ Lab 4 Resume Integration
- Professional resume added as `resume.html`
- External CSS in `css/resume.css`
- Added to navigation menu
- Professional blue color scheme
- Profile picture section ready

### ✓ HTML5 Boilerplate Structure
- Proper folder organization
- SEO-friendly files (robots.txt, sitemap)
- Icons and manifests
- 404 error page

## 🚀 How to Use

### Local Preview:
1. Open VS Code
2. Install "Live Server" extension
3. Right-click `index.html`
4. Select "Open with Live Server"

### GitHub Pages Deployment:
1. Open this folder in VS Code
2. Initialize Git repository (Source Control panel)
3. Stage all files (click +)
4. Commit with message: "Initial website upload"
5. Click "Publish Branch"
6. Choose repository name: `my-website`
7. Make it Public
8. Go to GitHub repository Settings → Pages
9. Select Branch: `main`, Folder: `/(root)`
10. Save and wait 1-2 minutes
11. Access at: `https://YOUR-USERNAME.github.io/my-website/`

## 📸 Adding Your Resume Photo

Your resume currently references `img/resumepic.jpg`. To add your photo:

**Option 1: Add new photo**
1. Add your resume photo to the `img/` folder
2. Name it `resumepic.jpg` (or update the filename in resume.html)

**Option 2: Use existing photo**
Edit `resume.html` line 12:
```html
<!-- Change from: -->
<img src="img/resumepic.jpg" alt="Erin Quiazon" class="profile-picture">

<!-- To use your portfolio photo: -->
<img src="img/picofme.jpg" alt="Erin Quiazon" class="profile-picture">
```

## 🎨 Design Features

### Portfolio (Main Site)
- Warm, editorial layout
- Cream and rust color scheme
- Responsive design
- Frame-based navigation
- Profile picture on home page

### Resume
- Minimal, clean design
- Consistent with portfolio color scheme
- Print-friendly
- Mobile responsive
- Profile picture header

## 📝 Navigation Structure

The menu (menu.html) includes:
1. 🏠 Home
2. 👤 About
3. 💼 Works
4. 📋 Experience
5. 🎓 Education
6. 📝 References
7. 📄 Resume ⭐ NEW

## ⚠️ Important Notes

### Before Deploying:
- [ ] Add your resume photo to `img/resumepic.jpg`
- [ ] Test all pages locally
- [ ] Verify all links work
- [ ] Check images load correctly
- [ ] Review personal information privacy

### File Requirements:
✅ All CSS is external (no inline/embedded styles)
✅ Images in `img/` folder
✅ Proper HTML5 structure
✅ Resume integrated into portfolio
✅ Ready for GitHub Pages

## 📊 Lab Requirements Checklist

### Lab 3 (Portfolio):
- [x] Menu-driven website using frames
- [x] All content pages (home, about, education, experience, works, references)
- [x] External CSS only
- [x] Professional design

### Lab 4 Part I (Resume):
- [x] Resume/CV with HTML and external CSS
- [x] Professional design
- [x] Profile picture section
- [x] Integrated into main website

### Lab 4 Part II (Integration):
- [x] HTML5 Boilerplate structure
- [x] All styling in external CSS files
- [x] Images in img/ folder
- [x] Resume accessible from portfolio
- [x] index.html as homepage
- [x] Ready for GitHub Pages deployment

## 🎓 Submission Requirements

You need to submit:
1. ✅ GitHub repository URL (after pushing this folder)
2. ✅ GitHub Pages URL (after enabling Pages)
3. ✅ Screenshots of live website

## 🔧 Troubleshooting

**Images not loading?**
- Check file paths use `img/filename.jpg`
- Check filenames match exactly (case-sensitive)

**CSS not working?**
- Check file paths use `css/filename.css`
- Clear browser cache (Ctrl+Shift+R)

**Resume photo missing?**
- Add `resumepic.jpg` to `img/` folder
- Or use existing photo: change to `img/picofme.jpg`

**GitHub Pages not working?**
- Wait 1-2 minutes after enabling
- Check branch is set to `main`
- Check folder is set to `/(root)`
- Ensure `index.html` is in root folder

## 🎉 You're All Set!

Your integrated website is ready to:
1. Preview locally in VS Code
2. Push to GitHub
3. Deploy to GitHub Pages
4. Submit for Lab 4 Part II

---

**Created by:** Erin Quiazon  
**For:** LBYCPG3 Lab Activities 3 & 4  
**Date:** January 2026
