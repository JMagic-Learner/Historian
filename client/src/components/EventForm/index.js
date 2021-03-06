// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { QUERY_EVENTS, QUERY_ME } from '../../utils/queries';

// import Auth from '../../utils/auth';

// const EventForm = () => {
//   const [eventText, setEventText] = useState('');

//    const [characterCount, setCharacterCount] = useState(0);

//   // const [addThought, { error }] = useMutation(ADD_THOUGHT, {
//   //   update(cache, { data: { addThought } }) {
//   //     try {
//   //       const { thoughts } = cache.readQuery({ query: QUERY_EVENTS });

//   //       cache.writeQuery({
//   //         query: QUERY_EVENTS,
//   //         data: { thoughts: [addThought, ...thoughts] },
//   //       });
//   //     } catch (e) {
//   //       console.error(e);
//   //     }

//   //     // update me object's cache
//   //     const { me } = cache.readQuery({ query: QUERY_ME });
//   //     cache.writeQuery({
//   //       query: QUERY_ME,
//   //       data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
//   //     });
//   //   },
//   // });

//    const handleFormSubmit = async (event) => {
//      event.preventDefault();

//     // try {
//     //    const { data } = await addThought({
//     //      variables: {
//     //        eventText,
//     //        eventTitle: Auth.getProfile().data.username,
//     //      },
//     //    });

//     //   setThoughtText('');
//     //  } catch (err) {
//     //    console.error(err);
//     //  }
//    };

//   const handleChange = (event) => {
//      const { name, value } = event.target;

//     if (name === 'eventText' && value.length <= 280) {
//      setEventText(value);
//        setCharacterCount(value.length);
//      }
//    };

//   return (
//     <div>
//       <h3>Do you have experience and you would like to share it?</h3>

//       {Auth.loggedIn() ? (
//         <>
//           <p
//             className={`m-0 ${
//                characterCount === 280 
//               //  || error ? 'text-danger' : ''
//             }`}
//           >
//             Character Count: {characterCount}/280
//           </p>
//           <form
//             className="flex-row justify-center justify-space-between-md align-center"
//             onSubmit={handleFormSubmit}
//           >
//             <div className="col-12 col-lg-9">
//               <textarea
//                 name="eventText"
//                 placeholder="Here's a new thought..."
//                 value={eventText}
//                 className="form-input w-100"
//                 style={{ lineHeight: '1.5', resize: 'vertical' }}
//                 onChange={handleChange}
//               ></textarea>
//             </div>

//             <div className="col-12 col-lg-3">
//               <button className="btn btn-primary btn-block py-3" type="submit">
//                 Add Event
//               </button>
//             </div>
//             {/* {error && (
//               <div className="col-12 my-3 bg-danger text-white p-3">
//                 {error.message}
//               </div>
//             )} */}
//           </form>
//         </>
//       ) : (
//         <p>
//           You need to be logged in to share your experience. Please{' '}
//           <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
//         </p>
//       )}
       
//     </div>
//   ); 
  
// };

// export default EventForm;
