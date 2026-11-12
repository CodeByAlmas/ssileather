import type { ReactNode } from "react";
import { TransitionLink } from "@/components/motion/TransitionProvider";

type Props = {
  href?: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  size?: "md" | "sm";
  icon?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  external?: boolean;
};

const Arrow = () => (
  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10h11m0 0-4.5-4.5M15 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Pill button. Hover: fill wipes up from below, label rolls, arrow turns. */
export default function Button({
  href,
  children,
  variant = "solid",
  size = "md",
  icon = true,
  type = "button",
  disabled,
  className = "",
  onClick,
  external,
}: Props) {
  const cls = `btn ${variant === "ghost" ? "btn-ghost" : ""} ${size === "sm" ? "btn-sm" : ""} ${className}`;
  const inner = (
    <>
      <span className="btn-label">
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </span>
      {icon && <Arrow />}
    </>
  );

  if (href) {
    if (external || /^(https?:|mailto:|tel:)/.test(href)) {
      return (
        <a
          href={href}
          className={cls}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {inner}
        </a>
      );
    }
    return (
      <TransitionLink href={href} className={cls}>
        {inner}
      </TransitionLink>
    );
  }
  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick}>
      {inner}
    </button>
  );
}
