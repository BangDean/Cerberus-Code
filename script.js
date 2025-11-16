// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

// Portfolio Data dengan Detail Lengkap
const portfolioProjects = [
    {
        id: 1,
        title: "Sistem Informasi Perpustakaan",
        category: "website",
        description: "Website sistem informasi perpustakaan lengkap dengan fitur peminjaman, pengembalian, dan manajemen buku",
        thumbnail: "https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Perpustakaan+System",
        images: [
            "https://via.placeholder.com/800x600/3B82F6/FFFFFF?text=Dashboard+Admin",
            "https://via.placeholder.com/800x600/2563EB/FFFFFF?text=Katalog+Buku",
            "https://via.placeholder.com/800x600/1D4ED8/FFFFFF?text=Peminjaman"
        ],
        technologies: ["PHP", "Laravel 9", "MySQL", "Bootstrap 5", "jQuery", "DataTables"],
        features: [
            "Dashboard admin interaktif dengan statistik real-time",
            "Sistem peminjaman dan pengembalian buku otomatis",
            "Notifikasi email untuk buku yang akan jatuh tempo",
            "Laporan peminjaman dalam format PDF dan Excel",
            "Multi-user dengan role admin, petugas, dan anggota"
        ],
        details: "Aplikasi dibangun menggunakan Laravel 9 dengan arsitektur MVC. Database MySQL dengan normalisasi yang baik. Implementasi AJAX untuk pengalaman user yang smooth. Responsive design untuk akses dari berbagai device."
    },
    {
        id: 2,
        title: "E-Commerce Produk Digital",
        category: "website",
        description: "Platform e-commerce untuk penjualan produk digital dengan sistem pembayaran otomatis",
        thumbnail: "https://via.placeholder.com/400x300/10B981/FFFFFF?text=E-Commerce",
        images: [
            "https://via.placeholder.com/800x600/10B981/FFFFFF?text=Homepage",
            "https://via.placeholder.com/800x600/059669/FFFFFF?text=Product+Detail",
            "https://via.placeholder.com/800x600/047857/FFFFFF?text=Shopping+Cart"
        ],
        technologies: ["React.js", "Node.js", "Express", "MongoDB", "Midtrans API", "Tailwind CSS"],
        features: [
            "Integrasi payment gateway Midtrans",
            "Download otomatis setelah pembayaran berhasil",
            "Dashboard seller untuk upload dan manage produk",
            "Review dan rating sistem",
            "Wishlist dan shopping cart"
        ],
        details: "Full-stack JavaScript application dengan React untuk frontend dan Node.js untuk backend. MongoDB sebagai database NoSQL. Real-time notification menggunakan Socket.io. Implementasi JWT untuk autentikasi."
    },
    {
        id: 3,
        title: "Dashboard Sales Analytics",
        category: "vba",
        description: "Dashboard Excel interaktif dengan VBA untuk analisis penjualan dan inventory real-time",
        thumbnail: "https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Sales+Dashboard",
        images: [
            "https://via.placeholder.com/800x600/F59E0B/FFFFFF?text=Main+Dashboard",
            "https://via.placeholder.com/800x600/D97706/FFFFFF?text=Chart+Analysis",
            "https://via.placeholder.com/800x600/B45309/FFFFFF?text=Data+Input+Form"
        ],
        technologies: ["Excel VBA", "SQL", "UserForm", "Chart Objects", "Pivot Table API"],
        features: [
            "Auto-update dashboard dengan klik button",
            "Chart dinamis (Line, Bar, Pie) berdasarkan filter",
            "Export report ke PDF otomatis",
            "Input data via UserForm dengan validasi",
            "Koneksi ke database SQL Server"
        ],
        details: "VBA Macro dengan ADO connection untuk SQL database. Implementasi Class Module untuk OOP approach. Error handling yang robust. Dashboard dengan multiple chart objects yang update otomatis berdasarkan data selection."
    },
    {
        id: 4,
        title: "Sistem Absensi Karyawan",
        category: "vba",
        description: "Aplikasi absensi lengkap dengan perhitungan gaji, lembur, dan laporan bulanan otomatis",
        thumbnail: "https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Absensi+System",
        images: [
            "https://via.placeholder.com/800x600/8B5CF6/FFFFFF?text=Input+Absensi",
            "https://via.placeholder.com/800x600/7C3AED/FFFFFF?text=Laporan+Gaji",
            "https://via.placeholder.com/800x600/6D28D9/FFFFFF?text=Export+Report"
        ],
        technologies: ["Excel VBA", "UserForm", "Excel Formula", "Conditional Formatting", "Print Area API"],
        features: [
            "Input absensi harian via barcode scanner",
            "Perhitungan gaji otomatis (pokok + lembur + tunjangan)",
            "Generate slip gaji individual per karyawan",
            "Laporan rekap bulanan dengan grafik kehadiran",
            "Export ke PDF dengan template professional"
        ],
        details: "Menggunakan Dictionary object untuk data processing cepat. UserForm dengan multiple pages untuk navigasi mudah. Implementasi custom validation untuk data integrity. Auto-backup data setiap akhir bulan."
    },
    {
        id: 5,
        title: "Smart Home Temperature Control",
        category: "iot",
        description: "Sistem kontrol suhu ruangan otomatis dengan monitoring real-time via web dan mobile app",
        thumbnail: "https://via.placeholder.com/400x300/EF4444/FFFFFF?text=Smart+Home",
        images: [
            "https://via.placeholder.com/800x600/EF4444/FFFFFF?text=Hardware+Setup",
            "https://via.placeholder.com/800x600/DC2626/FFFFFF?text=Web+Dashboard",
            "https://via.placeholder.com/800x600/B91C1C/FFFFFF?text=Mobile+App"
        ],
        technologies: ["ESP32", "DHT22 Sensor", "Relay Module", "Firebase", "Blynk", "Arduino IDE"],
        features: [
            "Monitoring suhu dan kelembaban real-time",
            "Kontrol AC/Heater otomatis berdasarkan threshold",
            "Notifikasi push ke mobile saat suhu abnormal",
            "Historical data dengan chart 7 hari terakhir",
            "Control manual via web dashboard atau mobile"
        ],
        details: "ESP32 dengan WiFi connection ke Firebase Realtime Database. DHT22 sensor untuk akurasi tinggi. Relay module 5V untuk kontrol AC. Blynk app untuk mobile monitoring. Web dashboard menggunakan HTML/CSS/JS dengan Chart.js untuk visualisasi."
    },
    {
        id: 6,
        title: "Smart Irrigation System",
        category: "iot",
        description: "Sistem penyiraman tanaman otomatis berdasarkan kelembaban tanah dengan solar panel",
        thumbnail: "https://via.placeholder.com/400x300/06B6D4/FFFFFF?text=Smart+Irrigation",
        images: [
            "https://via.placeholder.com/800x600/06B6D4/FFFFFF?text=System+Overview",
            "https://via.placeholder.com/800x600/0891B2/FFFFFF?text=Sensor+Array",
            "https://via.placeholder.com/800x600/0E7490/FFFFFF?text=Mobile+Monitor"
        ],
        technologies: ["Arduino Uno", "Soil Moisture Sensor", "Water Pump", "Solar Panel", "GSM Module", "ThingSpeak"],
        features: [
            "Otomatis menyiram saat kelembaban tanah < threshold",
            "Powered by solar panel dengan battery backup",
            "SMS alert saat tangki air habis",
            "Data logging ke ThingSpeak cloud",
            "Penjadwalan penyiraman via mobile app"
        ],
        details: "Arduino Uno dengan multiple soil moisture sensor untuk area berbeda. Water pump 12V DC controlled via relay. Solar panel 20W dengan charge controller. GSM SIM800L untuk SMS notification. ThingSpeak untuk cloud data visualization dengan API key integration."
    },
    {
        id: 7,
        title: "Branding Package Startup",
        category: "design",
        description: "Paket branding lengkap untuk startup teknologi termasuk logo, style guide, dan marketing materials",
        thumbnail: "https://via.placeholder.com/400x300/EC4899/FFFFFF?text=Startup+Branding",
        images: [
            "https://via.placeholder.com/800x600/EC4899/FFFFFF?text=Logo+Design",
            "https://via.placeholder.com/800x600/DB2777/FFFFFF?text=Brand+Guidelines",
            "https://via.placeholder.com/800x600/BE185D/FFFFFF?text=Marketing+Materials"
        ],
        technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "CorelDRAW"],
        features: [
            "Logo design dengan 3 konsep berbeda",
            "Brand guideline lengkap (warna, typography, usage)",
            "Business card & letterhead design",
            "Social media template (Instagram, Facebook, LinkedIn)",
            "Presentasi deck template"
        ],
        details: "Desain modern minimalis dengan focus pada identitas brand yang kuat. Logo versatile yang dapat digunakan di berbagai media. File delivery dalam format AI, EPS, PNG, dan SVG untuk fleksibilitas maksimal."
    },
    {
        id: 8,
        title: "Social Media Content Design",
        category: "design",
        description: "Paket konten visual untuk social media selama 1 bulan dengan konsep konsisten",
        thumbnail: "https://via.placeholder.com/400x300/F472B6/FFFFFF?text=Social+Media",
        images: [
            "https://via.placeholder.com/800x600/F472B6/FFFFFF?text=Feed+Design",
            "https://via.placeholder.com/800x600/EC4899/FFFFFF?text=Story+Template",
            "https://via.placeholder.com/800x600/DB2777/FFFFFF?text=Carousel+Post"
        ],
        technologies: ["Canva Pro", "Adobe Photoshop", "Figma", "After Effects"],
        features: [
            "30 desain feed post ready to use",
            "15 Instagram Story template editable",
            "10 carousel post informatif",
            "Konsep warna dan typography konsisten",
            "Revisi unlimited hingga approved"
        ],
        details: "Desain eye-catching yang sesuai dengan algoritma social media. Template editable sehingga client bisa customize sendiri untuk konten berikutnya. Tersedia dalam format JPG, PNG, dan source file PSD/Canva."
    }
];

