import { Form } from 'react-router-dom';

const ContactLayout = () => {
  return (
    <form>
      <div>
        <input type='text' placeholder='First Name' required />
        <input type='text' placeholder='Last Name' required />
      </div>
      <div>
        <input type='text' placeholder='Email' />
        <input type='text' placeholder='Phone' />
      </div>
      <div>
        <input type='text' placeholder='Address' />
        <input type='text' placeholder='Street' />
        <input type='text' placeholder='City' />
      </div>
      <div>
        <input type='text' placeholder='Company' />
      </div>
      <div className='buttons'>
        <button>Save</button>
        <button>Cancel</button>
      </div>
    </form>
  );
};

export default ContactLayout;
