import { useState } from "react";
// component---------
import { Header } from "./Header";
import { Footer } from "./Footer";
//type--------------
import type { User } from "@/types";

export const Page = () => {
  const [user, setUser] = useState<User>();
  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: "Meg" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Meg" })}
      />
      <section>
        <h2>◇◆タイトル◆◇</h2>
      </section>

      <Footer />
    </article>
  );
};
