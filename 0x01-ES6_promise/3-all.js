import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let firstName; let lastName; let body;

  const photo = uploadPhoto();
  const user = createUser();

  return Promise.all([photo, user]).then((messages) => {
    body = messages[0].body;
    firstName = messages[1].firstName;
    lastName = messages[1].lastName;
    console.log(`${body} ${firstName} ${lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
