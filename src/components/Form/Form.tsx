//React hook FORM library for managing forms
import { FieldValues, useForm } from 'react-hook-form';

const Form = () => {
  // obj register & handleSubmite from parent-obj useForm
  const { register, handleSubmit } = useForm();
  console.log(register('name')); //just for show

  //   on Form submit can get complex, thus seperate it
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    // use handleSubmit(call it here) obj to get data from This form
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* form Name */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          NAME:
        </label>
        <input
          // spread register obj and give it value
          {...register('name')}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      {/* Form Age */}
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          AGE:
        </label>
        <input
          {...register('age')}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
