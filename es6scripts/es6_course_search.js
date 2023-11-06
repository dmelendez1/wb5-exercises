let courses = [
{ CourseId: "PROG100",
 Title: "Introduction to HTML/CSS/Git",
 Location: "Classroom 7",
 StartDate: "09/08/22",
 Fee: "100.00",
 },
 {
 CourseId: "PROG200",
 Title: "Introduction to JavaScript",
 Location: "Classroom 9",
 StartDate: "11/22/22",
 Fee: "350.00",
 },
 {
 CourseId: "PROG300",
 Title: "Introduction to Java",
 Location: "Classroom 1",
 StartDate: "01/09/23",
 Fee: "50.00",
 },
 {
 CourseId: "PROG400",
 Title: "Introduction to SQL and Databases",
 Location: "Classroom 7",
 StartDate: "03/16/23",
 Fee: "50.00",
 },
 {

 CourseId: "PROJ500",
 Title: "Introduction to Angular",
 Location: "Classroom 1",
 StartDate: "04/25/23",
 Fee: "50.00",
 }
];

// function to dfind course by id
function findCourseById(courseId) {
    return function(course) {
        return course.CourseId === courseId;
    };
}

// Find the start date 
let proj500Course = courses.find(findCourseById("PROJ500"));

if (proj500Course) {
    console.log(proj500Course.StartDate); // Correctly outputs the start date 
} else {
    console.log("Course PROJ500 not found");
}

// Output the title of the PROJ500 course
if (proj500Course) {
    console.log(proj500Course.Title); // Correctly outputs the title 
} else {
    console.log("Course PROJ500 not found");
}

// find classes by their location
function findClassesInClassroom(classroom) {
    return function(course) {
        return course.Location === classroom;
    };
}

// Find all courses that are in Classroom 1
let classroom1Courses = courses.filter(findClassesInClassroom("Classroom 1"));

if (classroom1Courses.length > 0) {
    console.log("Classes in Classroom 1:");
    classroom1Courses.forEach(course => console.log(course.Title));
} else {
    console.log("No classes in Classroom 1");
}

function findCheapCourses(course) {
    let fee = parseFloat(course.Fee);
    return fee <= 50.00;
}

let cheapCourses = courses.filter(findCheapCourses);

console.log("Titles of courses that cost $50 or less:");
for (let i = 0; i < cheapCourses.length; i++) {
    console.log(cheapCourses[i].Title);
}
