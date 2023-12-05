// function updateStudentGradeByCity that returns an array of students
// for a specific city with their new grade

export default function updateStudentGradeByCity(students, city, newGrades) {
  if (Object.getPrototypeOf(students) !== Array.prototype) {
    return [];
  }
  if (Object.getPrototypeOf(newGrades) !== Array.prototype) {
    return [];
  }
  return students.filter((student) => student.location === city).map((student) => {
    const [newGrade] = newGrades.filter((item) => item.studentId === student.id);
    return { ...student, grade: newGrade ? newGrade.grade : 'N/A' };
  });
}
