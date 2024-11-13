import React from 'react'
import { Link } from 'react-router-dom'
import { AuthProps } from 'types/auth'

const Header: React.FC<AuthProps> = ({ loggedIn, handleSignIn, handleSignOut, isDapper }) => {
    return (
        <>
            <h1><Link to={'/'}>{'Escape Hatch POC'}</Link></h1>
            {loggedIn ? (
                <button onClick={handleSignOut}>
                    <WalletLogo logo={isDapper ? 'dapper' : 'metamask'} />
                    {'Sign out'}
                </button>
            ) : (
                <button onClick={handleSignIn}>{'Sign in'}</button>
            )}
        </>

    )
}

const WalletLogo: React.FC<{logo: string }> = ({ logo }) => logo === 'dapper'
    ? <img src={'/dapper-wallet.png'} alt={'dapper wallet'} />
    : <img src={'/metamask.svg'} alt={'metamask'} />

export default Header