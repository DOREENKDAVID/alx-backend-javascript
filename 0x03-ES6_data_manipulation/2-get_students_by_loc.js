// function getStudentsByLocation that returns an array of objects who are located in specific city.

export default function getStudentsByLocation(lst, city) {
  return lst.filter((ojb) => ojb.location === city);
}
