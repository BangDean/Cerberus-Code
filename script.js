// ========================================
// SCROLL ANIMATION SYSTEM
// ========================================

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
        } else {
            entry.target.classList.remove('section-visible');
        }
    });
};

const sectionObserver = new IntersectionObserver(observerCallback, observerOptions);

const sections = document.querySelectorAll('.section-animate');
sections.forEach(section => {
    sectionObserver.observe(section);
});

// ========================================
// MOBILE MENU
// ========================================

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// ========================================
// PORTFOLIO DATA
// ========================================

const portfolioProjects = [
    {
        id: 1,
        title: "Sistem Informasi Perpustakaan",
        category: "website",
        description: "Website sistem informasi perpustakaan lengkap untuk skripsi dengan fitur peminjaman, pengembalian, dan manajemen buku",
        thumbnail: "https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Sistem+Perpustakaan",
        images: [
            "https://via.placeholder.com/800x600/3B82F6/FFFFFF?text=Dashboard+Admin",
            "https://via.placeholder.com/800x600/2563EB/FFFFFF?text=Katalog+Buku",
            "https://via.placeholder.com/800x600/1D4ED8/FFFFFF?text=Sistem+Peminjaman"
        ],
        technologies: ["PHP", "Laravel 9", "MySQL", "Bootstrap 5", "jQuery", "DataTables"],
        features: [
            "Dashboard admin interaktif dengan statistik real-time",
            "Sistem peminjaman dan pengembalian buku otomatis",
            "Notifikasi email untuk pengingat jatuh tempo",
            "Laporan peminjaman dalam format PDF dan Excel",
            "Multi-user dengan role admin, petugas, dan anggota"
        ],
        details: "Dibangun menggunakan Laravel 9 dengan arsitektur MVC. Database MySQL dengan normalisasi yang tepat. Implementasi AJAX untuk pengalaman pengguna yang smooth. Desain responsif untuk akses dari berbagai perangkat."
    },
    {
        id: 2,
        title: "Toko Online Produk Digital",
        category: "website",
        description: "Platform e-commerce untuk penjualan produk digital dengan sistem pembayaran otomatis dan download instan",
        thumbnail: "https://via.placeholder.com/400x300/10B981/FFFFFF?text=Toko+Online",
        images: [
            "https://via.placeholder.com/800x600/10B981/FFFFFF?text=Halaman+Utama",
            "https://via.placeholder.com/800x600/059669/FFFFFF?text=Detail+Produk",
            "https://via.placeholder.com/800x600/047857/FFFFFF?text=Keranjang"
        ],
        technologies: ["React.js", "Node.js", "Express", "MongoDB", "Midtrans API", "Tailwind CSS"],
        features: [
            "Integrasi payment gateway Midtrans",
            "Download otomatis setelah pembayaran berhasil",
            "Dashboard seller untuk upload dan kelola produk",
            "Sistem review dan rating produk",
            "Wishlist dan keranjang belanja"
        ],
        details: "Aplikasi full-stack JavaScript dengan React di frontend dan Node.js di backend. MongoDB sebagai database NoSQL. Notifikasi real-time menggunakan Socket.io. Implementasi JWT untuk autentikasi."
    },
    {
        id: 3,
        title: "Dashboard Analisis Penjualan",
        category: "vba",
        description: "Dashboard Excel interaktif dengan VBA untuk analisis penjualan dan inventori real-time",
        thumbnail: "https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Dashboard+Penjualan",
        images: [
            "https://via.placeholder.com/800x600/F59E0B/FFFFFF?text=Dashboard+Utama",
            "https://via.placeholder.com/800x600/D97706/FFFFFF?text=Analisis+Chart",
            "https://via.placeholder.com/800x600/B45309/FFFFFF?text=Form+Input"
        ],
        technologies: ["Excel VBA", "SQL", "UserForm", "Chart Objects", "Pivot Table API"],
        features: [
            "Dashboard auto-update dengan klik tombol",
            "Chart dinamis (Line, Bar, Pie) berdasarkan filter",
            "Export laporan PDF otomatis",
            "Input data via UserForm dengan validasi",
            "Koneksi database SQL Server"
        ],
        details: "Macro VBA dengan koneksi ADO ke database SQL. Implementasi Class Module untuk pendekatan OOP. Error handling yang robust. Dashboard dengan multiple chart objects yang auto-update berdasarkan seleksi data."
    },
    {
        id: 4,
        title: "Sistem Absensi Karyawan",
        category: "vba",
        description: "Aplikasi absensi lengkap dengan perhitungan gaji, lembur, dan laporan bulanan otomatis",
        thumbnail: "https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Sistem+Absensi",
        images: [
            "https://via.placeholder.com/800x600/8B5CF6/FFFFFF?text=Input+Absensi",
            "https://via.placeholder.com/800x600/7C3AED/FFFFFF?text=Laporan+Gaji",
            "https://via.placeholder.com/800x600/6D28D9/FFFFFF?text=Export+Laporan"
        ],
        technologies: ["Excel VBA", "UserForm", "Excel Formula", "Conditional Formatting", "Print Area API"],
        features: [
            "Input absensi harian via barcode scanner",
            "Perhitungan gaji otomatis (pokok + lembur + tunjangan)",
            "Generate slip gaji per karyawan",
            "Rekap bulanan dengan chart kehadiran",
            "Export PDF dengan template profesional"
        ],
        details: "Menggunakan Dictionary object untuk pemrosesan data cepat. UserForm dengan multiple pages untuk navigasi mudah. Implementasi validasi custom untuk integritas data. Auto-backup data di akhir bulan."
    },
    {
        id: 5,
        title: "Smart Home Kontrol Suhu",
        category: "iot",
        description: "Sistem kontrol suhu ruangan otomatis dengan monitoring real-time via web dan mobile",
        thumbnail: "https://via.placeholder.com/400x300/EF4444/FFFFFF?text=Smart+Home",
        images: [
            "https://via.placeholder.com/800x600/EF4444/FFFFFF?text=Hardware+Setup",
            "https://via.placeholder.com/800x600/DC2626/FFFFFF?text=Dashboard+Web",
            "https://via.placeholder.com/800x600/B91C1C/FFFFFF?text=Aplikasi+Mobile"
        ],
        technologies: ["ESP32", "DHT22 Sensor", "Relay Module", "Firebase", "Blynk", "Arduino IDE"],
        features: [
            "Monitoring suhu dan kelembaban real-time",
            "Kontrol AC/Heater otomatis berdasarkan threshold",
            "Push notification ke mobile saat suhu abnormal",
            "Data historis dengan chart 7 hari",
            "Kontrol manual via dashboard web atau mobile"
        ],
        details: "ESP32 dengan koneksi WiFi ke Firebase Realtime Database. Sensor DHT22 untuk akurasi tinggi. Relay module 5V untuk kontrol AC. Aplikasi Blynk untuk monitoring mobile. Dashboard web menggunakan HTML/CSS/JS dengan Chart.js untuk visualisasi."
    },
    {
        id: 6,
        title: "Smart Irrigation System",
        category: "iot",
        description: "Sistem penyiraman tanaman otomatis berdasarkan kelembaban tanah dengan tenaga solar panel",
        thumbnail: "https://via.placeholder.com/400x300/06B6D4/FFFFFF?text=Smart+Irrigation",
        images: [
            "https://via.placeholder.com/800x600/06B6D4/FFFFFF?text=Sistem+Overview",
            "https://via.placeholder.com/800x600/0891B2/FFFFFF?text=Array+Sensor",
            "https://via.placeholder.com/800x600/0E7490/FFFFFF?text=Monitoring+Mobile"
        ],
        technologies: ["Arduino Uno", "Soil Moisture Sensor", "Water Pump", "Solar Panel", "GSM Module", "ThingSpeak"],
        features: [
            "Penyiraman otomatis saat kelembaban tanah < threshold",
            "Powered by solar panel dengan backup battery",
            "SMS alert saat tangki air habis",
            "Data logging ke cloud ThingSpeak",
            "Jadwal penyiraman via mobile app"
        ],
        details: "Arduino Uno dengan multiple soil moisture sensor untuk berbagai area. Pompa air DC 12V dikontrol via relay. Solar panel 20W dengan charge controller. GSM SIM800L untuk notifikasi SMS. ThingSpeak untuk visualisasi data cloud dengan integrasi API key."
    },
    {
        id: 7,
        title: "Branding Package Startup",
        category: "design",
        description: "Paket branding lengkap untuk startup teknologi termasuk logo, style guide, dan material marketing",
        thumbnail: "https://via.placeholder.com/400x300/EC4899/FFFFFF?text=Startup+Branding",
        images: [
            "https://via.placeholder.com/800x600/EC4899/FFFFFF?text=Logo+Design",
            "https://via.placeholder.com/800x600/DB2777/FFFFFF?text=Brand+Guidelines",
            "https://via.placeholder.com/800x600/BE185D/FFFFFF?text=Marketing+Materials"
        ],
        technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "CorelDRAW"],
        features: [
            "Desain logo dengan 3 konsep berbeda",
            "Brand guidelines lengkap (warna, tipografi, usage)",
            "Desain kartu nama & kop surat",
            "Template social media (Instagram, Facebook, LinkedIn)",
            "Template presentation deck"
        ],
        details: "Desain modern minimalis dengan fokus pada identitas brand yang kuat. Logo versatile yang bisa digunakan di berbagai media. File delivery dalam format AI, EPS, PNG, dan SVG untuk fleksibilitas maksimal."
    },
    {
        id: 8,
        title: "Desain Konten Social Media",
        category: "design",
        description: "Paket konten visual untuk social media selama 1 bulan dengan konsep yang konsisten",
        thumbnail: "https://via.placeholder.com/400x300/F472B6/FFFFFF?text=Social+Media",
        images: [
            "https://via.placeholder.com/800x600/F472B6/FFFFFF?text=Feed+Design",
            "https://via.placeholder.com/800x600/EC4899/FFFFFF?text=Story+Template",
            "https://via.placeholder.com/800x600/DB2777/FFFFFF?text=Carousel+Post"
        ],
        technologies: ["Canva Pro", "Adobe Photoshop", "Figma", "After Effects"],
        features: [
            "30 desain feed post siap posting",
            "15 template Instagram Story editable",
            "10 carousel post informatif",
            "Konsep warna dan tipografi konsisten",
            "Revisi unlimited hingga approved"
        ],
        details: "Desain eye-catching yang sesuai dengan algoritma social media. Template editable untuk client bisa custom untuk konten selanjutnya. Format file tersedia dalam JPG, PNG, dan source file (PSD/Canva)."
    }
];

