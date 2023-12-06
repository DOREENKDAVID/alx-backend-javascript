// Creating an interface for a teacher

interface Teacher {
    firstName: string,
    fullTimeEmployee: boolean,
    lastName: string,
    yearsOfExperience?: number,
    age: number,
    location: string,
    [attrName: string]: any,
}

interface Directors extends Teacher {
	numberOfReports: number,
}

interface printTeacgerFunc {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunc = (firstName: string, lastName: string): string => `${firstName.charAt(0)}.${lastName}`;
interface classInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements classInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName;
    this.lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }
  displayName(): string {
    return this.firstName;
  }
}
interface StudentConstructor {
  (firstName: string, lastName: string): classInterface;
}

const student = new StudentClass("Djo", "djo");
console.log(student.displayName())
console.log(student.workOnHomework())