let currentSlide = 0;
let currentFilter = 'all';
let filteredProjects = [...portfolioProjects];

// Initialize Portfolio
function initPortfolio() {
    filterProjects(currentFilter);
    renderSlider();
    updateDots();
}

// Filter Projects
function filterProjects(filter) {
    currentFilter = filter;
    if (filter === 'all') {
        filteredProjects = [...portfolioProjects];
    } else {
        filteredProjects = portfolioProjects.filter(project => project.category === filter);
    }
    currentSlide = 0;
    renderSlider();
    updateDots();
}

function renderSlider() {
    const slider = document.getElementById('portfolioSlider');
    slider.innerHTML = '';
    
    filteredProjects.forEach((project, index) => {
        const slide = document.createElement('div');
        slide.className = 'min-w-full px-2';
        slide.innerHTML = `
            <div class="bg-slate-700 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-slate-600 hover:border-blue-500" onclick="openModal(${project.id})">
                <div class="h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
                    <img src="${project.thumbnail}" alt="${project.title}" class="w-full h-full object-cover">
                </div>
                <div class="p-6">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-xs font-semibold text-white bg-blue-600 px-3 py-1 rounded-full uppercase">${getCategoryName(project.category)}</span>
                        <button class="text-blue-400 hover:text-blue-300 font-semibold text-sm">Lihat Detail →</button>
                    </div>
                    <h3 class="text-xl font-bold mt-2 mb-2 text-white">${project.title}</h3>
                    <p class="text-gray-300 mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.technologies.slice(0, 3).map(tech => `
                            <span class="bg-slate-600 text-gray-200 px-3 py-1 rounded text-xs font-medium">${tech}</span>
                        `).join('')}
                        ${project.technologies.length > 3 ? `<span class="bg-slate-600 text-gray-200 px-3 py-1 rounded text-xs font-medium">+${project.technologies.length - 3} more</span>` : ''}
                    </div>
                </div>
            </div>
        `;
        slider.appendChild(slide);
    });
    
    updateSliderPosition();
}

