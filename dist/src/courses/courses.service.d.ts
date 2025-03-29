export interface Course {
    id: number;
    title: string;
    description: string;
}
export declare class CoursesService {
    private courses;
    addCourse(courseData: {
        title: string;
        description: string;
    }): Course;
    getCourses(): Course[];
    updateCourse(id: number, updateData: {
        title?: string;
        description?: string;
    }): Course;
    deleteCourse(id: number): string;
}
