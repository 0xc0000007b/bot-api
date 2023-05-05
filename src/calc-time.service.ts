import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CalcTimeService {
  origin: string = 'Новотушинская 5';
  baseUrl: string = 'https://nominatim.openstreetmap.org';
  mode: string = 'driving';

  async getTime(address: string) {
    const timeToWait: number = 10;
    const originResponse = await axios.get(
      `${this.baseUrl}/search?format=json&q=${this.origin}`,
    );
    const originLatLong = {
      lat: originResponse.data[0].lat,
      lng: originResponse.data[0].lon,
    };
    const destinationResponse = await axios.get(
      `${this.baseUrl}/search?format=json&street=${address.toLowerCase()}`,
    );
    if (!destinationResponse.data.length) {
      throw new Error('Неверный адрес доставки');
    }
    const destinationLatLng = {
      lat: destinationResponse.data[0].lat,
      lng: destinationResponse.data[0].lon,
    };
    const routeResponse = await axios.get(
      `https://router.project-osrm.org/route/v1/${this.mode}/${originLatLong.lng},${originLatLong.lat};${destinationLatLng.lng},${destinationLatLng.lat}?overview=false`,
    );
    const routeDurationSeconds = routeResponse.data.routes[0].duration;
    const fixedTimeMinutes = 15;
    const deliveryTimePerPizzaMinutes = 15;
    const returnTimeMinutes = 15;
    const waitingTimeBetweenOrdersMinutes = timeToWait;
    const totalTimeSeconds =
      fixedTimeMinutes +
      (2 * deliveryTimePerPizzaMinutes + 2 * returnTimeMinutes) +
      waitingTimeBetweenOrdersMinutes +
      routeDurationSeconds;
    const hours = Math.floor(totalTimeSeconds / 3600);
    const minutes = Math.floor((totalTimeSeconds % 3600) / 60);
    const seconds = Math.floor(totalTimeSeconds % 60);
    const formattedDuration = `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    return formattedDuration;
  }
}
