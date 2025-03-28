import { Injectable, NotFoundException } from '@nestjs/common';

export interface Course {
  id: number;
  title: string;
  description: string;
}

@Injectable()
export class CoursesService {
  private courses: Course[] = [];

  addCourse(courseData: { title: string; description: string }): Course {
    const newCourse: Course = { id: this.courses.length + 1, ...courseData };
    this.courses.push(newCourse);
    return newCourse;
  }

  getCourses(): Course[] {
    return this.courses;
  }

  updateCourse(id: number, updateData: { title?: string; description?: string }): Course {
    const courseIndex = this.courses.findIndex(c => c.id === id);
    if (courseIndex === -1) throw new NotFoundException('Course not found');

    this.courses[courseIndex] = { ...this.courses[courseIndex], ...updateData };
    return this.courses[courseIndex];
  }

  deleteCourse(id: number): string {
    const courseIndex = this.courses.findIndex(c => c.id === id);
    if (courseIndex === -1) throw new NotFoundException('Course not found');

    this.courses.splice(courseIndex, 1);
    return `Course ${id} deleted successfully`;
  }
}
