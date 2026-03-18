#!/bin/bash

# Define the new header HTML
read -r -d '' NEW_HEADER << 'ENDHEADER'
    <div class="app-container">
        <header class="main-header">
            <div class="header-brand">
                <img src="img/snoopy.jpg" alt="Logo" class="header-logo">
                <div class="header-text">
                    <h1>Erin M. Quiazon</h1>
                    <p>Computer Engineering Student | Portfolio</p>
                </div>
            </div>
            
            <nav class="main-nav">
                <ul class="nav-links">
                    <li><a href="index.html">🏠 Home</a></li>
                    <li><a href="about.html">👤 About</a></li>
                    <li><a href="works.html">💼 Works</a></li>
                    <li><a href="experience.html">📋 Experience</a></li>
                    <li><a href="education.html">🎓 Education</a></li>
                    <li><a href="references.html">📝 References</a></li>
                    <li><a href="resume.html">📄 Resume</a></li>
                </ul>
            </nav>
        </header>
ENDHEADER

# Files to update
FILES="about.html works.html experience.html education.html references.html resume.html"

for file in $FILES; do
    if [ -f "$file" ]; then
        echo "Updating $file..."
        # This is complex to do with sed, so we'll note which files need updating
        echo "$file needs manual update"
    fi
done
