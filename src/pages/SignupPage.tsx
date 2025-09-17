import { Link, useNavigate } from 'react-router-dom';
import { Mail, Apple } from 'lucide-react';
import logo from '../image/logo.png';

export function SignupPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Left side with image */}
      <div className="md:w-1/2 bg-[#E3F3F3] p-8 flex items-center justify-center">
        <div className="max-w-md">
          <img
            src={logo}
            alt="Workout illustration"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Right side with signup options */}
      <div className="md:w-1/2 p-8 flex items-center justify-center">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold text-center mb-8">Sign up your account</h2>

          {/* Create Account Button */}
          <button 
            onClick={() => navigate('/signup/form')}
            className="w-full mb-4 py-2 px-4 border border-teal-500 rounded-md text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Create an Account
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">or</span>
            </div>
          </div>

          {/* Sign up options */}
          <div className="space-y-4">
            <button className="w-full py-2 px-4 border border-teal-500 rounded-md text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2" />
              Sign Up with Email
            </button>

            <button className="w-full py-2 px-4 border border-red-500 rounded-md text-red-500 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 flex items-center justify-center">
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                />
              </svg>
              Sign up with Google
            </button>

            <button className="w-full py-2 px-4 border border-blue-600 rounded-md text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center justify-center">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Sign up with Facebook
            </button>

            <button className="w-full py-2 px-4 border border-gray-900 rounded-md text-gray-900 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center justify-center">
              <Apple className="h-5 w-5 mr-2" />
              Sign up with Apple
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            By continuing you agree to our{' '}
            <Link to="/terms" className="text-indigo-600 hover:text-indigo-500">
              Terms & Conditions
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-indigo-600 hover:text-indigo-500">
              Privacy Policy
            </Link>
          </p>

          <p className="mt-4 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-teal-500 hover:text-teal-400">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
