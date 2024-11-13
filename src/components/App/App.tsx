import { useCallback, useState } from 'react'
import AppView from './AppView'


function App() {
    const [loggedIn, setLoggedIn] = useState<string | undefined>(undefined)
    const [isDapper, setIsDapper] = useState<boolean>(false)

    const handleLogout = useCallback(() => {
      setLoggedIn(undefined)
    }, [])
    

    const handleSignIn = async () => {
        if (window.ethereum && window.ethereum.enable) {
          try {
            const wallet = await window.ethereum.enable()
            if (wallet.length > 0) {
                setLoggedIn(wallet[0])
                setIsDapper(window.ethereum.isDapper)
            }
          } catch (error) {
              alert('Error during sign in')
          }
        } else {
            alert('Dapper wallet not found.')
        }
    }

    const handleSignOut = async () => handleLogout()

    return <AppView {...{ handleSignIn, handleSignOut, loggedIn, isDapper }} />
}

export default App

