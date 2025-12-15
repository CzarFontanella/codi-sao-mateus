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
import AccentLine from "../components/AppComponents/AccentLine";

type Course = {
  id: string;
  title: string;
  tagline: string;
  bullets: string[];
  price: number;
  accent: string; // ex: "from-fuchsia-500 to-violet-800"
  turmas?: {
    periodo: string;
    turno?: string[];
  }[];
};

const DEFAULT_COURSES: Course[] = [
  {
    id: "front-end",
    title: "Front End",
    tagline: "Interfaces modernas e acessíveis.",
    bullets: ["React + Vite", "Tailwind CSS", "Acessibilidade (a11y)"],
    price: 1599,
    accent: "from-fuchsia-500 to-violet-800",
    turmas: [
      {
        periodo: "Seg–Qua",
        turno: ["Noite\n19h~21h"],
      },
      {
        periodo: "Ter–Qui",
        turno: ["Manhã\n10h~12h", "Tarde\n15h~17h", "Noite\n19h~21h"],
      },
      {
        periodo: "Online",
      },
    ],
  },
  {
    id: "back-end",
    title: "Back End",
    tagline: "APIs escaláveis e seguras.",
    bullets: ["Node/Express", "Auth/JWT", "PostgreSQL/Prisma"],
    price: 1599,
    accent: "from-sky-500 to-cyan-800",
    turmas: [
      {
        periodo: "Seg–Qua",
        turno: ["Noite\n19h~21h"],
      },
      {
        periodo: "Ter–Qui",
        turno: ["Manhã\n10h~12h", "Tarde\n15h~17h", "Noite\n19h~21h"],
      },
      {
        periodo: "Online",
      },
    ],
  },
  {
    id: "fullstack",
    title: "Full-Stack",
    tagline: "Do banco ao pixel final.",
    bullets: ["React + Node", "REST/Arquitetura", "DevOps básico"],
    price: 2799,
    accent: "from-emerald-500 to-teal-800",
    turmas: [
      {
        periodo: "Seg–Qua",
        turno: ["Noite\n19h~21h"],
      },
      {
        periodo: "Ter–Qui",
        turno: ["Manhã\n10h~12h", "Tarde\n15h~17h", "Noite\n19h~21h"],
      },
      {
        periodo: "Intensivo Qua",
        turno: ["Noite\n19h~22h"],
      },
      {
        periodo: "Online",
      },
    ],
  },
  {
    id: "data-science",
    title: "Data Science",
    tagline: "Dados em ação, decisões melhores.",
    bullets: ["Python/Pandas", "ML básico", "Dashboards"],
    price: 2399,
    accent: "from-amber-500 to-orange-600",
    turmas: [
      {
        periodo: "Intensivo Ter",
        turno: ["Noite\n19h~22h"],
      },
      {
        periodo: "Online",
      },
    ],
  },
  {
    id: "ia",
    title: "Inteligência Artificial",
    tagline: "Do prompt ao modelo em produção.",
    bullets: ["LLMs & APIs", "Prompt Engineering", "Ética & avaliação"],
    price: 1499,
    accent: "from-purple-400 to-fuchsia-800",
    turmas: [
      {
        periodo: "Quarta",
        turno: ["Manhã\n10h~11h30m"],
      },
      {
        periodo: "Quinta",
        turno: ["Noite\n19h30m~21h"],
      },
      {
        periodo: "Online",
      },
    ],
  },
  {
    id: "informatica",
    title: "Informática",
    tagline: "Fundamentos práticos do computador.",
    bullets: ["S.O. & Office", "Navegação segura", "Organização de arquivos"],
    price: 1499,
    accent: "from-indigo-500 to-blue-800",
    turmas: [
      {
        periodo: "Seg–Qua",
        turno: ["Tarde\n15h~17h"],
      },
      {
        periodo: "Online",
      },
    ],
  },
  {
    id: "ingles",
    title: "Inglês para Desenvolvedores",
    tagline: "Inglês técnico focado em TI.",
    bullets: [
      "Vocabulário técnico",
      "Leitura e interpretação",
      "Conversação no amb. de TI",
    ],
    price: 799,
    accent: "from-red-500 to-red-900",
    turmas: [
      {
        periodo: "Online",
      },
    ],
  },
];

type EnrollPageProps = {
  courses?: Course[];
};

export default function Enroll({ courses = DEFAULT_COURSES }: EnrollPageProps) {
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [period, setPeriod] = useState<"weekday" | "saturday" | "online">(
    "weekday"
  );
  const [payment, setPayment] = useState<"pix" | "card" | "boleto">("pix");
  const [accept, setAccept] = useState(false);

  const [name, setName] = useState("");
  const [doc, setDoc] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  // new states for turma / turno selections
  const [selectedTurmaIdx, setSelectedTurmaIdx] = useState<number | null>(null);
  const [selectedTurno, setSelectedTurno] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState<null | "ok" | "error">(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // formatação de CPF e Telefone
  const formatCPF = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    let out = digits;
    if (digits.length > 9) {
      out = digits.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    } else if (digits.length > 6) {
      out = digits.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
    } else if (digits.length > 3) {
      out = digits.replace(/(\d{3})(\d{1,3})/, "$1.$2");
    }
    return out;
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "");
    // (XX) XXXXX-XXXX or (XX) XXXX-XXXX
    if (digits.length <= 2) return digits ? `(${digits}` : "";
    if (digits.length <= 6) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }
    if (digits.length <= 10) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    }
    // 11+ digits
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(
      7,
      11
    )}`;
  };

  const selected = useMemo(
    () => courses.find((c) => c.id === selectedCourse),
    [courses, selectedCourse]
  );

  const promoDiscount = useMemo(
    () => (payment === "pix" ? 0.05 : 0),
    [payment]
  );
  const subtotal = selected?.price ?? 0;
  const discount = Math.round(subtotal * promoDiscount);
  const total = subtotal - discount;

  function validate() {
    const e: Record<string, string> = {};
    if (!selectedCourse) e.course = "Escolha um curso.";
    if (!name.trim()) e.name = "Informe seu nome completo.";
    if (!doc.trim()) e.doc = "Informe seu CPF/Documento.";
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email))
      e.email = "Informe um e-mail válido.";
    if (!phone.trim()) e.phone = "Informe um telefone para contato.";
    if (!accept) e.accept = "É necessário aceitar os termos para prosseguir.";

    // se o curso tiver turmas, exige turma
    if (
      selected &&
      selected.turmas &&
      selected.turmas.length > 0 &&
      selectedTurmaIdx === null
    ) {
      e.turma = "Escolha um período (turma).";
    }

    // se a turma selecionada tiver turnos, exige turno
    if (
      selected &&
      selected.turmas &&
      selectedTurmaIdx !== null &&
      selectedTurmaIdx >= 0 &&
      selectedTurmaIdx < selected.turmas.length &&
      selected.turmas[selectedTurmaIdx] &&
      selected.turmas[selectedTurmaIdx].turno &&
      selected.turmas[selectedTurmaIdx].turno!.length > 0 &&
      !selectedTurno
    ) {
      e.turno = "Escolha um turno.";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      setSubmitted(null);

      const cidadeEnviar =
        city && city.trim() ? city.trim() : "Juiz de Fora - MG";

      const agora = new Date();

      const payload = {
        nomeCompleto: name,
        cpf: doc,
        email,
        telefone: phone,
        cidade: cidadeEnviar,
        curso: selected?.title ?? "",
        periodo: resumoPeriodo,
        turno: selectedTurno ?? "",
        metodo: payment, // "pix" | "card" | "boleto"
        subtotal,
        desconto: discount > 0 ? discount : "N/a",
        valorFinal: total,
        dataEnvio: agora.toLocaleDateString("pt-BR"),
        horaEnvio: agora.toLocaleTimeString("pt-BR", { hour12: false }),
      };

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxXd5wS7S1bMzd_HoAxKLoIxNzqDYxrNiYvlCFVEhG8AKCwGii0HzEBW0o2lvZJCE5yvg/exec",
        {
          method: "POST",
          // ❌ NÃO use "application/json" senão gera preflight
          // headers: { "Content-Type": "application/json" },
          // ✅ Deixa o browser usar o default "text/plain;charset=UTF-8"
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Erro na requisição para o servidor");
      }

      // Mesmo com text/plain, dá pra usar .json()
      const data = await response.json().catch(() => null);

      if (!data || !data.ok) {
        throw new Error(data?.error || "Erro ao processar matrícula");
      }

      setSubmitted("ok");
    } catch (err) {
      console.error(err);
      setSubmitted("error");
    } finally {
      setLoading(false);
    }
  }

  // helpers to display selected period/turno in the summary
  const resumoPeriodo = selected
    ? selectedTurmaIdx !== null &&
      selected.turmas &&
      selectedTurmaIdx >= 0 &&
      selectedTurmaIdx < selected.turmas.length &&
      selected.turmas[selectedTurmaIdx]?.periodo
      ? selected.turmas[selectedTurmaIdx]!.periodo
      : "—"
    : period === "weekday"
    ? "Seg–Sex"
    : period === "saturday"
    ? "Sábados"
    : "Online";

  return (
    <>
      {/* Hero escuro */}
      <section>
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
              Preencha seus dados, selecione o curso, período e turno ideais.
              <br />
              Você receberá as instruções no e-mail.
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

              <div
                className="p-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
                aria-required="true"
              >
                {courses.map((c) => {
                  const active = selectedCourse === c.id;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => {
                        setSelectedCourse(c.id);
                        // reset de turma/turno ao trocar de curso
                        setSelectedTurmaIdx(null);
                        setSelectedTurno(null);
                      }}
                      className={[
                        "group relative text-left overflow-hidden rounded-xl ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] hover:ring-white/20 transition-shadow",
                        active &&
                          "ring-2 ring-[#A243D2]/60 shadow-2xl shadow-black/40 hover:ring-white/20",
                      ].join(" ")}
                    >
                      {/* Glow */}
                      <div
                        className={`pointer-events-none absolute -inset-px rounded-xl blur-2xl transition-opacity duration-500 bg-gradient-to-r ${
                          c.accent
                        } ${
                          active
                            ? "opacity-25"
                            : "opacity-0 group-hover:opacity-25"
                        }`}
                        aria-hidden
                      />
                      {/* Barra top */}
                      <div
                        className={`h-1 w-full bg-gradient-to-r ${c.accent}`}
                      />
                      <div className="p-4">
                        <h3 className="font-semibold">{c.title}</h3>
                        <p className="text-sm text-white/70 mt-0.5">
                          {c.tagline}
                        </p>
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
                          <div className="flex items-baseline">
                            {/* preço riscado em cinza (preço "anterior" = preço atual + 200) */}
                            <span className="text-sm text-white/40 line-through mr-2">
                              R$ {(c.price + 200).toLocaleString("pt-BR")}
                            </span>
                            {/* preço atual oficial */}
                            <span className="text-base font-semibold">
                              R$ {c.price.toLocaleString("pt-BR")}
                            </span>
                          </div>
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
            <form
              onSubmit={onSubmit}
              className="rounded-2xl overflow-visible ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-white/[0.03]"
            >
              <div className="px-6 py-5 border-b border-white/10 flex items-center gap-3">
                <User className="w-5 h-5" />
                <h2 className="text-lg font-semibold">Seus dados</h2>
              </div>

              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-white/90">
                    Nome completo
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className={`mt-1 w-full rounded-lg border px-3 py-2.5 outline-none transition bg-white/5 text-white placeholder-white/40
                    ${
                      errors.name
                        ? "border-red-400/60 focus:ring-2 focus:ring-red-400/30"
                        : "border-white/10 focus:ring-2 focus:ring-[#A243D2]/30"
                    }`}
                    placeholder="Ex.: Maria Silva"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-white/90">
                    CPF / Documento
                  </label>
                  <input
                    value={doc}
                    onChange={(e) => setDoc(formatCPF(e.target.value))}
                    required
                    className={`mt-1 w-full rounded-lg border px-3 py-2.5 outline-none transition bg-white/5 text-white placeholder-white/40
                    ${
                      errors.doc
                        ? "border-red-400/60 focus:ring-2 focus:ring-red-400/30"
                        : "border-white/10 focus:ring-2 focus:ring-[#A243D2]/30"
                    }`}
                    placeholder="000.000.000-00"
                  />
                  {errors.doc && (
                    <p className="mt-1 text-sm text-red-400">{errors.doc}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-white/90">
                    E-mail
                  </label>
                  <div
                    className={`mt-1 flex items-center gap-2 rounded-lg border px-3 py-2.5 bg-white/5 ${
                      errors.email ? "border-red-400/60" : "border-white/10"
                    }`}
                  >
                    <Mail className="w-4 h-4 text-white/60" />
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full outline-none bg-transparent text-white placeholder-white/40"
                      placeholder="voce@email.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-white/90">
                    Telefone
                  </label>
                  <div
                    className={`mt-1 flex items-center gap-2 rounded-lg border px-3 py-2.5 bg-white/5 ${
                      errors.phone ? "border-red-400/60" : "border-white/10"
                    }`}
                  >
                    <Phone className="w-4 h-4 text-white/60" />
                    <input
                      value={phone}
                      onChange={(e) => setPhone(formatPhone(e.target.value))}
                      required
                      className="w-full outline-none bg-transparent text-white placeholder-white/40"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-white/90">
                    Cidade/UF (opcional)
                  </label>
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

                  {/* Se curso com turmas for selecionado, mostra botões dinâmicos */}
                  {selected && selected.turmas ? (
                    <div className="mt-2 space-y-2">
                      <div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                        aria-required="true"
                      >
                        {selected.turmas.map((t, idx) => {
                          const active = selectedTurmaIdx === idx;
                          return (
                            <button
                              key={t.periodo}
                              type="button"
                              onClick={() => {
                                setSelectedTurmaIdx(idx);
                                // reset turno ao trocar de turma
                                setSelectedTurno(null);
                              }}
                              className={`rounded-lg px-3 py-2 text-sm ring-1 ${
                                active
                                  ? "bg-[#A243D2]/15 text-[#A243D2] ring-[#A243D2]/30"
                                  : "ring-white/10 hover:bg-white/5"
                              }`}
                            >
                              {t.periodo}
                            </button>
                          );
                        })}
                      </div>

                      {/* Turnos da turma selecionada (se houver) */}
                      {selectedTurmaIdx !== null &&
                        selected.turmas &&
                        selectedTurmaIdx >= 0 &&
                        selectedTurmaIdx < selected.turmas.length &&
                        selected.turmas[selectedTurmaIdx] && (
                          <div className="mt-2">
                            {/* Se o período for Online, mostrar mensagem de monitoria */}
                            {selected.turmas[selectedTurmaIdx].periodo
                              .toLowerCase()
                              .includes("online") ? (
                              <p className="mt-4 text-sm text-white/70 whitespace-nowrap">
                                Os alunos poderam ser atendidos nos horarios de
                                monitoria online.
                                <br />
                                Segunda de 19h às 21h e Sexta de 09h às 11h.
                              </p>
                            ) : (
                              <>
                                <label className="text-xs text-white/70">
                                  Turno
                                </label>
                                <div className="mt-1 flex gap-2 overflow-visible flex-nowrap">
                                  {selected.turmas[selectedTurmaIdx].turno!.map(
                                    (tr) => (
                                      <button
                                        key={tr}
                                        type="button"
                                        onClick={() => setSelectedTurno(tr)}
                                        className={`flex-shrink-0 inline-flex flex-col items-center justify-center rounded-lg px-3 py-2 text-sm ring-1 text-center relative z-20 ${
                                          selectedTurno === tr
                                            ? "bg-[#A243D2]/15 text-[#A243D2] ring-[#A243D2]/30"
                                            : "ring-white/10 hover:bg-white/5"
                                        }`}
                                      >
                                        {tr.split("\n").map((line, idx) => (
                                          <span
                                            key={idx}
                                            className={
                                              idx === 0
                                                ? "block"
                                                : "block text-xs text-white/70"
                                            }
                                          >
                                            {line}
                                          </span>
                                        ))}
                                      </button>
                                    )
                                  )}
                                </div>
                              </>
                            )}

                            {errors.turno && (
                              <p className="mt-1 text-sm text-red-400">
                                {errors.turno}
                              </p>
                            )}
                          </div>
                        )}

                      {errors.turma && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors.turma}
                        </p>
                      )}
                    </div>
                  ) : (
                    // fallback para período estático quando não há curso selecionado
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setPeriod("weekday")}
                        className={`rounded-lg px-3 py-2 text-sm ring-1 ${
                          period === "weekday"
                            ? "bg-[#A243D2]/15 text-[#A243D2] ring-[#A243D2]/30"
                            : "ring-white/10 hover:bg-white/5"
                        }`}
                      >
                        Seg–Sex
                      </button>
                      <button
                        type="button"
                        onClick={() => setPeriod("saturday")}
                        className={`rounded-lg px-3 py-2 text-sm ring-1 ${
                          period === "saturday"
                            ? "bg-[#A243D2]/15 text-[#A243D2] ring-[#A243D2]/30"
                            : "ring-white/10 hover:bg-white/5"
                        }`}
                      >
                        Sábados
                      </button>
                      <button
                        type="button"
                        onClick={() => setPeriod("online")}
                        className={`rounded-lg px-3 py-2 text-sm ring-1 ${
                          period === "online"
                            ? "bg-[#A243D2]/15 text-[#A243D2] ring-[#A243D2]/30"
                            : "ring-white/10 hover:bg-white/5"
                        }`}
                      >
                        Online
                      </button>
                    </div>
                  )}
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
                      className={`rounded-lg px-3 py-2 text-sm ring-1 ${
                        payment === "pix"
                          ? "bg-[#A243D2]/15 text-[#A243D2] ring-[#A243D2]/30"
                          : "ring-white/10 hover:bg-white/5"
                      }`}
                    >
                      PIX
                    </button>
                    <button
                      type="button"
                      onClick={() => setPayment("card")}
                      className={`rounded-lg px-3 py-2 text-sm ring-1 ${
                        payment === "card"
                          ? "bg-[#A243D2]/15 text-[#A243D2] ring-[#A243D2]/30"
                          : "ring-white/10 hover:bg-white/5"
                      }`}
                    >
                      Cartão
                    </button>
                    <button
                      type="button"
                      onClick={() => setPayment("boleto")}
                      className={`rounded-lg px-3 py-2 text-sm ring-1 ${
                        payment === "boleto"
                          ? "bg-[#A243D2]/15 text-[#A243D2] ring-[#A243D2]/30"
                          : "ring-white/10 hover:bg-white/5"
                      }`}
                    >
                      Boleto
                    </button>
                  </div>
                  {payment === "pix" && (
                    <p className="mt-2 text-xs text-emerald-300 bg-emerald-500/10 inline-block rounded px-2 py-1">
                      Desconto de 5% aplicado ao total.
                    </p>
                  )}
                </div>

                <div className="md:col-span-1">
                  <label className="text-sm font-medium text-white/90">
                    Termos
                  </label>
                  <div className="mt-2 flex items-start gap-2">
                    <input
                      id="terms"
                      type="checkbox"
                      checked={accept}
                      onChange={(e) => setAccept(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-white/20 text-[#A243D2] bg-transparent focus:ring-[#A243D2]"
                    />
                    <label htmlFor="terms" className="text-sm text-white/80">
                      Li e concordo com os termos de matrícula e política de
                      privacidade.
                    </label>
                  </div>
                  {errors.accept && (
                    <p className="mt-1 text-sm text-red-400">{errors.accept}</p>
                  )}
                </div>
              </div>

              {submitted === "ok" && (
                <div className="px-6 pb-6 -mt-2">
                  <div className="rounded-xl bg-emerald-500/10 text-emerald-200 px-4 py-3 ring-1 ring-emerald-400/30">
                    Matrícula enviada com sucesso! Em breve você receberá um
                    e-mail com as próximas etapas.
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
                      {resumoPeriodo}
                    </span>
                  </div>

                  {selected && selected.turmas && selectedTurmaIdx !== null && (
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Turno</span>
                      <span className="font-medium text-white">
                        {selectedTurno ?? "—"}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Pagamento</span>
                    <span className="font-medium text-white uppercase">
                      {payment}
                    </span>
                  </div>

                  <hr className="border-white/10" />

                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Subtotal</span>
                    <span className="text-white">
                      R$ {subtotal.toLocaleString("pt-BR")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Desconto</span>
                    <span
                      className={
                        discount > 0 ? "text-emerald-300" : "text-white"
                      }
                    >
                      {discount > 0
                        ? `- R$ ${discount.toLocaleString("pt-BR")}`
                        : "—"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-base font-semibold">
                    <span>Total</span>
                    <span>R$ {total.toLocaleString("pt-BR")}</span>
                  </div>
                </div>

                {/* Ações */}
                <div className="px-6 py-5 border-t border-white/10 flex flex-col gap-3 items-center">
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
              </div>

              <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-white/[0.03]">
                <div className="px-5 py-4 border-b border-white/10">
                  <h4 className="font-semibold">Dicas</h4>
                </div>
                <ul className="p-5 text-sm text-white/80 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5" />
                    <span>
                      Escolha PIX para garantir 5% de desconto imediato.
                    </span>
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
    </>
  );
}
