import { Controller, Post, Get, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { RolesGuard } from '../auth/roles.guard';  
import { Roles } from '../auth/roles.decorator';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  @UseGuards(RolesGuard)
  @Roles('admin') 
  async addCourse(@Body() courseData: { title: string; description: string }) {
    return this.coursesService.addCourse(courseData);
  }

  @Get()
  async getCourses() {
    return this.coursesService.getCourses();
  }

  @Put(':id')
  @UseGuards(RolesGuard)
  @Roles('admin') 
  async updateCourse(@Param('id') id: string, @Body() updateData: { title?: string; description?: string }) {
    return this.coursesService.updateCourse(Number(id), updateData);
  }

  @Delete(':id')
  @UseGuards(RolesGuard)
  @Roles('admin') 
  async deleteCourse(@Param('id') id: string) {
    return this.coursesService.deleteCourse(Number(id));
  }
}
