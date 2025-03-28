import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
  exports: [CoursesService], // Allows other modules to use CoursesService
})
export class CoursesModule {}
