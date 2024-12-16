import { PlacesService } from './places.service';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('places')
export class PlacesController {
  constructor(private placesService: PlacesService) {}

  @Get()
  findPlaces(@Query('text') text: string) {
    console.log('here here herre');
    return this.placesService.findPlaces(text);
  }
}
