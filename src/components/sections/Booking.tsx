"use client";

import styles from './Booking.module.scss';
import { Calendar } from 'lucide-react';
import clsx from 'clsx';

export default function Booking() {
  return (
    <section className={clsx(styles.bookingSection, 'booking-section-wrapper')}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <Calendar size={24} className={styles.icon} />
          _schedule-a-meeting
        </h2>
        <p className={styles.subtitle}>{'// pick a time that works for you'}</p>
      </div>

      <div className={styles.iframeContainer}>
        <div className={styles.windowHeader}>
          <div className={styles.dots}>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
          </div>
          <div className={styles.addressBar}>
            calendar.google.com/appointments/...
          </div>
        </div>
        
        <div className={styles.iframeWrapper}>
          <iframe 
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2BDDrC-Q4Ror3pvwdkrlryXsItlHURucyO6WKyOOhlNbpVZFAzaJKac1mH_KmZ0N5Xjz_JegzK?gv=true" 
            style={{ border: 0 }} 
            width="100%" 
            height="700" 
            frameBorder="0"
            className={styles.iframe}
            title="Google Calendar Appointment Selection"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
