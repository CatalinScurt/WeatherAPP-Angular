import { Theme } from 'src/app/interfaces/Theme'

export const day: Theme = {
    clear: {
        '--background-cover': 'url(/assets/images/blur-day-clear.jpg)',
        '--background-image': 'url(/assets/images/day-clear.jpg)',
        '--background-position': 'top',
        '--primary-color': '#000000',
        '--secondary-color': '#ffffff',
        '--box-shadow-shape': '1px 10px 20px black',
        '--background-color': 'rgba(0, 0, 0, 0.15)'
    },
    rain: {
        '--background-cover': 'url(/assets/images/blur-day-rain.jpg)',
        '--background-image': 'url(/assets/images/day-rain.jpg)',
        '--background-position': 'center',
        '--primary-color': '#000000',
        '--secondary-color': '#ffffff',
        '--box-shadow-shape': '1px 10px 20px black',
        '--background-color': 'rgba(0, 0, 0, 0)'
    },
    cloudy: {
        '--background-cover': 'url(/assets/images/blur-day-cloudy.jpg)',
        '--background-image': 'url(/assets/images/day-cloudy.jpg)',
        '--background-position': 'center',
        '--primary-color': '#000000',
        '--secondary-color': '#ffffff',
        '--box-shadow-shape': '1px 10px 20px black',
        '--background-color': 'rgba(0, 0, 0, 0.15)'
    },
    snow: {
        '--background-cover': 'url(/assets/images/blur-day-snow.jpg)',
        '--background-image': 'url(/assets/images/day-snow.jpg)',
        '--background-position': 'bottom',
        '--primary-color': '#000000',
        '--secondary-color': '#ffffff',
        '--box-shadow-shape': '1px 10px 20px black',
        '--background-color': 'rgba(0, 0, 0, 0.15)'
    }
}

export const night: Theme = {
    clear: {
        '--background-cover': 'url(/assets/images/blur-night-clear.jpg)',
        '--background-image': 'url(/assets/images/night-clear.jpg)',
        '--background-position': 'top',
        '--primary-color': '#ffffff',
        '--secondary-color': '#000000',
        '--box-shadow-shape': '1px 10px 20px rgba(255, 255, 255, 0.5)',
        '--background-color': 'rgba(0, 0, 0, 0.15)'
    },
    rain: {
        '--background-cover': 'url(/assets/images/blur-night-rain.jpg)',
        '--background-image': 'url(/assets/images/night-rain.jpg)',
        '--background-position': 'center',
        '--primary-color': '#ffffff',
        '--secondary-color': '#000000',
        '--box-shadow-shape': '1px 10px 20px rgba(255, 255, 255, 0.5)',
        '--background-color': 'rgba(0, 0, 0, 0.15)'
    },
    cloudy: {
        '--background-cover': 'url(/assets/images/blur-night-cloudy.jpg)',
        '--background-image': 'url(/assets/images/night-cloudy.jpg)',
        '--background-position': 'bottom',
        '--primary-color': '#ffffff',
        '--secondary-color': '#000000',
        '--box-shadow-shape': '1px 10px 20px rgba(255, 255, 255, 0.5)',
        '--background-color': 'rgba(0, 0, 0, 0.15)'
    },
    snow: {
        '--background-cover': 'url(/assets/images/blur-night-snow.jpg)',
        '--background-image': 'url(/assets/images/night-snow.jpg)',
        '--background-position': 'center',
        '--primary-color': '#ffffff',
        '--secondary-color': '#000000',
        '--box-shadow-shape': '1px 10px 20px rgba(255, 255, 255, 0.5)',
        '--background-color': 'rgba(0, 0, 0, 0.15)'
    }
}