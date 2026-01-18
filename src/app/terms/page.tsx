export default function TermsPage() {
  return (
    <section className="min-h-screen bg-[#0b0f14] px-6 py-28">
      <div className="mx-auto max-w-4xl space-y-12 text-gray-300">

        <h1 className="text-4xl font-bold text-white">
          Terms of Service
        </h1>

        <p className="text-sm text-gray-400">
          Last updated: January 2026
        </p>

        <p>
          By accessing or using Silicality, you agree to be bound by these Terms
          of Service.
        </p>

        <Section title="1. Use of the Platform">
          <p>
            Silicality is a learning-first platform for open-source
            contributions. You agree to use it responsibly and lawfully.
          </p>
        </Section>

        <Section title="2. Accounts & Authentication">
          <p>
            You are responsible for maintaining the security of your account.
            Do not misuse or impersonate others.
          </p>
        </Section>

        <Section title="3. Contributions & Content">
          <p>
            Contributions remain the responsibility of the contributor. We do
            not guarantee acceptance, outcomes, or employment.
          </p>
        </Section>

        <Section title="4. Mentor & Sponsor Disclaimer">
          <p>
            Mentorship and sponsorships are provided “as-is”. Silicality does
            not guarantee results, performance, or financial returns.
          </p>
        </Section>

        <Section title="5. Limitation of Liability">
          <p>
            Silicality is not liable for indirect, incidental, or consequential
            damages arising from platform usage.
          </p>
        </Section>

        <Section title="6. Termination">
          <p>
            We reserve the right to suspend or terminate accounts that violate
            these terms.
          </p>
        </Section>

        <Section title="7. Changes to Terms">
          <p>
            We may update these terms. Continued use means acceptance of the
            revised terms.
          </p>
        </Section>

        <Section title="8. Contact">
          <p>
            For questions, contact us at{" "}
            <a
              href="mailto:silicality.dev@gmail.com"
              className="text-pink-400 hover:underline"
            >
              silicality.dev@gmail.com
            </a>.
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
