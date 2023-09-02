import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateWeaponDto } from './dto/create-weapon.dto';
import { WeaponsService } from './weapons.service';
import { UpdateWeaponDto } from './dto/update-weapon.dto';

@Controller('weapons')
export class WeaponsController {
  constructor(private readonly weaponsService: WeaponsService) {}

  @Get()
  async getAllWeapons() {
    return this.weaponsService.getAllWeapons();
  }

  @Get(':id')
  async getWeapon(@Param('id') id: string) {
    return this.weaponsService.getWeapon(+id);
  }

  @Post()
  createWeapon(
    @Body()
    weaponData: CreateWeaponDto,
  ) {
    return this.weaponsService.createWeapon(weaponData);
  }

  @Put(':id')
  updateWeapon(
    @Param('id') id: string,
    @Body()
    weaponData: UpdateWeaponDto,
  ) {
    return this.weaponsService.updateWeapon(+id, weaponData);
  }

  @Delete(':id')
  deleteWeapon(@Param('id') id: string) {
    return this.weaponsService.deleteWeapon(+id);
  }
}
