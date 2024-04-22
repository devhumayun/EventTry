"use client"
import { useAuth } from '@/app/hooks'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const SignInOut = () => {
    const { auth, setAuth } = useAuth()
    const router = useRouter()

    const handleLogout = () => {
        setAuth(null)
        router.push("/login")
    }
    return (
        <>
            {
                auth ? (
                    <>
                        <span className='mr-1 cursor-pointer'>{auth?.name}</span>
                        <span>|</span>
                        <span onClick={handleLogout} className='cursor-pointer'> Logout </span>
                    </>
                ) : (
                    <Link href="/login">Login</Link>
                )
            }
        </>
    )
}

export default SignInOut
