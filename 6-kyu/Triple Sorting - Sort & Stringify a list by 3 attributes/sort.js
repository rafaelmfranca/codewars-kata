const sort = (students) =>
  students
    .sort((a, b) => a.age - b.age)
    .sort((a, b) => a.fullName.split(' ')[1][0].localeCompare(b.fullName.split(' ')[1][0]))
    .sort((a, b) => b.gpa - a.gpa)
    .map(({ fullName }) => fullName)
    .join(',');
