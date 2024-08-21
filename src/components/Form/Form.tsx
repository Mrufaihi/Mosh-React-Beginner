//React hook FORM library for managing forms
import { FieldValues, useForm } from 'react-hook-form';

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  // formState to show error messages
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>(); //pass Props to useForm (autoCompletetion)

  console.log(errors); //just for show

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* form Name */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          NAME:
        </label>
        <input
          // after spread add validtion needed
          {...register('name', { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />

        {/* in errors if there is name? then access type */}
        {errors.name?.type === 'required' && (
          <p className="text-danger">Name Required!</p>
        )}
        {/*if type = minLength then show error msg*/}
        {errors.name?.type === 'minLength' && (
          <p className="text-danger">Atleast 3 Chars please!</p>
        )}
      </div>

      {/* Form Age */}
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          AGE:
        </label>
        <input
          {...register('age', { minLength: 2, required: true })}
          id="age"
          type="number"
          className="form-control"
        />

        {/* error Msg */}
        {errors.age?.type === 'required' && (
          <p className="text-danger">Required Age!</p>
        )}
        {errors.age?.type === 'minLength' && (
          <p className="text-danger"> 2 Digit Age please!</p>
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
