import { Theme } from 'src/app/interfaces/Theme'

export const day: Theme = {
    // name: 'day',
    clear: {
        '--background-cover': 'url(/assets/images/sun1.jpg)',
        '--background-image': 'url(/assets/images/sun1.jpg)',
        '--background-position': 'top',
        '--background-color': '#00000026',
        '--text-color': '#ffffff'
    },
    rain: {
        '--background-cover': 'url(/assets/images/sun1.jpg)',
        '--background-image': 'url(/assets/images/day/rain1.jpg)',
        '--background-position': 'center',
        '--background-color': '#00000026',
        '--text-color': '#000'
    },
    cloudy: {
        '--background-cover': 'url(/assets/images/sun1.jpg)',
        '--background-image': 'url(/assets/images/cloudy6.jpg)',
        '--background-position': 'top',
        '--background-color': '#00000026',
        '--text-color': '#ffffff'
    },
    snow: {
        '--background-cover': 'url(/assets/images/sun1.jpg)',
        '--background-image': 'url(/assets/images/day/snow1.jpg)',
        '--background-position': 'top',
        '--background-color': '#00000026',
        '--text-color': '#ffffff'
    }
}

export const night: Theme = {
    // name: 'night',
    clear: {
        '--background-cover': 'url(/assets/images/sun1.jpg)',
        '--background-image': 'url(/assets/images/night/moon1.jpg)',
        '--background-position': 'center',
        '--background-color': '#00000026',
        '--text-color': '#ffffff'
    },
    rain: {
        '--background-cover': 'url(/assets/images/sun1.jpg)',
        '--background-image': 'url(/assets/images/night/rain2.jpg)',
        '--background-position': 'center',
        '--background-color': '#00000026',
        '--text-color': '#ffffff'
    },
    cloudy: {
        '--background-cover': 'url(/assets/images/sun1.jpg)',
        '--background-image': 'url(/assets/images/cloudy6.jpg)',
        '--background-position': 'top',
        '--background-color': '#00000026',
        '--text-color': '#ffffff'
    },
    snow: {
        '--background-cover': 'url(/assets/images/sun1.jpg)',
        '--background-image': 'url(/assets/images/night/snow1.jpg)',
        '--background-position': 'center',
        '--background-color': '#00000026',
        '--text-color': '#ffffff'
    }
}