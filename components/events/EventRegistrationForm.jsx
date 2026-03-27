import React, { useMemo, useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  department: '',
};

function normalizePhone(input) {
  const trimmed = (input || '').trim();
  const digits = trimmed.replace(/[^\d]/g, '');
  return { trimmed, digits };
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
}

function validatePhone(phone) {
  const { trimmed, digits } = normalizePhone(phone);
  const allowedChars = /^[0-9+\-\s()]{7,20}$/.test(trimmed);
  if (!allowedChars) return 'Phone number contains invalid characters.';
  if (digits.length < 10 || digits.length > 15)
    return 'Phone number must have 10 to 15 digits.';
  return null;
}

export default function EventRegistrationForm({ event, onSuccess }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const title = useMemo(() => (event ? event.title : 'Event'), [event]);

  const onChange = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    if (showErrors) setErrors({});
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required.';
    if (!form.email.trim()) next.email = 'Email is required.';
    else if (!validateEmail(form.email)) next.email = 'Enter a valid email address.';
    if (!form.phone.trim()) next.phone = 'Phone number is required.';
    else {
      const phoneErr = validatePhone(form.phone);
      if (phoneErr) next.phone = phoneErr;
    }
    if (!form.department.trim()) next.department = 'College / Department is required.';
    return next;
  };

  const submit = async (e) => {
    e.preventDefault();
    setShowErrors(true);
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setSubmitting(true);
    // Mock API call
    setTimeout(() => {
      const payload = {
        eventId: event?.id || null,
        submittedAt: new Date().toISOString(),
        ...form,
      };
      try {
        const key = 'eventRegistrations';
        const raw = localStorage.getItem(key);
        const arr = raw ? JSON.parse(raw) : [];
        arr.push(payload);
        localStorage.setItem(key, JSON.stringify(arr));
      } catch {
        // ignore storage errors
      }

      setSubmitting(false);
      onSuccess?.(payload);
    }, 1100);
  };

  return (
    <form className="event-reg-form" onSubmit={submit} noValidate>
      {event && <div className="event-reg-top">{title}</div>}

      <div className="event-reg-grid">
        <div className="event-reg-field">
          <label className="event-reg-label" htmlFor="regName">
            Name
          </label>
          <input
            id="regName"
            className={`event-reg-input ${showErrors && errors.name ? 'invalid' : ''}`}
            type="text"
            value={form.name}
            onChange={onChange('name')}
            required
          />
          {showErrors && errors.name && <div className="event-reg-error">{errors.name}</div>}
        </div>

        <div className="event-reg-field">
          <label className="event-reg-label" htmlFor="regEmail">
            Email
          </label>
          <input
            id="regEmail"
            className={`event-reg-input ${showErrors && errors.email ? 'invalid' : ''}`}
            type="email"
            value={form.email}
            onChange={onChange('email')}
            required
          />
          {showErrors && errors.email && <div className="event-reg-error">{errors.email}</div>}
        </div>

        <div className="event-reg-field">
          <label className="event-reg-label" htmlFor="regPhone">
            Phone Number
          </label>
          <input
            id="regPhone"
            className={`event-reg-input ${showErrors && errors.phone ? 'invalid' : ''}`}
            type="tel"
            value={form.phone}
            onChange={onChange('phone')}
            required
          />
          {showErrors && errors.phone && <div className="event-reg-error">{errors.phone}</div>}
        </div>

        <div className="event-reg-field event-reg-full">
          <label className="event-reg-label" htmlFor="regDept">
            College / Department
          </label>
          <input
            id="regDept"
            className={`event-reg-input ${showErrors && errors.department ? 'invalid' : ''}`}
            type="text"
            value={form.department}
            onChange={onChange('department')}
            required
            placeholder="e.g., CSE, Department of Computer Science"
          />
          {showErrors && errors.department && (
            <div className="event-reg-error">{errors.department}</div>
          )}
        </div>
      </div>

      <div className="event-reg-actions">
        <button className="event-reg-submit" type="submit" disabled={submitting}>
          {submitting ? <span className="event-reg-spinner" aria-hidden="true" /> : 'Submit Registration'}
        </button>
      </div>
    </form>
  );
}

