export interface Theme {
    // name: string,
    clear: weather,
    rain: weather,
    cloudy: weather,
    snow: weather
}

export interface weather {
    '--background-cover': string,
    '--background-image': string,
    '--background-position': string,
    '--primary-color': string,
    '--secondary-color': string,
    '--box-shadow-shape': string,
    '--background-color': string
}
