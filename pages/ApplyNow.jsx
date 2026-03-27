import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const COURSES = ['B.Tech', 'MBA', 'BBA', 'M.Tech', 'MCA', 'BCA', 'PhD'];
const GENDERS = ['Male', 'Female', 'Other'];

function calculateAge(dobISO) {
  const dob = new Date(dobISO);
  if (Number.isNaN(dob.getTime())) return null;
  const age = (Date.now() - dob.getTime()) / (365.25 * 24 * 60 * 60 * 1000);
  return Math.floor(age);
}

function normalizePhone(input) {
  // Keep digits + leading plus, strip spaces and punctuation for validation.
  const trimmed = (input || '').trim();
  const digits = trimmed.replace(/[^\d]/g, '');
  return { trimmed, digits };
}

export default function ApplyNow() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('idle'); // idle | submitting | success
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);

  const [documentsFile, setDocumentsFile] = useState(null);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    address: '',
    course: '',
    previousQualification: '',
    marks: '',
    statementOfPurpose: '',
    agree: false,
  });

  const initialErrors = useMemo(() => ({}), []);

  useEffect(() => {
    if (status !== 'success') return;
    const t = setTimeout(() => navigate('/thank-you'), 1300);
    return () => clearTimeout(t);
  }, [status, navigate]);

  function validate(data, docFile = documentsFile) {
    const next = {};

    if (!data.fullName.trim()) next.fullName = 'Full name is required.';

    if (!data.email.trim()) {
      next.email = 'Email address is required.';
    } else {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim());
      if (!emailOk) next.email = 'Please enter a valid email address.';
    }

    if (!data.phone.trim()) {
      next.phone = 'Phone number is required.';
    } else {
      const { trimmed, digits } = normalizePhone(data.phone);
      const allowedChars = /^[0-9+\-\s()]{7,20}$/.test(trimmed);
      if (!allowedChars) next.phone = 'Phone number contains invalid characters.';
      else if (digits.length < 10 || digits.length > 15) next.phone = 'Phone number must have 10 to 15 digits.';
    }

    if (!data.dob) next.dob = 'Date of birth is required.';
    else {
      const age = calculateAge(data.dob);
      if (age === null) next.dob = 'Please select a valid date of birth.';
      else if (age < 16) next.dob = 'Applicants must be at least 16 years old.';
    }

    if (!data.gender) next.gender = 'Please select your gender.';

    if (!data.course) next.course = 'Please select a course.';

    if (!data.statementOfPurpose.trim()) next.statementOfPurpose = 'Statement of purpose is required.';

    if (!data.agree) next.agree = 'You must agree to the terms and conditions.';

    // Optional fields could still be lightly validated:
    if (data.marks && data.marks.trim().length > 40) next.marks = 'Marks/percentage looks too long.';

    // If provided, ensure file is correct type.
    if (docFile) {
      const allowed = ['application/pdf', 'image/jpeg', 'image/jpg'];
      if (!allowed.includes(docFile.type)) next.documents = 'Upload PDF or JPG/JPEG only.';
      if (docFile.size > 5 * 1024 * 1024) next.documents = 'File must be 5MB or less.';
    }

    return next;
  }

  function onChange(field, value) {
    setForm((prev) => {
      const candidate = { ...prev, [field]: value };
      if (showErrors) setErrors(validate(candidate));
      return candidate;
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    setShowErrors(true);
    setErrors(initialErrors);

    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('submitting');

    // Simulate API request
    setTimeout(() => {
      const payload = {
        ...form,
        documentMeta: documentsFile
          ? { name: documentsFile.name, type: documentsFile.type, size: documentsFile.size }
          : null,
        submittedAt: new Date().toISOString(),
      };
      localStorage.setItem('applicationForm', JSON.stringify(payload));
      setStatus('success');
    }, 1200);
  }

  const buttonText =
    status === 'submitting' ? 'Submitting...' : status === 'success' ? 'Submitted' : 'Submit Application';

  const successMessage = 'Application submitted successfully';

  return (
    <section className="apply-section" id="apply-now">
      <div className="apply-wrap">
        <div className="apply-card">
          <div className="apply-header">
            <div className="section-eyebrow" style={{ color: 'var(--gold2)' }}>
              Apply Now
            </div>
            <h2 className="section-title">
              Student <strong>Application Form</strong>
            </h2>
            <p className="section-sub">
              Fill in your details and we will contact you about the next steps.
            </p>
          </div>

          {status === 'success' && (
            <div className="apply-success" role="status" aria-live="polite">
              {successMessage}
            </div>
          )}

          <form className="apply-form" onSubmit={onSubmit} noValidate>
            <div className="form-grid">
              <div className="form-row full">
                <label className="apply-label" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  id="fullName"
                  className={`apply-control ${showErrors && errors.fullName ? 'invalid' : ''}`}
                  type="text"
                  required
                  value={form.fullName}
                  onChange={(e) => onChange('fullName', e.target.value)}
                  placeholder="e.g., Jyoth Kumar"
                />
                {showErrors && errors.fullName && <div className="field-error">{errors.fullName}</div>}
              </div>

              <div className="form-row">
                <label className="apply-label" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  className={`apply-control ${showErrors && errors.email ? 'invalid' : ''}`}
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => onChange('email', e.target.value)}
                  placeholder="name@example.com"
                />
                {showErrors && errors.email && <div className="field-error">{errors.email}</div>}
              </div>

              <div className="form-row">
                <label className="apply-label" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  className={`apply-control ${showErrors && errors.phone ? 'invalid' : ''}`}
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => onChange('phone', e.target.value)}
                  placeholder="+91 98765 43210"
                />
                {showErrors && errors.phone && <div className="field-error">{errors.phone}</div>}
              </div>

              <div className="form-row">
                <label className="apply-label" htmlFor="dob">
                  Date of Birth
                </label>
                <input
                  id="dob"
                  className={`apply-control ${showErrors && errors.dob ? 'invalid' : ''}`}
                  type="date"
                  required
                  value={form.dob}
                  onChange={(e) => onChange('dob', e.target.value)}
                />
                {showErrors && errors.dob && <div className="field-error">{errors.dob}</div>}
              </div>

              <div className="form-row">
                <label className="apply-label" htmlFor="gender">
                  Gender
                </label>
                <select
                  id="gender"
                  className={`apply-control ${showErrors && errors.gender ? 'invalid' : ''}`}
                  required
                  value={form.gender}
                  onChange={(e) => onChange('gender', e.target.value)}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {GENDERS.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
                {showErrors && errors.gender && <div className="field-error">{errors.gender}</div>}
              </div>

              <div className="form-row full">
                <label className="apply-label" htmlFor="address">
                  Address
                </label>
                <textarea
                  id="address"
                  className="apply-control apply-textarea"
                  value={form.address}
                  onChange={(e) => onChange('address', e.target.value)}
                  placeholder="Street, City, State, Country"
                />
              </div>

              <div className="form-row full">
                <label className="apply-label" htmlFor="course">
                  Course Applying For
                </label>
                <select
                  id="course"
                  className={`apply-control ${showErrors && errors.course ? 'invalid' : ''}`}
                  required
                  value={form.course}
                  onChange={(e) => onChange('course', e.target.value)}
                >
                  <option value="" disabled>
                    Select a course
                  </option>
                  {COURSES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                {showErrors && errors.course && <div className="field-error">{errors.course}</div>}
              </div>

              <div className="form-row">
                <label className="apply-label" htmlFor="previousQualification">
                  Previous Qualification
                </label>
                <input
                  id="previousQualification"
                  className="apply-control"
                  type="text"
                  value={form.previousQualification}
                  onChange={(e) => onChange('previousQualification', e.target.value)}
                  placeholder="e.g., Intermediate / Diploma"
                />
              </div>

              <div className="form-row">
                <label className="apply-label" htmlFor="marks">
                  Marks/Percentage
                </label>
                <input
                  id="marks"
                  className={`apply-control ${showErrors && errors.marks ? 'invalid' : ''}`}
                  type="text"
                  value={form.marks}
                  onChange={(e) => onChange('marks', e.target.value)}
                  placeholder="e.g., 85% or 9.1 CGPA"
                />
                {showErrors && errors.marks && <div className="field-error">{errors.marks}</div>}
              </div>

              <div className="form-row full">
                <label className="apply-label" htmlFor="documents">
                  Upload Documents (PDF/JPG)
                </label>
                <input
                  id="documents"
                  className={`apply-control ${showErrors && errors.documents ? 'invalid' : ''}`}
                  type="file"
                  accept="application/pdf,image/jpeg,image/jpg"
                  onChange={(e) => {
                    const file = e.target.files && e.target.files[0] ? e.target.files[0] : null;
                    setDocumentsFile(file);
                    if (showErrors) {
                      const nextErrors = validate(form, file);
                      setErrors(nextErrors);
                    }
                  }}
                />
                {documentsFile && <div className="apply-hint">Selected: {documentsFile.name}</div>}
                {showErrors && errors.documents && <div className="field-error">{errors.documents}</div>}
              </div>

              <div className="form-row full">
                <label className="apply-label" htmlFor="statementOfPurpose">
                  Statement of Purpose
                </label>
                <textarea
                  id="statementOfPurpose"
                  className={`apply-control apply-textarea ${showErrors && errors.statementOfPurpose ? 'invalid' : ''}`}
                  required
                  value={form.statementOfPurpose}
                  onChange={(e) => onChange('statementOfPurpose', e.target.value)}
                  placeholder="Why do you want to pursue this course?"
                />
                {showErrors && errors.statementOfPurpose && (
                  <div className="field-error">{errors.statementOfPurpose}</div>
                )}
              </div>

              <div className="form-row full terms-row">
                <label className={`terms-label ${showErrors && errors.agree ? 'invalid' : ''}`}>
                  <input
                    type="checkbox"
                    checked={form.agree}
                    onChange={(e) => onChange('agree', e.target.checked)}
                    required
                  />
                  <span>I agree to the Terms & Conditions</span>
                </label>
                {showErrors && errors.agree && <div className="field-error">{errors.agree}</div>}
              </div>
            </div>

            <div className="apply-actions">
              <button className="apply-submit" type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' && <span className="apply-spinner" aria-hidden="true" />}
                <span>{buttonText}</span>
              </button>
              <button
                className="apply-secondary"
                type="button"
                onClick={() => navigate('/')}
                disabled={status === 'submitting'}
              >
                Back to Home
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

