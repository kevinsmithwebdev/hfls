import React from 'react';
import './Signup.form.css';

const initialStudent = { name: '', teacher: '', grade: '', level: '' };
const initialParent = { name: '', phone: '', email: '' };

class SignupForm extends React.Component {
  state = {
    students: [initialStudent],
    parents: [initialParent, initialParent, initialParent]
  }

  renderStudentField = (student, idx) => {
    return (
      <div className='studentsField' key={ idx.toString() }>
        <div className='studentField'>
          <label className='studentGroup'>
            <span className='leftLabel'>Student's Name:&nbsp;</span>
            <input className='textField' value={ this.state.studentNames } onChange={ e => this.handleFieldChange('studentNames', e)}></input>
          </label>

          <label className='studentGroup'>Level:&nbsp;
            <select className='select' name="level">
              <option disabled selected value> -- select a level -- </option>
              <option value="tk">TK</option>
              <option value="kinder">Kinder</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </label>
        </div>

        <div className='studentField'>
          <label className='studentGroup'>
            <span className='leftLabel'>Teachers's Last Name:&nbsp;</span>
            <input className='textField' value={ this.state.studentNames } onChange={ e => this.handleFieldChange('studentNames', e)}></input>
          </label>

          <label className='studentGroup'>Grade&nbsp;
            <select className='select' name='grade'>
              <option disabled selected value> -- select a grade -- </option>
              <option value="tk">TK</option>
              <option value="kinder">Kinder</option>
              <option value="beginner">First Grade</option>
              <option value="intermediate">Second Grade</option>
              <option value="intermediate">Third Grade</option>
              <option value="intermediate">Fourth Grade</option>
              <option value="intermediate">Fifth Grade</option>
            </select>
          </label>
        </div>
      </div>
    )
  }

  renderParentField = () => {
    return (
      <div>
        <label className=''>
          <span className=''>Name:</span>
          <input className='' value={ this.state.studentNames } onChange={ e => this.handleFieldChange('studentNames', e)}></input>
        </label>
        <label className=''>
          <span className=''>Phone Number:</span>
          <input className='' value={ this.state.studentNames } onChange={ e => this.handleFieldChange('studentNames', e)}></input>
        </label>
        <label className=''>
          <span className=''>Email:</span>
          <input className='' value={ this.state.studentNames } onChange={ e => this.handleFieldChange('studentNames', e)}></input>
        </label>
      </div>
    );
  };

  handleFieldChange = (field, e) =>
    this.setState({ [field]: e.target.value });

  render() {
    return (
      <form className='SignupForm'>
        <div className='fieldsGroup'>
          { this.state.students.map(this.renderStudentField) }
        </div>

        <div className='fieldsGroup'>
          { this.state.parents.map(this.renderParentField) }
        </div>
      </form>
    );
  }
};

export default SignupForm;