// ========================================
// PORTFOLIO SLIDER
// ========================================

let currentSlide = 0;
let currentFilter = 'all';
let filteredProjects = [...portfolioProjects];

function initPortfolio() {
    filterProjects(currentFilter);
    renderSlider();
    updateDots();
}

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
            <div class="portfolio-card bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer border border-gray-200" onclick="openModal(${project.id})">
                <div class="h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
                    <img src="${project.thumbnail}" alt="${project.title}" class="w-full h-full object-cover">
                </div>
                <div class="p-6">
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase">${getCategoryName(project.category)}</span>
                        <button class="text-blue-600 hover:text-blue-700 font-medium text-sm">Lihat Detail →</button>
                    </div>
                    <h3 class="text-xl font-semibold mt-2 mb-2 text-gray-900">${project.title}</h3>
                    <p class="text-gray-600 mb-4 text-sm leading-relaxed">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.technologies.slice(0, 3).map(tech => `
                            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs font-medium">${tech}</span>
                        `).join('')}
                        ${project.technologies.length > 3 ? `<span class="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs font-medium">+${project.technologies.length - 3} lagi</span>` : ''}
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
        dot.className = `w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300'}`;
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
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active', 'bg-blue-600', 'text-white');
            b.classList.add('bg-white', 'text-gray-700', 'border', 'border-gray-200');
        });
        
        e.target.classList.add('active', 'bg-blue-600', 'text-white');
        e.target.classList.remove('bg-white', 'text-gray-700', 'border', 'border-gray-200');
        
        const filter = e.target.getAttribute('data-filter');
        filterProjects(filter);
    });
});

