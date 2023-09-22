import type { LoaderArgs } from "@remix-run/node";
import { Auth, withSSRContext } from "aws-amplify";

export default function NotesPage() {


  const current = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user)
    } catch(e){
      console.log(e)
    }
  }
    return (
      <main>
        <h1>My Notes</h1>
        <button onClick={current}>Check user</button>
      </main>
    );
}

export const loader = async ({request}:LoaderArgs) => {


  console.log('checking for user in SSR -------')

  try {
    const SSR = withSSRContext({ req: { headers: { cookie: request.headers.get('Cookie')}}})
    const user = await SSR.Auth.currentAuthenticatedUser()
    console.log('the user', user)
  } catch(e){
    console.log('some error',e)
  }

  return true
}