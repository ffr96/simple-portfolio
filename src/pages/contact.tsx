import React, { useEffect, useState } from 'react';

import ContactForm from '@/components/ContactForm';
import { useInput } from '@/components/useInput';
import { Main } from '@/layout/Main';

const Contact = () => {
  const [name, handleName] = useInput();
  const [subject, handleSubject] = useInput();
  const [content, setContent] = useState('');
  const [mailSuccess, setMailSuccess] = useState(false);
  const [mailError, setMailError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /**
     * Get token from reCAPTCHA and use it to check validity
     */
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute('6Lc9rRIhAAAAALLIGUU9m4hKEac0kMiSf4SpJl4z', {
          action: 'home',
        })
        .then((token: string) => {
          const toSend: RequestInit = {
            method: 'POST',
            body: JSON.stringify({ name, subject, content }),
            headers: { Authorization: token },
          };
          fetch('/api/sendMail', toSend).then((rsp) => {
            if (rsp.status === 200) {
              setMailSuccess(true);
              setTimeout(() => {
                setMailSuccess(false);
              }, 2500);
            } else {
              setMailError(true);
              setTimeout(() => {
                setMailError(false);
              }, 5000);
            }
          });
        });
    });
  };

  useEffect(() => {
    /**
     * Add reCAPTCHA v3 to DOM
     */
    const script = document.createElement('script');
    script.src =
      'https://www.google.com/recaptcha/api.js?render=6Lc9rRIhAAAAALLIGUU9m4hKEac0kMiSf4SpJl4z';
    document.body.appendChild(script);
  }, []);

  return (
    <Main>
      <div>
        <div
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="g-recaptcha"
          data-size="invisible"
          data-callback="onSubmit"
          data-sitekey="6Lc9rRIhAAAAALLIGUU9m4hKEac0kMiSf4SpJl4z"
        ></div>
        {mailSuccess && (
          <h2 className="animate-rightin text-center text-2xl">Mail Sent!</h2>
        )}
        {mailError && (
          <h2 className="animate-rightin text-center text-2xl">
            Error sending, try refreshing
          </h2>
        )}
        <ContactForm
          name={name}
          subject={subject}
          content={content}
          setContent={setContent}
          handleName={handleName}
          handleSubject={handleSubject}
          handleSubmit={handleSubmit}
        />
      </div>
    </Main>
  );
};

export default Contact;
