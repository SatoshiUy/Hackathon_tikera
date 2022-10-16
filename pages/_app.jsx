import '../styles/globals.css';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../util/theme.util';
import store from '../store/store'
import { Provider } from 'react-redux'
import Box from '@mui/material/Box';

import Head from 'next/head'
import Image from 'next/image'
import TikeraBackgroundPic from '../public/owner/tikera_background.png'

import Loading from '../components/Loading.component';
import SignInPage from './signin';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../config/firebase';
import { collection, doc, query, serverTimestamp, setDoc, where } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useEffect } from 'react';

// StyledEngineProvider injectFirst injects the MUI stylesheet before TailwindCSS
function MyApp({ Component, pageProps }) {
	const [loggedInUser, loading, error] = useAuthState(auth);
	console.log(loggedInUser)

  useEffect(() => {
    const setUserInFirebase = async () => {
      try {
        await setDoc(
          doc(db, 'users', loggedInUser.uid),
          {
            email: loggedInUser.email,
            lastSeen: serverTimestamp(),
            photoURL: loggedInUser.photoURL
          },
          {merge: true}
        )
      } catch(error) {
        console.log("ERROR SETTING USER INFO IN FIREBASE", error)
      }
    }
    if (loggedInUser){
      setUserInFirebase();
    }
  }
  , [loggedInUser])


  if (loading) return <Loading />
  
  if (!loggedInUser) return <SignInPage />

	console.log(loggedInUser)
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={darkTheme}>
				<Provider store={store}>
					<Head>
						<title>Tikera</title>
						<link rel="shortcut icon" href="/owner/tikera_favicon.ico" />
						<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
					</Head>
					<Component {...pageProps} />
					<Box
						sx={{ height:'100%', weight:'100%', position: 'fixed', top: '0', zIndex: '-1' }}
						>
							<Image
								src={TikeraBackgroundPic}
								alt="Tikera Background"
								style={{position: 'fixed', opacity: '0.3'}}
							/>
					</Box>
				</Provider>
			</ThemeProvider>
		</StyledEngineProvider>
	);
}

export default MyApp;