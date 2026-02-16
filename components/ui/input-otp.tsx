"use client";

import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/* ----------------------------- Main Wrapper ----------------------------- */

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn("flex items-center gap-2", containerClassName)}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
}

/* ----------------------------- Group Wrapper ---------------------------- */

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center", className)}
      {...props}
    />
  );
}

/* ------------------------------- OTP Slot ------------------------------- */

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number;
}) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        `relative flex h-10 w-10 items-center justify-center
        border border-gray-300 p-4
        bg-white text-black
        text-sm font-medium rounded-sm
        transition-all outline-none
        first:rounded-l-md last:rounded-r-md
        
        data-[active=true]:border-blue-500
        data-[active=true]:ring-2
        data-[active=true]:ring-blue-200
        `,
        className,
      )}
      {...props}
    >
      {char}

      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px bg-black animate-caret-blink duration-1000" />
        </div>
      )}
    </div>
  );
}

/* ----------------------------- Separator ----------------------------- */

function InputOTPSeparator(props: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-separator"
      role="separator"
      className="mx-1 text-gray-400"
      {...props}
    >
      <MinusIcon size={16} />
    </div>
  );
}

/* ----------------------------- Exports ----------------------------- */

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
