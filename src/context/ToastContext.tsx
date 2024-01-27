import { AlertColor } from "@mui/material";
import { createContext, useContext, useEffect, useState } from "react";

export interface ToastData {
  title: string;
  message: string;
  variant: "filled" | "standard" | "outlined";
  severity: AlertColor;
  isLoading?: boolean;
}

interface ToastContextProps {
  dismissToast: () => void;
  displayToast: (props: ToastData) => void;
  isOpen: boolean;
  toastData: ToastData;
}

const ToastContext = createContext<ToastContextProps | null>(null)

interface ToastProviderProps {
  children: React.ReactNode
}

function ToastProvider({ children }: ToastProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [toastData, setToastData] = useState<ToastData>({
    title: "",
    message: "",
    variant: "filled",
    severity: "success",
  });

  useEffect(() => {
    let timeout: number;
    if(isOpen) {
        timeout = setTimeout( () => {
            dismissToast()
        }, 3500)
    }
    return () => { 
        clearTimeout(timeout)
    }
  }, [isOpen] )

  function dismissToast() {
    setIsOpen(false);
  }

  function displayToast({ message, severity, title, variant, isLoading = false }: ToastData) {
    setIsOpen(true);
    setToastData({ message, severity, title, variant, isLoading });
  }

  const contextValue: ToastContextProps = { dismissToast, displayToast, isOpen, toastData }

  return <ToastContext.Provider value={contextValue}>{children}</ToastContext.Provider>
}

  const useToast = (): ToastContextProps => {
    const context = useContext(ToastContext)
    
    if (!context) {
      throw new Error("Você não pode usar esse hook fora do contexto");
    }

    return context
  }

  export { ToastProvider, useToast, ToastContext }