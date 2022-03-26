
//Week 12 Part Two
function single_element(){
  const div_container = document.quarySelecorAll('#side-nav')
  return (div_container)
} 
console.log (element())



//Week 10 lab part 2
function get_avg_grade(){
  const students = [
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
  ]

  const studentsScholarship = []
  for (const student_list of students){
    //replace the grade list to grade average
    average_grade = student_list["grades"].reduce((a,b)=>a+b/student_list["grades"].length,0)
    student_list["grades"] = average_grade
    
    //replace the word "grade" to "gradeAvg" in the student_list
    student_list["gradeAvg"] = student_list["grades"] 
    delete student_list["grades"]
    
    if ( average_grade >= 80){
      studentsScholarship.push(student_list)
    }
  }
  return studentsScholarship
}


//Week 12 Part four
function switch_theme(){
  document.getElementById('dark-theme').href = '/CSS/style.css';
}