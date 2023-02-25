import "@/lib/globals.css";
import type { AppProps } from "next/app";

// // chart.js----------------
// import Chart from "chart.js/auto";
// import "chartjs-adapter-date-fns";
// import StreamingPlugin from "chartjs-plugin-streaming";
// Chart.register(StreamingPlugin);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
