export async function trackResourceClick(
  title: string,
  category: string
) {
  try {
    await fetch("/api/resources/click", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        category,
      }),
    });
  } catch (error) {
    // analytics should NEVER break the app
    console.warn("Resource click tracking failed", error);
  }
}
