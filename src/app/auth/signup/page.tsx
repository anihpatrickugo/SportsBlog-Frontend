import type { Metadata } from "next"
import Link from "next/link"
import SignUpForm from "@/components/common/AuthForm/SignUp"
import { FcGoogle } from 'react-icons/fc'

export const metadata: Metadata = {
    title: 'Sign Up',
    description: 'Create an account now to enjoy unlimited features.',
  }



const Page = () => {
  return (
    <section className="w-screen bg-grey-ultraLight p-4 absolute top-0 left-0 right-0 bottom-0 overflow-y-hidden md:overflow-y-scroll">
      <div className="max-w-3xl mx-auto h-screen md:h-auto flex flex-col justify-between items-center bg-white p-4">

        <h1 className="text-3xl font-bold text-grey-stronger my-4"> Sign Up </h1>
        <p className="text-green-primary">Create an Account</p>

        {/* form */}
        <SignUpForm/>

        <hr className="bg-grey-stronger"/>

        <p className="text-grey-strong my-4">Or sign up with </p>

        
        <button className="w-full md:w-8/12 lg:6/12 bg-red-400 hover:bg-grey-strong active:bg-grey-light py-4 text-lg text-white rounded-full flex item-center justify-center"> <i className="mx-4"> <FcGoogle size={25}/> </i> Continue with Google</button>

        <Link href="/auth/login" className="my-8 text-lg font-bold text-green-800">Login to your account</Link>


       </div>
  </section>
  )
}

export default Page;
