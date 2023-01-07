import { useForm } from 'react-hook-form';
import Nav from './Nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import emailjs from 'emailjs-com';
import logo from '../images/Chiney-Whiney.png';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  
  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    const toastifySuccess = () => {
        toast('Form sent!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,  
          draggable: false,
          className: 'submit-feedback success',
          toastId: 'notifyToast'
        });
    };

    try {
      const templateParams = {
        name,
        email,
        subject,
        message
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }

  };

  return (
    <div>
        <header>
          <img src={logo} alt='Logo' id='logo'/>
          <Nav/>
        </header>
        <h1> Contact Me </h1>
        <div className='ContactForm'>
        <div className='container'>
            <div className='row'>
            <div className='col-12 text-center'>
                <div className='contactForm'>
                <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                    {/* Row 1 of form */}
                    <div className='row formRow'>
                    <div className='col'>
                        <input
                        type='text'
                        name='name'
                        {...register('name', {
                            required: { value: true, message: 'Please enter your name' },
                            maxLength: {
                                value: 30,
                                message: 'Please use 30 characters or less'
                                }
                            })}
                            className='form-control formInput'
                            placeholder='Name'
                            ></input>
                        {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                    </div>
                    <div className='col'>
                        <input
                        type='email'
                        name='email'
                        {...register('email', {
                            required: true,
                            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                            })}
                            className='form-control formInput'
                            placeholder='Email address'
                            ></input>
                        {errors.email && (
                            <span className='errorMessage'>Please enter a valid email address</span>
                            )}
                    </div>
                    </div>
                    {/* Row 2 of form */}
                    <div className='row formRow'>
                    <div className='col'>
                        <input
                        type='text'
                        name='subject'
                        {...register('subject', {
                            required: { value: true, message: 'Please enter a subject' },
                            maxLength: {
                                value: 75,
                                message: 'Subject cannot exceed 75 characters'
                                }
                            })}
                            className='form-control formInput'
                            placeholder='Subject'
                            ></input>
                        {errors.subject && (
                            <span className='errorMessage'>{errors.subject.message}</span>
                            )}
                    </div>
                    </div>
                    {/* Row 3 of form */}
                    <div className='row formRow'>
                    <div className='col'>
                        <textarea
                        rows={3}
                        name='message'
                        {...register('message', {
                            required: true
                            })}
                            className='form-control formInput'
                            placeholder='Message'
                            ></textarea>
                        {errors.message && <span className='errorMessage'>Please enter a message</span>}
                    </div>
                    </div>
                    <button className='submit-btn' type='submit'>
                    Submit
                    </button>
                </form>
                </div>
                <ToastContainer />
            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default ContactForm;