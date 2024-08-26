import { z } from 'zod'; //zod the validation library
import { zodResolver } from '@hookform/resolvers/zod'; //combine react Hooks with Zod (Resolver)
import { FieldValues, useForm } from 'react-hook-form';
import { useState } from 'react';

interface Table {
  id: number;
  description: string;
  catagory: string;
  amount: number;
}

interface Props {
  // items structure is Table array of objs
  items: Table[];
  onDelete: (id: number) => void;
}

function Table({ items, onDelete }: Props) {
  // console.log(item);

  return (
    <>
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
          {items.map((item) => (
            <tr key={item.id}>
              <td id="">{item.description}</td>
              <td id="">$ {item.amount}</td>
              <td id="">{item.catagory}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(item.id)} //onDelete fun taken from parent, takes id of current ROW
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <th>Total</th>
            <th>
              ${items.reduce((acc, curr) => acc + curr.amount, 0).toFixed(2)}
            </th>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default Table;
