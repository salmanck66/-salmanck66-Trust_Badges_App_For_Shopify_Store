import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { login } from "../../shopify.server"; 
import styles from "./styles.module.css";

export const loader = async ({ request }) => {
  const url = new URL(request.url);

  if (url.searchParams.get("shop")) {
    throw redirect(`/app?${url.searchParams.toString()}`);
  }

  return json({ showForm: Boolean(login) });
};

export default function App() {
  const { showForm } = useLoaderData();

  return (
    <div className={styles.index}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Display Trust Badges to Boost Customer Confidence</h1>
        <p className={styles.text}>
          Select and display trust badges to enhance your product pages and build trust with your customers.
        </p>
        {showForm && (
          <Form className={styles.form} method="post" action="/auth/login">
            <label className={styles.label}>
              <span>Shop Domain</span>
              <input className={styles.input} type="text" name="shop" placeholder="my-shop-domain.myshopify.com" required />
              <span>e.g: my-shop-domain.myshopify.com</span>
            </label>
            <button className={styles.button} type="submit">
              Log In
            </button>
          </Form>
        )}
        <ul className={styles.list}>
          <li>
            <strong>Customizable Badges</strong>. Choose from a variety of trust badges to match your brand.
          </li>
          <li>
            <strong>Easy Integration</strong>. Seamlessly integrate with your Shopify store in just a few clicks.
          </li>
          <li>
            <strong>Improved Conversion</strong>. Enhance customer trust and potentially increase sales.
          </li>
        </ul>
      </div>
    </div>
  );
}
