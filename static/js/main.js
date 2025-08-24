// Urban Heat Island Mitigation Analysis Website - Static JavaScript File

class UrbanHeatWebsite {
    constructor() {
        this.currentSeason = 'SD';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupScrollAnimations();
        this.initializeStaticCharts();
    }

    setupEventListeners() {
        // Season selector
        const seasonSelect = document.getElementById('season-select');
        if (seasonSelect) {
            seasonSelect.addEventListener('change', (e) => {
                this.currentSeason = e.target.value;
                this.updateSeasonDisplay();
            });
        }

        // Navigation bar scroll effect
        window.addEventListener('scroll', () => {
            this.handleNavbarScroll();
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Map load button
        const loadMapBtn = document.getElementById('load-map-btn');
        if (loadMapBtn) {
            loadMapBtn.addEventListener('click', () => {
                this.showMapPlaceholder();
            });
        }
    }

    setupScrollAnimations() {
        // Observer options
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        // Create observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, observerOptions);

        // Observe all elements that need animation
        document.querySelectorAll('.research-card, .methodology-step, .results-card, .conclusion-card').forEach(el => {
            observer.observe(el);
        });
    }

    handleNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }

    initializeStaticCharts() {
        this.createUHIDistributionChart();
        this.createSeasonalPatternChart();
    }

    createUHIDistributionChart() {
        const ctx = document.getElementById('uhi-distribution-chart');
        if (!ctx) return;

        // Create chart using static data
        const uhiData = [150, 280, 420, 320, 180];

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['-10°C ~ -5°C', '-5°C ~ 0°C', '0°C ~ 2°C', '2°C ~ 5°C', '5°C ~ 10°C'],
                datasets: [{
                    label: 'Number of Areas',
                    data: uhiData,
                    backgroundColor: [
                        'rgba(0, 123, 255, 0.8)',
                        'rgba(40, 167, 69, 0.8)',
                        'rgba(255, 193, 7, 0.8)',
                        'rgba(255, 108, 0, 0.8)',
                        'rgba(220, 53, 69, 0.8)'
                    ],
                    borderColor: [
                        'rgba(0, 123, 255, 1)',
                        'rgba(40, 167, 69, 1)',
                        'rgba(255, 193, 7, 1)',
                        'rgba(255, 108, 0, 1)',
                        'rgba(220, 53, 69, 1)'
                    ],
                    borderWidth: 2,
                    borderRadius: 8,
                    borderSkipped: false,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: 'white',
                        bodyColor: 'white',
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        borderWidth: 1,
                        cornerRadius: 8,
                        displayColors: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)',
                            drawBorder: false
                        },
                        ticks: {
                            color: '#6c757d',
                            font: {
                                size: 12
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#6c757d',
                            font: {
                                size: 11
                            }
                        }
                    }
                }
            }
        });
    }

    createSeasonalPatternChart() {
        const ctx = document.getElementById('seasonal-pattern-chart');
        if (!ctx) return;

        // Create chart using static data
        const seasonalData = {
            summerDay: [3.2, 3.4, 3.6, 3.8, 4.0, 4.2, 4.4, 4.2, 4.0, 3.8, 3.6, 3.4],
            summerNight: [2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.5, 2.4, 2.3, 2.2, 2.1],
            winterDay: [1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.7, 1.6, 1.5, 1.4, 1.3],
            winterNight: [0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.3, 1.2, 1.1, 1.0, 0.9]
        };

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Summer Day',
                        data: seasonalData.summerDay,
                        borderColor: 'rgba(220, 53, 69, 1)',
                        backgroundColor: 'rgba(220, 53, 69, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Summer Night',
                        data: seasonalData.summerNight,
                        borderColor: 'rgba(255, 108, 0, 1)',
                        backgroundColor: 'rgba(255, 108, 0, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Winter Day',
                        data: seasonalData.winterDay,
                        borderColor: 'rgba(0, 123, 255, 1)',
                        backgroundColor: 'rgba(0, 123, 255, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Winter Night',
                        data: seasonalData.winterNight,
                        borderColor: 'rgba(40, 167, 69, 1)',
                        backgroundColor: 'rgba(40, 167, 69, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 20,
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: 'white',
                        bodyColor: 'white',
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        borderWidth: 1,
                        cornerRadius: 8
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)',
                            drawBorder: false
                        },
                        ticks: {
                            color: '#6c757d',
                            font: {
                                size: 12
                            }
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)',
                            drawBorder: false
                        },
                        ticks: {
                            color: '#6c757d',
                            font: {
                                size: 11
                            }
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }

    updateSeasonDisplay() {
        // Update season display information
        const seasonNames = {
            'SD': 'Summer Day',
            'SN': 'Summer Night',
            'WD': 'Winter Day',
            'WN': 'Winter Night'
        };
        
        const currentSeasonName = seasonNames[this.currentSeason];
        console.log(`Current Season: ${currentSeasonName}`);
        
        // Can add more season-related display update logic here
        this.updateSeasonalInfo(currentSeasonName);
    }

    updateSeasonalInfo(seasonName) {
        // Update season information display on the page
        const seasonInfoElements = document.querySelectorAll('.season-info');
        seasonInfoElements.forEach(element => {
            element.textContent = seasonName;
        });
    }

    showMapPlaceholder() {
        // Show map placeholder information
        const mapPlaceholder = document.getElementById('map-placeholder');
        const interactiveMap = document.getElementById('interactive-map');
        const loadMapBtn = document.getElementById('load-map-btn');

        if (!mapPlaceholder || !interactiveMap || !loadMapBtn) return;

        // Update button status
        loadMapBtn.innerHTML = '<i class="fas fa-map-marked-alt me-2"></i>Map Loaded';
        loadMapBtn.classList.remove('btn-primary');
        loadMapBtn.classList.add('btn-success');

        // Show map placeholder
        mapPlaceholder.style.display = 'flex';
        interactiveMap.style.display = 'none';

        // Add map information
        this.addMapInformation();
    }

    addMapInformation() {
        // Add map-related information
        const mapPlaceholder = document.getElementById('map-placeholder');
        if (!mapPlaceholder) return;

        const mapInfo = document.createElement('div');
        mapInfo.className = 'map-info mt-4';
        mapInfo.innerHTML = `
            <div class="alert alert-info">
                <h6><i class="fas fa-info-circle me-2"></i>Map Information</h6>
                <p><strong>Study Area:</strong> 1,660 Dissemination Areas in Vancouver Region</p>
                <p><strong>Data Source:</strong> Satellite Remote Sensing, GIS, Census</p>
                <p><strong>Update Time:</strong> 2024</p>
                <p><strong>Current Season:</strong> <span class="season-info">${this.getSeasonName(this.currentSeason)}</span></p>
            </div>
        `;

        // Check if map information already exists
        const existingInfo = mapPlaceholder.querySelector('.map-info');
        if (!existingInfo) {
            mapPlaceholder.appendChild(mapInfo);
        }
    }

    getSeasonName(season) {
        const seasonNames = {
            'SD': 'Summer Day',
            'SN': 'Summer Night',
            'WD': 'Winter Day',
            'WN': 'Winter Night'
        };
        return seasonNames[season] || season;
    }

    // Utility functions
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
        notification.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 300px;';
        notification.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;

        document.body.appendChild(notification);

        // Auto-remove notification
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    // Data export functionality (static data)
    exportData() {
        const data = {
            season: this.currentSeason,
            timestamp: new Date().toISOString(),
            project: 'Urban Heat Island Mitigation Analysis',
            location: 'Vancouver Region',
            areas: 1660,
            features: 8
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `urban_heat_island_info_${this.currentSeason}_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        this.showNotification('Project information exported successfully!', 'success');
    }

    // Fullscreen functionality
    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }
}

// Initialize after page loads
document.addEventListener('DOMContentLoaded', () => {
    // Initialize website
    window.urbanHeatWebsite = new UrbanHeatWebsite();

    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case 'e':
                    e.preventDefault();
                    window.urbanHeatWebsite.exportData();
                    break;
                case 'f':
                    e.preventDefault();
                    window.urbanHeatWebsite.toggleFullscreen();
                    break;
                case 'm':
                    e.preventDefault();
                    document.getElementById('load-map-btn')?.click();
                    break;
            }
        }
    });

    // Add performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`Page load time: ${loadTime}ms`);
        });
    }

    // Add error handling
    window.addEventListener('error', (e) => {
        console.error('Page error:', e.error);
        window.urbanHeatWebsite?.showNotification('Page error occurred, please refresh and try again', 'danger');
    });

    console.log('Urban Heat Island static website initialization completed');
});

// Add some global utility functions
window.UrbanHeatUtils = {
    // Format numbers
    formatNumber: (num, decimals = 2) => {
        return Number(num).toLocaleString('en-US', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        });
    },

    // Format temperature
    formatTemperature: (temp) => {
        return `${temp > 0 ? '+' : ''}${temp.toFixed(1)}°C`;
    },

    // Get current time
    getCurrentTime: () => {
        return new Date().toLocaleString('en-US');
    },

    // Copy to clipboard
    copyToClipboard: async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            console.error('Copy failed:', err);
            return false;
        }
    }
};
