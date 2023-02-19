import LoadingScreen from '@/components/LoadingScreen';
import '@/styles/globals.css'
import React from 'react';
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <>
    {/*  */}
      {loading ? (
        <>
          <Component {...pageProps} />
        </>
      ) : ( <LoadingScreen/>
      )}
    </>
  );

}
