import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.css';

export const metadata={
    title:"TenzinAI",
    description:'A AI prompt'
}
const RootLayout = ({children}) => {
  return (
    <html>
        <body lang='en'>
          <Provider>
            <div className=' main'>
            <div className=' gradient'/>
            </div>
            <main className=' app'>
              <Nav/>
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout