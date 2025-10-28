import {
  BookOpen,
  Calendar,
  Check,
  ChevronRight,
  CreditCard,
  Mail,
  MapPin,
  Phone,
  User,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";
import AccentLine from "../components/AccentLine";

type Course = {
  id: string;
  title: string;
  tagline: string;
  bullets: string[];
  price: number;
  accent: string; // ex: "from-fuchsia-500 to-violet-800"
};

const DEFAULT_COURSES: Course[] = [
  {
    id: "front-end",
    title: "Front End",
    tagline: "Interfaces modernas e acessíveis.",
    bullets: ["React + Vite", "Tailwind CSS", "Acessibilidade (a11y)"],
    price: 1299,
    accent: "from-fuchsia-500 to-violet-800",
  },
  {
    id: "back-end",
    title: "Back End",
    tagline: "APIs escaláveis e seguras.",
    bullets: ["Node/Express", "Auth/JWT", "PostgreSQL/Prisma"],
    price: 1399,
    accent: "from-sky-500 to-cyan-800",
  },
  {
    id: "fullstack",
    title: "Full-Stack",
    tagline: "Do banco ao pixel final.",
    bullets: ["React + Node", "REST/Arquitetura", "DevOps básico"],
    price: 1899,
    accent: "from-emerald-500 to-teal-800",
  },
  {
    id: "data-science",
    title: "Data Science",
    tagline: "Dados em ação, decisões melhores.",
    bullets: ["Python/Pandas", "ML básico", "Dashboards"],
    price: 1699,
    accent: "from-amber-500 to-orange-600",
  },
  {
    id: "ia",
    title: "Inteligência Artificial",
    tagline: "Do prompt ao modelo em produção.",
    bullets: ["LLMs & APIs", "Prompt Engineering", "Ética & avaliação"],
    price: 1799,
    accent: "from-purple-400 to-fuchsia-800",
  },
  {
    id: "informatica",
    title: "Informática",
    tagline: "Fundamentos práticos do computador.",
    bullets: ["S.O. & Office", "Navegação segura", "Organização de arquivos"],
    price: 899,
    accent: "from-indigo-500 to-blue-800",
  },
];

type EnrollPageProps = {
  courses?: Course[];
};

export default function Enroll({ courses = DEFAULT_COURSES }: EnrollPageProps) {
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [period, setPeriod] = useState<"weekday" | "saturday" | "online">("weekday");
  const [payment, setPayment] = useState<"pix" | "card" | "boleto">("pix");
  const [accept, setAccept] = useState(false);

  const [name, setName] = useState("");
  const [doc, setDoc] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState<null | "ok" | "error">(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const selected = useMemo(() => courses.find((c) => c.id === selectedCourse), [courses, selectedCourse]);

  const promoDiscount = useMemo(() => (payment === "pix" ? 0.1 : 0), [payment]);
  const subtotal = selected?.price ?? 0;
  const discount = Math.round(subtotal * promoDiscount);
  const total = subtotal - discount;

  function validate() {
    const e: Record<string, string> = {};
    if (!selectedCourse) e.course = "Escolha um curso.";
    if (!name.trim()) e.name = "Informe seu nome completo.";
    if (!doc.trim()) e.doc = "Informe seu CPF/Documento.";
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) e.email = "Informe um e-mail válido.";
    if (!phone.trim()) e.phone = "Informe um telefone para contato.";
    if (!accept) e.accept = "É necessário aceitar os termos para prosseguir.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    try {
      setLoading(true);
      setSubmitted(null);
      await new Promise((r) => setTimeout(r, 1200));
      setSubmitted("ok");
    } catch {
      setSubmitted("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main id="site-main" className="bg-gray-950 text-white">
      {/* Hero escuro */}
      <section className="bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-xl ring-1 ring-white/10 px-3 py-1.5 bg-white/5">
              <Zap className="w-4 h-4 text-yellow-300" />
              <span className="font-semibold text-yellow-300">Matrícula</span>
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
              Escolha sua trilha e comece hoje
            </h1>
            <p className="mt-2 text-white/70 max-w-2xl">
              Preencha seus dados, selecione o curso e o período ideais. Você receberá as instruções no e-mail.
            </p>
          </div>
        </div>
      </section>

      <AccentLine />

      {/* Conteúdo escuro */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Coluna esquerda: cards de cursos */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-white/[0.03]">
              <div className="px-6 py-5 border-b border-white/10 flex items-center gap-3">
                <BookOpen className="w-5 h-5" />
                <h2 className="text-lg font-semibold">Selecione um curso</h2>
              </div>

              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {courses.map((c) => {
                  const active = selectedCourse === c.id;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedCourse(c.id)}
                      className={[
                        "group relative text-left overflow-hidden rounded-xl ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] hover:ring-white/20 transition-shadow",
                        active && "ring-2 ring-[#A243D2]/60 shadow-2xl shadow-black/40",
                      ].join(" ")}
                    >
                      {/* Glow */}
                      <div
                        className={`pointer-events-none absolute -inset-px rounded-xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25 bg-gradient-to-r ${c.accent}`}
                        aria-hidden
                      />
                      {/* Barra top */}
                      <div className={`h-1 w-full bg-gradient-to-r ${c.accent}`} />
                      <div className="p-4">
                        <h3 className="font-semibold">{c.title}</h3>
                        <p className="text-sm text-white/70 mt-0.5">{c.tagline}</p>
                        <ul className="mt-3 space-y-1.5 text-sm text-white/80">
                          {c.bullets.map((b) => (
                            <li key={b} className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-emerald-400" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex items-baseline justify-between">
                          <span className="text-xs text-white/60">Preço</span>
                          <span className="text-base font-semibold">
                            R$ {c.price.toLocaleString("pt-BR")}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {errors.course && (
                <div className="px-6 pb-5 -mt-2">
                  <p className="text-sm text-red-400">{errors.course}</p>
                </div>
              )}
            </div>

            {/* Formulário escuro */}
            <form onSubmit={onSubmit} className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-white/[0.03]">
              <div className="px-6 py-5 border-b border-white/10 flex items-center gap-3">
                <User className="w-5 h-5" />
                <h2 className="text-lg font-semibold">Seus dados</h2>
              </div>

              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-white/90">Nome completo</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`mt-1 w-full rounded-lg border px-3 py-2.5 outline-none transition bg-white/5 text-white placeholder-white/40
                    ${errors.name ? "border-red-400/60 focus:ring-2 focus:ring-red-400/30" : "border-white/10 focus:ring-2 focus:ring-[#A243D2]/30"}`}
                    placeholder="Ex.: Maria Silva"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium text-white/90">CPF / Documento</label>
                  <input
                    value={doc}
                    onChange={(e) => setDoc(e.target.value)}
                    className={`mt-1 w-full rounded-lg border px-3 py-2.5 outline-none transition bg-white/5 text-white placeholder-white/40
                    ${errors.doc ? "border-red-400/60 focus:ring-2 focus:ring-red-400/30" : "border-white/10 focus:ring-2 focus:ring-[#A243D2]/30"}`}
                    placeholder="000.000.000-00"
                  />
                  {errors.doc && <p className="mt-1 text-sm text-red-400">{errors.doc}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium text-white/90">E-mail</label>
                  <div className={`mt-1 flex items-center gap-2 rounded-lg border px-3 py-2.5 bg-white/5 ${errors.email ? "border-red-400/60" : "border-white/10"}`}>
                    <Mail className="w-4 h-4 text-white/60" />
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full outline-none bg-transparent text-white placeholder-white/40"
                      placeholder="voce@email.com"
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium text-white/90">Telefone</label>
                  <div className={`mt-1 flex items-center gap-2 rounded-lg border px-3 py-2.5 bg-white/5 ${errors.phone ? "border-red-400/60" : "border-white/10"}`}>
                    <Phone className="w-4 h-4 text-white/60" />
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full outline-none bg-transparent text-white placeholder-white/40"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-white/90">Cidade/UF (opcional)</label>
                  <div className="mt-1 flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2.5 bg-white/5">
                    <MapPin className="w-4 h-4 text-white/60" />
                    <input
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full outline-none bg-transparent text-white placeholder-white/40"
                      placeholder="Juiz de Fora / MG"
                    />
                  </div>
                </div>
              </div>

              {/* Preferências dark */}
              <div className="px-6 py-5 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-white/90 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Período
                  </label>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPeriod("weekday")}
                      className={`rounded-lg px-3 py-2 text-sm ring-1
                      ${period === "weekday" ? "bg-[#A243D2]/15 text-[#A243D2] ring-[#A243D2]/30" : "ring-white/10 hover:bg-white/5"}`}
                    >
                      Seg–Sex
                    </button>
                    <button
                      type="button"
                      onClick={() => setPeriod("saturday")}
                      className={`rounded-lg px-3 py-2 text-sm ring-1
                      ${period === "saturday" ? "bg-[#A243D2]/15 text-[#A243D2] ring-[#A243D2]/30" : "ring-white/10 hover:bg-white/5"}`}
                    >
                      Sábados
                    </button>
                    <button
                      type="button"
                      onClick={() => setPeriod("online")}
                      className={`rounded-lg px-3 py-2 text-sm ring-1
                      ${period === "online" ? "bg-[#A243D2]/15 text-[#A243D2] ring-[#A243D2]/30" : "ring-white/10 hover:bg-white/5"}`}
                    >
                      Online
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-white/90 flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    Pagamento
                  </label>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPayment("pix")}
                      className={`rounded-lg px-3 py-2 text-sm ring-1
                      ${payment === "pix" ? "bg-[#A243D2]/15 text-[#A243D2] ring-[#A243D2]/30" : "ring-white/10 hover:bg-white/5"}`}
                    >
                      PIX
                    </button>
                    <button
                      type="button"
                      onClick={() => setPayment("card")}
                      className={`rounded-lg px-3 py-2 text-sm ring-1
                      ${payment === "card" ? "bg-[#A243D2]/15 text-[#A243D2] ring-[#A243D2]/30" : "ring-white/10 hover:bg-white/5"}`}
                    >
                      Cartão
                    </button>
                    <button
                      type="button"
                      onClick={() => setPayment("boleto")}
                      className={`rounded-lg px-3 py-2 text-sm ring-1
                      ${payment === "boleto" ? "bg-[#A243D2]/15 text-[#A243D2] ring-[#A243D2]/30" : "ring-white/10 hover:bg-white/5"}`}
                    >
                      Boleto
                    </button>
                  </div>
                  {payment === "pix" && (
                    <p className="mt-2 text-xs text-emerald-300 bg-emerald-500/10 inline-block rounded px-2 py-1">
                      Desconto de 10% aplicado ao total.
                    </p>
                  )}
                </div>

                <div className="md:col-span-1">
                  <label className="text-sm font-medium text-white/90">Termos</label>
                  <div className="mt-2 flex items-start gap-2">
                    <input
                      id="terms"
                      type="checkbox"
                      checked={accept}
                      onChange={(e) => setAccept(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-white/20 text-[#A243D2] bg-transparent focus:ring-[#A243D2]"
                    />
                    <label htmlFor="terms" className="text-sm text-white/80">
                      Li e concordo com os termos de matrícula e política de privacidade.
                    </label>
                  </div>
                  {errors.accept && <p className="mt-1 text-sm text-red-400">{errors.accept}</p>}
                </div>
              </div>

              {/* Ações */}
              <div className="px-6 py-5 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <div className="text-sm text-white/70 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  Ao enviar, você receberá confirmação por e-mail.
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#A243D2] px-5 py-3 text-white font-semibold hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A243D2]/40 disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Enviando…
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5" />
                      Confirmar matrícula
                    </>
                  )}
                </button>
              </div>

              {submitted === "ok" && (
                <div className="px-6 pb-6 -mt-2">
                  <div className="rounded-xl bg-emerald-500/10 text-emerald-200 px-4 py-3 ring-1 ring-emerald-400/30">
                    Matrícula enviada com sucesso! Em breve você receberá um e-mail com as próximas etapas.
                  </div>
                </div>
              )}
              {submitted === "error" && (
                <div className="px-6 pb-6 -mt-2">
                  <div className="rounded-xl bg-red-500/10 text-red-200 px-4 py-3 ring-1 ring-red-400/30">
                    Ocorreu um erro ao enviar. Tente novamente em instantes.
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Coluna direita: resumo (escuro) */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-4">
              <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-white/[0.03]">
                <div className="px-5 py-4 border-b border-white/10 flex items-center gap-3">
                  <Check className="w-5 h-5" />
                  <h3 className="font-semibold">Resumo da matrícula</h3>
                </div>
                <div className="p-5 space-y-4 text-sm text-white/80">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Curso</span>
                    <span className="font-medium text-white">
                      {selected ? selected.title : "—"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Período</span>
                    <span className="font-medium text-white">
                      {period === "weekday" ? "Seg–Sex" : period === "saturday" ? "Sábados" : "Online"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Pagamento</span>
                    <span className="font-medium text-white uppercase">{payment}</span>
                  </div>

                  <hr className="border-white/10" />

                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Subtotal</span>
                    <span className="text-white">R$ {subtotal.toLocaleString("pt-BR")}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Desconto</span>
                    <span className={discount > 0 ? "text-emerald-300" : "text-white"}>
                      {discount > 0 ? `- R$ ${discount.toLocaleString("pt-BR")}` : "—"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-base font-semibold">
                    <span>Total</span>
                    <span>R$ {total.toLocaleString("pt-BR")}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-white/[0.03]">
                <div className="px-5 py-4 border-b border-white/10">
                  <h4 className="font-semibold">Dicas</h4>
                </div>
                <ul className="p-5 text-sm text-white/80 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5" />
                    <span>Escolha PIX para garantir 10% de desconto imediato.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5" />
                    <span>Defina um período compatível com sua rotina.</span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
