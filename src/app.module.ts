import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeaponsModule } from './weapons/weapons.module';

@Module({
  imports: [WeaponsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
