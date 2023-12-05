// function getStudentIdsSum that returns the sum of all the student ids.

export default function getStudentIdsSum(lst) {
  return lst.reduce((count, currentId) => count + currentId.id, 0);
}
