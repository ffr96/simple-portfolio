import React, { useState } from 'react';

import { Button } from './Button';
import Input from './Input';

type ContactFormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  handleName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubject: (e: React.ChangeEvent<HTMLInputElement>) => void;
  content: string;
  name: string;
  subject: string;
};

const ContactForm = ({
  handleSubmit,
  content,
  setContent,
  name,
  handleName,
  subject,
  handleSubject,
}: ContactFormProps) => {
  const [nameFocused, setNameFocused] = useState(false);
  const [subjectFocused, setSubjectFocused] = useState(false);
  const [contentFocused, setContentFocused] = useState(false);
  return (
    <div>
      <h3 className="animate-[rightIn_1s_-0.2s_ease-out] pb-24 text-center text-5xl font-light first-letter:font-serif">
        Contact <span className="font-sans">Me</span>
      </h3>

      <div className="animate-[rightIn_1s_0.5s_backwards]">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="pb-10 lg:flex lg:flex-row">
            <div
              className={`mb-5 lg:m-0 lg:pr-10`}
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
            >
              <div
                className={`${
                  nameFocused ? 'translate-x-[calc(100%-3rem)] font-bold' : ''
                } transition-all`}
              >
                Name:
              </div>
              <Input value={name} required handleChange={handleName} />
            </div>
            <div
              onFocus={() => setSubjectFocused(true)}
              onBlur={() => setSubjectFocused(false)}
            >
              <div
                className={`transition-all ${
                  subjectFocused
                    ? 'translate-x-[calc(100%-55px)] font-bold'
                    : ''
                }`}
              >
                Subject:
              </div>
              <Input value={subject} required handleChange={handleSubject} />
            </div>
          </div>
          <div className="w-full self-center text-center">
            <div className={`${contentFocused ? 'font-bold' : ''}`}>
              Content:
            </div>
            <textarea
              required
              value={content}
              onChange={(e) => setContent(e.currentTarget.value)}
              onFocus={() => setContentFocused(true)}
              onBlur={() => setContentFocused(false)}
              className="h-32 w-full rounded-lg bg-orange-100 p-2 font-mono
           dark:bg-slate-700 dark:text-orange-200"
            />
          </div>
          <Button type="submit" name="contact-form-submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