// ========================================
// MODAL FUNCTIONS
// ========================================

function openModal(projectId) {
    const project = portfolioProjects.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('projectModal');
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalDetails').textContent = project.details;
    
    const modalImages = document.getElementById('modalImages');
    modalImages.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${project.images.map(img => `
                <img src="${img}" alt="${project.title}" class="w-full h-48 object-cover rounded-lg border border-gray-200">
            `).join('')}
        </div>
    `;
    
    const modalTechnologies = document.getElementById('modalTechnologies');
    modalTechnologies.innerHTML = project.technologies.map(tech => `
        <span class="bg-blue-100 text-blue-700 px-4 py-2 rounded-md text-sm font-medium">${tech}</span>
    `).join('');
    
    const modalFeatures = document.getElementById('modalFeatures');
    modalFeatures.innerHTML = project.features.map(feature => `
        <li class="text-sm leading-relaxed">${feature}</li>
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

document.getElementById('projectModal').addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ========================================
// FAQ ACCORDION
// ========================================

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isActive = question.classList.contains('active');
        
        // Close all other FAQs
        document.querySelectorAll('.faq-question').forEach(q => {
            q.classList.remove('active');
            const otherAnswer = q.nextElementSibling;
            otherAnswer.classList.remove('show');
            otherAnswer.classList.add('hidden');
        });
        
        // Toggle current FAQ
        if (!isActive) {
            question.classList.add('active');
            answer.classList.remove('hidden');
            answer.classList.add('show');
        }
    });
});
// ========================================
// SMOOTH SCROLL
// ========================================

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

// ========================================
// KEYBOARD NAVIGATION FOR SLIDER
// ========================================

document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('projectModal');
    if (!modal.classList.contains('hidden')) return;
    
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

// ========================================
// TOUCH/SWIPE SUPPORT FOR MOBILE
// ========================================

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

// ========================================
// INITIALIZE ON PAGE LOAD
// ========================================

window.addEventListener('DOMContentLoaded', () => {
    initPortfolio();
    
    const homeSection = document.getElementById('home');
    if (homeSection) {
        setTimeout(() => {
            homeSection.classList.add('section-visible');
        }, 100);
    }
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

let lastScroll = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }
    
    lastScroll = currentScroll;
});