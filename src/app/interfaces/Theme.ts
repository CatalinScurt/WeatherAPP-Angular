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
    '--background-color': string,
    '--text-color': string
}