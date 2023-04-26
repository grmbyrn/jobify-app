import {FormRow, FormRowSelect, Alert} from '../../components'
import { useAppContext } from "../../context/appContext"
import Wrapper from '../../assets/wrappers/DashboardFormPage'

const AddJob = () => {
  const {
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange
  } = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!position || !company || !jobLocation){
      displayAlert()
      return 
    }
    console.log('create job')
  }

  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({name, value})
  }

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          {/* Position */}
          <FormRow
            type='text'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
           {/* company */}
           <FormRow
            type='text'
            name='company'
            value={company}
            handleChange={handleJobInput}
          />
          {/* location */}
          <FormRow
            type='text'
            labelText='Job Location'
            name='jobLocation'
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* Job Status */}
          <FormRowSelect 
            name='status'
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
          {/* Job Type */}
          <FormRowSelect 
            name='jobType'
            labelText='job type'
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />
          {/* Btn container */}
          <div className="btn-container">
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}
export default AddJob