import React, { useState } from 'react';

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
}

function normalizePhone(input) {
  const trimmed = (input || '').trim();
  const digits = trimmed.replace(/[^\d]/g, '');
  return { trimmed, digits };
}

function validatePhone(phone) {
  const { trimmed, digits } = normalizePhone(phone);
  const allowedChars = /^[0-9+\-\s()]{7,20}$/.test(trimmed);
  if (!allowedChars) return 'Phone number contains invalid characters.';
  if (digits.length < 10 || digits.length > 15) return 'Phone number must have 10 to 15 digits.';
  return null;
}

export default function CourseApplicationForm({ course, onSuccess }) {
  const [showErrors, setShowErrors] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    qualification: '',
  });

  const setField = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    if (showErrors) setErrors({});
  };

  const validate = () => {
    const next = {};
    if (!form.fullName.trim()) next.fullName = 'Full name is required.';
    if (!form.email.trim()) next.email = 'Email is required.';
    else if (!validateEmail(form.email)) next.email = 'Enter a valid email address.';
    if (!form.phone.trim()) next.phone = 'Phone number is required.';
    else {
      const phoneErr = validatePhone(form.phone);
      if (phoneErr) next.phone = phoneErr;
    }
    if (!form.qualification.trim()) next.qualification = '12th marks / qualification is required.';
    return next;
  };

  const submit = (e) => {
    e.preventDefault();
    setShowErrors(true);
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setSubmitting(true);
    setTimeout(() => {
      const payload = {
        ...form,
        courseId: course?.id || null,
        courseName: course?.name || null,
        submittedAt: new Date().toISOString(),
      };
      try {
        const key = 'courseApplications';
        const raw = localStorage.getItem(key);
        const arr = raw ? JSON.parse(raw) : [];
        arr.push(payload);
        localStorage.setItem(key, JSON.stringify(arr));
      } catch {
        // ignore
      }
      setSubmitting(false);
      setSuccess(true);
      onSuccess?.(payload);
    }, 1100);
  };

  return (
    <form className="course-apply-form" onSubmit={submit} noValidate>
      {success && (
        <div className="course-success" role="status" aria-live="polite">
          Application submitted successfully
        </div>
      )}

      <div className="course-apply-grid">
        <div className="course-apply-field course-apply-full">
          <label className="course-apply-label" htmlFor="cafName">
            Full Name
          </label>
          <input
            id="cafName"
            className={`course-apply-input ${showErrors && errors.fullName ? 'invalid' : ''}`}
            type="text"
            value={form.fullName}
            onChange={setField('fullName')}
            required
          />
          {showErrors && errors.fullName && <div className="course-apply-error">{errors.fullName}</div>}
        </div>

        <div className="course-apply-field">
          <label className="course-apply-label" htmlFor="cafEmail">
            Email
          </label>
          <input
            id="cafEmail"
            className={`course-apply-input ${showErrors && errors.email ? 'invalid' : ''}`}
            type="email"
            value={form.email}
            onChange={setField('email')}
            required
          />
          {showErrors && errors.email && <div className="course-apply-error">{errors.email}</div>}
        </div>

        <div className="course-apply-field">
          <label className="course-apply-label" htmlFor="cafPhone">
            Phone Number
          </label>
          <input
            id="cafPhone"
            className={`course-apply-input ${showErrors && errors.phone ? 'invalid' : ''}`}
            type="tel"
            value={form.phone}
            onChange={setField('phone')}
            required
          />
          {showErrors && errors.phone && <div className="course-apply-error">{errors.phone}</div>}
        </div>

        <div className="course-apply-field course-apply-full">
          <label className="course-apply-label" htmlFor="cafQual">
            12th Marks / Qualification
          </label>
          <input
            id="cafQual"
            className={`course-apply-input ${showErrors && errors.qualification ? 'invalid' : ''}`}
            type="text"
            value={form.qualification}
            onChange={setField('qualification')}
            required
            placeholder="e.g., 92% (CBSE) or Diploma (ECE)"
          />
          {showErrors && errors.qualification && (
            <div className="course-apply-error">{errors.qualification}</div>
          )}
        </div>

        <div className="course-apply-field course-apply-full">
          <label className="course-apply-label" htmlFor="cafCourse">
            Preferred Course
          </label>
          <input id="cafCourse" className="course-apply-input" type="text" value={course?.name || ''} readOnly />
        </div>
      </div>

      <div className="course-apply-actions">
        <button className="course-apply-submit" type="submit" disabled={submitting}>
          {submitting ? <span className="event-reg-spinner" aria-hidden="true" /> : 'Submit Application'}
        </button>
      </div>
    </form>
  );
}

