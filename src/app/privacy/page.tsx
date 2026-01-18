export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-screen bg-[#0b0f14] px-6 py-28">
      <div className="mx-auto max-w-4xl space-y-12 text-gray-300">

        <h1 className="text-4xl font-bold text-white">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-400">
          Last updated: January 2026
        </p>

        <p>
          Silicality respects your privacy. This Privacy Policy explains how we
          collect, use, and protect your information when you use our platform.
        </p>

        <Section title="1. Information We Collect">
          <ul className="list-disc pl-6 space-y-2">
            <li>Basic profile data (name, email, avatar) via GitHub login</li>
            <li>Contribution activity and participation data</li>
            <li>Form submissions (contributors, mentors, sponsors)</li>
            <li>Anonymous analytics to improve the platform</li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <ul className="list-disc pl-6 space-y-2">
            <li>To manage accounts and authentication</li>
            <li>To run seasonal contribution programs</li>
            <li>To communicate important updates</li>
            <li>To improve learning experience and platform quality</li>
          </ul>
        </Section>

        <Section title="3. Data Sharing">
          <p>
            We do not sell your personal data. Information is shared only when
            necessary to operate the platform (e.g., authentication services).
          </p>
        </Section>

        <Section title="4. Data Security">
          <p>
            We use industry-standard security practices. However, no system is
            100% secure, and we cannot guarantee absolute security.
          </p>
        </Section>

        <Section title="5. Your Rights">
          <p>
            You may request access, correction, or deletion of your data by
            contacting us at{" "}
            <a
              href="mailto:silicality.dev@gmail.com"
              className="text-pink-400 hover:underline"
            >
              silicality.dev@gmail.com
            </a>.
          </p>
        </Section>

        <Section title="6. Changes to This Policy">
          <p>
            We may update this policy from time to time. Continued use of
            Silicality means you accept the updated policy.
          </p>
        </Section>

      </div>
    </section>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      {children}
    </div>
  );
}
