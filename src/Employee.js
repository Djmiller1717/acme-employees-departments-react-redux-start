import React from 'react';
import { connect } from 'react-redux'

const Employee = ({ employee, destroyEmployee, removeFromDepartment })=> {
  return (
    <li key={ employee.id }>
      { employee.name }
      <button onClick={ ()=> destroyEmployee(employee)}>x</button>
      {
        !!removeFromDepartment && (
          <button onClick={ ()=> removeFromDepartment(employee)}>Remove From Department</button>
        )
      }
    </li>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Employee)
