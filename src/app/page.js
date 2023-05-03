// import { Form } from "./components/Form";
import { Form } from "./components/PostgreForm";
import { KVViewContacts } from "./components/KVViewContacts";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-y-8 min-h-screen">
      <h2 className="text-4xl font-bold">Contacta conmigo</h2>
      <div className="flex flex-col items-center w-full max-w-md mx-auto">
        <Form />
        <KVViewContacts />
      </div>
    </main>
  );
}
