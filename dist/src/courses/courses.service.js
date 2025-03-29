"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
let CoursesService = class CoursesService {
    courses = [];
    addCourse(courseData) {
        const newCourse = { id: this.courses.length + 1, ...courseData };
        this.courses.push(newCourse);
        return newCourse;
    }
    getCourses() {
        return this.courses;
    }
    updateCourse(id, updateData) {
        const courseIndex = this.courses.findIndex(c => c.id === id);
        if (courseIndex === -1)
            throw new common_1.NotFoundException('Course not found');
        this.courses[courseIndex] = { ...this.courses[courseIndex], ...updateData };
        return this.courses[courseIndex];
    }
    deleteCourse(id) {
        const courseIndex = this.courses.findIndex(c => c.id === id);
        if (courseIndex === -1)
            throw new common_1.NotFoundException('Course not found');
        this.courses.splice(courseIndex, 1);
        return `Course ${id} deleted successfully`;
    }
};
exports.CoursesService = CoursesService;
exports.CoursesService = CoursesService = __decorate([
    (0, common_1.Injectable)()
], CoursesService);
//# sourceMappingURL=courses.service.js.map