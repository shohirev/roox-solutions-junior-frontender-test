import React, {useContext} from 'react';
import {Formik} from 'formik';
import cn from 'classnames';
import {StateToggleContext, UIProcessContext} from '../contexts/index.jsx';

const Form = ({user}) => {
  const {uiProcess} = useContext(UIProcessContext);

  const submitBtnClass = cn('btn', 'btn-submit-profile', {
    'btn-disabled': uiProcess === 'showProfile',
  });

  return (
    <Formik
      initialValues={
        {
          name: user.name,
          username: user.username,
          email: user.email,
          street: user.address.street,
          city: user.address.city,
          zipcode: user.address.zipcode,
          phone: user.phone,
          website: user.website,
          comment: '',
        }
      }
      onSubmit={(values) => {
        console.log(JSON.stringify(values, null, 2));
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className='profile-form-wrapper'>
            <p className='form-section'>
              <label>
                Name
                <input
                  type='text'
                  name='name'
                  value={values.name}
                  onChange={handleChange}
                  required
                  readOnly={uiProcess !== 'editingProfile'}
                />
              </label>
            </p>
            <p className='form-section'>
              <label>
                Username
                <input
                  type='text'
                  name='username'
                  value={values.username}
                  onChange={handleChange}
                  required
                  readOnly={uiProcess !== 'editingProfile'}
                />
              </label>
            </p>
            <p className='form-section'>
              <label>
                Email
                <input
                  type='email'
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  required
                  readOnly={uiProcess !== 'editingProfile'}
                />
              </label>
            </p>
            <p className='form-section'>
              <label>
                Street
                <input
                  type='text'
                  name='street'
                  value={values.street}
                  onChange={handleChange}
                  required
                  readOnly={uiProcess !== 'editingProfile'}
                />
              </label>
            </p>
            <p className='form-section'>
              <label>
                City
                <input
                  type='text'
                  name='city'
                  value={values.city}
                  onChange={handleChange}
                  required
                  readOnly={uiProcess !== 'editingProfile'}
                />
              </label>
            </p>
            <p className='form-section'>
              <label>
                Zipcode
                <input
                  type='text'
                  name='zipcode'
                  value={values.zipcode}
                  onChange={handleChange}
                  required
                  readOnly={uiProcess !== 'editingProfile'}
                />
              </label>
            </p>
            <p className='form-section'>
              <label>
                Phone
                <input
                  type='tel'
                  name='phone'
                  value={values.phone}
                  onChange={handleChange}
                  required
                  readOnly={uiProcess !== 'editingProfile'}
                />
              </label>
            </p>
            <p className='form-section'>
              <label>
                Website
                <input
                  type='text'
                  name='website'
                  value={values.website}
                  onChange={handleChange}
                  required
                  readOnly={uiProcess !== 'editingProfile'}
                />
              </label>
            </p>
            <p className='form-section'>
              <label>
                Comment
                <input
                  type='textarea'
                  name='comment'
                  className='comment-input'
                  value={values.comment}
                  onChange={handleChange}
                  readOnly={uiProcess !== 'editingProfile'}
                />
              </label>
            </p>
            <button
              type='submit'
              className={submitBtnClass}
              disabled={uiProcess === 'showProfile'}
            >
              Отправить
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

const Profile = ({users, currentUserId}) => {
  const {setUIProcess} = useContext(StateToggleContext);

  const user = users.find((userEntry) => userEntry.id === currentUserId);

  return (
    <div className='profile'>
      <div className='profile-header'>
        <h1>Профиль пользователя</h1>
        <button
          className='btn btn-primary'
          onClick={() => {
            setUIProcess('editingProfile');
          }}
        >Редактировать</button>
      </div>
      <Form user={user}/>
    </div>
  );
};

export default Profile;
