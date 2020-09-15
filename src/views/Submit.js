import React, { useState } from 'react';
import { CSSTransition } from "react-transition-group";
import { useForm } from "react-hook-form";
import Title from '../components/Title';
import TextInput from '../components/TextInput';
import FileInput from '../components/FileInput';

const API_URL = 'https://rdgqc6nd42.execute-api.us-west-2.amazonaws.com/dev/send-mail';

const Submit = () => {
  const [ submitted, setSubmitted ] = useState(false);
  const [ isSubmitting, setIsSubmitting ] = useState(false);
  const { handleSubmit, register, errors, getValues, reset } = useForm();
  
  const onSubmit = values => {
    const { submissionProof, ...rest} = values;
    const formData = new FormData();

    setIsSubmitting(true);
  
    for (const name in rest) {
      formData.append(name, rest[name])
    }
    for (const file in submissionProof) {
      formData.append(submissionProof[file].name, submissionProof[file])
    }
    
    fetch(API_URL, {
      method: 'POST',
      body: formData
    }).then((result) => {
      reset(result);
      setSubmitted(true);
      setIsSubmitting(false);
    }).catch(err => setIsSubmitting(false));
  }

  const handleButtonClick = () => setSubmitted(false);

  return (
    <main className="bg-theme text-text text-center">
      <div className="home__header m-auto mb-4">
        <Title>Honor a loved one</Title>
        <CSSTransition in={!submitted} timeout={300} classNames="submit" unmountOnExit>
          <p className="leading-tight">There's no easy way to ask for this. Losing a loved one is hard. And yet, the internet can be cruel. To deter trolls and honor your loved one with dignity, please verify their passing by providing the info below.</p>
        </CSSTransition>
        <CSSTransition in={submitted} timeout={300} classNames="submit" unmountOnExit>
          <p className="leading-tight">We appreciate you taking the time to commemorate your loved one. Please give us some time to evalute and update our records.</p>
        </CSSTransition>
      </div>
      <CSSTransition in={!submitted} timeout={300} classNames="fade" unmountOnExit>
        <form
          name="honorForm"
          onSubmit={handleSubmit(onSubmit)}
          className="honorForm m-auto text-left"
          method="post"
        >
          <div className="text-xs uppercase font-bold mb-3">The deceased</div>
          <input type="hidden" name="form-name" value="honorForm" />
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
          <div className="text-xs uppercase font-bold mt-4 mb-4">Verification of Transition</div>
          <TextInput
            name="funeralHome"
            label="Funeral Home / Crematory Name"
            inputRef={register}
            errors={errors.funeralHome}
          />
          <FileInput
            name="submissionProof"
            label="Upload your documents"
            inputRef={register}
            getValues={getValues}
            errors={errors.submissionProof}
          />
          <p className="leading-tight mt-4 mb-12 text-sm">Please attach an image or PDF of a death certificate or other proof available.</p>
          <button
            type="submit"
            className="bg-primary w-full mt-4 px-4 py-2 rounded text-text">
            Submit
          </button>
        </form>
      </CSSTransition>
      {submitted &&
        <button
          className="bg-text px-4 py-2 rounded text-theme order-1 sm:order-2 mb-5 sm:mb-0"
          onClick={handleButtonClick}
          disabled={isSubmitting}
        >Submit someone else</button>
      }
    </main>
  );
}
 
export default Submit;