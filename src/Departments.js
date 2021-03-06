import React from 'react';
import Department from './Department';
import { connect } from 'react-redux'

const Departments = ({ departments, employees, destroyEmployee, removeFromDepartment })=> {
  return (
    <ul className='departments'>
      <Department destroyEmployee={ destroyEmployee } employees={ employees } />
      {
        departments.map( department => {
          return (
            <Department
              key = { department.id }
              department = { department }
              employees = { employees }
              destroyEmployee = { destroyEmployee }
              removeFromDepartment = { removeFromDepartment }
            />
          );
        })
      }
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    departments: state.departments,
    employees: state.employees
  }
}
const mapDispatchToProps = () => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Departments)
