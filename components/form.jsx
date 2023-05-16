import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Icons } from './icons';
import { Button } from './ui/button';

export const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'cvrfly_service',
        'cvrfly_template',
        form.current,
        'E50nz8hUuRBxb9LUe'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast('🐬 Wiadomość została wysłana!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          toast.error('Wystąpił błąd.');
          setLoading(false);
        }
      );
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <form
        ref={form}
        onSubmit={sendEmail}
        className="grid w-full grid-cols-1 gap-3 lg:w-1/2 sm:grid-cols-2"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700"
          >
            Imię
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="name"
              id="name"
              className="w-full h-10 px-2 border rounded-md border-neutral-400 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="surname"
            className="block text-sm font-semibold text-gray-700"
          >
            Nazwisko
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="surname"
              id="surname"
              className="block w-full h-10 px-2 border rounded-md border-neutral-400 focus:border-blue-600 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700"
          >
            email
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full h-10 px-2 border rounded-md border-neutral-400 focus:border-blue-600 sm:text-sm"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-semibold text-gray-700"
          >
            Firma
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="company"
              id="company"
              className="block w-full h-10 px-2 border rounded-md border-neutral-400 focus:border-blue-600 sm:text-sm"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700"
          >
            Wiadomość
          </label>
          <div className="mt-1">
            <textarea
              id="message"
              name="message"
              rows={6}
              className="block w-full p-2 border rounded-md border-neutral-400 focus:border-blue-600 sm:text-sm"
              required
            ></textarea>
          </div>
        </div>
        <div className="text-right sm:col-span-2">
          <Button
            type="submit"
            className="w-full sm:w-auto"
            value="send"
            disabled={loading}
          >
            {loading ? (
              <>
                <Icons.loader2 className="animate-spin" size={14} />
                &nbsp;Wysyłanie...
              </>
            ) : (
              <>
                wyślij wiadomość
                <Icons.send size={14} />
              </>
            )}
          </Button>
        </div>
      </form>
    </>
  );
};

export default ContactUs;