function getCategoryName(category) {
    const names = {
        'website': 'Website',
        'vba': 'VBA Excel',
        'iot': 'IoT',
        'design': 'Desain Grafis'
    };
    return names[category] || category;
}

// Update Slider Position
function updateSliderPosition() {
    const slider = document.getElementById('portfolioSlider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Navigation
document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSliderPosition();
        updateDots();
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentSlide < filteredProjects.length - 1) {
        currentSlide++;
        updateSliderPosition();
        updateDots();
    }
});

// Update Dots
function updateDots() {
    const dotsContainer = document.getElementById('dotsContainer');
    dotsContainer.innerHTML = '';
    
    filteredProjects.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = `w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-500'}`;
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSliderPosition();
            updateDots();
        });
        dotsContainer.appendChild(dot);
    });
}

// Filter Buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active', 'bg-blue-600', 'text-white');
            b.classList.add('bg-slate-700', 'text-gray-300');
        });
        
        // Add active class to clicked button
        e.target.classList.add('active', 'bg-blue-600', 'text-white');
        e.target.classList.remove('bg-slate-700', 'text-gray-300');
        
        const filter = e.target.getAttribute('data-filter');
        filterProjects(filter);
    });
});

// Modal Functions
function openModal(projectId) {
    const project = portfolioProjects.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('projectModal');
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalDetails').textContent = project.details;
    
    // Images Gallery
    const modalImages = document.getElementById('modalImages');
    modalImages.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${project.images.map(img => `
                <img src="${img}" alt="${project.title}" class="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer">
            `).join('')}
        </div>
    `;
    
    // Technologies
    const modalTechnologies = document.getElementById('modalTechnologies');
    modalTechnologies.innerHTML = project.technologies.map(tech => `
        <span class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">${tech}</span>
    `).join('');
    
    // Features
    const modalFeatures = document.getElementById('modalFeatures');
    modalFeatures.innerHTML = project.features.map(feature => `
        <li>${feature}</li>
    `).join('');
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

document.getElementById('closeModal').addEventListener('click', closeModal);

// Close modal when clicking outside
document.getElementById('projectModal').addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            mobileMenu.classList.add('hidden');
        }
    });
});

// Scroll Animation for Service Cards
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardTop < windowHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Keyboard Navigation for Slider
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentSlide > 0) {
        currentSlide--;
        updateSliderPosition();
        updateDots();
    } else if (e.key === 'ArrowRight' && currentSlide < filteredProjects.length - 1) {
        currentSlide++;
        updateSliderPosition();
        updateDots();
    }
});

// Touch/Swipe Support for Mobile
let touchStartX = 0;
let touchEndX = 0;

document.getElementById('portfolioSlider').addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.getElementById('portfolioSlider').addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50 && currentSlide < filteredProjects.length - 1) {
        currentSlide++;
        updateSliderPosition();
        updateDots();
    }
    if (touchEndX > touchStartX + 50 && currentSlide > 0) {
        currentSlide--;
        updateSliderPosition();
        updateDots();
    }
}

// Initialize on page load
initPortfolio();