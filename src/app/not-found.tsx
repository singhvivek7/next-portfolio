import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-2 pt-24 text-center">
      <h3 className="my-2 text-3xl font-bold">
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
        className="mt-5 flex select-none items-center justify-center rounded bg-primary px-10 py-3 text-lg font-bold uppercase text-background shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl active:scale-95 sm:w-fit"
      >
        Go to homepage
      </Link>
    </div>
  );
};

export default NotFound;
