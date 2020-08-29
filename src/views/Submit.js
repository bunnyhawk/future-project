import React from 'react';
import { useForm } from "react-hook-form";
import Header from '../components/Header';
import TextInput from '../components/TextInput';

const Submit = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => console.log(values);

  return (
    <div className="bg-background text-light text-center">
      <div className="home__header m-auto mb-4">
        <Header>Honor a loved one</Header>
        <p className="leading-tight mb-12">Fill out the form below and we’ll publish their details on our page.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="honorForm m-auto text-left">
        <div className="text-xs uppercase font-bold mb-3">The deceased</div>
        <TextInput
          name="firstName"
          label="First name"
          inputRef={register}
          errors={errors.firstName}
        />
        <TextInput
          name="lastName"
          label="Last name"
          inputRef={register}
          errors={errors.lastName}
        />
        <TextInput
          name="age"
          label="Age"
          inputRef={register}
          errors={errors.age}
        />
        <TextInput
          name="location"
          label="Location"
          inputRef={register}
          errors={errors.location}
        />
        <TextInput
          name="about"
          label="What were they like? One sentence."
          inputRef={register}
          errors={errors.about}
        />
        <div className="text-xs uppercase font-bold mt-4 mb-4">Submitter</div>
        <TextInput
          name="submitName"
          label="Your name"
          inputRef={register}
          errors={errors.submitName}
        />
        <TextInput
          name="submitRelation"
          label="Relation"
          inputRef={register}
          errors={errors.submitRelation}
        />
        <TextInput
          name="email"
          label="Email Address"
          inputRef={register}
          validation={{
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
            }
          }}
          errors={errors.email}
        />

        <button
          type="submit"
          className="bg-cta w-full mt-4 px-4 py-2 rounded text-light">
          Submit
        </button>
      </form>
    </div>
  );
}
 
export default Submit;