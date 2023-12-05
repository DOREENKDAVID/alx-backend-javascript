/* function getListStudentIds that returns an array of ids from a list of object. */

export default function getListStudentIds(lst) {
  if (Array.isArray(lst)) {
    return lst.map((obj) => obj.id);
  }
  return [];
}
