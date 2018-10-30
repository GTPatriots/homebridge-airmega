import { Purifier } from './Purifier';
import { AirQualityService } from './services/AirQualityService';
import { FilterService } from './services/FilterService';
import { LightService } from './services/LightService';
import { PurifierService } from './services/PurifierService';
import { Service } from './services/Service';
import { HAP } from './types';

export class ServiceFactory {
  static services: Service[];

  purifierService: PurifierService;
  airQualityService: AirQualityService;
  filterService: FilterService;
  lightService: LightService;

  constructor(purifier: Purifier, accessory: HAP.Accessory) {
    this.purifierService = new PurifierService(purifier, accessory);
    this.airQualityService = new AirQualityService(purifier, accessory);
    this.filterService = new FilterService(purifier, accessory);
    this.lightService = new LightService(purifier, accessory);

    ServiceFactory.services = [
      this.purifierService,
      this.airQualityService,
      this.filterService,
      this.lightService
    ];
  }

  registerServices(): void {
    this.purifierService.registerServices();
    this.airQualityService.registerServices();
    this.filterService.registerServices();
    this.lightService.registerServices();
  }
}