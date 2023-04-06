import { useRef } from 'react';

const EditContact = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const suiteRef = useRef<HTMLInputElement>(null);
  const streetRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);

  function createContactData() {
    const contactData = {
      name: `${firstNameRef.current!.value} ${lastNameRef.current!.value}`,
      email: emailRef ? emailRef.current!.value : '',
      phone: phoneRef ? phoneRef.current!.value : '',
      address: {
        suite: suiteRef ? suiteRef.current!.value : '',
        street: streetRef ? streetRef.current!.value : '',
        city: cityRef ? cityRef.current!.value : '',
      },
      company: { name: companyRef ? companyRef.current!.value : '' },
    };
    return contactData;
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const contactData = createContactData();
        // onSubmit(contactData);
      }}
    >
      <div>
        <input
          type='text'
          placeholder='First Name'
          required
          ref={firstNameRef}
        />
        <input type='text' placeholder='Last Name' required ref={lastNameRef} />
      </div>
      <div>
        <input type='text' placeholder='Email' ref={emailRef} />
        <input type='text' placeholder='Phone' ref={phoneRef} />
      </div>
      <div>
        <input type='text' placeholder='Address' ref={suiteRef} />
        <input type='text' placeholder='Street' ref={streetRef} />
        <input type='text' placeholder='City' ref={cityRef} />
      </div>
      <div>
        <input type='text' placeholder='Company' ref={companyRef} />
      </div>
      <div className='buttons'>
        <button type='submit'>Save</button>
        <button>Cancel</button>
      </div>
    </form>
  );
};

export default EditContact;
