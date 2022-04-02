import '../styles/globals.css'

import { NextPage } from 'next';
import { AppProps } from 'next/app';


// definir el tpo de datos qu este es una pagina
type NextPageWithLayout = NextPage & {
  // opcional
  getLayout?: (page: JSX.Element) => JSX.Element;
}

// definir el tpo de datos qu este es una pagina
type AppPropsWithLayout = AppProps & {

  Component: NextPageWithLayout;
}



function MyApp({ Component, pageProps }: AppPropsWithLayout) {


  // multiples layouts anidados
  // si el layout existe retorne la pagina si no, solamente toma la pagina y va a retornar el page
  const getLayout = Component.getLayout || ((page) => page);


  // return (
  //   <>
  //     <Component {...pageProps} />
  //   </>
  // );

  return getLayout(
    // reenderizamos el mismo componente
    <Component {...pageProps} />
  );



}

export default MyApp
