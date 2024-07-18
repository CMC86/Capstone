// scripts.js

// Function to apply global styles
function applyGlobalStyles() {
    const elements = document.querySelectorAll('a, button, input, select, h1, h2, h3, h4, h5, *');
    elements.forEach(element => {
        element.style.boxSizing = 'border-box';
        element.style.margin = '0';
        element.style.padding = '0';
        element.style.border = 'none';
        element.style.textDecoration = 'none';
        element.style.background = 'none';
        element.style.webkitFontSmoothing = 'antialiased';
    });
}

// Function to apply body styles
function applyBodyStyles() {
    document.body.style.margin = '0';
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.background = 'url("img/matrix-code.jpg") repeat';
    document.body.style.color = 'white';
    document.body.style.overflowY = 'scroll';
}

// Function to apply header styles
function applyHeaderStyles() {
    const header = document.querySelector('header');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    header.style.padding = '10px 20px';
    header.style.position = 'fixed';
    header.style.width = '100%';
    header.style.top = '0';
    header.style.zIndex = '1000';
}

// Function to apply navigation styles
function applyNavigationStyles() {
    const navUl = document.querySelector('nav ul');
    navUl.style.display = 'flex';
    navUl.style.listStyleType = 'none';
    navUl.style.margin = '0';
    navUl.style.padding = '0';

    const navItems = document.querySelectorAll('nav ul li');
    navItems.forEach(item => {
        item.style.margin = '0 15px';
    });

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.style.color = 'white';
        link.style.textDecoration = 'none';
        link.style.fontSize = '20px';
        link.style.fontWeight = 'bold';
        link.style.textTransform = 'uppercase';
    });
}

// Function to apply button styles
function applyButtonStyles() {
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach((button, index) => {
        button.style.marginLeft = '10px';
        button.style.padding = '10px 20px';
        button.style.fontSize = '16px';
        button.style.backgroundColor = index === 0 ? 'rgba(0, 128, 0, 0.7)' : 'rgba(128, 0, 0, 0.7)';
        button.style.color = 'white';
        button.style.border = '1px solid white';
        button.style.cursor = 'pointer';
        button.style.textTransform = 'uppercase';
    });
}

// Function to apply main styles
function applyMainStyles() {
    const main = document.querySelector('main');
    main.style.padding = '100px 20px 20px 20px';
}

// Function to apply section styles
function applySectionStyles() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.marginBottom = '50px';
        section.style.textAlign = 'center';
    });
}

// Function to apply image group styles
function applyImageGroupStyles() {
    const imageGroups = document.querySelectorAll('.image-group');
    imageGroups.forEach(group => {
        group.style.display = 'flex';
        group.style.justifyContent = 'center';
        group.style.gap = '10px';
        group.style.marginBottom = '20px';
    });

    const sectionImages = document.querySelectorAll('section img');
    sectionImages.forEach(image => {
        image.style.maxWidth = '100%';
        image.style.height = 'auto';
    });

    const doomImages = document.querySelectorAll('#doom .image-group img');
    doomImages.forEach(image => {
        image.style.maxWidth = '25%';
    });

    const otherImages = document.querySelectorAll('#napster .image-group img, #spongebob .image-group img');
    otherImages.forEach(image => {
        image.style.maxWidth = '40%';
    });
}

// Function to apply h2 styles
function applyH2Styles() {
    const h2s = document.querySelectorAll('section h2');
    h2s.forEach(h2 => {
        h2.style.fontSize = '28px';
        h2.style.margin = '20px 0 10px';
        h2.style.fontWeight = 'bold';
        h2.style.textTransform = 'uppercase';
    });
}

// Function to apply p styles
function applyPStyles() {
    const ps = document.querySelectorAll('section p');
    ps.forEach(p => {
        p.style.fontSize = '18px';
        p.style.lineHeight = '1.5';
        p.style.maxWidth = '800px';
        p.style.margin = '0 auto';
        p.style.textAlign = 'left';
    });
}

// Applying all styles on page load
window.onload = function () {
    applyGlobalStyles();
    applyBodyStyles();
    applyHeaderStyles();
    applyNavigationStyles();
    applyButtonStyles();
    applyMainStyles();
    applySectionStyles();
    applyImageGroupStyles();
    applyH2Styles();
    applyPStyles();
};
