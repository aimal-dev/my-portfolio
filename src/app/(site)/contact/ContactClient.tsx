"use client";

import { useFormStatus } from "react-dom";
import styles from './Contact.module.scss';
import { ContactData } from "@/lib/actions";
import { useState } from "react";
import Booking from "@/components/sections/Booking";

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending} className={styles.button}>
            {pending ? "Sending..." : "submit-message"}
        </button>
    );
}

export default function ContactClient({ contactInfo }: { contactInfo: ContactData }) {
    const [submitted, setSubmitted] = useState(false);

    async function handleSubmit(formData: FormData) {
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
        
        try {
            const response = await fetch(`${baseUrl}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("An error occurred. Please try again later.");
        }
    }

  return (
    <div className={styles.container}>
      <div className={styles.topHeader}>
        <div className={styles.infoSide}>
          <h1 className={styles.title}>_contact-me</h1>
          <div className={styles.list}>
              <div className={styles.item}>
                  <span className={styles.icon}>📧</span>
                  <a href={`mailto:${contactInfo.email}`} className={styles.link}>{contactInfo.email}</a>
              </div>
               <div className={styles.item}>
                  <span className={styles.icon}>📞</span>
                  <span>{contactInfo.phone}</span>
              </div>
          </div>
        </div>
        
        <div className={styles.codePreview}>
          <pre className={styles.codeBlock}>
              <code>
<span className="purple">const</span> <span className="blue">button</span> = <span className="blue">document</span>.querySelector(<span className="orange">&apos;#sendBtn&apos;</span>);{'\n'}
<span className="purple">const</span> <span className="blue">message</span> = {'{'}{'\n'}
<span className="blue">name</span>: <span className="orange">&quot;Jonathan Davis&quot;</span>,{'\n'}
<span className="blue">email</span>: <span className="orange">&quot;&quot;</span>,{'\n'}
<span className="blue">message</span>: <span className="orange">&quot;&quot;</span>,{'\n'}
<span className="blue">date</span>: <span className="orange">&quot;Thu 21 Apr&quot;</span>{'\n'}
{'}'}{'\n'}
<span className="blue">button</span>.addEventListener(<span className="orange">&apos;click&apos;</span>, () <span className="purple">=&gt;</span> {'{'}{'\n'}
<span className="blue">form</span>.send(<span className="blue">message</span>);{'\n'}
{'}'})
              </code>
          </pre>
        </div>
      </div>

      <div className={styles.formsGrid}>
          <div className={styles.formSide}>
              {submitted ? (
                   <div className={styles.success}>
                       <h3 className={styles.successTitle}>Thank you!</h3>
                       <p className={styles.successText}>Your message has been accepted.</p>
                       <button onClick={() => setSubmitted(false)} className={styles.button}>Send another</button>
                   </div>
              ) : (
                <form action={handleSubmit} className={styles.form}>
                    <div className={styles.group}>
                        <label>_name:</label>
                        <input name="name" type="text" required className={styles.input} />
                    </div>
                    
                    <div className={styles.group}>
                        <label>_email:</label>
                        <input name="email" type="email" required className={styles.input} />
                    </div>
                    
                    <div className={styles.group}>
                        <label>_message:</label>
                        <textarea name="message" rows={6} required className={styles.textarea} />
                    </div>
                    
                    <SubmitButton />
                </form>
              )}
          </div>
          
          <div className={styles.bookingWrapper}>
            <Booking />
          </div>
      </div>
    </div>
  );
}
