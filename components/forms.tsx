import type { ReactNode } from "react";

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
};

const inputClass =
  "focus-ring mt-3 w-full rounded-none border-0 border-b border-[#bda989] bg-transparent px-0 py-4 text-base text-[#0b1422] placeholder:text-[#746f68] transition duration-300 focus:border-[#b88742]";

export function Field({ label, name, type = "text", required }: FieldProps) {
  return (
    <label className="block text-sm font-medium text-[#34383a]">
      {label}
      <input className={inputClass} name={name} type={type} required={required} />
    </label>
  );
}

export function TextArea({ label, name, required }: FieldProps) {
  return (
    <label className="block text-sm font-medium text-[#34383a]">
      {label}
      <textarea className={`${inputClass} min-h-32 resize-y`} name={name} required={required} />
    </label>
  );
}

export function SelectField({ label, name, children }: { label: string; name: string; children: ReactNode }) {
  return (
    <label className="block text-sm font-medium text-[#34383a]">
      {label}
      <select className={inputClass} name={name}>
        {children}
      </select>
    </label>
  );
}

export function Checkbox({ label, name }: { label: string; name: string }) {
  return (
    <label className="flex gap-3 text-sm leading-6 text-[#34383a]">
      <input className="focus-ring mt-1 size-4 accent-[#b88742]" name={name} type="checkbox" required />
      <span>{label}</span>
    </label>
  );
}

export function FormPanel({ children }: { children: ReactNode }) {
  return (
    <form className="luxury-shadow grid gap-8 border border-[#dacbb8] bg-[#fbf7ef]/88 p-6 sm:p-10">
      {children}
    </form>
  );
}
