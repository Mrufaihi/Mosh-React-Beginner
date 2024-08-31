import { z } from 'zod'; // zod the validation library
import { zodResolver } from '@hookform/resolvers/zod'; // combine react Hooks with Zod (Resolver)
import { FieldValues, useForm } from 'react-hook-form';
import { useState } from 'react';
import categorySelect from '../../Catagory';

// schema validation in 1 place
const schema = z.object({
  description: z
    .string()
    .min(1, { message: 'Description Required' })
    .max(50, { message: 'Max 50' }),
  amount: z.number({ invalid_type_error: 'Set Amount' }),
  category: z.enum(categorySelect, {
    errorMap: () => ({ message: 'Category Required' }),
  }), // enum is any of selected values, needs to be AS CONST. (dont memories)
});

// shape of our form taken from schema (hover ExpenseFormData)
type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExpenseFormData) => void; //onSubmit that takes data of type ExpenseFormData (our schema)
}

const ShoppingCart = ({ onSubmit }: Props) => {
  // Form hook is react hook that got some functionalities like (register)
  const { register, handleSubmit, formState, setValue, reset } =
    useForm<ExpenseFormData>({
      resolver: zodResolver(schema), // give resolver our schema
    }); // form hook

  // const onSubmit = (data: FieldValues) => console.log(data); // collect data from Form & do whatever

  //just for category onChange to store the new value and remove error TODO:(ReVisit later)
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value as 'Meats' | 'Dairy' | 'Breads';
    setCategory(selectedCategory);
    setValue('category', selectedCategory); // Update the form value
  };

  const [category, setCategory] = useState(''); // this stores value of current category

  return (
    <>
      {/* search for item */}
      <form
        className="m-4"
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset(); //To clear form after submission
        })}
      >
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

        <div>
          <label className=" p-1">Category</label>
          <select
            {...register('category')} // Register Fields for Schema validation
            //(e) => setCategory(e.target.value)
            onChange={handleCategoryChange} // on change stores current value of category
            className="form-select"
            name=""
            id=""
            value={category} //set new value on change
          >
            <option value="">All</option>
            {categorySelect.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {/* if there is an error then display message */}
          {formState.errors.category && (
            <p className="text-danger">{formState.errors.category.message}</p>
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
