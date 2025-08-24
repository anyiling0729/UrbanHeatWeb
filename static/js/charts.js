// Urban Heat Island Data Visualization Charts

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all charts
    setTimeout(() => {
        initUHIHeatmapChart();
        initSeasonalComparisonChart();
        initModelPerformanceChart();
        initFeatureImportanceChart();
        initInterventionEffectChart();
        initSocialEquityChart();
        initFairnessRankingChart();
    }, 100);
    
    // Listen for window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Resize all charts
            Chart.helpers.each(Chart.instances, function(instance) {
                instance.resize();
            });
        }, 250);
    });
});

// UHI Distribution Heatmap
function initUHIHeatmapChart() {
    const ctx = document.getElementById('uhiHeatmapChart');
    if (!ctx) return;

    // Simulate UHI data distribution (based on paper data)
    const uhiData = generateUHIHeatmapData();
    
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'UHI Value Distribution',
                data: uhiData,
                backgroundColor: function(context) {
                    const value = context.parsed.y;
                    if (value < -5) return 'rgba(0, 100, 255, 0.8)';      // Dark blue: Low temperature
                    else if (value < 0) return 'rgba(0, 150, 255, 0.8)';   // Blue: Medium-low temperature
                    else if (value < 2) return 'rgba(255, 200, 0, 0.8)';   // Yellow: Medium temperature
                    else return 'rgba(255, 100, 0, 0.8)';                  // Red: High temperature
                },
                borderColor: 'rgba(255, 255, 255, 0.8)',
                borderWidth: 1,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'nearest'
            },
            plugins: {
                title: {
                    display: true,
                    text: 'UHI Distribution Heatmap (-10.28°C to +4.96°C)',
                    font: { size: 16, weight: 'bold' },
                    padding: 20
                },
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Longitude'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'UHI Value (°C)'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                }
            }
        }
    });
}

// Seasonal Comparison Chart
function initSeasonalComparisonChart() {
    const ctx = document.getElementById('seasonalComparisonChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['0%', '20%', '40%', '60%', '80%', '100%'],
            datasets: [
                {
                    label: 'Summer Daytime (SD)',
                    data: [-10.28, -8.5, -5.2, -1.8, 2.1, 4.96],
                    borderColor: '#1a1a1a',
                    backgroundColor: 'rgba(26, 26, 26, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Summer Nighttime (SN)',
                    data: [-1.24, -0.8, -0.2, 0.3, 1.1, 1.92],
                    borderColor: '#666666',
                    backgroundColor: 'rgba(102, 102, 102, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Winter Daytime (WD)',
                    data: [-2.72, -2.1, -1.2, -0.3, 0.8, 1.71],
                    borderColor: '#999999',
                    backgroundColor: 'rgba(153, 153, 153, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Winter Nighttime (WN)',
                    data: [-1.71, -1.2, -0.5, 0.2, 1.1, 2.31],
                    borderColor: '#cccccc',
                    backgroundColor: 'rgba(204, 204, 204, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            plugins: {
                title: {
                    display: true,
                    text: 'UHI Distribution Comparison for Four Seasonal Scenarios',
                    font: { size: 14, weight: 'bold' },
                    padding: 20
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        padding: 15,
                        boxWidth: 12
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Percentile'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'UHI Value (°C)'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                }
            }
        }
    });
}

