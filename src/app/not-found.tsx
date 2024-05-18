import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="pt-24 text-center min-h-dvh flex justify-center items-center flex-col gap-2">
      <h3 className="font-bold text-3xl my-2">
        The page you are looking for was not found.
      </h3>
      <p className="text-lg">Please check the URL and try again.</p>

      <p className="text-lg">
        If you believe this is an error, please{' '}
        <Link href="/#contact" className="text-primary underline">
          contact us
        </Link>
        .
      </p>

      <p className="text-xl">Thank you!</p>

      <Link
        href="/#home"
        className="bg-primary text-background py-3 px-10 rounded shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all mt-5 font-bold text-lg uppercase select-none flex justify-center items-center sm:w-fit">
        Go to homepage
      </Link>
    </div>
  );
};

export default NotFound;
