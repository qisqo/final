import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    
    navigate('/HomePage');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" {...register('email')} />
        {errors.email && <p className="error-message">{errors.email.message}</p>}

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" {...register('password')} />
        {errors.password && <p className="error-message">{errors.password.message}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;