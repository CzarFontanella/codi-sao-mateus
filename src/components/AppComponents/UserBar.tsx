import {
  DoorOpen,
  LayoutDashboard,
  LogIn,
  Mail,
  MessageSquare,
  Phone,
  UserRoundPlus,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import React from "react";

export default function UserBar({
  authenticated,
}: {
  authenticated?: boolean;
}) {
  function scrollToFooter(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const el = document.getElementById("site-footer");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = "#site-footer";
  }

  return (
    <div className="w-full bg-[#A243D2] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-2 gap-2">
          {/* CONTATO */}
          {/* mobile/sm: ocupa largura total e CENTRALIZA; md+: alinha à esquerda */}
          <div className="flex w-full justify-center md:w-auto md:justify-start items-center gap-4">
            <a
              href="#site-footer"
              onClick={scrollToFooter}
              className="inline-flex items-center gap-2 font-semibold text-md text-yellow-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded"
              aria-label="Ir para o rodapé da página"
            >
              <div className="inline-flex items-center gap-2 rounded-xl ring-1 ring-white/20 hover:ring-white/40 px-3 py-1.5 bg-gradient-to-r from-white/5 to-white/[0.03]">
                <MessageSquare className="w-5 h-5" />
                Fale conosco
              </div>
            </a>

            {/* Telefone e e-mail (somente em md+) */}
            <div className="hidden md:inline-flex items-center gap-4 text-white/90">
              <span className="opacity-60">•</span>
              <a
                href="tel:+5532988156599"
                className="inline-flex items-center gap-2 hover:underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded"
                aria-label="Ligar para (32) 98815-6599"
              >
                <Phone className="w-5 h-5" />
                <span>(32) 98815-6599</span>
              </a>
              <span className="opacity-60">•</span>
              <a
                href="mailto:adm@codiacademy.com"
                className="inline-flex items-center gap-2 hover:underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded"
                aria-label="Enviar e-mail para adm@codiacademy.com"
              >
                <Mail className="w-5 h-5" />
                <span>adm@codiacademy.com</span>
              </a>
            </div>
          </div>

          {/* AÇÕES (visíveis em todas as larguras) */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-md">
            {authenticated ? (
              <>
                <NavLink
                  to="/dashboard"
                  className="inline-flex h-9 items-center gap-2 rounded-lg bg-white text-gray-900 px-3 font-semibold ring-1 ring-white/10 hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 whitespace-nowrap"
                >
                  <LayoutDashboard className="w-5 h-5 shrink-0" />
                  Área do Aluno
                </NavLink>

                <NavLink
                  to="/logout"
                  className="inline-flex h-9 items-center gap-2 rounded-lg px-3 font-semibold text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 whitespace-nowrap"
                >
                  <DoorOpen className="w-5 h-5 shrink-0" />
                  Sair
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="inline-flex h-9 items-center gap-2 rounded-lg bg-white text-gray-900 px-3 font-semibold ring-1 ring-white/10 hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 whitespace-nowrap"
                >
                  <LogIn className="w-5 h-5 shrink-0" />
                  Login
                </NavLink>

                <NavLink
                  to="/cadastro"
                  className="inline-flex h-9 items-center gap-2 rounded-lg px-3 font-semibold text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 whitespace-nowrap"
                >
                  <UserRoundPlus className="w-5 h-5 shrink-0" />
                  Cadastre-se
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>

      {/* divisor sutil mantendo a cor original */}
      <div className="h-px w-full bg-white/15" />
    </div>
  );
}
