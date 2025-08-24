# UrbanHeatWeb

A web application for visualizing and analyzing urban heat island effects using interactive maps and data visualization tools.

## Features

- **Interactive Maps**: 2D and 3D comparison maps for urban heat analysis
- **Data Visualization**: Charts and graphs for temperature data analysis
- **Responsive Design**: Modern, mobile-friendly user interface
- **Multiple Map Views**: Support for both 2D and 3D map comparisons

## Project Structure

```
UrbanHeatWeb/
├── index.html              # Main application entry point
├── maps/                   # Map-related files
│   ├── comparison_map.html      # 2D comparison map
│   ├── comparison_map_3d.html  # 3D comparison map
│   ├── data_config.json        # 2D map data configuration
│   └── data_config_3d.json    # 3D map data configuration
├── static/                 # Static assets
│   ├── css/               # Stylesheets
│   │   └── style.css      # Main application styles
│   ├── images/            # Image assets
│   │   └── Vancouver.jpg  # Vancouver city image
│   └── js/                # JavaScript files
│       ├── charts.js      # Chart visualization logic
│       └── main.js        # Main application logic
└── templates/             # HTML templates
    ├── 404.html          # 404 error page
    └── 500.html          # 500 error page
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/hmr-xu/UrbanHeatWeb.git
   cd UrbanHeatWeb
   ```

2. Open `index.html` in your web browser to run the application locally.

3. For development, you can use any local web server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

## Usage

- Navigate through the main interface to access different map views
- Use the 2D comparison map for detailed analysis
- Explore the 3D comparison map for immersive visualization
- View charts and data visualizations for comprehensive analysis

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Map visualization libraries
- Chart.js for data visualization

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- Project Link: [https://github.com/hmr-xu/UrbanHeatWeb](https://github.com/hmr-xu/UrbanHeatWeb)
