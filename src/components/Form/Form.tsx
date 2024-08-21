//React hook FORM library for managing forms
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod'; //z is obj for scheme validation
import { zodResolver } from '@hookform/resolvers/zod'; //Resolver

// interface FormData using Z
type FormData = z.infer<typeof schema>; //refrenced schema we defined, used it as interface

// schema for our validation in 1 place
const schema = z.object({
  name: z.string().min(3, { message: 'Name atleast 3 Letters' }), //custom error msg
  age: z
    .number({ invalid_type_error: 'Age Required!' }) //default is number is NaN when empty
    .min(18, { message: 'Only 18+' }),
});

const Form = () => {
  // formState to show error messages
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }, //destructered for simplcity (isValid for submit)
  } = useForm<FormData>({ resolver: zodResolver(schema) }); //set resolver to zod, attach schema too

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
          {...register('name')}
          id="name"
          type="text"
          className="form-control"
        />

        {/* error Msg , no need for type. dynamic zod error messages*/}
        {errors.name && <p className="text-danger">{errors.name.message}!</p>}
      </div>

      {/* Form Age */}
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          AGE:
        </label>
        <input
          {...register('age', { valueAsNumber: true })} //input by default-> value = string
          id="age"
          type="number"
          className="form-control"
        />

        {/* error Msg , no need for type. dynamic zod error messages*/}
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>

      {/* submit btn, disabled if is Not Valid (there is errors) */}
      <button disabled={!isValid} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
