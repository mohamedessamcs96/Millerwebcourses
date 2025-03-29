import { CoursesService } from './courses.service';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    addCourse(courseData: {
        title: string;
        description: string;
    }): Promise<import("./courses.service").Course>;
    getCourses(): Promise<import("./courses.service").Course[]>;
    updateCourse(id: string, updateData: {
        title?: string;
        description?: string;
    }): Promise<import("./courses.service").Course>;
    deleteCourse(id: string): Promise<string>;
}
