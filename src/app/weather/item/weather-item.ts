export class WeatherItem {
    public date: Date;
    public city: string;
    public description: string;
    public minTemp: number;
    public countryCode: string;
    public maxTemp: number;
    public feelsLike: number;
    public humidity: number;
    public dateInMillis: number;

    constructor(date: Date, city: string, description: string, minTemp: number, countryCode: string,
        maxTemp: number, feelsLike: number, humidity: number, dateInMillis: number) {
        this.date = date;
        this.city = city;
        this.description = description;
        this.minTemp = minTemp;
        this.countryCode = countryCode;
        this.maxTemp =  maxTemp;
        this.feelsLike = feelsLike;
        this.humidity = humidity;
        this.dateInMillis = dateInMillis;
    }
}