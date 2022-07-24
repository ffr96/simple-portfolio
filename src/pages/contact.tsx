import React, { useEffect, useState } from 'react';

import ContactForm from '@/components/ContactForm';
import { useInput } from '@/hook/useInput';
import { Main } from '@/layout/Main';

const Contact = () => {
  const [name, handleName] = useInput();
  const [subject, handleSubject] = useInput();
  const [content, setContent] = useState('');
  const [mailSent, setMailSent] = useState<'success' | 'failed' | undefined>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /**
     * Get token from reCAPTCHA and use it to validate
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
              setMailSent('success');
              setTimeout(() => {
                setMailSent(undefined);
              }, 2500);
            } else {
              setMailSent('failed');
              setTimeout(() => {
                setMailSent(undefined);
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
        {mailSent === 'success' && (
          <h2 className="animate-rightin text-center text-2xl">Mail Sent!</h2>
        )}
        {mailSent === 'failed' && (
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
