export default function AuthErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-gray-400 px-4 text-center">
      <h1 className="text-2xl font-semibold text-white mb-2">
        Authentication Error
      </h1>
      <p className="text-sm">
        Something went wrong during login. Please try again.
      </p>
    </div>
  );
}
