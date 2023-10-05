import Angular from '../assets/angular.jpg'
import Bootstrap from '../assets/bootstrap5.png'
import Ccsharp from '../assets/ccsharp.png'
import KompleWeb from '../assets/kompleweb.jpg'
import './course.css';



const courseMap = {
  Angular,
  Bootstrap,
  Ccsharp,
  KompleWeb,
};

function Course({ courseName }) {
  // console.log(Angular);
  // console.log(courseName);
  console.log(courseMap[courseName]);
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="course" />
    </div>
  );
}

export default Course;