import React from 'react';
import { useForm } frindex.ie11';

export default function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch('example'));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="example" defaultValue="test" ref={register} />
      <input name="exampleRequired" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}
