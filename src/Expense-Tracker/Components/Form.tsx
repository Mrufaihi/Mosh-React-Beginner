import { z } from 'zod'; //zod the validation library
import { zodResolver } from '@hookform/resolvers/zod'; //combine react Hooks with Zod (Resolver)
import { FieldValues, useForm } from 'react-hook-form';
import { useState } from 'react';
import { catagorySelect } from '../../App';

const ShoppingCart = () => {
  // schema validation in 1 place
  const schema = z.object({
    description: z.string().min(1, { message: 'Enter Description' }).min(3),
    amount: z.number({ invalid_type_error: 'Set Amount' }),
    catagory: z.string().min(1, { message: 'Select Catagory' }), //TODO: fix catagory is empty error
  });

  // shape of our form taken from schema (hover FormData)
  type FormData = z.infer<typeof schema>;

  //   Form hook is react hook that got some functionalities like (register )
  const { register, handleSubmit, formState } = useForm<FormData>({
    // call resolver and combine form hook with it
    resolver: zodResolver(schema), //give resolver our schema
  }); //form hook

  const onSubmit = (data: FieldValues) => console.log(data); //collect data from Form & do whatever

  const [item, setItem] = useState({});

  const [catagory, setCatagory] = useState(''); //TODO: this stores value of current catagory

  return (
    <>
      {/* search for item */}
      <form className="m-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="Description" className="p-1">
            Description
          </label>
          <input
            {...register('description')}
            id="Description"
            className="w-100"
            type="text"
          />
          {/* if there is an error then display message */}
          {formState.errors.description && (
            <p className="text-danger">
              {formState.errors.description.message}
            </p>
          )}
        </div>

        {/* <div className="mb-3">
          <label className="p-1">Catagory</label>
          <input
            {...register('catagory')}
            id="catagory"
            className="w-100"
            type="text"
          /> */}
        {/* if there is an error then display message */}
        {/* {formState.errors.catagory && (
            <p className="text-danger">{formState.errors.catagory.message}</p>
          )}
        </div> */}

        <div>
          <label className=" p-1">Catagory</label>
          <select
            {...register('catagory')} //TODO: this for schema register validation
            onChange={(e) => setCatagory(e.target.value)} //on change stores current value of catagory
            className="form-select"
            name=""
            id=""
          >
            <option value=""></option>
            {catagorySelect.map((catagory) => (
              <option key={catagory} value={catagory}>
                {catagory}
              </option>
            ))}
          </select>
          {/* if there is an error then display message */}
          {formState.errors.catagory && (
            <p className="text-danger">{formState.errors.catagory.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="Amount" className="p-1">
            Amount
          </label>
          <input
            id="Amount"
            {...register('amount', { valueAsNumber: true })}
            className="w-100"
            type="number"
          />
          {/* if there is an error then display message */}
          {formState.errors.amount && (
            <p className="text-danger">{formState.errors.amount.message}</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary mb-5">
          Submit
        </button>
      </form>
    </>
  );
};

export default ShoppingCart;
