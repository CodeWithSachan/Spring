export default function SubmitProject() {
  return (
    <section className="min-h-screen bg-black px-6 py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-white mb-4">
          Submit Your Open Source Project
        </h1>
        <p className="text-gray-400 mb-8">
          Share your repository and help contributors grow through real work.
        </p>

        <a
          href="https://forms.gle/PROJECT_FORM_LINK"
          target="_blank"
          className="
            rounded-xl
            bg-gradient-to-r from-pink-500 to-purple-600
            px-10 py-4
            text-white font-medium
            hover:scale-[1.03] transition
          "
        >
          Open Submission Form →
        </a>
      </div>
    </section>
  );
}
