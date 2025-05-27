// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Dark mode toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.toggle('dark-mode');
        this.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });
    
    // Materials data
    const materialsData = [
        {
            title: "Denim & Textiles",
            description: "Old jeans, t-shirts, and sweaters make excellent uppers and linings for shoes.",
            image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            title: "Plastics",
            description: "Bottles, bags, and packaging can be melted or woven into durable shoe components.",
            image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            title: "Rubber",
            description: "Old tires and inner tubes provide perfect soles with excellent traction.",
            image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            title: "Cork",
            description: "Wine corks can be compressed to create comfortable, lightweight insoles.",
            image: "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
    ];
    
    // Tutorials data
    const tutorialsData = [
        {
            title: "Denim Slippers",
            description: "Learn to make comfortable slippers from old jeans.",
            image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            time: "2 hours"
        },
        {
            title: "Tire Sandals",
            description: "Create durable sandals using old tires and fabric scraps.",
            image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            time: "3 hours"
        },
        {
            title: "Plastic Bottle Sneakers",
            description: "Transform plastic bottles into stylish sneakers.",
            image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            time: "4 hours"
        }
    ];
    
    // Populate materials grid
    const materialsGrid = document.querySelector('.materials-grid');
    materialsData.forEach(material => {
        materialsGrid.appendChild(createCard(material));
    });
    
    // Populate tutorials grid
    const tutorialsGrid = document.querySelector('.tutorials-grid');
    tutorialsData.forEach(tutorial => {
        tutorialsGrid.appendChild(createCard(tutorial, true));
    });
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            alert(`Thanks for subscribing with ${email}! We'll keep you updated on new tutorials.`);
            this.reset();
        });
    }
    
    // Helper function to create cards
    function createCard(data, isTutorial = false) {
        const card = document.createElement('div');
        card.className = 'card';
        
        const imgDiv = document.createElement('div');
        imgDiv.className = 'card-img';
        imgDiv.style.backgroundImage = `url(${data.image})`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'card-content';
        
        const title = document.createElement('h3');
        title.textContent = data.title;
        
        const desc = document.createElement('p');
        desc.textContent = data.description;
        
        contentDiv.appendChild(title);
        contentDiv.appendChild(desc);
        
        if (isTutorial) {
            const time = document.createElement('div');
            time.className = 'tutorial-time';
            time.textContent = `⏱️ ${data.time}`;
            contentDiv.appendChild(time);
        }
        
        card.appendChild(imgDiv);
        card.appendChild(contentDiv);
        
        return card;
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});