export interface Weather {
    location: Location
    current: Current
    forecast: Forecast
}

export interface Location {
    name: string
    region: string
    country: string
    lat: number
    lon: number
    tz_id: string
    localtime_epoch: number
    localtime: string
}

export interface Current {
    last_updated_epoch: number
    last_updated: string
    temp_c: number
    is_day: number
    condition: Condition
    wind_kph: number
    pressure_mb: number
    precip_mm: number
    humidity: number
    cloud: number
    feelslike_c: number
    uv: number
}

export interface Condition {
    text: string
    icon: string
    code: number
}

export interface Forecast {
    forecastday: Forecastday[]
}

export interface Forecastday {
    date: string
    date_epoch: number
    day: Day
    astro: Astro
    hour: Hour[]
}

export interface Day {
    maxtemp_c: number
    mintemp_c: number
    avgtemp_c: number
    maxwind_kph: number
    totalprecip_mm: number
    totalsnow_cm: number
    avgvis_km: number
    avghumidity: number
    daily_will_it_rain: number
    daily_chance_of_rain: number
    daily_will_it_snow: number
    daily_chance_of_snow: number
    condition: Condition
}

export interface Astro {
    sunrise: string
    sunset: string
    moonrise: string
    moonset: string
    is_moon_up: number
    is_sun_up: number
}

export interface Hour {
    time_epoch: number
    time: string
    temp_c: number
    is_day: number
    condition: Condition
    wind_kph: number
    pressure_mb: number
    precip_mm: number
    humidity: number
    cloud: number
    feelslike_c: number
    will_it_rain: number
    chance_of_rain: number
    will_it_snow: number
    chance_of_snow: number
}