import React from 'react';
import Employees from './Employees';
import { connect } from 'react-redux'

const Department = ({ department, employees, destroyEmployee, removeFromDepartment })=> {
    return (
      <li>
        <span className='department-title'>
          { department ? department.name : 'No Department' } ({
            employees.filter( employee => employee.departmentId === (department ? department.id : null) ).length
          })
        </span>
        <Employees
          department={ department }
          employees ={ employees }
          destroyEmployee = { destroyEmployee }
          removeFromDepartment={ removeFromDepartment }
        />
      </li>
    );
};

const mapStateToProps = (state) => {
  return {
    departments: state.departments,
    employees: state.employees
  }
}
// const mapDispatchToProps = () => {
//   return {

//   }
// }

export default connect(mapStateToProps)(Department)
