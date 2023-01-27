// import React, { useState } from 'react';

// function FormValidation() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const validate = () => {
//     let tempErrors = {};
//     let formIsValid = true;

//     if (!formData.name) {
//       formIsValid = false;
//       tempErrors.name = 'Name is required.';
//     }

//     if (!formData.email) {
//       formIsValid = false;
//       tempErrors.email = 'Email is required.';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       formIsValid = false;
//       tempErrors.email = 'Email is not valid.';
//     }

//     if (!formData.password) {
//       formIsValid = false;
//       tempErrors.password = 'Password is required.';
//     } else if (formData.password.length < 6) {
//       formIsValid = false;
//       tempErrors.password = 'Password must be at least 6 characters.';
//     }

//     setErrors(tempErrors);
//     return formIsValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       // Form is valid, submit it
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" value={formData.name} onChange={handleChange} />
//         {errors.name && <span>{errors.name}</span>}
//       </label>
//       <br />
//       <label>
//         Email:
//         <input type="email" name="email" value={formData.email} onChange={handleChange} />
//         {errors.email && <span>{errors.email}</span>}
//       </label>
//       <br />
//       <label>
//         Password:
//         <input type="password" name="password" value={formData.password} onChange={handleChange} />
//         {errors.password && <span>{errors.password}</span>}
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default FormValidation;






// import { useMediaQuery } from 'react-responsive'

// const Example = () => {
//   const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
//   return (
//     <div>
//       <h1>Hello World!</h1>
//       {isTabletOrMobile && <h2>You are a tablet or mobile user</h2>}
//       {!isTabletOrMobile && <h2>You are a desktop or laptop user</h2>}
//     </div>
//   )
// }

