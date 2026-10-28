import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { SectionHeading } from "../ui/SectionHeading";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const fieldClasses =
  "mt-2 w-full rounded-xl border border-sand bg-white px-4 py-3 text-forest placeholder:text-forest/45 focus:border-forest focus:outline-none";

export function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setErrorMessage("");

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setErrorMessage(
        "El formulario aún no está configurado. Inténtalo más tarde o contacta directamente por otro medio.",
      );
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSending(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          message: formData.get("message") || "Sin mensaje adicional",
        },
        { publicKey },
      );
      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("No se pudo enviar el formulario de contacto:", error);
      setStatus("error");
      setErrorMessage(
        "No se pudo enviar tu mensaje. Comprueba tu conexión e inténtalo de nuevo.",
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="px-6 py-20 sm:py-28" id="contacto">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos de tu jardín"
          description="Cuéntanos qué necesita tu espacio exterior y nos pondremos en contacto contigo."
        />

        <form
          className="grid gap-5 rounded-2xl bg-sand/35 p-6 sm:grid-cols-2 sm:p-8"
          onSubmit={handleSubmit}
        >
          <label className="font-medium">
            Nombre completo
            <input
              autoComplete="name"
              className={fieldClasses}
              maxLength={100}
              name="name"
              placeholder="Tu nombre y apellidos"
              required
            />
          </label>

          <label className="font-medium">
            Teléfono de contacto
            <input
              autoComplete="tel"
              className={fieldClasses}
              maxLength={30}
              name="phone"
              placeholder="Tu número de teléfono"
              required
              type="tel"
            />
          </label>

          <label className="font-medium sm:col-span-2">
            Correo electrónico
            <input
              autoComplete="email"
              className={fieldClasses}
              maxLength={254}
              name="email"
              placeholder="nombre@ejemplo.com"
              required
              type="email"
            />
          </label>

          <label className="font-medium sm:col-span-2">
            ¿En qué podemos ayudarte? <span className="font-normal text-forest/65">(opcional)</span>
            <textarea
              className={fieldClasses}
              maxLength={2000}
              name="message"
              placeholder="Cuéntanos brevemente qué trabajo necesitas"
              rows={4}
            />
          </label>

          <div className="sm:col-span-2">
            <button
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-forest px-7 py-3 font-semibold text-ivory transition-colors hover:bg-forest-hover disabled:cursor-wait disabled:opacity-70"
              disabled={isSending}
              type="submit"
            >
              {isSending ? "Enviando..." : "Enviar solicitud"}
            </button>
            <p aria-live="polite" className="mt-4 text-sm" role="status">
              {status === "success" &&
                "¡Gracias! Tu solicitud se ha enviado correctamente. Nos pondremos en contacto contigo."}
              {status === "error" && errorMessage}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
