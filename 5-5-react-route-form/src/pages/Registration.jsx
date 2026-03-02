import { useState } from "react";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState({});

  const isFilled = email.trim() && password.trim() && gender;

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextErrors = {};

    // Email validation
    if (!email.trim()) nextErrors.email = "Email is required";
    else if (!(email.includes("@") && email.endsWith(".com")))
      nextErrors.email = 'Enter a valid email (must contain "@" and end with ".com")';

    // Password validation
    if (!password.trim()) nextErrors.password = "Password is required";

    // Gender validation
    if (!gender) nextErrors.gender = "Please select your gender";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // SUCCESS ALERT (only when valid)
    alert(`User Registered: ${email}`);
  };

  return (
    <section className="grid-2">
      <div className="card neon">
        <h1>Student Registration</h1>
        <p className="muted">
          Create your portal access. Your email will be used for course updates.
        </p>

        <form className="form" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              placeholder="name@domain.com"
            />
            {errors.email && (
              <p className="error" id="email-error">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="form-row">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? "password-error" : undefined}
              placeholder="Enter a strong password"
            />
            {errors.password && (
              <p className="error" id="password-error">
                {errors.password}
              </p>
            )}
          </div>

          {/* Gender */}
          <div className="form-row">
            <fieldset aria-invalid={Boolean(errors.gender)}>
              <legend>Gender</legend>

              <label className="radio">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
              </label>

              <label className="radio">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </label>

              {errors.gender && <p className="error">{errors.gender}</p>}
            </fieldset>
          </div>

          {/* Submit */}
          <button className="btn" type="submit" disabled={!isFilled}>
            Register
          </button>
        </form>
      </div>

      <aside className="card">
        <h3>Why Register?</h3>
        <ul className="list">
          <li>Access course materials & assignments</li>
          <li>Join the discussion forum</li>
          <li>Track your progress & get certified</li>
        </ul>
      </aside>
    </section>
  );
}
