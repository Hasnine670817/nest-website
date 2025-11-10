import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <div id="error-page" className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">
                <div className="bg-white shadow-xl rounded-3xl p-5 sm:p-10 max-w-lg w-full">
                    <h1 className="text-3xl sm:text-6xl font-extrabold text-red-500 mb-4 animate-bounce">Oops!</h1>
                    <h2 className="text-lg sm:text-2xl font-semibold text-gray-800 mb-2">Something went wrong</h2>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-6">Sorry, an unexpected error has occurred.</p>

                    <div className="bg-gray-100 rounded-lg py-3 px-4 border border-gray-200">
                        <p className="text-sm text-gray-700">
                            <i>{error.statusText || error.message}</i>
                        </p>
                    </div>

                    <Link
                        to='/'
                        className="mt-4 sm:mt-8 inline-block px-6 py-2 sm:py-3 bg-[#3BB77E] text-white font-medium rounded-lg shadow-md hover:bg-[#25c479] transition-all duration-300"
                    >
                        Go Home
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;