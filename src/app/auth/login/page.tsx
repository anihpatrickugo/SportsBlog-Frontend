
import type { Metadata } from "next"
import Link from "next/link"
import LoginForm from "@/components/common/AuthForm/Login"
import { FcGoogle } from 'react-icons/fc'

export const metadata: Metadata = {
  title: 'Log In',
  description: 'Sign In now to continue reading.',
}


const Page = () => {
  return (
    <section className="w-screen bg-grey-ultraLight p-4 absolute top-0 left-0 right-0 bottom-0 overflow-y-hidden">
      <div className="max-w-3xl mx-auto flex flex-col justify-between items-center bg-white p-4">
        <h1 className="text-3xl font-bold text-grey-stronger my-4"> Login </h1>
        <p className="text-green-primary">Welcome back to our Blog</p>

        {/* form */}
        <LoginForm/>

        <hr className="bg-grey-stronger"/>

        <p className="text-grey-strong my-4">Or sign in with </p>

        
        <button className="w-full md:w-8/12 lg:6/12 bg-red-400 hover:bg-grey-strong active:bg-grey-light py-4 text-lg text-white rounded-full flex item-center justify-center"> <i className="mx-4"> <FcGoogle size={25}/> </i> Continue with Google</button>

        <Link href="/auth/signup" className="my-8 text-lg font-bold text-green-800">Create an Account</Link>


       </div>
  </section>
  )
}

export default Page;
