import type { ReactNode } from "react"
interface CustomerFieldProps { label: string; id: string; error?: string; children: ReactNode }
export function CustomerField({ label, id, error, children }: CustomerFieldProps) { return <label className="bnpl-field" htmlFor={id}><span>{label}</span>{children}{error && <small>{error}</small>}</label> }
