import { ButtonWithLoader } from "@/components/ui";
import AuthLayout from "@/layouts/AuthLayout";
import { useState, useRef } from "react";

const Verify = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return; // Only allow numbers

    const newCode = [...code];
    newCode[index] = value.slice(-1); // Ensure only 1 digit
    setCode(newCode);

    // Move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      if (code[index]) {
        const newCode = [...code];
        newCode[index] = "";
        setCode(newCode);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").slice(0, 6);
    const newCode = paste.split("");
    setCode((prev) => prev.map((_, i) => newCode[i] ?? ""));
    // Focus the last filled field
    const lastIndex = Math.min(paste.length, 5);
    inputRefs.current[lastIndex]?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const joinedCode = code.join("");
    console.log("Verification Code:", joinedCode);
    //TODO: Call your verification API here
  };

  return (
    <AuthLayout
      title="Verification Code"
      description="Enter the 6-digit code sent to your email to continue"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center items-center gap-4">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              maxLength={1}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              className="p-2 text-2xl h-10 w-10 font-bold text-center rounded-md border border-line focus:border-primary focus:ring-2 focus:ring-primary/30"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              autoComplete="one-time-code"
            />
          ))}
        </div>

        <ButtonWithLoader
          type="submit"
          className="w-full btn-primary h-11 rounded-full"
          initialText="Verify"
          loadingText="Verifying..."
        />

        <div className="text-center">
          <p className="text-sm text-muted">
            Didn't get the OTP?{" "}
            <span className="text-secondary font-semibold">Resend</span>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Verify;
