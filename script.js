function plancksLaw(wavelength, temperature) {
    const h = 6.62607015e-34;  // Planck's constant (J*s)
    const c = 2.99792458e8;    // Speed of light (m/s)
    const k = 1.38064852e-23;  // Boltzmann constant (J/K)

    // Calculate the spectral radiance
    const exponent = (h * c) / (wavelength * k * temperature);
    const intensity = (2 * h * c ** 2) / (wavelength ** 5) * (1 / (Math.exp(exponent) - 1));

    return intensity;
}
// Define the temperature and wavelength range
const temperature = 5000;  // Temperature in Kelvin
const wavelengths = Array.from({ length: 1000 }, (_, i) => i / 1000 * 1e-5);  // Wavelength range from 1nm to 10µm

// Calculate the spectral radiance for the given temperature
const intensities = wavelengths.map(w => plancksLaw(w, temperature));

// Create the Plotly chart
const data = [{
    x: wavelengths.map(w => w * 1e9),
    y: intensities,
    type: 'scatter',
    mode: 'lines',
    line: {
        color: 'blue',
    },
}];
const layout = {
    title: `Planck's Law of Radiation at ${temperature}K`,
    xaxis: {
        title: 'Wavelength (nm)',
    },
    yaxis: {
        title: 'Intensity (W/m^2/sr/nm)',
    },
};
Plotly.newPlot('chart', data, layout);
