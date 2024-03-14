//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID: 65130500036   Name: Nitchan Konkit

class Student {
// Insert your code here
    constructor(name,age){
        this.name = name 
        this.age = age 
        this.course = [];
    }

    addCourse(course){
        if ( course === null || 
            course === undefined)
        return null;
        this.course == unshipt(course)
        return course;
      
    }

    removeCourse(courseName){
        const index = this.course.findIndex(course => course.name === courseName)
        if (index === -1) return -1;
        this.courses.splice(index,1);
        return index;

    }
    getStudentInfo(){
        const totalGrade = 0;
        for (const course of this.courses){
            totalGrade += this.gradepoint(course.grade); 
        }
        const averageGrade = totalGrade || 
        this.course.length || undefined;
    } return = {
        name : this.name ,
        age : this.age ,
        course : this.course ,
        averageGrade : AverageGrade 
    }
    isEnrolled(courseName){
        return this.courses.some(course => course.name === courseName)

    }
    listAllCourses(){
        return this.courses.map(course => `${course.name} ${conse.grade}`);

    }
    getHonorClass(){
        const averageGrade = this.getAverageGrade();
        if (averageGrade >= 3.9) {
            return "Summa Cum Laude" 
        } else (averageGrade < 3.89 || averageGrade >= 3.7) 
            return "Magna Cum Laude" 
    }


    
    getAverageGrade() {
        let totalGrade = 0;
        let course = 0;

        for (const course of this.course ){
            const grade = this.gradepoint (course.grade);
            if( grade !== undefined)
            totalGrade += grade;
            count++;
        }
    }
}

// Creating a new Student object for stu
let stu = new Student("Scott", 17);

// Adding courses to stu's record
stu.addCourse({"name": "Math", "grade": "A"});
stu.addCourse({"name": "Programming", "grade": "B+"});
stu.addCourse({"name": "Network", "grade": "B+"});
stu.addCourse({"name": "GenEd", "grade": "D"});

//Average Grade
console.log(stu.getAverageGrade());

// Listing all courses
console.log(stu.listAllCourses());

// Removing "GenEd" course
console.log(stu.removeCourse("GenEd"));

// Attempting to remove a non-existent course "History"
console.log(stu.removeCourse("History"));

// Checking enrollment in "Programming" and "History"
console.log(stu.isEnrolled("Programming"));
console.log(stu.isEnrolled("History"));

// Getting student info after updates
console.log(stu.getStudentInfo());

// Determining honor class after updates
console.log(stu.getHonorClass());