// Model Performance Comparison Chart
function initModelPerformanceChart() {
    const ctx = document.getElementById('modelPerformanceChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Summer Daytime', 'Summer Nighttime', 'Winter Daytime', 'Winter Nighttime'],
            datasets: [{
                label: 'Test R²',
                data: [0.7873, 0.5348, 0.6060, 0.6748],
                backgroundColor: [
                    'rgba(26, 26, 26, 0.8)',
                    'rgba(102, 102, 102, 0.8)',
                    'rgba(153, 153, 153, 0.8)',
                    'rgba(204, 204, 204, 0.8)'
                ],
                borderColor: [
                    'rgba(26, 26, 26, 1)',
                    'rgba(102, 102, 102, 1)',
                    'rgba(153, 153, 153, 1)',
                    'rgba(204, 204, 204, 1)'
                ],
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Model Performance for Different Seasonal Scenarios (R²)',
                    font: { size: 14, weight: 'bold' },
                    padding: 20
                },
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `R² Value: ${context.parsed.y.toFixed(4)}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1.0,
                    title: {
                        display: true,
                        text: 'R² Value'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Seasonal Scenarios'
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Feature Importance Analysis Chart
function initFeatureImportanceChart() {
    const ctx = document.getElementById('featureImportanceChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['NDVI (Vegetation Index)', 'BCR (Building Coverage Rate)', 'Water Distance', 'Building Height', 'POI Density', 'Road Density', 'Waterway Distance'],
            datasets: [{
                data: [25, 20, 18, 15, 12, 8, 2],
                backgroundColor: [
                    '#1a1a1a',
                    '#333333',
                    '#666666',
                    '#999999',
                    '#cccccc',
                    '#e6e6e6',
                    '#f5f5f5'
                ],
                borderColor: '#ffffff',
                borderWidth: 3,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Environmental Feature Importance Distribution',
                    font: { size: 16, weight: 'bold' },
                    padding: 20
                },
                legend: {
                    position: 'right',
                    labels: {
                        usePointStyle: true,
                        padding: 15,
                        font: { size: 11 },
                        boxWidth: 15
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const percentage = ((value / context.dataset.data.reduce((a, b) => a + b, 0)) * 100).toFixed(1);
                            return `${label}: ${percentage}%`;
                        }
                    }
                }
            },
            cutout: '60%',
            layout: {
                padding: 10
            }
        }
    });
}

// Intervention Strategy Effect Analysis Chart
function initInterventionEffectChart() {
    const ctx = document.getElementById('interventionEffectChart');
    if (!ctx) return;

    // Generate intervention strategy data
    const scales = Array.from({length: 41}, (_, i) => (i * 0.05).toFixed(2));
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: scales.filter((_, i) => i % 5 === 0), // Show one label every 5 points
            datasets: [
                {
                    label: 'NDVI Enhancement',
                    data: generateInterventionData(2.95, 0.8),
                    borderColor: '#1a1a1a',
                    backgroundColor: 'rgba(26, 26, 26, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Water Proximity',
                    data: generateInterventionData(1.46, 0.6),
                    borderColor: '#666666',
                    backgroundColor: 'rgba(102, 102, 102, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Building Coverage Adjustment',
                    data: generateInterventionData(1.04, 0.7),
                    borderColor: '#999999',
                    backgroundColor: 'rgba(153, 153, 153, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Road Density Adjustment',
                    data: generateInterventionData(1.03, 0.5),
                    borderColor: '#cccccc',
                    backgroundColor: 'rgba(204, 204, 204, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Intervention Strategy Effect Analysis (0.0x - 2.0x Scaling)',
                    font: { size: 16, weight: 'bold' },
                    padding: 20
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        padding: 15,
                        boxWidth: 12
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Scaling Factor'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Cooling Effect (°C)'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                }
            }
        }
    });
}

// Social Group UHI Exposure Disparity Chart
function initSocialEquityChart() {
    const ctx = document.getElementById('socialEquityChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Visible Minorities', 'No Educational Certificate', 'Low Income Population', 'Unemployment Rate'],
            datasets: [
                {
                    label: 'Summer Daytime',
                    data: [0.42, 0.41, -0.15, 0.11],
                    backgroundColor: 'rgba(26, 26, 26, 0.8)',
                    borderColor: 'rgba(26, 26, 26, 1)',
                    borderWidth: 2,
                    borderRadius: 8
                },
                {
                    label: 'Summer Nighttime',
                    data: [0.08, 0.005, 0.23, 0.001],
                    backgroundColor: 'rgba(102, 102, 102, 0.8)',
                    borderColor: 'rgba(102, 102, 102, 1)',
                    borderWidth: 2,
                    borderRadius: 8
                },
                {
                    label: 'Winter Daytime',
                    data: [0.28, 0.34, 0.01, 0.10],
                    backgroundColor: 'rgba(153, 153, 153, 0.8)',
                    borderColor: 'rgba(153, 153, 153, 1)',
                    borderWidth: 2,
                    borderRadius: 8
                },
                {
                    label: 'Winter Nighttime',
                    data: [0.17, -0.03, 0.32, 0.05],
                    backgroundColor: 'rgba(204, 204, 204, 0.8)',
                    borderColor: 'rgba(204, 204, 204, 1)',
                    borderWidth: 2,
                    borderRadius: 8
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Social Group UHI Exposure Correlation',
                    font: { size: 14, weight: 'bold' },
                    padding: 20
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        padding: 15,
                        boxWidth: 12
                    }
                }
            },
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Correlation Coefficient'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Sociodemographic Indicators'
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Intervention Strategy Fairness Ranking Chart
function initFairnessRankingChart() {
    const ctx = document.getElementById('fairnessRankingChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['NDVI Enhancement', 'Water Proximity', 'Road Density Adjustment', 'Building Coverage Adjustment', 'Building Height Increase'],
            datasets: [{
                label: 'Fairness Score (MGD)',
                data: [0.15, 0.22, 0.45, 0.52, 0.78],
                backgroundColor: [
                    'rgba(26, 26, 26, 0.8)',
                    'rgba(102, 102, 102, 0.8)',
                    'rgba(153, 153, 153, 0.8)',
                    'rgba(204, 204, 204, 0.8)',
                    'rgba(230, 230, 230, 0.8)'
                ],
                borderColor: [
                    'rgba(26, 26, 26, 1)',
                    'rgba(102, 102, 102, 1)',
                    'rgba(153, 153, 153, 1)',
                    'rgba(204, 204, 204, 1)',
                    'rgba(230, 230, 230, 1)'
                ],
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            interaction: {
                intersect: false,
                mode: 'nearest'
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Intervention Strategy Fairness Ranking (Lower MGD Values = More Fair)',
                    font: { size: 14, weight: 'bold' },
                    padding: 20
                },
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `MGD Value: ${context.parsed.x.toFixed(2)}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 1.0,
                    title: {
                        display: true,
                        text: 'MGD Value'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Intervention Strategies'
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Helper function: Generate UHI heatmap data
function generateUHIHeatmapData() {
    const data = [];
    for (let i = 0; i < 1660; i++) {
        data.push({
            x: Math.random() * 100, // Simulate longitude
            y: -10.28 + Math.random() * 15.24 // Simulate UHI value range
        });
    }
    return data;
}

// Helper function: Generate intervention strategy data
function generateInterventionData(maxEffect, curve) {
    const data = [];
    for (let i = 0; i <= 40; i++) {
        const scale = i * 0.05;
        const effect = maxEffect * Math.pow(scale, curve);
        data.push(effect);
    }
    return data;
}
