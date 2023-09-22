import { Link } from '@remix-run/react'
import { Auth } from 'aws-amplify'

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const Index:React.FC = () => {

  const current = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user)
    } catch(e){
      console.log(e)
    }
  }

  const login = async () => {
    try {
      const response = await Auth.signIn('dkkiuna11@gmail.com','abcd1234')
      console.log(response)
    } catch(e){
      console.log(e)
    }
  }

  return (
    <main id="content">
      <h1>A better way of keeping track of your notes</h1>
      <p>Try our early beta and never loose track of your notes again!</p>
      <p id="cta">
        <button onClick={current}>Check user</button><br />
        <button onClick={login}>Login</button><br />
        <button onClick={async () => await Auth.signOut()}>Sign Out</button><br />
        
        <Link to="/notes">Try Now!</Link>
      </p>
    </main>
  );
}

export default Index