import React, { 
  type ButtonHTMLAttributes, 
  type ReactElement, 
  type ReactNode
} from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "error";
  fullWidth?: boolean;
  children: ReactNode;
  csx?: string;
}

export function Button({ 
  variant,
  children,
  className,
  ...props
}: Props ): ReactElement {
  return (
    <button
      className={`
        px-8
        py-2
        rounded-md
        cursor-pointer
        ${ 
          variant === "success" ? "bg-green-500 hover:bg-green-600 text-white" 
          : variant === "error" ? "bg-red-500 hover:bg-red-600 text-white" 
          : variant === "secondary" ? "bg-slate-900 hover:bg-slate-800 text-white"
          : "bg-gray-700 hover:bg-gray-800 text-white"
        }
        ${ className }
      `}
      {...props}
    >
      {children}
    </button>
  )
}