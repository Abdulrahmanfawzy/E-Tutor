import type { ApiPurchase, ApiResponse, Purchase } from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://lms.huma-volve.com";

// Use the same token you use in Postman. Change this to wherever your login stores it.
function getAuthToken() {
  return typeof window !== "undefined" ? localStorage.getItem("token") : null;
}

function ordinal(n: number) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function formatDate(iso: string) {
  const d = new Date(iso);
  const month = d.toLocaleString("en-GB", { month: "long" });
  const time = d.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return `${ordinal(d.getDate())} ${month}, ${d.getFullYear()} at ${time}`;
}

const methodLabels: Record<string, string> = {
  card: "Credit Card",
  paypal: "PayPal",
};

function mapPurchase(p: ApiPurchase): Purchase {
  return {
    id: p.id,
    date: formatDate(p.paid_at),
    coursesCount: p.items_count,
    total: `$${p.total.toFixed(2)} ${p.currency}`,
    method: methodLabels[p.payment.method] ?? p.payment.method,
    card: p.payment.masked
      ? {
          holder: p.payment.holder_name ?? "",
          number: p.payment.masked,
          expiry: "",
        }
      : undefined,
    courses: p.items.map((i) => ({
      id: i.course.id,
      image: i.course.thumbnail_url,
      title: i.course.title,
      rating: i.course.rating,
      reviews: `${i.course.rating_count} Review`,
      instructor: i.course.instructor.name,
      price: i.price,
    })),
  };
}

export async function fetchPurchases(signal?: AbortSignal): Promise<Purchase[]> {
  const token = getAuthToken();
  const url = `${BASE_URL}/api/v1/student/purchases`;
  console.log("Fetching:", url);

  const res = await fetch(url, {
    signal,
    headers: {
      Accept: "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!res.ok) throw new Error(`Request failed (${res.status})`);

  const json: ApiResponse = await res.json();
  if (!json.success) throw new Error(json.message);

  return json.data.data.map(mapPurchase);
}