import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';

const validationSchema = Yup.object().shape({
  username: Yup.string().min(3, 'Must be at least 3 characters').required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const RegistrationPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    
    navigate('/LoginPage');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" {...register('username')} />
        {errors.username && <p className="error-message">{errors.username.message}</p>}

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" {...register('email')} />
        {errors.email && <p className="error-message">{errors.email.message}</p>}

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" {...register('password')} />
        {errors.password && <p className="error-message">{errors.password.message}</p>}

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" {...register('confirmPassword')} />
        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;