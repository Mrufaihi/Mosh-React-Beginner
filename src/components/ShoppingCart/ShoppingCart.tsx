import { z } from 'zod'; //zod the validation library
import { zodResolver } from '@hookform/resolvers/zod'; //combine react Hooks with Zod (Resolver)
import { FieldValues, useForm } from 'react-hook-form';
import { useState } from 'react';

const ShoppingCart = () => {
  // schema validation in 1 place
  const schema = z.object({
    description: z.string().min(1, { message: 'Enter Description' }).min(3),
    amount: z.number({ invalid_type_error: 'Set Amount' }),
    catagory: z.string().min(1, { message: 'Enter Catagory' }),
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
  return (
    <>
      {/* search for item */}
      <form className="m-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="p-1">Description</label>
          <input
            {...register('description')}
            id="description"
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

        <div className="mb-3">
          <label className="p-1">Catagory</label>
          <input
            {...register('catagory')}
            id="catagory"
            className="w-100"
            type="text"
          />
          {/* if there is an error then display message */}
          {formState.errors.catagory && (
            <p className="text-danger">{formState.errors.catagory.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="p-1">Amount</label>
          <input
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

      {/* drop down list Filter */}

      {/* <div className="m-3">
        <label className="p-1" htmlFor="">
          Catagory
        </label>
        <select className="w-100 dropdown" name="" id="">
          <option value="none">None</option>
          <option value="dairy">Dairy</option>
          <option value="meats">Meats</option>
          <option value="breads">Breads</option>
        </select>
      </div> */}

      {/* table : we need this to be added dynamically after user fills search item form */}

      <table className="table table-bordered ">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Catagory</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Milk</td>
            <td>$100</td>
            <td>Dairy</td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>

          <tr>
            <td>Steak</td>
            <td>$100</td>
            <td>Meats</td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>

          <tr>
            <td>Bread German</td>
            <td>$100</td>
            <td>Breads</td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ShoppingCart;
